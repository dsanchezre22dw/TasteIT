import { useEffect, useState } from 'react';
import { useForm } from '@inertiajs/react';
import {
  Card,
  CardBody,
  Typography,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import {
  PencilIcon,
  TrashIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import StarIcon from "@/Components/StarIcon";
import ClockIcon from "@/Components/ClockIcon";
import RecipeType from './widgets/seeRecipes/recipetype-card';
import ValorationCard from '@/Pages/Dashboard/features/Recipes/widgets/valorateRecipe/valoration-card';
import SaveRecipe from './widgets/saveRecipe/saveRecipe';
import Dashboard from '@/Layouts/DashboardLayout';
import AnswerModal from '@/Components/AnswerModal';
import ModalAction from '@/Components/ModalAction';

import { getDifficultyColorAndText } from '../../../../../../public/assets/js/validationUtils';

export function SeeRecipe({auth, recipe, savedRecipesIds, successMessage}) { 

  const { difficultyColor, difficultyText } = getDifficultyColorAndText(recipe.difficulty);

  const [description, setDesciption] = useState(recipe.description);
  const [lang, setLang] = useState(localStorage.getItem('preferredLang')??'en');

  const form = useForm({});

  var http;

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
      if (successMessage !== "") {
        setShowSuccessModal(true);
      }
  }, [successMessage]);

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
  };

  useEffect (() => {

    if (lang != 'en') {
      getTranslated(lang,'en');
    }
    
    getLanguages();

  },[])

  function getLanguages() {

    http = new XMLHttpRequest();
    http.withCredentials = true;

    http.addEventListener('readystatechange', showLanguages);

    let url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages'

    http.open('GET', url);

    http.setRequestHeader('X-RapidAPI-Key', 'd053a50a43mshd0f510119c71772p171242jsnc8753e52914d');
    http.setRequestHeader('X-RapidAPI-Host', 'google-translate1.p.rapidapi.com');

    http.send(null);
  }

  function showLanguages(){
    if (http.readyState === http.DONE) {

      let select = document.getElementById('langs');

      let languages = JSON.parse(http.responseText).data.languages;
      console.log(languages);

      languages.forEach(language => {
        let option = document.createElement('option');

        option.value = language.language;
        option.textContent = language.language;
        if (language.language == lang) {
          option.selected = true;
        }
        

        select.append(option);
      });
    }

  }

  function handleLang(e){

    setLang(e.target.value);
    localStorage.setItem('preferredLang',e.target.value);
    
    getTranslated(e.target.value)
  }

  function getTranslated(newLang, baseLang = lang) {

    const data = `q=${description}&target=${newLang}&source=${baseLang}`;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {

        let translated = JSON.parse(this.responseText).data.translations[0].translatedText;

        setDesciption(translated);
      }
    });

    let url = 'https://google-translate1.p.rapidapi.com/language/translate/v2';

    xhr.open('POST', url);

    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('X-RapidAPI-Key', 'f352493104msh7915e36f6ca17bdp119e28jsnc63eb77a9a83');
    xhr.setRequestHeader('X-RapidAPI-Host', 'google-translate1.p.rapidapi.com');

    xhr.send(data);
  }

  var message = 'Are you sure you want to delete this recipe?';
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    form.delete(`/dashboard/recipes/delete/${id}`);

  };

  function handleAddShopping(id, amount) {

    let array = [id, amount];

    form.post(`/dashboard/shopping/add/${array}`);
    
  }



  return (
    <>
      <Dashboard auth={auth}>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 rounded-xl">
          <CardBody className="p-16">
            <div className="px-4 pb-4 flex">

              <div className="w-5/12 mr-16">
                <img src={recipe.image} alt={recipe.title} className="border rounded-lg" />
              </div>

              <div className="w-7/12">

                <div className="mt-8 flex justify-between">
                  <Typography
                    variant="h1"
                  >
                    {recipe.title}
                  </Typography>
                  
                  <div>
                    { (auth.user.type === "admin" || auth.user.id === recipe.user.id) ? (
                      <div className="flex gap-8">
                        <Link href={`/dashboard/recipes/edit/${recipe.id}`}>
                          <Tooltip content="Edit Recipe">
                            <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 mt-[2.2px]" />
                          </Tooltip>        
                        </Link>
                      
                      
                        <button type="button" onClick={() => setShowModal(true)}>
                          <Tooltip content="Delete Recipe">
                            <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
                          </Tooltip>
                        </button>
                        <AnswerModal
                            show={showModal}
                            onClose={() => setShowModal(false)}
                            onConfirm={() => handleDelete(recipe.id)}
                            message={message}
                        />           
                      </div>
                    ) : (
                      <SaveRecipe savedRecipesIds={savedRecipesIds} recipe_id={recipe.id} width={35}/>
                    )}

                  </div>


    
                </div>

                <div className="flex gap-2">
                  {recipe.user.username}

                  {recipe.user.type === "chef"  && (
                    <div style={{ backgroundColor: 'blue', padding: '3px', display: 'inline-block', borderRadius: '50%' }}>
                      <img src="/assets/img/chef-hat.svg" alt="Descripción opcional"/>
                    </div>
                  )}
                </div>

                <div className="flex">
                  <ClockIcon count={1} />
                  {recipe.duration_mins}min
                </div>


                <div className="flex ml-1">
                  {recipe.avg_valoration}
                  <StarIcon count={1} />
                  ({recipe.amount_valorations})
                </div>


                <div className="flex">
                  <span className={`bg-${difficultyColor}-100 text-${difficultyColor}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${difficultyColor}-900 dark:text-${difficultyColor}-300`}>
                    {difficultyText}
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                    {recipe.recipe_types.map((type, index) => (
                        <RecipeType key={`${type.id}_${index}`} id={type.id} name={type.name} index={index} />
                    ))}
                </div>

              </div>

            </div>

            <div>

              <Typography
                variant="h1"
                className="my-4 mt-8"
              >
                Ingredients
              </Typography>

              <div className="grid grid-cols-4">
                {recipe.ingredients.map((ingredient) => (
                  
                    <div className="flex ml-1" key={ingredient.id}>
                      <button onClick={() => handleAddShopping(ingredient.id, ingredient.pivot.amount)}>
                        <ShoppingCartIcon className="w-5"></ShoppingCartIcon>
                      </button>

                      {ingredient.pivot.amount}g {ingredient.name}

                    </div>
                  
                ))}
              </div>

            </div>

            <div>

              <Typography
                variant="h1"
                className="my-4 mt-16"
              >
                How to prepare
              </Typography>

              {description}

              <br />
              <label htmlFor="langs"> Description language: </label>
              <select name="langs" id="langs" value={lang} onChange={(e) => handleLang(e)}></select>

            </div>

            <div>

              <div>
                <Typography
                  variant="h1"
                  className="my-4 mt-16"
                >
                  Valorations
                </Typography>

                <div className="float-right -mt-12">

                  <Link href={`/dashboard/recipes/valorate/${recipe.id}`} className="ml-10">
                    <Button variant="gradient" color='red'>Make valoration</Button>
                  </Link>

                  </div>
              </div>


              <div className='flex flex-col gap-4'>

                {recipe.valorations.map((user) => (

                  <ValorationCard key={`${user.pivot.user_id}_${user.pivot.recipe_id}`} user={user}/>

                  ))}

              </div>

              <ModalAction show={showSuccessModal} onClose={closeSuccessModal} maxWidth="2xl" closeable={true}> 
                <div className="p-4">
                  <h1 className="text-xl font-bold mb-4">{successMessage['type']}</h1>
                  <p>{successMessage['message']}</p>
                </div>
              </ModalAction>
        
            </div>

          </CardBody>
        </Card>
      </Dashboard>
    </>
  );
}

export default SeeRecipe;
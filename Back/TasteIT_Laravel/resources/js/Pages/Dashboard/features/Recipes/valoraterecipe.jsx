import { useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

import { useForm } from "@inertiajs/react";
import InputError from '@/Components/InputError';

import "../../../../../../public/assets/css/starrating.css"
import { setupStarRating, validateStarRating } from '../../../../../../public/assets/js/validationUtils'
import Dashboard from '@/Layouts/DashboardLayout';

export function ValorateRecipe({auth, recipe, valoration}) {

  const { data, setData, post, processing, errors, reset } = useForm({
    rating: valoration.valoration,
    title: valoration.title,
    message: valoration.description,
    recipe_id: recipe.id,
  });

  const [errorMessages, setErrorMessages] = useState({
    rating: "",
    title: "",
    message: "",
  });


  const submit = (e) => {
    e.preventDefault();

    var errors_exist = "";

    errors_exist += validateStarRating(data, setErrorMessages);

    if (errors_exist === ""){
      post(`/dashboard/recipes/valorate/${recipe.id}`);
    }

  };

  useEffect(() => {
      setupStarRating(setData);
  }, []);

  return (
    <>
      <Dashboard auth={auth}>

        <div className="mt-12 mb-8 flex flex-col gap-12">

          <Card>
            <CardHeader variant="gradient" color="red" className="mb-8 p-6">
                <Typography variant="h6" color="white">
                    Valorate Recipe<br></br>
                </Typography>
            </CardHeader>

            <CardBody className="p-4 flex flex-col">

              <Typography variant="h6" color="black" className="self-center">
                "{recipe.title}" by {recipe.user.username}
              </Typography>

              <div className="flex justify-center">
                <span className={`star ${valoration.valoration >= 1 ? 'yellow' : ''}`}>★</span>
                <span className={`star ${valoration.valoration >= 2 ? 'yellow' : ''}`}>★</span>
                <span className={`star ${valoration.valoration >= 3 ? 'yellow' : ''}`}>★</span>
                <span className={`star ${valoration.valoration >= 4 ? 'yellow' : ''}`}>★</span>
                <span className={`star ${valoration.valoration >= 5 ? 'yellow' : ''}`}>★</span>
              </div>
              <InputError message={errorMessages.rating} className="mt-2 self-center"/>
              <InputError message={errors.rating} className="mt-2 self-center"/>


              <div className="flex flex-col w-2/5 self-center">
                <form onSubmit={submit} name="valorateForm">

                  <label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-white">Title</label>
                  <input 
                    type="text" 
                    id="title" 
                    value={data.title}
                    className="my-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Write your title here..." 
                    onChange={(e) => setData('title', e.target.value)}
                    maxLength='50'
                  />
                  <InputError message={errors.title} className="mt-2" />

                  <label htmlFor="comment" className="block mt-4 mb-3 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                  <textarea 
                    id="comment" 
                    rows="4" 
                    value={data.message}
                    className="block self-center p-2.5 w-11/12 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Write your thoughts here..." 
                    onChange={(e) => setData('message', e.target.value)}
                    maxLength='250'
                  />
                  <InputError message={errors.message} className="mt-2" />

                  <button type="submit" className="py-2.5 px-4 my-5 w-1/5 text-xs font-medium text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                    Post comment
                  </button>
                </form>

              </div>


            </CardBody>
          </Card>

        </div>
      </Dashboard>
    </>
  );
}

export default ValorateRecipe;
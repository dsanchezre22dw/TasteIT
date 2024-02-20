import React, { useState, useEffect } from "react";

import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "@inertiajs/react";
import RecipeCard from "./widgets/seeRecipes/recipe-card";
import TextInput from "@/Components/TextInput";

export function RecipesSection({auth, recipesToShow, savedRecipesIds, recipe_types, ingredients, show=true, see, text}) { 

  const [searchText, setSearchText] = useState("");
  const [searchIngredientText, setSearchIngredientText] = useState("");
  const [filteringTypes, setFilteringTypes] = useState([]);
  const [filteringDifficulties, setFilteringDifficulties] = useState([]);
  const [filteringIngredients, setFilteringIngredients] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);


  const difficulty = [{'level': 'beginner', 'color': 'green',},
                    {'level': 'medium', 'color': 'yellow',},
                    {'level': 'expert', 'color': 'red',}
                  ]

  useEffect(() => {
    // Si no hay filtros activos, mostrar todas las recetas
    if (filteringTypes.length === 0 && filteringDifficulties.length === 0 && searchText === "" && filteringIngredients.length === 0) {
      setFilteredRecipes(recipesToShow);
      return;
    }
  
    // Filtrar por tipo
    let filteredByType = [...recipesToShow];
    if (filteringTypes.length !== 0) {
      filteredByType = recipesToShow.filter(recipe => {
        const recipeTypeIds = recipe.recipe_types.map(type => type.id);
        return filteringTypes.every(filterId => recipeTypeIds.includes(filterId));
      });
    }
  
    // Filtrar por dificultad
    let filteredByDifficulty = [...filteredByType];
    if (filteringDifficulties.length !== 0) {
      filteredByDifficulty = filteredByType.filter(recipe =>
        filteringDifficulties.includes(recipe.difficulty)
      );
    }

      // Filtrar por texto de búsqueda
    let filteredBySearchText = [...filteredByDifficulty];
    if (searchText !== "") {
      const lowerSearchText = searchText.toLowerCase();
      filteredBySearchText = filteredByDifficulty.filter(recipe =>
        recipe.title.toLowerCase().includes(lowerSearchText)
      );
    }

    // Filtrar por ingredientes
    let filteredByIngredients = [...filteredBySearchText];
    if (filteringIngredients.length !== 0) {
      filteredByIngredients = filteredBySearchText.filter(recipe => {
        // Lógica de filtrado por ingredientes
        return recipe.ingredients.some(ingredient => filteringIngredients.includes(ingredient.id));
      });
    }
  
    // Establecer los resultados finales
    setFilteredRecipes(filteredByIngredients);
  }, [filteringTypes, filteringDifficulties, searchText, filteringIngredients, recipesToShow]);

  useEffect(() => {
    // Si no hay filtros activos, mostrar todas las recetas
    if (searchIngredientText.length === 0) {
      setFilteredIngredients([]);
      return;
    }

    // Filtrar por texto de búsqueda
    let filteredBySearchIngredientText = [...ingredients];
    if (searchIngredientText !== "") {
      const lowerSearchIngredientText = searchIngredientText.toLowerCase();
      filteredBySearchIngredientText = ingredients.filter(ingredient =>
        ingredient.name.toLowerCase().includes(lowerSearchIngredientText)
      );
    }
  
    // Establecer los resultados finales
    setFilteredIngredients(filteredBySearchIngredientText);
  }, [searchIngredientText, ingredients]);


  const handleTypeFilter = (typeId) => {
    // Si el filtro ya está activo, desactívalo
    if (filteringTypes.includes(typeId)) {
      setFilteringTypes(filteringTypes.filter(id => id !== typeId));
    } else {
      // De lo contrario, activa el filtro
      setFilteringTypes([...filteringTypes, typeId]);
    }
  };

  const handleDifficultyFilter = (difficulty) => {
    // Si el filtro ya está activo, desactívalo
    if (filteringDifficulties.includes(difficulty)) {
      setFilteringDifficulties(filteringDifficulties.filter(id => id !== difficulty));
    } else {
      // De lo contrario, activa el filtro
      setFilteringDifficulties([...filteringDifficulties, difficulty]);
    }
  };

  const handleIngredientFilter = (ingredientId) => {
    // Si el filtro ya está activo, desactívalo
    if (filteringIngredients.includes(ingredientId)) {
      setFilteringIngredients(filteringIngredients.filter(id => id !== ingredientId));
    } else {
      // De lo contrario, activa el filtro
      setFilteringIngredients([...filteringIngredients, ingredientId]);
    }
  };

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleIngredientSearchTextChange = (e) => {
    console.log(e.target.value)
    setSearchIngredientText(e.target.value);
  };
  
  const [showFilteredIngredients, setShowFilteredIngredients] = useState(false);

  const handleIngredientInputClick = () => {
    setShowFilteredIngredients(true);
  };

  const handleOutsideIngredientClick = (e) => {
    if (e.target.closest("#ingredient-input")) {
      return;
    }
    setShowFilteredIngredients(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideIngredientClick);
    return () => {
      document.removeEventListener("click", handleOutsideIngredientClick);
    };
  }, []);

  return (
    <>
      <div className="px-4 pb-4">
        <div>
          <Typography variant="h6" color="blue-gray" className="mb-2">
            Recipes

          </Typography>
          <Typography
            variant="small"
            className="font-normal text-blue-gray-500"
          >
            {text}
          </Typography>
        </div>   


        <div className="flex">

          {recipesToShow.length > 0 && 

            <div>

              {/* Filtro de búsqueda */}
              <div className="mt-6 mb-4 ml-4">
                <input
                  type="text"
                  value={searchText}
                  onChange={handleSearchTextChange}
                  placeholder="Search recipes..."
                  className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
              </div>

              {/* Filtro de tipo de recetas */}
              <div className="mt-10 flex flex-wrap gap-4 ml-4">
                {recipe_types.map((type, index) => (
                  <div 
                    key={`${type.id}_${index}`} 
                    className={`rounded-full cursor-pointer hover:bg-blue-200 px-3 py-1 ${filteringTypes.includes(type.id) ? 'bg-blue-200' : 'bg-blue-100'}`}
                    onClick={() => handleTypeFilter(type.id)} // Pasa el id del tipo al handler
                    >
                    {type.name}
                  </div>
                ))}
              </div>

              {/* Filtro de dificultad */}
              <div className="mt-10 flex flex-wrap gap-4 ml-4">
                {difficulty.map(({ level, color }, index) => (
                  <div 
                    key={`${level}_${index}`} 
                    className={`rounded-full cursor-pointer hover:bg-${color}-200 px-3 py-1 ${
                      filteringDifficulties.includes(level) ? 
                        color === 'green' ? 'bg-green-500 text-black-800 dark:bg-green-900 dark:text-white-300' :
                        color === 'yellow' ? 'bg-yellow-500 text-black-800 dark:bg-yellow-900 dark:text-white-300' :
                        color === 'red' ? 'bg-red-500 text-black-800 dark:bg-red-900 dark:text-white-300' :
                        ''
                      : 
                        color === 'green' ? 'bg-green-100 text-black-800 dark:bg-green-500 dark:text-white-300' :
                        color === 'yellow' ? 'bg-yellow-100 text-black-800 dark:bg-yellow-500 dark:text-white-300' :
                        color === 'red' ? 'bg-red-100 text-black-800 dark:bg-red-500 dark:text-white-300' :
                        ''
                    }`}
                    onClick={() => handleDifficultyFilter(level)}
                  >
                    {level}
                  </div>
                ))}
              </div>

              {/* Filtro de ingredientes */}
              <div className="flex mt-10 ml-4">
                

                <div>
                  <TextInput
                    id="ingredient-input"
                    value={searchIngredientText}
                    onChange={handleIngredientSearchTextChange}
                    onClick={handleIngredientInputClick}
                    placeholder="Filter by ingredients..."
                    className="mt-1 block w-[100%] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    maxLength='80'
                  />
                  
                  {showFilteredIngredients && (
                    <ul className='w-full bg-gray-100'>
                      {filteredIngredients.map((ingredient) => (
                        <li key={ingredient.id} onClick={() => handleIngredientFilter(ingredient.id)} className='hover:bg-gray-300 p-2'>
                          {ingredient.name}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>                

                <div className="flex flex-wrap gap-4 ml-10">
                  <Typography
                    variant="h5"
                  >
                    Selected ingredients:
                  </Typography>
                  {ingredients
                  .filter((ingredient) => filteringIngredients.includes(ingredient.id))
                  .map((ingredient, index) => (
                    <div key={index} onClick={() => handleIngredientFilter(ingredient.id)}>
                      {ingredient.name}
                    </div>
                  ))}  
                </div>


              </div>


            </div>
          }

          <div className="ml-auto">
            {show ? ( 
              see ? ( 
                <Link href={'/dashboard/recipes'} className="ml-10">
                  <Button variant="gradient" color='red'>See Recipes</Button>
                </Link>
              ) : (
                <Link href={'/dashboard/recipes/create'} className="ml-10">
                  <Button variant="gradient" color='red'>Add Recipe</Button>
                </Link>
              )
            ) : null} 
          </div>  

    
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

          {filteredRecipes
          .map((recipe) => (
            <RecipeCard key={recipe.id} auth={auth} savedRecipesIds={savedRecipesIds} recipe={recipe}/>
          ))}   

      
        </div>

      </div>
    </>
  );
}

export default RecipesSection;
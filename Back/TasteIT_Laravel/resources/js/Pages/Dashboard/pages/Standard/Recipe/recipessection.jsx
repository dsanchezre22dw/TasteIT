import React, { useState, useEffect } from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";

import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
  TrashIcon
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { ProfileInfoCard, MessageCard } from "../../../widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../../data";
import StarIcon from "../../../../../../../resources/js/Components/StarIcon";
import ClockIcon from "../../../../../../../resources/js/Components/ClockIcon";
import RecipeCard from "@/Pages/Dashboard/widgets/seeRecipes/recipe-card";
import RecipeType from "@/Pages/Dashboard/widgets/seeRecipes/recipetype-card";
import AllRecipes from "@/Pages/Dashboard/widgets/Standard/AllRecipes";
import FollowingRecipes from "@/Pages/Dashboard/widgets/Standard/FollowingRecipes";

export function RecipesSection({auth, user, recipesToShow, savedRecipesIds, recipe_types, general, show=true, see}) { 

  const [activeTab, setActiveTab] = useState("all");
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredAllRecipes, setFilteredAllRecipes] = useState([]);

  useEffect(() => {
    // Si no hay filtros activos, mostrar todas las recetas
    if (activeFilters.length === 0) {
      setFilteredAllRecipes(recipesToShow);
      return;
    }

    // Filtrar recetas que tengan todos los tipos de recetas seleccionados
    const filtered = recipesToShow.filter(recipe => {
      const recipeTypeIds = recipe.recipe_types.map(type => type.id);
      return activeFilters.every(filterId => recipeTypeIds.includes(filterId));
    });

    setFilteredAllRecipes(filtered);
  }, [activeFilters, recipesToShow]);

  // Función para manejar el cambio de filtros
  const handleFilterChange = (filterId) => {
    // Si el filtro ya está activo, desactívalo
    if (activeFilters.includes(filterId)) {
      setActiveFilters(activeFilters.filter(id => id !== filterId));
    } else {
      // De lo contrario, activa el filtro
      setActiveFilters([...activeFilters, filterId]);
    }
  };

  function prueba(){
    console.log("hola");
  }
  
  return (
    <>
      <div className="px-4 pb-4">
        <div className="flex justify-between">
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Recipes
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Recipes uploaded by all users
            </Typography>
          </div>

          <div>

          <div className="mt-6 flex flex-wrap gap-4 ml-4">
            {recipe_types.map((type, index) => (
              <div 
                key={`${type.id}_${index}`} 
                className={`rounded-full cursor-pointer hover:bg-blue-200 px-3 py-1 ${activeFilters.includes(type.id) ? 'bg-blue-200' : 'bg-blue-100'}`}
                onClick={() => handleFilterChange(type.id)} // Pasa el id del tipo al handler
                >
                {type.name}
              </div>
            ))}
          </div>

          </div>

          { (general && auth.user.type !== 'admin') && (
            <div className="w-48">
              <Tabs value={activeTab}>
                <TabsHeader>
                <Tab value="all" onClick={() => {setActiveTab("all"); setActiveFilters([]);}}>

                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                  </Tab>
                  <Tab value="followed" onClick={() => {setActiveTab("followed"); setActiveFilters([]);}}>
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>  
          )}
        </div>   

        <div className="flex mt-10 justify-end">
          {show ? ( 
            see ? ( 
              <Link href={'/dashboard/recipes'} className="ml-10">
                <Button variant="gradient">See Recipes</Button>
              </Link>
            ) : (
              <Link href={'/dashboard/recipes/create'} className="ml-10">
                <Button variant="gradient">Add Recipe</Button>
              </Link>
            )
          ) : null} 
        </div>   

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">

          {activeTab === "all" && <AllRecipes auth={auth} recipes={filteredAllRecipes} savedRecipesIds={savedRecipesIds}/>}

          {activeTab === "followed" && <FollowingRecipes auth={auth} user={user} recipes={filteredAllRecipes} savedRecipesIds={savedRecipesIds}/>}

      
        </div>

      </div>
    </>
  );
}

export default RecipesSection;

import { useEffect, useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
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
  TrashIcon,
  ShoppingCartIcon
} from "@heroicons/react/24/solid";
import { Link } from "@inertiajs/react";
import { ProfileInfoCard, MessageCard } from "../../../widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../../data";
import StarIcon from "../../../../../../../resources/js/Components/StarIcon";
import ClockIcon from "../../../../../../../resources/js/Components/ClockIcon";
import RecipeCard from "@/Pages/Dashboard/widgets/seeRecipes/recipe-card";
import RecipeType from "@/Pages/Dashboard/widgets/seeRecipes/recipetype-card";
import ValorationCard from '@/Pages/Dashboard/widgets/valorateRecipe/valoration-card';
import SaveRecipe from '@/Pages/Dashboard/widgets/saveRecipe/saveRecipe';
import { Dashboard } from "@/Pages/Dashboard/layouts";
import { getDifficultyColorAndText } from '../../../../../../../public/assets/js/validationUtils';

export function SeeRecipe({auth, recipe, savedRecipesIds}) { 

  const { difficultyColor, difficultyText } = getDifficultyColorAndText(recipe.difficulty);

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
                      
                      
                        <button type="button" onClick={() => handleDelete(recipe.id)}>
                          <Tooltip content="Delete Recipe">
                            <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
                          </Tooltip>
                        </button>           
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
                      <ShoppingCartIcon className="w-5"></ShoppingCartIcon>

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

              {recipe.description}

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


                  <Link to={`/dashboard/recipes/valorate/${recipe.id}`} className="ml-10">
                    <Button variant="gradient">Make valoration</Button>
                  </Link>

                  </div>
              </div>


              <div className='flex flex-col gap-4'>

                {recipe.valorations.map((user) => (

                  <ValorationCard key={`${user.pivot.user_id}_${user.pivot.recipe_id}`} user={user}/>

                  ))}

              </div>
        

            </div>

          </CardBody>
        </Card>
      </Dashboard>
    </>
  );
}

export default SeeRecipe;

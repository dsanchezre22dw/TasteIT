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
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "../../../widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../../data";
import StarIcon from "../../../../../../../resources/js/Components/StarIcon";
import ClockIcon from "../../../../../../../resources/js/Components/ClockIcon";
import RecipeCard from "@/Pages/Dashboard/widgets/seeRecipes/recipe-card";
import RecipeType from "@/Pages/Dashboard/widgets/seeRecipes/recipetype-card";

export function SeeRecipe({recipes}) { 

  const { recipeId } = useParams();

  const recipe = recipes.find(recipe => recipe.id === parseInt(recipeId));

  let difficultyColor, difficultyText;

  if (recipe.difficulty === 'beginner') {
    difficultyColor = 'green';
    difficultyText = 'Beginner';
  } else if (recipe.difficulty === 'medium') {
    difficultyColor = 'yellow';
    difficultyText = 'Medium';
  } else if (recipe.difficulty === 'expert') {
    difficultyColor = 'red';
    difficultyText = 'Expert';
  }
  
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 rounded-xl">
        <CardBody className="p-16">
          <div className="px-4 pb-4 flex">

            <div className="w-5/12 mr-16">
              <img src={recipe.image} alt={recipe.title} className="border rounded-lg" />
            </div>

            <div>

              <div className="mt-8">
                <Typography
                  variant="h1"
                >
                  {recipe.title}
                </Typography>
              </div>

              <div className="flex gap-2">
                <Typography
                  variant="p"
                >
                  {recipe.user.username}
                </Typography>

                {recipe.user.type === "chef"  && (
                  <div style={{ backgroundColor: 'blue', padding: '3px', display: 'inline-block', borderRadius: '50%' }}>
                    <img src="/assets/chef-hat.svg" alt="Descripción opcional"/>
                  </div>
                )}
              </div>

              <div className="flex">
                <ClockIcon count={1} />
                {recipe.duration_mins}min
              </div>


              <div className="flex">
                <StarIcon count={1} />
                {recipe.avg_valoration}
              </div>


              <div className="flex">
                <span className={`bg-${difficultyColor}-100 text-${difficultyColor}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${difficultyColor}-900 dark:text-${difficultyColor}-300`}>
                  {difficultyText}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  {recipe.recipe_types.map((type, index) => (
                      <RecipeType key={type.id} id={type.id} name={type.name} index={index} />
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
                
                  <div className="flex ml-1">
                    <ShoppingCartIcon className="w-5"></ShoppingCartIcon>

                    <Typography
                      variant="p"
                      key={ingredient.id}
                      >
                       {ingredient.pivot.amount}g {ingredient.name}
                    </Typography>

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

            <Typography
              variant="p"
            >
              {recipe.description}
            </Typography>

          </div>

        </CardBody>
      </Card>
    </>
  );
}

export default SeeRecipe;

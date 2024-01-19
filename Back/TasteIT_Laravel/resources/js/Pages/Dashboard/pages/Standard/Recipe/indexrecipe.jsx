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
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "../../../widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../../data";
import StarIcon from "../../../../../../../resources/js/Components/StarIcon";
import ClockIcon from "../../../../../../../resources/js/Components/ClockIcon";

export function RecipesIndex({auth, recipes}) { 

  const renderRecipes = recipes.map(
    ({ title, description, duration_mins, difficulty, avg_valoration, recipe_types, image}) => {
      let difficultyColor, difficultyText;
  
      if (difficulty === "beginner") {
        difficultyColor = "green";
        difficultyText = "Beginner";
      } else if (difficulty === "medium") {
        difficultyColor = "yellow";
        difficultyText = "Medium";
      } else if (difficulty === "expert") {
        difficultyColor = "red";
        difficultyText = "Expert";
      }
  
      return (
        <Card key={title} color="transparent" shadow={false} className="border border-blue-gray-200 rounded-xl">

          <CardHeader
            floated={false}
            color="gray"
            className="mx-0 mt-0 mb-4 h-64 xl:h-40"
          >
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover"
            />
          </CardHeader>

          <CardBody className="py-0 px-1">

            <Typography
              variant="h5"
              color="blue-gray"
              className="mt-1 mb-2"
            >
              {title}
            </Typography>

            <div className="mt-3 flex items-center justify-between py-0 px-1">
              <div className="flex">
                <span className={`bg-${difficultyColor}-100 text-${difficultyColor}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${difficultyColor}-900 dark:text-${difficultyColor}-300`}>{difficultyText}</span>
              </div>  
              <div className="flex"><ClockIcon count={1}/>{duration_mins}min</div>
              <div className="flex"><StarIcon count={1}/>{avg_valoration}</div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {recipe_types.map((type, index) => (
                <span key={`${type.id}-${index}`} className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">{type.name}</span>
              ))}
            </div>
          </CardBody>
          <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
            <Link to={route}>
              <Button variant="outlined" size="sm" className="ml-3 mb-3">
                view recipe
                  <i className="text-yellow-500 fas fa-star"></i>
              </Button>
            </Link>

            {auth.user.type === "admin" && (
              <div>
                <div>
                  <Tooltip content="Edit Recipe">
                    <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 mb-3 mr-1"/>
                  </Tooltip>
                </div>
                <div>
                  <Tooltip content="Delete Recipe">
                    <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
                  </Tooltip>
                </div>
              </div>
            )}
            
            <div>
            </div>
          </CardFooter>
        </Card>
      );
    }
  );
  



  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 rounded-xl">
        <CardBody className="p-4">
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Recipes
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Recipes uploaded by all users

              <Link to={'/dashboard/recipes/add'} className="ml-10">
                <Button variant="gradient">Add Recipe</Button>
              </Link>
            </Typography>


            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {renderRecipes}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default RecipesIndex;

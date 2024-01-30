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
import RecipeCard from "@/Pages/Dashboard/widgets/seeRecipes/recipe-card";

export function RecipesSection({recipesToShow, show}) { 
  
  return (
    <>
      <div className="px-4 pb-4">
        <Typography variant="h6" color="blue-gray" className="mb-2">
          Recipes
        </Typography>
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500"
        >
          Recipes uploaded by all users
        </Typography>

        <div className="float-right -mt-12">


          {show === true ? (
            <Link to={'/dashboard/recipes'} className="ml-10">
              <Button variant="gradient">See Recipes</Button>
            </Link>
          ) : (
            <Link to={'/dashboard/recipes/add'} className="ml-10">
              <Button variant="gradient">Add Recipe</Button>
            </Link>
          )}
          
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {recipesToShow}
        </div>
      </div>
    </>
  );
}

export default RecipesSection;

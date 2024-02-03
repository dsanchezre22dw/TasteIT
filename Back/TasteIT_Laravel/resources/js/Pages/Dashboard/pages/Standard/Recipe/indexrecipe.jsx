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
import RecipesSection from "./recipessection";
import { Dashboard } from "@/Pages/Dashboard/layouts";

export function RecipesIndex({auth, savedRecipesIds, recipes}) { 

  const renderRecipes = recipes
    .map((recipe) => (
      <RecipeCard key={recipe.id} auth={auth} savedRecipesIds={savedRecipesIds} recipe={recipe}/>
  ));
  
  return (
    <>

      <Dashboard auth={auth}>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
          
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 rounded-xl">
          <CardBody className="p-4">
            <RecipesSection recipesToShow={renderRecipes}></RecipesSection>   
          </CardBody>
        </Card>
      </Dashboard>
    </>
  );
}

export default RecipesIndex;

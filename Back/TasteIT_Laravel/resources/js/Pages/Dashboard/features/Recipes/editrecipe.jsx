import { useParams } from 'react-router-dom';
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
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "../Statistics/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../data";
import MainTitle from "@/Components/MainTitle";
import CreatePost from "../../widgets/postRecipe/CreatePost";
import "../../../../../../../public/assets/css/test.css"
import Dashboard from '@/Layouts/DashboardLayout';

export function RecipesEdit({auth, recipe, recipe_types}) {

  return (
    <>
      <Dashboard auth={auth}>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
          <CardBody className="p-4">
            <MainTitle title="Create a new recipe" />
            <CreatePost auth={auth} recipe={recipe} recipe_types={recipe_types}/>
          </CardBody>
        </Card>
      </Dashboard>
    </>
  );
}

export default RecipesEdit;

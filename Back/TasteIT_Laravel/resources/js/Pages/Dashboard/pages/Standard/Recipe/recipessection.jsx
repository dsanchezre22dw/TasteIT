import React, { useState } from "react";
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

export function RecipesSection({auth, recipesToShow, followingRecipes, general, show=true, see}) { 

  const [activeTab, setActiveTab] = useState("all");
  
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

          { (general && auth.user.type !== 'admin') && (
            <div className="w-48">
              <Tabs value={activeTab}>
                <TabsHeader>
                  <Tab value="all" onClick={() => setActiveTab("all")}>
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                  </Tab>
                  <Tab value="followed" onClick={() => setActiveTab("followed")}>
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
          {activeTab === "all" && recipesToShow}
          {activeTab === "followed" && followingRecipes}
        </div>

      </div>
    </>
  );
}

export default RecipesSection;

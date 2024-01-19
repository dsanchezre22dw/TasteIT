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
} from "@heroicons/react/24/solid";
import {
  TrashIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "../cards";
import { platformSettingsData, conversationsData, projectsData } from "../../data";
import ClockIcon from "@/Components/ClockIcon";
import StarIcon from "@/Components/StarIcon";


export function SavedRecipes({ recipes, user, users }) {

  const renderRecipes = users
  .filter(u => u.id === user.id) 
  .flatMap(({ saves }) => saves) 
  .map(
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
 
            </div>
          </CardBody>
          <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
            <Link to={route}>
              <Button variant="outlined" size="sm" className="ml-3 mb-3">
                view recipe
                  <i className="text-yellow-500 fas fa-star"></i>
              </Button>
            </Link> 

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
            <div>
            </div>
          </CardFooter>
        </Card>
      );
    }
  );
  


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
        <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          {renderRecipes}
        </div>
      </div>             
    </>
  );
}

export default SavedRecipes;

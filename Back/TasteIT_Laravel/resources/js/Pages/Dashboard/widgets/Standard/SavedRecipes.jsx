import React, { useEffect, useState } from "react";
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
import RecipeCard from "@/Pages/Dashboard/widgets/seeRecipes/recipe-card";
import RecipesSection from "../../pages/Standard/Recipe/recipessection";

export function SavedRecipes({ auth, recipes, user, users }) {

  const actualUser = users.find(user => user.id === parseInt(auth.user.id));
  const myRecipes = actualUser.saves;
  const savedRecipes = recipes.filter(recipe => myRecipes.some(savedRecipe => savedRecipe.id === recipe.id));

  const renderRecipes = savedRecipes
  .map((recipe) => (
    <RecipeCard key={recipe.id} auth={auth} recipe={recipe} />
  ));
  
  return (
    <>
      <RecipesSection recipesToShow={renderRecipes} show={true}></RecipesSection> 
    </>
  );
}

export default SavedRecipes;

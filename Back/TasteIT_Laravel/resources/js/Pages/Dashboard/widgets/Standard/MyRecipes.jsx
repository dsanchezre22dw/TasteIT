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
import RecipeCard from "@/Pages/Dashboard/widgets/seeRecipes/recipe-card";
import RecipesIndex from "../../pages/Standard/Recipe/indexrecipe";
import RecipesSection from "../../pages/Standard/Recipe/recipessection";

export function MyRecipes({ auth, recipes, savedRecipesIds }) {

  const renderRecipes = recipes
  .filter((recipe) => recipe.user_id === auth.user.id)
  .map((recipe) => (
    <RecipeCard key={recipe.id} auth={auth} savedRecipesIds={savedRecipesIds} recipe={recipe}/>
  ));
  

  return (
    <>
      <RecipesSection recipesToShow={renderRecipes}></RecipesSection>         
    </>
  );
}

export default MyRecipes;

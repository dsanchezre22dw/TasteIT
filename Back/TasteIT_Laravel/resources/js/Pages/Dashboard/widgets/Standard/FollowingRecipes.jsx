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

export function FollowingRecipes({ auth, user, recipes, savedRecipesIds, recipe_types, ingredients }) {
  
  const followingRecipes = recipes
  .filter(recipe => user.following.map(following => following.id).includes(recipe.user_id));
  

  
  return (
    <>
      <RecipesSection auth={auth} recipesToShow={followingRecipes} savedRecipesIds={savedRecipesIds} recipe_types={recipe_types} ingredients={ingredients}></RecipesSection>       
    </>
  );
}

export default FollowingRecipes;

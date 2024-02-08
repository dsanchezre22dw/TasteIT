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

export function AllRecipes({ auth, recipes, savedRecipesIds, recipe_types }) {

  return (
    <>
      <RecipesSection auth={auth} recipesToShow={recipes} savedRecipesIds={savedRecipesIds} recipe_types={recipe_types}></RecipesSection>             
    </>
  );
}

export default AllRecipes;

import React from "react";
import RecipesSection from "../recipessection";

export function SavedRecipes({ auth, recipes, savedRecipesIds, recipe_types, ingredients }) {
  
  const savedRecipes = recipes.filter(recipe => savedRecipesIds.includes(recipe.id));

  
  return (
    <>
      <RecipesSection auth={auth} recipesToShow={savedRecipes} savedRecipesIds= {savedRecipesIds} recipe_types={recipe_types} ingredients={ingredients} see={true} text="Your saved recipes"></RecipesSection>       
    </>
  );
}

export default SavedRecipes;

import React from "react";
import RecipesSection from "../recipessection";

export function AllRecipes({ auth, recipes, savedRecipesIds, recipe_types, ingredients }) {

  return (
    <>
      <RecipesSection auth={auth} recipesToShow={recipes} savedRecipesIds={savedRecipesIds} recipe_types={recipe_types} ingredients={ingredients} text="Recipes uploaded by all users"></RecipesSection>             
    </>
  );
}

export default AllRecipes;

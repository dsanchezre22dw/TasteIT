import React from "react";
import RecipesSection from "../recipessection";

export function MyRecipes({ auth, user, recipes, savedRecipesIds, recipe_types, ingredients, show}) {

  const myRecipes = recipes
  .filter((recipe) => recipe.user_id === user.id);
  
  return (
    <>
      <RecipesSection auth={auth} user={user} recipesToShow={myRecipes} savedRecipesIds={savedRecipesIds} recipe_types={recipe_types} ingredients={ingredients} show={show} text="Recipes uploaded by you"></RecipesSection>         
    </>
  );
}

export default MyRecipes;

import React from "react";
import RecipesSection from "../recipessection";

export function FollowingRecipes({ auth, user, recipes, savedRecipesIds, recipe_types, ingredients }) {
  
  const followingRecipes = recipes
  .filter(recipe => user.following.map(following => following.id).includes(recipe.user_id));
  

  
  return (
    <>
      <RecipesSection auth={auth} recipesToShow={followingRecipes} savedRecipesIds={savedRecipesIds} recipe_types={recipe_types} ingredients={ingredients} see= {true} text="Recipes uploaded by users you follow"></RecipesSection>       
    </>
  );
}

export default FollowingRecipes;

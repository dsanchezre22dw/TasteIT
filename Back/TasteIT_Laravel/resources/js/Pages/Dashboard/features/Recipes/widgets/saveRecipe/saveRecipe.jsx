import React from 'react';
import { useForm } from '@inertiajs/react';

function SaveRecipe({savedRecipesIds, recipe_id, width}) {

  const { data, setData, post, processing, errors, reset, recentlySuccessful} = useForm({
    saved: savedRecipesIds.includes(recipe_id),
  });

  const save = (event) => {
    event.preventDefault();
    setData("saved", !data.saved);
    post(`/dashboard/recipes/save/${recipe_id}`);
  };


  return (
    <button type="button" className="flex items-center" onClick={save}>
      <img
        src={data.saved ? "/assets/img/saved.png" : "/assets/img/unsaved.png"}
        alt="Guardar/No guardar"
        width={width}
      />
    </button>
  );
}

export default SaveRecipe;

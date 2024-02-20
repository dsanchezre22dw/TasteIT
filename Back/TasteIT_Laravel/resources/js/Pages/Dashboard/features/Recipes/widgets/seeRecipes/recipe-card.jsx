import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Link } from "@inertiajs/react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from '@material-tailwind/react';
import {
    PencilIcon,
    TrashIcon
  } from "@heroicons/react/24/solid";
import ClockIcon from '@/Components/ClockIcon';  // Asegúrate de importar ClockIcon y StarIcon correctamente
import StarIcon from '@/Components/StarIcon';
import RecipeType from './recipetype-card';
import SaveRecipe from '../saveRecipe/saveRecipe';
import AnswerModal from '@/Components/AnswerModal';

function RecipeCard({ auth, savedRecipesIds, recipe }) {
  const {
    id,
    title,
    description,
    duration_mins,
    difficulty,
    avg_valoration,
    recipe_types,
    image,
    ingredients,
    user,
  } = recipe;

  const form = useForm({});

  var message = 'Are you sure you want to delete this recipe?';
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    form.delete(`/dashboard/recipes/delete/${id}`);
  };

  return (
    <Card key={title} color="transparent" className="border border-blue-gray-200 rounded-xl">
      <CardHeader floated={false} color="gray" className="mx-0 mt-0 mb-4 h-64 xl:h-40">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="py-0 px-1">
        <div className="flex flex-row justify-between ">
          <Link href={`/dashboard/recipes/${id}`}>
            <Typography variant="h5" className="mt-1 mb-2 ml-2">
              {title}
            </Typography>
          </Link>

          { (auth.user.type !== "admin" && recipe.user.id !== auth.user.id) && (
            <SaveRecipe savedRecipesIds={savedRecipesIds} recipe_id={id} width={24}/>
          )}



        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between py-0 px-1">
          <div className="flex">
          <span className={`text-sm font-medium me-2 px-2.5 py-0.5 rounded
            ${difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
              difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
              difficulty === 'expert' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' : ''}`}
          >
            {difficulty}
          </span>
          </div>
          <div className="flex">
            <ClockIcon count={1} />
            {duration_mins}min
          </div>
          <Link href={`/dashboard/recipes/valorate/${id}`}>
            <div className="flex">
              <StarIcon count={1} />
              {avg_valoration}
            </div>
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 ml-4">
            {recipe_types.map((type, index) => (
                <RecipeType key={`${type.id}_${index}`} id={type.id} name={type.name} index={index}/>
            ))}
        </div>

      </CardBody>
      <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
        <Link href={`/dashboard/recipes/${id}`}>
          <Button variant='gradient' size="sm" color="red" className="ml-3 mb-3">
            view recipe
            <i className="text-yellow-500 fas fa-star" />
          </Button>
        </Link>
        { (auth.user.type === "admin" || auth.user.id === user.id) && (
          <div className="flex gap-8">
            <div>
              <Link href={`/dashboard/recipes/edit/${id}`}>
                <Tooltip content="Edit Recipe">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 mt-[2.2px]" />
                </Tooltip>        
              </Link>
            </div>
            <div>
              <button type="button" onClick={() =>setShowModal(true)}>
                <Tooltip content="Delete Recipe">
                  <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
                </Tooltip>
              </button>
              <AnswerModal
                  show={showModal}
                  onClose={() => setShowModal(false)}
                  onConfirm={() => handleDelete(id)}
                  message={message}
              />
            </div>
          </div>
        )}
        <div></div>
      </CardFooter>
    </Card>
    
  );
}

export default RecipeCard;

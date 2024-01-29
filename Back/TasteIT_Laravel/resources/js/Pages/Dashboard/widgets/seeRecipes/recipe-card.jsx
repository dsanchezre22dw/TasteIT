import React from 'react';
import { Link } from 'react-router-dom';
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
    HomeIcon,
    ChatBubbleLeftEllipsisIcon,
    Cog6ToothIcon,
    PencilIcon,
    TrashIcon
  } from "@heroicons/react/24/solid";
import ClockIcon from '@/Components/ClockIcon';  // Asegúrate de importar ClockIcon y StarIcon correctamente
import StarIcon from '@/Components/StarIcon';
import RecipeType from './recipetype-card';

function RecipeCard({ recipe, route, auth }) {
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
  } = recipe;

  let difficultyColor, difficultyText;

  if (difficulty === 'beginner') {
    difficultyColor = 'green';
    difficultyText = 'Beginner';
  } else if (difficulty === 'medium') {
    difficultyColor = 'yellow';
    difficultyText = 'Medium';
  } else if (difficulty === 'expert') {
    difficultyColor = 'red';
    difficultyText = 'Expert';
  }

  return (
    <Card key={title} color="transparent" shadow={false} className="border border-blue-gray-200 rounded-xl">
      <CardHeader floated={false} color="gray" className="mx-0 mt-0 mb-4 h-64 xl:h-40">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </CardHeader>
      <CardBody className="py-0 px-1">
        <Typography variant="h5" color="blue-gray" className="mt-1 mb-2 ml-2">
          {title}
        </Typography>
        <div className="mt-3 flex flex-wrap items-center justify-between py-0 px-1">
          <div className="flex">
            <span className={`bg-${difficultyColor}-100 text-${difficultyColor}-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-${difficultyColor}-900 dark:text-${difficultyColor}-300`}>
              {difficultyText}
            </span>
          </div>
          <div className="flex">
            <ClockIcon count={1} />
            {duration_mins}min
          </div>
          <div className="flex">
            <StarIcon count={1} />
            {avg_valoration}
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
            {recipe_types.map((type, index) => (
                <RecipeType key={type.id} id={type.id} name={type.name} index={index} />
            ))}
        </div>

      </CardBody>
      <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
        <Link to={`/dashboard/recipes/${id}`}>
          <Button variant="outlined" size="sm" className="ml-3 mb-3">
            view recipe
            <i className="text-yellow-500 fas fa-star" />
          </Button>
        </Link>
        {auth.user.type === "admin"  && (
          <div className="flex gap-8">
            <div>
              <Tooltip content="Edit Recipe">
                <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 mt-[2.2px]" />
              </Tooltip>
            </div>
            <div>
              <Tooltip content="Delete Recipe">
                <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
              </Tooltip>
            </div>
          </div>
        )}
        <div></div>
      </CardFooter>
    </Card>
  );
}

export default RecipeCard;

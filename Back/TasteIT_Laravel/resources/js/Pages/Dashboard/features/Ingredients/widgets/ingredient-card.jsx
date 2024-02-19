import React from 'react';
import { Link, useForm } from '@inertiajs/react';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react';
import {
    PencilIcon,
    TrashIcon,
  } from "@heroicons/react/24/solid";

export default function IngredientCard({auth, ingredient}) {
    const {
        id,
        name,
        image,
      } = ingredient;

    const form = useForm({});

    const handleDelete = () => {
      if (window.confirm(`Are you sure you want to delete the ingredient '${name}'?`)) {
        form.delete(`/dashboard/ingredients/delete/${id}`);
      }
    };

    return (
      <Card key={id} color="transparent" shadow={false} className="border border-blue-gray-200 rounded-xl">
        <CardHeader floated={false} color="gray" className="mx-0 mt-0 mb-4 h-64 xl:h-40">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody className="py-0 px-1">
          <Typography variant="h5" color="blue-gray" className="mt-1 mb-2 ml-2">
            {name}
          </Typography>
        </CardBody>
        {auth.user.type == 'admin' && (
        <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
            <div className="flex justify-around w-full">
              
              <div>
                  <Link href={`/dashboard/ingredients/edit/${id}`}>
                      <Tooltip content="Edit Ingredient">
                          <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 mt-[2.2px]" />
                      </Tooltip>
                  </Link>
              </div>
              
              <div>
                <button onClick={handleDelete}>
                  <Tooltip content="Delete Ingredient">
                    <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
                  </Tooltip>
                </button>
              </div>
            </div>
        </CardFooter>
        )}
      </Card>
    );
}
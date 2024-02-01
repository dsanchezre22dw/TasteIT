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
    PencilIcon,
    TrashIcon,
    CheckIcon,
    XMarkIcon
  } from "@heroicons/react/24/solid";
  import { useForm } from '@inertiajs/inertia-react';

export default function ExistingIngredientList({ingredient}) {
    const {
        id,
        name,
        image,
        enabled
      } = ingredient;

      const form = useForm({});

      const handleAccept = () => {
        if (window.confirm(`Are you sure you want to accept the ingredient ${name}?`)) {
          form.post(`/dashboard/ingredients/accept/${id}`);
        }
      };

      const handleDelete = () => {
        if (window.confirm(`Are you sure you want to delete the ingredient ${name}?`)) {
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
      <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
          <div className="flex justify-around w-full">

            <div>
                {!enabled && (
                    <button onClick={handleAccept}>
                        <Tooltip content="Accept Ingredient">
                            <CheckIcon className="h-5 w-5 text-green-500 cursor-pointer mb-3" />
                        </Tooltip>
                    </button>
              )}
            </div>
            
            <div>
                <Link to={`/dashboard/ingredients/edit/${id}`}>
                    <Tooltip content="Edit Ingredient">
                        <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 mt-[2.2px]" />
                    </Tooltip>
                </Link>
            </div>
            <div>
              <button onClick={handleDelete}>
              {enabled? (
                <Tooltip content="Delete Ingredient">
                    <TrashIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
                </Tooltip>
              ):(  
                <Tooltip content="Deny Ingredient">
                    <XMarkIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
                </Tooltip> 
              )}
              </button>
            </div>
          </div>
      </CardFooter>
    </Card>
      );
}
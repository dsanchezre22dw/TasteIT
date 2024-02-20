import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { Avatar, Typography, Tooltip } from "@material-tailwind/react";
import {
  PencilIcon,
  CheckIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";
import AnswerModal from "@/Components/AnswerModal";
const RequestedIngredientTableRow = ({ ingredient, num}) => {

  const [showAcceptModal, setShowAcceptModal] = useState(false);
  const [showDenyModal, setShowDenyModal] = useState(false);

  const form = useForm({});

  const handleAccept = (ingredientId) => {
    form.post(`/dashboard/ingredients/accept/${ingredientId}`);
  };

  const handleDeny = (ingredientId) => {
    form.post(`/dashboard/ingredients/deny/${ingredientId}`);
  };

  var accept_message = `Are you sure you want to accept the ingredient '${ingredient.name}'?`;
  var deny_message = `Are you sure you want to deny the ingredient '${ingredient.name}'?`;

  var className = "py-3 px-5 border-t border-blue-gray-50";
  if (num%2==0) {
    className = "py-3 px-5 border-t border-blue-gray-50 bg-[#ff000005]";
  }

  return (
    <tr key={ingredient.name}>
      <td className={className}>
        <div className="flex items-center gap-4">
          <Avatar src={ingredient.image} alt={ingredient.name} size="sm" variant="rounded" />
          <div>
            <Typography variant="small" color="blue-gray" className="font-semibold">
              {ingredient.name}
            </Typography>
          </div>
        </div>
      </td>
      <td className={className}>
        <Typography className="text-xs font-semibold text-blue-gray-600">{ingredient.user.username}</Typography>
      </td>


      <td className={className}>
        <Link href={`/dashboard/ingredients/edit/${ingredient.id}`}>
            <Tooltip content="Edit Ingredient">
                <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500 mt-[2.2px]" />
            </Tooltip>
        </Link>
      </td>


      <td className={className}>
        <button onClick={() => setShowAcceptModal(true)}>
            <Tooltip content="Accept Ingredient">
                <CheckIcon className="h-5 w-5 text-green-500 cursor-pointer mb-3" />
            </Tooltip>
        </button>
        <AnswerModal
            show={showAcceptModal}
            onClose={() => setShowAcceptModal(false)}
            onConfirm={() => handleAccept(ingredient.id)}
            message={accept_message}
        />
      </td>


      <td className={className}>
        <button onClick={() => setShowDenyModal(true)}>
          <Tooltip content="Deny Ingredient">
              <XMarkIcon className="h-5 w-5 text-red-500 cursor-pointer mb-3" />
          </Tooltip> 
        </button>
        <AnswerModal
            show={showDenyModal}
            onClose={() => setShowDenyModal(false)}
            onConfirm={() => handleDeny(ingredient.id)}
            message={deny_message}
        />
      </td>
      
    </tr>
  );
};

export default RequestedIngredientTableRow;

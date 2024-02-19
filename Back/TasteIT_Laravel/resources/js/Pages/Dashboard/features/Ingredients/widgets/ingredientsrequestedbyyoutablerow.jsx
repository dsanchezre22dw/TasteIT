import React from "react";
import { Link } from "@inertiajs/react";
import { Avatar, Typography, Chip } from "@material-tailwind/react";
import {
  PencilIcon,
  CheckIcon,
  XMarkIcon
} from "@heroicons/react/24/solid";

const IngredientsRequestedByYouTableRow = ({ ingredient, num}) => {

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
        <Chip
          variant="gradient"
          color={ingredient.enabled === null ? "blue-gray" : (ingredient.enabled ? "green" : "red")}
          value={ingredient.enabled === null ? "pending" : (ingredient.enabled ? "accepted" : "rejected")}
          className="py-0.5 px-2 text-[11px] font-medium w-fit"
        />
      </td>

      
    </tr>
  );
};

export default IngredientsRequestedByYouTableRow;

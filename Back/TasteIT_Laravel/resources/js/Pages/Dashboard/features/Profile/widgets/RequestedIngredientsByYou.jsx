import React, {useEffect} from "react";
import { useForm } from '@inertiajs/react';

import { Typography } from "@material-tailwind/react";
import IngredientsRequestedByYouTableRow from "../../Ingredients/widgets/ingredientsrequestedbyyoutablerow";


export function RequestedIngredientsByYou({ user }) {

  return (
    <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
      <div className="mb-12">
        <Typography
          variant="small"
          className="font-normal text-blue-gray-500"
        >
          Ingredients requested by you
        </Typography>

        <table className="w-full min-w-[640px] table-auto mt-8">
          <thead>
            <tr>
              {["ingredient", "status"].map((el) => (
                <th
                  key={el}
                  className="border-b border-blue-gray-50 py-3 px-5 text-left"
                >
                  <Typography
                    variant="small"
                    className="text-[11px] font-bold uppercase text-blue-gray-400"
                  >
                    {el}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
          {user.ingredients
          .map((ingredient, key) => (
            <IngredientsRequestedByYouTableRow key={key} ingredient={ingredient} num={key}/>
          ))}

          </tbody>
        </table>

      </div>
    </div>
  );
}

export default RequestedIngredientsByYou;

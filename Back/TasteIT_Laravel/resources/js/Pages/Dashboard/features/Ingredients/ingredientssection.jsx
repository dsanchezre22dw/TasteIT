import React, { useState, useEffect } from "react";

import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";


import { Link } from "@inertiajs/react";
import IngredientCard from "./widgets/ingredient-card";
import Dashboard from '@/Layouts/DashboardLayout';
import RequestedIngredientTableRow from "./widgets/requestedingredienttablerow";

export function IngredientSection({auth, ingredients}) { 

  const [searchText, setSearchText] = useState("");
  const [filteredIngredients, setFilteredIngredients] = useState([]);

  useEffect(() => {
    // Si no hay filtros activos, mostrar todas las recetas
    if (searchText === "") {
      setFilteredIngredients(ingredients);
      return;
    }

      // Filtrar por texto de búsqueda
    let filteredBySearchText = [...ingredients];
    if (searchText !== "") {
      const lowerSearchText = searchText.toLowerCase();
      filteredBySearchText = ingredients.filter(ingredient =>
        ingredient.name.toLowerCase().includes(lowerSearchText)
      );
    }
  
    // Establecer los resultados finales
    setFilteredIngredients(filteredBySearchText);
  }, [searchText, ingredients]);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  
  return (
    <>
      <Dashboard auth={auth}>
          <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/assets/img/backgrounds/background-image.png')] bg-cover	bg-center"> 
            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          </div>
          <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 rounded-xl">
            <CardBody className="p-4">


              <div className="px-4 pb-4">
                <div className="flex justify-between">
                  <Typography variant="h6" color="blue-gray" className="mb-2">
                    Ingredients
                  </Typography>

                  <Link href={'/dashboard/ingredients/create'} className="ml-10 mt-10">
                    <Button variant="gradient" color='red'>Request Ingredient</Button>
                  </Link>
                </div>   


                { auth.user.type === "admin" && (
                  <>
                    <div className="mb-12">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Ingredients requested by users
                      </Typography>

                      <table className="w-full min-w-[640px] table-auto mt-8">
                        <thead>
                          <tr>
                            {["ingredient", "user"].map((el) => (
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
                        {ingredients
                        .filter((ingredient) => ingredient.enabled === null)
                        .map((ingredient, key) => (
                          <RequestedIngredientTableRow key={key} ingredient={ingredient} num={key}/>
                        ))}

                        </tbody>
                      </table>

                    </div>
                  </>
                )}

                <div>

                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"
                  >
                    Ingredients available for your recipes
                  </Typography>

                  <div>
                    <div className="mt-10 mb-4 ml-4">
                      <input
                        type="text"
                        value={searchText}
                        onChange={handleSearchTextChange}
                        placeholder="Search ingredients..."
                        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">


                    {filteredIngredients
                    .filter((ingredient) => ingredient.enabled === 1)
                    .map((ingredient) => (
                      <IngredientCard key={ingredient.id} auth={auth} ingredient={ingredient}/>
                    ))}   

                
                  </div>
                </div>
              </div>



            </CardBody>
          </Card>
      </Dashboard>
    </>
  );
}

export default IngredientSection;

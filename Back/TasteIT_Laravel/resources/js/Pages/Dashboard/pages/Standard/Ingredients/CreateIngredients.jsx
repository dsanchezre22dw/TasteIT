import { Card, CardBody } from "@material-tailwind/react"
import NewIngredient from "./NewIngredient"
import MainTitle from "@/Components/MainTitle";
import IngredientList from "./IngredientList";
import { useState, useEffect } from "react";

export default function CreateIngredients({ingredients}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    useEffect(() => {
        
        const fetchSuggestions = async () => {
        const response = await axios.get(`/api/ingredients?term=${searchTerm}`);
        console.log(response.data.suggestions);
        
        setSuggestions(response.data.suggestions);
        
        };
        if (searchTerm.trim() === '') {
            // Limpiar sugerencias si el término de búsqueda está vacío
            setSuggestions([]);

          } else {
            fetchSuggestions();
          }
        
    }, [searchTerm]);

    const handleSelectIngredient = (ingredient) => {

        setSelectedIngredients([...selectedIngredients, ingredient]);
        setSearchTerm(''); // Limpiar el término de búsqueda después de seleccionar un ingrediente

    };

    const filteredSuggestions = suggestions
    .filter((ingredient) => !selectedIngredients.includes(ingredient))
    .slice(0, 5); // Limitar la cantidad de sugerencias a mostrar


    return (
        <>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
            <CardBody>
                <MainTitle title="Search for existing ingredients" />
                <input type="text" placeholder="Write a ingredient" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id='searchInput' />
                <ul id='search' className='w-[200px] bg-gray-100'>
                    {filteredSuggestions.map((ingredient) => (
                    <li key={ingredient} onClick={() => handleSelectIngredient(ingredient)} className='hover:bg-gray-300 p-2'>
                        {ingredient}
                    </li>
                    ))}
                </ul>
            </CardBody>
            <CardBody className="p-4">
            <MainTitle title="Add new ingredient" />
            <NewIngredient  />
            </CardBody>
            <CardBody className="p-4">
            <MainTitle title="All the ingredients" />
            <div className="flex w-full flex-wrap">
            {
                ingredients.map((ingredient) => (
                    <IngredientList key={ingredient.id} ingredient={ingredient}/>
                )) 
            }
            </div>
            </CardBody>
        </Card>
        
        </>
    )
}
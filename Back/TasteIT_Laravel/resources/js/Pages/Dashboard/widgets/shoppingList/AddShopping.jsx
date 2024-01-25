import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import Addedshopping from './AddedShoping';
import { Button } from '@material-tailwind/react';
export default function AddShopping({auth, shoppingList}) {

    const { data, setData, post, processing, errors, reset } = useForm({
        amount: {},
        user_id: auth.user.id
    });
    const submit = (e) => {
        e.preventDefault();

        post('/dashboard/shopping/add');
      };

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState(shoppingList.ingredients);
console.log(shoppingList.ingredients)
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
    .filter((ingredient) => !selectedIngredients.name.includes(ingredient))
    .slice(0, 10); // Limitar la cantidad de sugerencias a mostrar


    return (
        <div className='m-6'>
            <form action="">
        <input type="text" placeholder="🔍 Search for an ingredient" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id='searchInput' className='rounded-full w-full'/>
        <ul id='search' className='w-[69%] sm:w-[74%] md:w-[80%] lg:w-[85%] bg-gray-100 ml-4'>
            {filteredSuggestions.map((ingredient) => (
            <li key={ingredient} onClick={() => handleSelectIngredient(ingredient)} className='hover:bg-gray-300 p-2'>
                {ingredient}
            </li>
            ))}
        </ul>
        <div className='mt-3'>
            <div>
                <div className="flex justify-between items-center">
                    <span></span>
                    <p className="w-[100px] text-black">Ingredient</p>
                    <p className="w-[70px] text-black">Amount</p>
                    <span></span>
                </div>
            {selectedIngredients.map((ingredient) => (
                
                <Addedshopping ingredientName={ingredient} selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} setData={setData} data={data}/>
            ))}
            </div>
        </div>
        <Button>
            Bought
        </Button>
        </form>
        </div>
    );
}
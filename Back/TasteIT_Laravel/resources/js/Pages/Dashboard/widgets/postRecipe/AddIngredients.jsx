import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddedIngredient from './AddedIngredient';

export default function AddIngredients({data, setData}){
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
        <div className='m-6'>
        <p className="w-[133px]">Ingredients:</p>
        <input type="text" placeholder="Write a ingredient" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id='searchInput' />
        <ul id='search' className='w-[200px] bg-gray-100'>
            {filteredSuggestions.map((ingredient) => (
            <li key={ingredient} onClick={() => handleSelectIngredient(ingredient)} className='hover:bg-gray-300 p-2'>
                {ingredient}
            </li>
            ))}
        </ul>
        <div className='mt-3'>
            <h2>Selected ingredients:</h2>
            <div>
                <div className="flex justify-between items-center">
                    <p className="w-[100px] text-black">Ingredient</p>
                    <p className="w-[70px] text-black">Amount</p>
                    <span></span>
                </div>
            {selectedIngredients.map((ingredient) => (
                <AddedIngredient ingredientName={ingredient} selectedIngredients={selectedIngredients} setSelectedIngredients={setSelectedIngredients} setData={setData} data={data}/>
            ))}
            </div>
        </div>
        </div>
    );
}
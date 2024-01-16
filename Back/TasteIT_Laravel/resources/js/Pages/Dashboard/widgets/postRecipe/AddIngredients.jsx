import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddIngredients(){
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
        const response = await axios.get(`/api/ingredients?term=${searchTerm}`);
        setSuggestions(response.data.suggestions);
        };

        fetchSuggestions();
        
    }, [searchTerm]);

    const handleSelectIngredient = (ingredient) => {
        setSelectedIngredients([...selectedIngredients, ingredient]);
        setSearchTerm(''); // Limpiar el término de búsqueda después de seleccionar un ingrediente
    };

    return (
        <div className='m-6'>
        <p className="w-[133px]">Ingredients:</p>
        <input type="text" placeholder="Write a ingredient" defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <ul>
            {suggestions.map((ingredient) => (
            <li key={ingredient} onClick={() => handleSelectIngredient(ingredient)}>
                {ingredient}
            </li>
            ))}
        </ul>
        <div className='mt-3'>
            <h2>Selected ingredients:</h2>
            <ul>
            {selectedIngredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
            ))}
            </ul>
        </div>
        </div>
    );
}
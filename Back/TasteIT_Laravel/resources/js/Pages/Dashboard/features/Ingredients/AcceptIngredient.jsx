import { Card, CardBody, Typography } from "@material-tailwind/react"
import NewIngredient from "./NewIngredient";
import { useState, useEffect } from "react"
import ExistingIngredientList from "./ExistingIngredientList";
import Dashboard from '@/Layouts/DashboardLayout';

export default function AcceptIngredient({auth, ingredients}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);

    useEffect(() => {
        
        const fetchSuggestions = async () => {
        const response = await axios.get(`/api/ingredients?term=${searchTerm}`);
        
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
        <Dashboard auth={auth}>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
            <CardBody>
                <Typography variant="h2">
                    Search for existing ingredients
                </Typography>
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
            <Typography variant="h2">
                Add new ingredient
            </Typography>
            <NewIngredient  />
            </CardBody>
            <CardBody className="p-4">
            {auth.user.type == 'admin'?(<>
            <Typography variant="h2" className="mt-20">
                Requested ingredients
            </Typography>
            
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"> 
            {
                ingredients.map((ingredient) => (
                    ingredient.enabled?'':<ExistingIngredientList key={ingredient.id} ingredient={ingredient} auth={auth}/>
                ))  
            }
            </div>
            </>):''}

            <Typography variant="h2" className="mt-20">
                All the ingredients
            </Typography>

            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {ingredients.map((ingredient) => (
                <ExistingIngredientList key={ingredient.id} ingredient={ingredient} auth={auth}/>
              ))}
            </div>

            </CardBody>
        </Card>
        </Dashboard>
    )
}
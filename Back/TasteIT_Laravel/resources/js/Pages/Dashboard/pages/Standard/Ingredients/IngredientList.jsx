import { Button } from "@material-tailwind/react"

export default function IngredientList({ingredient}){
    console.log(ingredient)
    return (
        <div className="w-1/3">
            <p>{ingredient.name}</p>
        </div>
    )
}
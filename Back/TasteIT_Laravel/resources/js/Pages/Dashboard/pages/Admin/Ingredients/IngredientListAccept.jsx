import { Button } from "@material-tailwind/react"

export default function IngredientListAccept({ingredient}){
    console.log(ingredient)
    return (
        <div className="flex items-center">
            <p className="w-[200px]">{ingredient.name}</p>
            <Button variant="gradient" className="m-5">
                Edit
            </Button>
            <Button variant="gradient"  className="m-5">
                Accept
            </Button>
        </div>
    )
}
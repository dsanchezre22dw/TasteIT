import { Button } from "@material-tailwind/react";
import { useForm } from "@inertiajs/react";

export default function NewIngredient() {
    const {data, setData, post} = useForm({
        name: ''
    })
    const submit = (e) => {
        e.preventDefault();
        post('/dashboard/ingredients/store');
    }

    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor="ingredient">New Ingredient: </label>
                <input type="text" name="ingredient" className="mx-5" value={data.name} placeholder="Ingredient Name" onChange={(e) => setData('name',e.target.value)}/>
                <Button variant="gradient" color="red" onClick={submit}>
                    Create
                </Button>
            </form>
        </div>
    )
}
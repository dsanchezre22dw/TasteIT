import { Card, CardBody } from "@material-tailwind/react"
import NewIngredient from "./NewIngredient"
import MainTitle from "@/Components/MainTitle";

export default function CreateIngredients() {
    return (
        <>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
            <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
            <CardBody className="p-4">
            <MainTitle title="Add new ingredient" />
            <NewIngredient  />
            </CardBody>
            <CardBody className="p-4">
            <MainTitle title="Add new ingredient" />
            <NewIngredient  />
            </CardBody>
        </Card>
        
        </>
    )
}
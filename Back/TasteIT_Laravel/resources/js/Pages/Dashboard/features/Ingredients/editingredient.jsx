import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import IngredientForm from "./widgets/IngredientForm";
import Dashboard from '@/Layouts/DashboardLayout';
import "../../../../../../public/assets/css/test.css"

export default function IngredientsEdit({auth, ingredient}) {

    return (
        <Dashboard auth={auth}>
            <div className="mt-12 mb-8 flex flex-col gap-12">
                <Card>
        
                    <CardHeader variant="gradient" color="red" className="mb-8 p-6 flex items-center justify-between">
                            <Typography variant="h6" color="white">
                            Request Ingredient
                            </Typography>
                    </CardHeader>
        
                    <CardBody className="p-4">
                        <IngredientForm auth={auth} ingredient={ingredient}/>
                    </CardBody>
                </Card>
            </div>
        </Dashboard>
    )
}
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import IngredientForm from "./widgets/IngredientForm";
import "../../../../../../public/assets/css/test.css"
import Dashboard from '@/Layouts/DashboardLayout';

export function PostIngredient({auth}) {
  return (
    <>
      <Dashboard auth={auth}>
        <div className="mt-12 mb-8 flex flex-col gap-12">
          <Card>

            <CardHeader variant="gradient" color="red" className="mb-8 p-6 flex items-center justify-between">
                  <Typography variant="h6" color="white">
                    Request Ingredient
                  </Typography>
            </CardHeader>

            <CardBody className="p-4">
              <IngredientForm auth={auth}/>
            </CardBody>
          </Card>
        </div>
      </Dashboard>
    </>
  );
}

export default PostIngredient;

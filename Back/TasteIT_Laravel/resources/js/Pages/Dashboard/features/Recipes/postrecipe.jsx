import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import RecipeForm from './widgets/postRecipe/RecipeForm';
import "../../../../../../public/assets/css/test.css"
import Dashboard from '@/Layouts/DashboardLayout';

export function PostRecipe({auth, recipe_types}) {
  return (
    <>
      <Dashboard auth={auth}>
        <div className="mt-12 mb-8 flex flex-col gap-12">

          <Card>
            <CardHeader variant="gradient" color="red" className="mb-8 p-6 flex items-center justify-between">
                <Typography variant="h6" color="white">
                  Create Recipe
                </Typography>
            </CardHeader>

            <CardBody className="p-4">
              <RecipeForm auth={auth} recipe_types={recipe_types}/>
            </CardBody>
          </Card>

        </div>
      </Dashboard>
    </>
  );
}

export default PostRecipe;

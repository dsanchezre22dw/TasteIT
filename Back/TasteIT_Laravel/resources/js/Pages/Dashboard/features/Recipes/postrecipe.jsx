import {
  Card,
  CardBody,
} from "@material-tailwind/react";
import MainTitle from "@/Components/MainTitle";
import CreatePost from './widgets/postRecipe/CreatePost';
import "../../../../../../public/assets/css/test.css"
import Dashboard from '@/Layouts/DashboardLayout';

export function PostRecipe({auth, recipe_types}) {
  return (
    <>
      <Dashboard auth={auth}>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
          <CardBody className="p-4">
            <MainTitle title="Create a new recipe" />
            <CreatePost auth={auth} recipe_types={recipe_types}/>
          </CardBody>
        </Card>
      </Dashboard>
    </>
  );
}

export default PostRecipe;

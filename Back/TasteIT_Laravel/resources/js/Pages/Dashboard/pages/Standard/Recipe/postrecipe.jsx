import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "../../../widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../../data";
import MainTitle from "@/Components/MainTitle";
import CreatePost from "../../../widgets/postRecipe/CreatePost";
import "../../../../../../../public/assets/css/test.css"

export function PostRecipe({auth}) {
  return (
    <>

      <div className="mt-12 mb-8 flex flex-col gap-12">

        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
              <Typography variant="h6" color="white">
                  Post Recipe<br></br>
              </Typography>
          </CardHeader>

          <CardBody className="p-4">
            <CreatePost auth={auth}/>
          </CardBody>
        </Card>

      </div>
    </>
  );
}

export default PostRecipe;

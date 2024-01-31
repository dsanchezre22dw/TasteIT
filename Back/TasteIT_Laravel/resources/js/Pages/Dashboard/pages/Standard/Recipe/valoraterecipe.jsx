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
import "../../../../../../../public/assets/css/starrating.css"

export function ValorateRecipe({auth}) {
  return (
    <>

      <div className="mt-12 mb-8 flex flex-col gap-12">

        <Card>
          <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
              <Typography variant="h6" color="white">
                  Valorate Recipe<br></br>
              </Typography>
          </CardHeader>

          <CardBody className="p-4">
            <div class="card">
              <h1>JavaScript Star Rating</h1>
              <br />
              <span onclick="gfg(1)"
                class="star">★
              </span>
              <span onclick="gfg(2)"
                class="star">★
              </span>
              <span onclick="gfg(3)"
                class="star">★
              </span>
              <span onclick="gfg(4)"
                class="star">★
              </span>
              <span onclick="gfg(5)"
                class="star">★
              </span>
              <h3 id="output">
                Rating is: 0/5
              </h3>
            </div>
          </CardBody>
        </Card>

      </div>
    </>
  );
}

export default ValorateRecipe;

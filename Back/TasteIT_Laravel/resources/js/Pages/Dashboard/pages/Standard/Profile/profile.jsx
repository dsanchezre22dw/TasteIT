import React, { useState } from "react";
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
import { ProfileInfoCard, MessageCard } from "../../../widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../../data";
import UserInformation from "../../../widgets/Standard/UserInformation";
import UserSettings from "../../../widgets/Standard/UserSettings";
import MyRecipes from "../../../widgets/Standard/MyRecipes";
import SavedRecipes from "../../../widgets/Standard/SavedRecipes";
import EditUserInformation from "../../../widgets/Standard/EditUserInformation";
import { useEffect } from "react";
import { Dashboard } from "@/Pages/Dashboard/layouts";

export function Profile({auth, savedRecipesIds, recipes}) {
  const [activeTab, setActiveTab] = useState("info");
  
  return (
    <>

      <Dashboard auth={auth}>

        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
          <CardBody className="p-4">
            <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
              <div className="flex items-center gap-6">
                <Avatar
                  src="/img/bruce-mars.jpeg"
                  alt="bruce-mars"
                  size="xl"
                  variant="rounded"
                  className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    {auth.user.username}
                  </Typography>
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-600"
                  >
                    {auth.user.type}
                  </Typography>
                </div>
              </div>

              {auth.user.type !== "admin" && (
                <div className="w-96">
                  <Tabs value={activeTab}>
                    <TabsHeader>
                      <Tab value="info" onClick={() => setActiveTab("info")}>
                        <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="mine" onClick={() => setActiveTab("mine")}>
                        <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="saved" onClick={() => setActiveTab("saved")}>
                        <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="settings" onClick={() => setActiveTab("settings")}>
                        <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                    </TabsHeader>
                  </Tabs>
                </div>
              )}

            </div>

            {activeTab === "info" && <UserInformation user={auth.user} setActiveTab={setActiveTab}/>}
            {activeTab === "mine" && <MyRecipes auth={auth} savedRecipesIds={savedRecipesIds} recipes={recipes}/>}
            {activeTab === "saved" && <SavedRecipes auth={auth} savedRecipesIds={savedRecipesIds} recipes={recipes}/>}
            {activeTab === "settings" && <UserSettings/>}
            {activeTab === "edit" && <EditUserInformation/>}


          </CardBody>
        </Card>
        </Dashboard>
    </>
  );
}

export default Profile;

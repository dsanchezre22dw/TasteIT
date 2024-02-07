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
import BlockedUsers from "@/Pages/Dashboard/widgets/Standard/BlockedUsers";
import { useEffect } from "react";
import { Link } from "@inertiajs/react";
import { Dashboard } from "@/Pages/Dashboard/layouts";
import FollowUser from "@/Pages/Dashboard/widgets/followUser/followUser";

export function Profile({auth, actualUser, user, savedRecipesIds, recipes, recipe_types}) {

  let view = user.id === auth.user.id ? "info" : "mine";

  const [activeTab, setActiveTab] = useState(view);
  
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
                  src={user.profileImg}
                  alt="bruce-mars"
                  size="xl"
                  variant="rounded"
                  className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                    {user.username}
                    {user.type === "chef"  && (
                      <div style={{ backgroundColor: 'blue', padding: '3px', display: 'inline-block', borderRadius: '50%' }}>
                        <img src="/assets/img/chef-hat.svg" alt="Descripción opcional" width={17}/>
                      </div>
                    )}
                  </Typography>

                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-600"
                  >
                    {user.firstname} {user.surname}
                  </Typography>
                </div>
                
                {user.id !== auth.user.id && (
                  <>
                    {auth.user.type !== 'admin' ? (
                      <FollowUser followingIds={actualUser.following.map(following => following.id)} following_id={user.id} width={24}/>
                    ) : (
                      <Link href={`/dashboard/users/edit/${user.id}`}>
                        <i className="material-icons settings">&#xE8B8;</i>
                      </Link>
                    )}
                  </>
                )}

                
              </div>

              { (user.type !== "admin" && user.id === auth.user.id) && (
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
                      <Tab value="blocked" onClick={() => setActiveTab("blocked")}>
                        <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                    </TabsHeader>
                  </Tabs>
                </div>
              )}

            </div>

            {activeTab === "info" && <UserInformation auth={auth} user={user} followers={user.followers} following={user.following} setActiveTab={setActiveTab}/>}
            {activeTab === "mine" && <MyRecipes auth={auth} user={user} savedRecipesIds={savedRecipesIds} recipes={recipes} recipe_types={recipe_types} show={user.id === auth.user.id}/>}
            {activeTab === "saved" && <SavedRecipes auth={auth} savedRecipesIds={savedRecipesIds} recipes={recipes} recipe_types={recipe_types}/>}
            {activeTab === "settings" && <UserSettings/>}
            {activeTab === "blocked" && <BlockedUsers user={user} followers={user.followers} following={user.following} setActiveTab={setActiveTab}/>}
            {activeTab === "edit" && <EditUserInformation/>}


          </CardBody>
        </Card>
        </Dashboard>
    </>
  );
}

export default Profile;

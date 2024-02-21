import React, { useState } from "react";
import {
  Card,
  CardBody,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import {
  HomeIcon,
  Cog6ToothIcon,
  BookmarkIcon,
  ArrowUpOnSquareIcon,
  NoSymbolIcon,
  DocumentCheckIcon
} from "@heroicons/react/24/solid";
import UserInformation from "./widgets/UserInformation";
import UserSettings from "./widgets/UserSettings";
import MyRecipes from "../Recipes/widgets/MyRecipes";
import SavedRecipes from "../Recipes/widgets/SavedRecipes";
import EditUserInformation from "./widgets/EditUserInformation";
import BlockedUsers from "./widgets/BlockedUsers";
import RequestedIngredientsByYou from "./widgets/RequestedIngredientsByYou";
import { Link } from "@inertiajs/react";
import Dashboard from '@/Layouts/DashboardLayout';
import FollowUser from "@/Pages/Dashboard/features/Profile/widgets/followUser/followUser";

export function Profile({auth, actualUser, user, savedRecipesIds, recipes, recipe_types, ingredients}) {

  let view = user.id === auth.user.id ? "info" : "mine";

  const [activeTab, setActiveTab] = useState(view);
  
  return (
    <>

      <Dashboard auth={auth}>

        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/assets/img/backgrounds/background-image.png')] bg-cover	bg-center">
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
                      <div style={{ backgroundColor: 'red', padding: '3px', display: 'inline-block', borderRadius: '50%', marginLeft: '10px'}}>
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
                      <Tab value="info" className={activeTab == 'info'?"text-red-400":''} onClick={() => setActiveTab("info")}>
                        <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="mine" className={activeTab == 'mine'?"text-red-400":''} onClick={() => setActiveTab("mine")}>
                        <ArrowUpOnSquareIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="saved" className={activeTab == 'saved'?"text-red-400":''} onClick={() => setActiveTab("saved")}>
                        <BookmarkIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="requested" className={activeTab == 'requested'?"text-red-400":''} onClick={() => setActiveTab("requested")}>
                        <DocumentCheckIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="blocked" className={activeTab == 'blocked'?"text-red-400":''} onClick={() => setActiveTab("blocked")}>
                        <NoSymbolIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="settings" className={activeTab == 'settings'?"text-red-400":''} onClick={() => setActiveTab("settings")}>
                        <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                    </TabsHeader>
                  </Tabs>
                </div>
              )}

            </div>

            {activeTab === "info" && <UserInformation auth={auth} user={user} followers={user.followers} following={user.following} setActiveTab={setActiveTab}/>}
            {activeTab === "mine" && <MyRecipes auth={auth} user={user} savedRecipesIds={savedRecipesIds} recipes={recipes} recipe_types={recipe_types} ingredients={ingredients} show={user.id === auth.user.id}/>}
            {activeTab === "saved" && <SavedRecipes auth={auth} savedRecipesIds={savedRecipesIds} recipes={recipes} recipe_types={recipe_types} ingredients={ingredients}/>}
            {activeTab === "requested" && <RequestedIngredientsByYou user={user}/>}
            {activeTab === "blocked" && <BlockedUsers user={user} followers={user.followers} following={user.following} setActiveTab={setActiveTab}/>}
            {activeTab === "settings" && <UserSettings actualUser={actualUser}/>}
            {activeTab === "edit" && <EditUserInformation user={user}/>}


          </CardBody>
        </Card>
        </Dashboard>
    </>
  );
}

export default Profile;

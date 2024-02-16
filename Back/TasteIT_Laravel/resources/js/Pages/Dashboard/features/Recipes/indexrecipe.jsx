import React, { useState } from "react";

import {
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";

import {
  UsersIcon,
  UserPlusIcon
} from "@heroicons/react/24/solid";

import Dashboard from '@/Layouts/DashboardLayout';
import AllRecipes from "@/Recipes/widgets/AllRecipes";
import FollowingRecipes from "@/Pages/Dashboard/features/Profile/widgets/FollowingRecipes";

export function RecipesIndex({auth, user, savedRecipesIds, recipes, recipe_types, ingredients}) { 

  const [activeTab, setActiveTab] = useState("all");

  
  return (
    <>

      <Dashboard auth={auth}>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
          
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100 rounded-xl">
          <CardBody className="p-4">


          <div className="px-4 pb-4">
            <div className="flex justify-end">
              { auth.user.type !== 'admin' && (
                <div className="w-48">
                  <Tabs value={activeTab}>
                    <TabsHeader>
                    <Tab value="all" className={activeTab == 'all'? 'text-red-400':''} onClick={() => setActiveTab("all")}>
                        <UsersIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                      <Tab value="followed" className={activeTab == 'followed'? 'text-red-400':''} onClick={() => setActiveTab("followed")}>
                        <UserPlusIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                      </Tab>
                    </TabsHeader>
                  </Tabs>
                </div>  
              )}
            </div>   

            {activeTab === "all" && <AllRecipes auth={auth} recipes={recipes} savedRecipesIds={savedRecipesIds} recipe_types={recipe_types} ingredients={ingredients}/>}

            {activeTab === "followed" && <FollowingRecipes auth={auth} user={user} recipes={recipes} savedRecipesIds={savedRecipesIds} recipe_types={recipe_types} ingredients={ingredients}/>}

          </div>

          </CardBody>
        </Card>
      </Dashboard>
    </>
  );
}

export default RecipesIndex;

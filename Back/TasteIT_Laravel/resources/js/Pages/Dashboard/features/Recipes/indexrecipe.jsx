import React, { useState, useEffect } from "react";

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
import ModalAction from "@/Components/ModalAction";
import Dashboard from '@/Layouts/DashboardLayout';
import AllRecipes from "./widgets/AllRecipes";
import FollowingRecipes from "./widgets/FollowingRecipes";

export function RecipesIndex({auth, user, savedRecipesIds, recipes, recipe_types, ingredients, successMessage}) { 

  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
      if (successMessage !== "") {
        setShowModal(true);
      }
  }, [successMessage]);

  const closeModal = () => {
    setShowModal(false);
  };
  
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

            <ModalAction show={showModal} onClose={closeModal} maxWidth="2xl" closeable={true}>
              <div className="p-4">
                <h1 className="text-xl font-bold mb-4">{successMessage['type']}</h1>
                <p>{successMessage['message']}</p>
              </div>
            </ModalAction>
          </div>

          </CardBody>
        </Card>
      </Dashboard>
    </>
  );
}

export default RecipesIndex;

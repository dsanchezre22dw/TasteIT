import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "../widgets/layout";
import routes from "../routes";
import { useMaterialTailwindController, setOpenConfigurator } from "../context";
import PostRecipe from "../pages/Standard/Recipe/postrecipe";

<<<<<<< HEAD
export function Dashboard({ auth, users, recipes, shoppingList, user}) {
=======
export function Dashboard({ auth, users, recipes, shoppingList, fridge}) {
>>>>>>> 0f991202d45ac5223eb4f33531e4b6515232d318
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
        user={auth.user}
        brandName='TasteIT'
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar auth={auth}/>
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
        <Routes>
          {routes.map(
            ({ layout, pages }) =>
              layout === "dashboard" &&
              pages.map(({ path, element }) => (
<<<<<<< HEAD
                <Route exact key={path} path={path} element={React.cloneElement(element, { auth , users , recipes , shoppingList , user})} />
=======
                <Route exact key={path} path={path} element={React.cloneElement(element, { auth , users , recipes , shoppingList, fridge})} />
>>>>>>> 0f991202d45ac5223eb4f33531e4b6515232d318
              ))
          )}
        </Routes>
        <div className="text-blue-gray-600">
          <Footer />
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;

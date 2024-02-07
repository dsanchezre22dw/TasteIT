import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import { Home, Tables, Notifications } from "./pages/dashboard";
import { SignIn, SignUp } from "./pages/auth";
import UsersIndex from "./pages/Admin/Users/indexuser";
import UsersEdit from "./pages/Admin/Users/edituser";
import UsersAdd from "./pages/Admin/Users/adduser";
import PostRecipe from "./pages/Standard/Recipe/postrecipe";
import { RecipesIndex } from "./pages/Standard/Recipe/indexrecipe";
import SeeRecipe from "./pages/Standard/Recipe/seerecipe";
import Profile from "./pages/Standard/Profile/profile";
import ShoppingList from "./pages/Standard/ShoppingList/shoppinglist";
import Fridge from "./pages/Standard/Fridge/fridge";
import RecipesEdit from "./pages/Standard/Recipe/editrecipe";
import ValorateRecipe from "./pages/Standard/Recipe/valoraterecipe";
import CreateIngredients from "./pages/Standard/Ingredients/CreateIngredients";
import AcceptIngredient from "./pages/Admin/Ingredients/AcceptIngredient";
import IngredientsEdit from "./pages/Admin/Ingredients/IngredientsEdit";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    admin: "yes",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        actual: "profile",
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "users",
        path: "/users",
        actual: "users.index",
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "recipes",
        path: "/recipes",
        actual: "recipes.index",
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "ingredients",
        path: "/ingredients",
        actual: "ingredients.index",
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "statistics",
        path: "/statistics",
        actual: "statistics.index",
      },
    ],
  },
  {
    layout: "dashboard",
    admin: "no",
    pages: [
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "recipes",
        path: "/recipes",
        actual: "recipes.index",
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        actual: "profile",
      },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: "shopping",
        path: "/shopping",
        actual: "shopping.index",
      },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: "fridge",
        path: "/fridge",
        actual: "fridge.index",
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "ingredient",
        path: "/ingredient",
        actual: "ingredients.index",
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "profile layout",
        path: "/profilelayout",
        actual: "profilelayout.index",
      },
    ],
  },
];

export default routes;

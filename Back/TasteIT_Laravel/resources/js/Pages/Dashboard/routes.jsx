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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn, faBowlFood, faCircleUser, faCartShopping, faChartPie, faSnowflake, faUsers } from "@fortawesome/free-solid-svg-icons";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    admin: "yes",
    pages: [
      {
        icon: <FontAwesomeIcon icon={faChartPie} size="xl"/>,
        name: "statistics",
        path: "/statistics",
        actual: "statistics.index",
      },
      {
        icon: <FontAwesomeIcon icon={faUsers} size="xl"/>,
        name: "users",
        path: "/users",
        actual: "users.index",
      },
      {
        icon: <FontAwesomeIcon icon={faCircleUser} size="xl"/>,
        name: "profile",
        path: "/profile",
        actual: "profile",
      },
      {
        icon: <FontAwesomeIcon icon={faBowlFood} size="xl"/>,
        name: "recipes",
        path: "/recipes",
        actual: "recipes.index",
      },
      {
        icon: <FontAwesomeIcon icon={faWheatAwn} size="xl"/>,
        name: "ingredients",
        path: "/ingredients",
        actual: "ingredients.index",
      },

    ],
  },
  {
    layout: "dashboard",
    admin: "no",
    pages: [
      {
        icon: <FontAwesomeIcon icon={faBowlFood} size="xl"/>,
        name: "recipes",
        path: "/recipes",
        actual: "recipes.index",
      },
      {
        icon: <FontAwesomeIcon icon={faSnowflake} size="xl"/>,
        name: "fridge",
        path: "/fridge",
        actual: "fridge.index",
      },

      {
        icon: <FontAwesomeIcon icon={faCartShopping} size="xl"/>,
        name: "shopping",
        path: "/shopping",
        actual: "shopping.index",
      },
      {
        icon: <FontAwesomeIcon icon={faWheatAwn} size="xl"/>,
        name: "ingredients",
        path: "/ingredients",
        actual: "ingredients.index",
      },
      {
        icon: <FontAwesomeIcon icon={faCircleUser} size="xl"/>,
        name: "profile",
        path: "/profile",
        actual: "profile",
      },
    ],
  },
];

export default routes;

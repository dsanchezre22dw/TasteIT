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
    show: "yes",
    admin: "yes",
    pages: [
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: `/dashboard/profile`,
        link: "/profile",
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "users",
        path: `/dashboard/users`,
        link: "/users",
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "recipes",
        path: `/dashboard/recipes`,
        link: "/recipes",
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "ingredients",
        path: `/dashboard/ingredients`,
        link: "/ingredients",
      },
    ],
  },
  {
    layout: "dashboard",
    show: 'no',
    admin: "yes",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,

        name: "users edit",
        path: `/dashboard/users/edit/:userId`,
        link: "/users/edit",

      },
      {
        icon: <ServerStackIcon {...icon} />,

        name: "ingredients edit",
        path: `/dashboard/ingredients/edit/:ingredientId`,
        link: "/ingredients/edit",

      },
      {
        icon: <ServerStackIcon {...icon} />,

        name: "users add",
        path: `/dashboard/users/add`,
        link: "/users/add",
      },
    ],

  },
  {
    layout: "dashboard",
    show: "yes",
    admin: "no",
    pages: [
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "recipes",
        path: `/dashboard/recipes`,
        link: "/recipes",
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: `/dashboard/profile`,
        link: "/profile",
      },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: "shopping",
        path: `/dashboard/shopping`,
        link: "/shopping",
      },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: "fridge",
        path: `/dashboard/fridge`,
        link: "/fridge",
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "ingredient",
        path: `/dashboard/ingredient`,
        link: "/ingredient",
      },
    ],
  },
  {
    layout: "dashboard",
    show: "no",
    admin: "no",
    pages: [
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "recipes add",
        path: `/dashboard/recipes/add`,
        link: "/recipes/add",
      },
      {
        icon: <ServerStackIcon {...icon} />,

        name: "recipes see",
        path: `/dashboard/recipes/:recipeId`,
        link: "/recipes",

      },
      {
        icon: <ServerStackIcon {...icon} />,

        name: "recipes edit",
        path: `/dashboard/recipes/edit/:recipeId`,
        link: "/recipes/edit",

      },
      {
        icon: <ServerStackIcon {...icon} />,

        name: "recipes valorate",
        path: `/dashboard/recipes/valorate/:recipeId`,
        link: "/recipes/valorate",

      },
    ],
  },
];

export default routes;

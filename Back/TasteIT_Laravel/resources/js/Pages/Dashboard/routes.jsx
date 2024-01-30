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
        route: "/profile",
        element: <Profile />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "users",
        path: `/dashboard/users`,
        route: "/users",
        element: <UsersIndex />,
      },
      {
        icon: <AcademicCapIcon {...icon} />,
        name: "recipes",
        path: `/dashboard/recipes`,
        route: "/recipes",
        element: <RecipesIndex />,
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
        route: "/users/edit",
        element: <UsersEdit />,

      },
      {
        icon: <ServerStackIcon {...icon} />,

        name: "users add",
        path: `/dashboard/users/add`,
        route: "/users/add",
        element: <UsersAdd />,
      }
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
        route: "/recipes",
        element: <RecipesIndex />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: `/dashboard/profile`,
        route: "/profile",
        element: <Profile />,
      },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: "shopping",
        path: `/dashboard/shopping`,
        route: "/shopping",
        element: <ShoppingList />,
      },
      {
        icon: <ShoppingCartIcon {...icon} />,
        name: "fridge",
        path: `/dashboard/fridge`,
        route: "/fridge",
        element: <Fridge />,
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
        route: "/recipes/add",
        element: <PostRecipe />,
      },
      {
        icon: <ServerStackIcon {...icon} />,

        name: "recipes see",
        path: `/dashboard/recipes/:recipeId`,
        route: "/recipes",
        element: <SeeRecipe />,

      },
      {
        icon: <ServerStackIcon {...icon} />,

        name: "recipes edit",
        path: `/dashboard/recipes/edit/:recipeId`,
        route: "/recipes/edit",
        element: <RecipesEdit />,

      },
    ],
  },
];

export default routes;

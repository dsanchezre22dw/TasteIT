import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  InformationCircleIcon,
  ServerStackIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Tables, Notifications } from "./pages/dashboard";
import { SignIn, SignUp } from "./pages/auth";
import UsersIndex from "./pages/Admin/Users/indexuser";
import UsersEdit from "./pages/Admin/Users/edituser";
import UsersAdd from "./pages/Admin/Users/adduser";

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
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/dashboard/home",
        route: "/home",
        element: <Home />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: `/dashboard/profile`,
        route: "/profile",
        element: <Profile />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "tables",
        path: `/dashboard/tables`,
        route: "/tables",
        element: <Tables />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "notifications",
        path: `/dashboard/notifications`,
        route: "/notifications",
        element: <Notifications />,
      },
      {
        icon: <InformationCircleIcon {...icon} />,
        name: "users",
        path: `/dashboard/users`,
        route: "/users",
        element: <UsersIndex />,
      }
    ],
  },
  {
    layout: "dashboard",
    show: 'yes',
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
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;

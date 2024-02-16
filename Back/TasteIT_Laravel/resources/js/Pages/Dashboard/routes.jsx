import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWheatAwn, faBowlFood, faCircleUser, faCartShopping, faChartPie, faSnowflake, faUsers } from "@fortawesome/free-solid-svg-icons";

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

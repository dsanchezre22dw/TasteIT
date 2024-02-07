import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";

import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
  BellIcon,
} from "@heroicons/react/24/solid";

import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "../../widgets/cards";
import { StatisticsChart } from "../../widgets/charts";
import {
  projectsTableData,
  ordersOverviewData,
  websiteViewsChart,
  dailySalesChart,
  completedTasksChart,
} from "../../data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import { Dashboard } from "@/Pages/Dashboard/layouts";

export function Home({auth}) {

  const [recipesAmountByUsers, setRecipesAmountByUsers] = useState([]);
  const [newUsers, setNewUsers] = useState([]);
  const [newRecipes, setNewRecipes] = useState([]);
  const [recipeTypes, setRecipeTypes] = useState([]);
  const [usersMonthly, setUsersMonthly] = useState([]);
  const [recipesMonthly, setRecipesMonthly] = useState([]);
  const [usersActivity, setUsersActivity] = useState([]);
  const [statisticsCardsData, setStatisticsCardsData] = useState([]);
  const [statisticsChartsData, setStatisticsChartsData] = useState([]);
  
  useEffect(() => {
    axios.get('/api/top-users')
    .then(response => {
      setRecipesAmountByUsers(response.data);
    })
    .catch(error => {
      console.error('Error obtaining the recipes uploaded by users', error);
    });

    axios.get('/api/new-users')
    .then(response => {
      setNewUsers(response.data);
    })
    .catch(error => {
      console.error('Error obtaining the new users of this month', error);
    });

    axios.get('/api/new-recipes')
    .then(response => {
      setNewRecipes(response.data);
    })
    .catch(error => {
      console.error('Error obtaining the new recipes of this month', error);
    });

    axios.get('/api/recipe-types')
    .then(response => {
      setRecipeTypes(response.data);
      setRecipesTypesChart(response.data)
    })
    .catch(error => {
      console.error('Error obtaining the recipe types and its recipes', error);
    });
  
    axios.get('/api/monthly-users')
    .then(response => {
      setUsersMonthly(response.data);
      setUsersMonthlyChart(response.data)
    })
    .catch(error => {
      console.error('Error obtaining the new users by month', error);
    });

    axios.get('/api/monthly-recipes')
    .then(response => {
      setRecipesMonthly(response.data);
      setRecipesMonthlyChart(response.data)
    })
    .catch(error => {
      console.error('Error obtaining the new recipes by month', error);
    });

    axios.get('/api/users-activity')
    .then(response => {
      setUsersActivity(response.data);
    })
    .catch(error => {
      console.error('Error obtaining the users activity', error);
    });

  }, []);

  
  useEffect(() => {
    setStatisticsCardsData([newUsers, newRecipes]);
  }, [newUsers, newRecipes]);

  function setRecipesTypesChart(data){
    setStatisticsChartsData([])
    var chartConfig = {
      color: "white",
      title: "Recipe types",
      description: "Recipe types used by recipes",
      footer: "campaign sent 2 days ago",
      chart: websiteViewsChart,
    };

    chartConfig.chart.options.xaxis.categories = data.map(recipe => recipe.name);
    chartConfig.chart.series[0].data = data.map(recipe => recipe.recipe_count);

    var newStatisticsChart = (prevState => [...prevState, chartConfig]);
    setStatisticsChartsData(newStatisticsChart);
  }

  function setUsersMonthlyChart(data){
    var chartConfig = {
      color: "white",
      title: "Daily Sales",
      description: "15% increase in today sales",
      footer: "updated 4 min ago",
      chart: dailySalesChart,
    };

    chartConfig.chart.options.xaxis.categories = data.map(data => data.month_name);
    chartConfig.chart.series[0].data = data.map(data => data.new_users);

    var newStatisticsChart = (prevState => [...prevState, chartConfig]);

    setStatisticsChartsData(newStatisticsChart);
  }

  function setRecipesMonthlyChart(data){
    var chartConfig = {
      color: "white",
      title: "Completed Tasks",
      description: "Last Campaign Performance",
      footer: "just updated",
      chart: completedTasksChart,
    };


    chartConfig.chart.options.xaxis.categories = data.map(data => data.month_name);
    chartConfig.chart.series[0].data = data.map(data => data.new_recipes);

    var newStatisticsChart = (prevState => [...prevState, chartConfig]);

    setStatisticsChartsData(newStatisticsChart);
  }

  return (
    <Dashboard auth={auth}>
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
        {statisticsCardsData.map(({ value, growth, title, index }) => (
          <StatisticsCard
            key={index}
            value={value}
            color="gray"
            title={title}
            icon={React.createElement(BanknotesIcon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={growth < 0 ? "text-red-500" : growth === 0 ? "text-gray-500" : "text-green-500"}>{growth > 0 ? '+' : ''}{growth}%</strong>
                &nbsp;than last month
              </Typography>
            }
          />
        ))}

      </div>
      <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            footer={
              <Typography
                variant="small"
                className="flex items-center font-normal text-blue-gray-600"
              >
                <ClockIcon strokeWidth={2} className="h-4 w-4 text-blue-gray-400" />
                &nbsp;{props.footer}
              </Typography>
            }
          />
        ))}
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Projects
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                <strong>30 done</strong> this month
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["user", "recipes", "percentage"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {recipesAmountByUsers.map(
                  ({ id, username, profileImg, recipes_count, recipes_percentage }, key) => {
                    const className = `py-3 px-5 ${
                      key === recipesAmountByUsers.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={id}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={profileImg} alt={username} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {username}
                            </Typography>
                          </div>
                        </td>

                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {recipes_count}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {recipes_percentage}%
                            </Typography>
                            <Progress
                              value={recipes_percentage}
                              variant="gradient"
                              color={recipes_percentage === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card className="border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Orders Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            
            {usersActivity && usersActivity.map(
              ({ action, author, type, formatted_date, index }, key) => (
                <div key={index} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === usersActivity.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(BellIcon, {
                      className: `!w-5 !h-5 text-blue-gray-300`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {type === "follower"
                        ? `${author} followed user '${action}'`
                        : `${author} uploaded recipe '${action}'`}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {formatted_date}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card>
      </div>
    </div>
    </Dashboard>
  );
}

export default Home;

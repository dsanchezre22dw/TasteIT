import { useLocation, Link } from "react-router-dom";
import UserButton from "@/Components/UserButton";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Breadcrumbs,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  BellIcon,
  ClockIcon,
  CreditCardIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import {
  useMaterialTailwindController,
  setOpenConfigurator,
  setOpenSidenav,
} from "../context";


import '../../../../../public/assets/css/test.css';
import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/react";

export function DashboardNavbar({ auth }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");
  
  const className = "py-3 px-5 border-b border-blue-gray-50";
  const [suggestions, setSuggestions] = useState(null);

  var http;
  const form = useForm({});

  useEffect (() => {

      document.querySelector('.searchInput').addEventListener('focus', function() {
      document.querySelector('.searchList').style.display = 'table';
    });
  
    document.querySelector('.searchInput').addEventListener('blur',  function() {
      setTimeout(function() {
        document.querySelector('.searchList').style.display = 'none';
      }, 200); // For working click
    });
  
  })

  function search(term){
    if (!http) {
      http = new XMLHttpRequest();
    }

    let url = 'http://localhost:8000/api/search/'+term;

    http.open('get', url, true);

    http.onreadystatechange = recoger;

    http.send(null);
    
  }

  function recoger(){
    if (http.readyState == 4 && http.status == 200){

      let suggestion = JSON.parse(http.responseText).suggestions;

      suggestion = suggestion.slice(0, 5);

      setSuggestions(suggestion);
      console.log(suggestions)
    }
  }

  function handleClick(suggestion) {
    console.log(1)
    window.location.href = `/dashboard/${suggestion.type}s/${suggestion.id}`;
  }

  return (
    <Navbar
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
          <Breadcrumbs
            className={`bg-transparent p-0 transition-all ${
              fixedNavbar ? "mt-1" : ""
            }`}
          >
            <Link to={`/${layout}`}>
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100"
              >
                {layout}
              </Typography>
            </Link>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {page}
            </Typography>
          </Breadcrumbs>
          <Typography variant="h6" color="blue-gray">
            {page}
          </Typography>
        </div>

        <div className="flex items-center justify-end w-full">

          <div className="mr-auto md:mr-4 w-full relative">
            <Input label="Search" className=" md:w-56 focus:w-full duration-700 searchInput" onChange={(e) => search(e.target.value)}/>
            <table className="bg-gray-100 w-full absolute z-10 hover:table searchList">
              <tbody>
                {suggestions && suggestions.map((suggestion, index) => (
                  
                    <tr key={index} className="hover:bg-gray-200" onClick={() => handleClick(suggestion)}>    
                      <td className={className}>
                        <div className="flex items-center gap-4">

                        {suggestion.img? 
                        <Avatar src={suggestion.img} size="sm" variant="rounded" /> 
                        :
                        <UserCircleIcon className="h-5 w-5 text-blue-gray-500" />}
                                                    
                          <div>
                            <Typography variant="small" color="blue-gray" className="font-semibold">
                              {suggestion.name}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">{suggestion.subtitle}</Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">{suggestion.type}</Typography>
                      </td>          
                    </tr>
                    
                ))}
              </tbody>
            </table>
          </div>

          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
          <UserButton user={auth.user} className="hidden md:flex"/>
          <IconButton
              variant="text"
              color="blue-gray"
              className="grid md:hidden"
          >
              { auth.user.profileImg? (
                  <Avatar src={auth.user.profileImg} className="h-5 w-5"  variant="circular"/>
              ):(
                  <UserCircleIcon className="h-5 w-5" />
              )}
              
          </IconButton>
          <Menu>
            <MenuHandler>
              <IconButton variant="text" color="blue-gray">
                <BellIcon className="h-5 w-5 text-blue-gray-500" />
              </IconButton>
            </MenuHandler>
            <MenuList className="w-max border-0">
              <MenuItem className="flex items-center gap-3">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/team-2.jpg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New message</strong> from Laur
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <Avatar
                  src="https://demos.creative-tim.com/material-dashboard/assets/img/small-logos/logo-spotify.svg"
                  alt="item-1"
                  size="sm"
                  variant="circular"
                />
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    <strong>New album</strong> by Travis Scott
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 1 day ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-tr from-blue-gray-800 to-blue-gray-900">
                  <CreditCardIcon className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-normal"
                  >
                    Payment successfully completed
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center gap-1 text-xs font-normal opacity-60"
                  >
                    <ClockIcon className="h-3.5 w-3.5" /> 2 days ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={() => setOpenConfigurator(dispatch, true)}
          >
            <Cog6ToothIcon className="h-5 w-5 text-blue-gray-500" />
          </IconButton>
        </div>
      </div>
    </Navbar>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;

import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "../../widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../data";



export function SavedRecipes({ auth }) {


  return (
    <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
      <div>
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Platform Settings
        </Typography>
        <div className="flex flex-col gap-12">
          {platformSettingsData.map(({ title, options }) => (
            <div key={title}>
              <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                {title}
              </Typography>
              <div className="flex flex-col gap-6">
                {options.map(({ checked, label }) => (
                  <Switch
                    key={label}
                    id={label}
                    label={label}
                    defaultChecked={checked}
                    labelProps={{
                      className: "text-sm font-normal text-blue-gray-500",
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProfileInfoCard
        title="Profile Information"
        description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
        details={{
          "first name": "Alec M. Thompson",
          mobile: "(44) 123 1234 123",
          email: "alecthompson@mail.com",
          location: "USA",
          social: (
            <div className="flex items-center gap-4">
              <i className="fa-brands fa-facebook text-blue-700" />
              <i className="fa-brands fa-twitter text-blue-400" />
              <i className="fa-brands fa-instagram text-purple-500" />
            </div>
          ),
        }}
        action={
          <Tooltip content="Edit Profile">
            <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
          </Tooltip>
        }
      />
      <div>
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Platform Settings
        </Typography>
        <ul className="flex flex-col gap-6">
          {conversationsData.map((props) => (
            <MessageCard
              key={props.name}
              {...props}
              action={
                <Button variant="text" size="sm">
                  reply
                </Button>
              }
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SavedRecipes;

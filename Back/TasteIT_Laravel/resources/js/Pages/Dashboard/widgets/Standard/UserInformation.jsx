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



export function UserInformation({ user, setActiveTab }) {


  return (
    <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-5">
      <ProfileInfoCard
        title="Profile Information"
        details={{
          "username": user.username,
          "first name": user.firstname,
          "surname": user.surname,
          email: user.email,
          "user type": user.type,
        }}
        action={
          <Tooltip content="Edit Profile">
            <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" onClick={() => setActiveTab("edit")}/>
          </Tooltip>
        }
      />
    </div>
  );
}

export default UserInformation;

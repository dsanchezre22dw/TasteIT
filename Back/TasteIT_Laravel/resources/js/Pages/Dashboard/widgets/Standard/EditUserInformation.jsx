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
import { ProfileInfoCard, MessageCard } from "../cards";
import { platformSettingsData, conversationsData, projectsData } from "../../data";
import DeleteUserForm from '../../../Profile/Partials/DeleteUserForm';
import UpdatePasswordForm from '../../../Profile/Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from '../../../Profile/Partials/UpdateProfileInformationForm';


export function EditUserInformation({ user }) {


  return (
    
      <div>
          <div className="p-4 sm:p-8 sm:rounded-lg">
              <UpdateProfileInformationForm
                  className="max-w-xl"
              />
          </div>

          <div className="p-4 sm:p-8 sm:rounded-lg">
              <UpdatePasswordForm className="max-w-xl" />
          </div>

          {user.type !== "admin" && (
            <div className="p-4 sm:p-8 sm:rounded-lg">
                <DeleteUserForm className="max-w-xl" />
            </div>
          )}
      </div>

  );
}

export default EditUserInformation;

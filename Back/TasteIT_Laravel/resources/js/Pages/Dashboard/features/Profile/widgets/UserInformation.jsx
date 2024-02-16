import React from "react";
import {
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import {
  PencilIcon,
} from "@heroicons/react/24/solid";
import { ProfileInfoCard, MessageCard } from "../../Statistics/widgets/cards";
import FollowUser from "./followUser/followUser";
import BlockUser from "./blockUser/blockUser";



export function UserInformation({ auth, user, setActiveTab, followers, following }) {
  
  return (
    <div className="grid-cols-1 mb-12 grid gap-40 px-4 lg:grid-cols-2 xl:grid-cols-3">
      <ProfileInfoCard
        title="Profile Information"
        details={{
          "username": user.username,
          "first name": user.firstname,
          "surname": user.surname,
          "email": user.email,
          "user type": user.type,
        }}
        action={
          <Tooltip content="Edit Profile">
            <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" onClick={() => setActiveTab("edit")}/>
          </Tooltip>
        }
      />
      { auth.user.type !== "admin" && (
        <>
          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Followers
            </Typography>
            <ul className="flex flex-col gap-6">
              {followers
              .filter(follower => !follower.pivot.blocked)
              .map((follower) => (
                <MessageCard
                  key={follower.id}
                  {...follower}
                  action={
                    <BlockUser blocked={follower.pivot.blocked} follower_id={follower.id} width={24}/>
                  }
                />
              ))}
            </ul>
          </div>

          <div>
            <Typography variant="h6" color="blue-gray" className="mb-3">
              Following
            </Typography>
            <ul className="flex flex-col gap-6">
              {following.map((user) => (
                <MessageCard
                  key={user.id}
                  {...user}
                  action={
                    <FollowUser followingIds={following.map(following => following.id)} following_id={user.id} width={24}/>
                  }
                />
              ))}
            </ul>
          </div>
        </>
      )}
    </div>

    
  );
}

export default UserInformation;

import React from "react";
import {
  Typography,
} from "@material-tailwind/react";
import { MessageCard } from "../../Statistics/widgets/cards";
import BlockUser from "./blockUser/blockUser";


export function BlockedUsers({followers}) {
  
  return (
    <div className="grid-cols-1 mb-20 grid gap-40 px-4 lg:grid-cols-2 xl:grid-cols-3">

      <div>
        <Typography variant="h6" color="blue-gray" className="mb-3">
          Blocked users
        </Typography>
        <ul className="flex flex-col gap-6">
          {followers
          .filter(follower => follower.pivot.blocked)
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

    </div>

    
  );
}

export default BlockedUsers;

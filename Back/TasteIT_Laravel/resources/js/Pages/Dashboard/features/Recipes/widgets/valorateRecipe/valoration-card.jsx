import React from 'react';
import {
  Typography,
  Avatar,
} from '@material-tailwind/react';

import StarIcon from '@/Components/StarIcon';

function ValorationCard({ user }) {


  return (
    <div className="border rounded-lg bg-red-100 p-5">

      <div className="flex items-center mb-2 gap-2">
        <Avatar src={user.profileImg} size="sm" variant="rounded" />
        <Typography
          variant="h6"
        >
          {user.username}
        </Typography>
      </div>

      <div className='flex gap-1'>
        <StarIcon count={1} />
        {user.pivot.valoration}
        
      </div>

      <div>
        <Typography
          variant="h4"
        >
          {user.pivot.title}
        </Typography>
      </div>

      <div>
        {user.pivot.description}
      </div>
      
    </div>
  );
}

export default ValorationCard;

import React from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  Avatar,
} from '@material-tailwind/react';

import {
    HomeIcon,
    ChatBubbleLeftEllipsisIcon,
    Cog6ToothIcon,
    PencilIcon,
    TrashIcon
  } from "@heroicons/react/24/solid";
import ClockIcon from '@/Components/ClockIcon';
import StarIcon from '@/Components/StarIcon';

function ValorationCard({ user }) {


  return (
    <div className="border rounded-lg bg-red-100 p-5">

      <div className="flex items-center mb-2 gap-2">
        <Avatar src="/img/team-2.jpeg" size="sm" variant="rounded" />
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

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

function BlockUser({blocked, follower_id, width}) {

  const { data, setData, post, processing, errors, reset, recentlySuccessful} = useForm({
    blocked: blocked,
  });

  const save = (event) => {
    event.preventDefault();
    setData("blocked", !data.blocked);
    post(`/dashboard/users/block/${follower_id}`);
  };


  return (
    <button type="button" className="flex items-center" onClick={save}>
      <img
        src={data.blocked ? "/assets/img/unblock.png" : "/assets/img/block.png"}
        alt="Block/unblock"
        width={width}
      />
    </button>
  );
}

export default BlockUser;

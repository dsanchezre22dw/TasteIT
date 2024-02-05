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

function FollowUser({followingIds, following_id, width}) {

  const { data, setData, post, processing, errors, reset, recentlySuccessful} = useForm({
    following: followingIds.includes(following_id),
  });

  const save = (event) => {
    event.preventDefault();
    setData("following", !data.following);
    post(`/dashboard/users/follow/${following_id}`);
  };


  return (
    <button type="button" className="flex items-center" onClick={save}>
      <img
        src={data.following ? "/assets/img/unfollow.png" : "/assets/img/users.png"}
        alt="Follow/unfollow"
        width={width}
      />
    </button>
  );
}

export default FollowUser;

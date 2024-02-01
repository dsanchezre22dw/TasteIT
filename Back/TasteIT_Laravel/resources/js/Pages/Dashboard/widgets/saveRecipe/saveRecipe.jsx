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

function SaveRecipe({ data, setData, post, width}) {

  const save = (event) => {
    event.preventDefault();
    setData("saved", !data.saved);
    post('/dashboard/recipes/save');
  };


  return (
    <button type="button" className="flex items-center" onClick={save}>
      <img
        src={data.saved ? "/assets/img/saved.png" : "/assets/img/unsaved.png"}
        alt="Guardar/No guardar"
        width={width}
      />
    </button>
  );
}

export default SaveRecipe;
// UserTableRow.js
import React, { useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import { Avatar, Typography, Chip } from "@material-tailwind/react";
import AnswerModal from "@/Components/AnswerModal";

const UserTableRow = ({ user, num}) => {

  const { data, setData, put, processing, errors, reset } = useForm({});

  const form = useForm({});


  const handleStatus = (userId) => {
    put(route('users.status', userId));
    
  };

  var message = `Are you sure you want to delete user '${user.username}'?`;
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (userId) => {
    form.delete(`/dashboard/users/delete/${userId}`); 
  };


  var className = "py-3 px-5 border-t border-blue-gray-50";
  if (num%2==0) {
    className = "py-3 px-5 border-t border-blue-gray-50 bg-[#ff000005]";
  }

  return (
    <tr key={user.username}>
      <td className={className}>
        <div className="flex items-center gap-4">
          <Avatar src={user.profileImg} alt={user.username} size="sm" variant="rounded" />
          <div>
            <Link href={`/dashboard/users/${user.id}`}>
              <Typography variant="small" color="blue-gray" className="font-semibold">
                {user.username}
              </Typography>
            </Link>
            <Typography className="text-xs font-normal text-blue-gray-500">{user.email}</Typography>
          </div>
        </div>
      </td>
      <td className={className}>
        <Typography className="text-xs font-semibold text-blue-gray-600">{user.type}</Typography>
      </td>
      <td className={className}>
        <button onClick={() => handleStatus(user.id)}>
          <Chip
            variant="gradient"
            color={user.isSoftDeleted ? "red" : (user.enabled ? "green" : "blue-gray")}
            value={user.isSoftDeleted ? "deleted" : (user.enabled ? "enabled" : "disabled")}
            className="py-0.5 px-2 text-[11px] font-medium w-fit"
          />
        </button>
      </td>
      <td className={className}>
        <Link href={`/dashboard/users/edit/${user.id}`}>
          <i className="material-icons settings">&#xE8B8;</i>
        </Link>

      </td>

      <td className={className}>
        { user.type !== "admin" && (
          <>
          <button onClick={() => setShowModal(true)}>
            <span><i className="material-icons delete">&#xE5C9;</i></span>
          </button>
          <AnswerModal
              show={showModal}
              onClose={() => setShowModal(false)}
              onConfirm={() => handleDelete(user.id)}
              message={message}
          />
          </>
        )}
      </td>

    </tr>
  );
};

export default UserTableRow;

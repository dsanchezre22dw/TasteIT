// UserTableRow.js
import React from "react";
import { Link } from "@inertiajs/react";
import { Avatar, Typography, Chip } from "@material-tailwind/react";

const UserTableRow = ({ id, username, email, type, enabled, handleDelete, num}) => {
  var className = "py-3 px-5 border-t border-blue-gray-50";
  if (num%2==0) {
    className = "py-3 px-5 border-t border-blue-gray-50 bg-[#ff000005]";
  }

  return (
    <tr key={username}>
      <td className={className}>
        <div className="flex items-center gap-4">
          <Avatar src="/img/team-2.jpeg" alt={username} size="sm" variant="rounded" />
          <div>
            <Link href={`/dashboard/users/${id}`}>
              <Typography variant="small" color="blue-gray" className="font-semibold">
                {username}
              </Typography>
            </Link>
            <Typography className="text-xs font-normal text-blue-gray-500">{email}</Typography>
          </div>
        </div>
      </td>
      <td className={className}>
        <Typography className="text-xs font-semibold text-blue-gray-600">{type}</Typography>
      </td>
      <td className={className}>
        <Chip
          variant="gradient"
          color={enabled ? "green" : "blue-gray"}
          value={enabled ? "enabled" : "disabled"}
          className="py-0.5 px-2 text-[11px] font-medium w-fit"
        />
      </td>
      <td className={className}>
        <Link href={`/dashboard/users/edit/${id}`}>
          <i className="material-icons settings">&#xE8B8;</i>
        </Link>
      </td>
      <td className={className}>
        <button type="button" onClick={() => handleDelete(id)}>
          <span><i className="material-icons delete">&#xE5C9;</i></span>
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../../data";
import '../../../../../../css/users.css';
import { Head, useForm } from '@inertiajs/react';
import { Link, NavLink } from "react-router-dom";
import { Inertia } from '@inertiajs/inertia-react';
import UserTableRow from "@/Pages/Dashboard/widgets/seeUsers/usertablerow";

export function UsersIndex({ users }) {  
  const { data, setData, get, processing, errors, reset } = useForm({});

  const form = useForm({});

  const handleDelete = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      form.delete(`/dashboard/users/delete/${userId}`);
    }
  };

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6 flex items-center justify-between">
          <Typography variant="h6" color="white">
            Users Table
          </Typography>
        </CardHeader>


        <div className="ml-auto mr-10">
          <Link to={'/dashboard/users/add'}>
            <Button variant="gradient">Add User</Button>
          </Link>
        </div>

  
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["user", "type", "enabled"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
            {users.map((user, key) => (
              <UserTableRow key={key} {...user} handleDelete={handleDelete} />
            ))}

            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default UsersIndex;

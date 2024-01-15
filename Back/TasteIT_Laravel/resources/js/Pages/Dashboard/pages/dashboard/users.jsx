import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../data";
import '../../../../../css/users.css';

export function Users({ users }) {

  const submit = (e, id) => {
    e.preventDefault();
    get(`/dashboard/users/edit/${id}`);
    reset();
  };


  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Users Table
          </Typography>
        </CardHeader>
    

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
              {users.map(
                ({ id, username, email, type, enabled }, key) => {
                  const className = `py-3 px-5 ${
                    key === users.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={username}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar src="/img/team-2.jpeg" alt={username} size="sm" variant="rounded" />
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {username}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {type}
                        </Typography>
  
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
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <i className="material-icons settings">&#xE8B8;</i>
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          <form onSubmit={(e) => submit(e, id)} method="get">
                              <button type="submit" ><span><i className="material-icons delete">&#xE5C9;</i></span></button>
                          </form>
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}



              
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default Users;

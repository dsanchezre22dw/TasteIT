import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button
} from "@material-tailwind/react";
import '../../../../../css/users.css';
import { Link } from "@inertiajs/react";
import Dashboard from '@/Layouts/DashboardLayout';
import UserTableRow from "@/Pages/Dashboard/features/Users/widgets/seeUsers/usertablerow";
import ModalAction from "@/Components/ModalAction";

export function UsersIndex({ auth, users, successMessage }) {  

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
      if (successMessage !== "") {
        setShowModal(true);
      }
  }, [successMessage]);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Dashboard auth={auth}>
      <div className="mt-12 mb-8 flex flex-col gap-12">
        <Card>
          <CardHeader variant="gradient" color="red" className="mb-8 p-6 flex items-center justify-between">
            <Typography variant="h6" color="white">
              Users Table
            </Typography>
          </CardHeader>


          <div className="ml-auto mr-10">
            <Link href={'/dashboard/users/create'}>
              <Button variant="gradient" color="red">Add User</Button>
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
                <UserTableRow key={key} user={user} num={key}/>
              ))}

              </tbody>
            </table>

            <ModalAction show={showModal} onClose={closeModal} maxWidth="2xl" closeable={true}>
              <div className="p-4">
                <h1 className="text-xl font-bold mb-4">{successMessage['type']}</h1>
                <p>{successMessage['message']}</p>
              </div>
            </ModalAction>

          </CardBody>
        </Card>
      </div>
    </Dashboard>
  );
}

export default UsersIndex;

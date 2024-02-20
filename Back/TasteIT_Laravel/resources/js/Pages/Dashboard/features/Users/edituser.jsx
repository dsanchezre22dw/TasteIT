import {
    Card,
    CardHeader,
    CardBody,
    Typography,
  } from "@material-tailwind/react";


import '../../../../../css/password.css'
import '../../../../../css/toggle.css'
import UpdateUserForm from "@/Pages/Profile/UpdateUserForm";
import Dashboard from '@/Layouts/DashboardLayout';



export default function UsersEdit({ auth, user }) {

    return (
        <Dashboard auth={auth}>
            <div className="mt-12 mb-8 flex flex-col gap-12">

                <Card>
                    <CardHeader variant="gradient" color="red" className="mb-8 p-6">
                        <Typography variant="h6" color="white">
                            Edit User<br></br>
                        </Typography>
                    </CardHeader>

                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                        <UpdateUserForm user={user}/>
                    </CardBody>
                </Card>
            </div>
        </Dashboard>

    );
}

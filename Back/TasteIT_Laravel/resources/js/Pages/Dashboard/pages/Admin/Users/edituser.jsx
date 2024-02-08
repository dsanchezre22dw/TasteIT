import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
    Chip,
    Tooltip,
    Progress,
    Switch
  } from "@material-tailwind/react";

import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import SelectInput from "@/Components/SelectInput";
import ToggleSwitch from "@/Components/ToggleSwitch";
import { Head, Link, useForm } from '@inertiajs/react';
import { useParams } from 'react-router-dom';
import '../../../../../../css/password.css'
import '../../../../../../css/toggle.css'
import UpdatePasswordForm from "@/Pages/Profile/Partials/UpdatePasswordForm";
import UpdateUserForm from "@/Pages/Profile/Partials/UpdateUserForm";
import { setupPasswordValidation, validateFirstName, validateSurname, validatePassword } from '../../../../../../../public/assets/js/validationUtils'
import { Transition } from '@headlessui/react';
import { Dashboard } from "@/Pages/Dashboard/layouts";



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
                        <UpdatePasswordForm className="max-w-xl" />
                    </CardBody>
                </Card>
            </div>
        </Dashboard>

    );
}

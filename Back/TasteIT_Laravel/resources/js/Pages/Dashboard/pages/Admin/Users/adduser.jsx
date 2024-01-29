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
import { setupPasswordValidation, validateFirstName, validateSurname, validatePassword } from '../../../../../../../public/assets/js/validationUtils'


export default function UsersAdd() {

    const { userId } = useParams();

    const options = [
        { value: 'admin', label: 'Admin' },
        { value: 'standard', label: 'Standard' },
        { value: 'chef', label: 'Chef' },
    ];

    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
        usertype: options[0].value,
        enabled: false,
    });

    const [errorMessages, setErrorMessages] = useState({
        firstname: '',
        surname: '',
        password: '',
    });

    useEffect(() => {
        setupPasswordValidation();

        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);


    const submit = (e) => {
        e.preventDefault();

        var errors_exist = "";

        errors_exist += validateFirstName(data, setErrorMessages);
        errors_exist += validateSurname(data, setErrorMessages);
        errors_exist += validatePassword(data, setErrorMessages);

        if (errors_exist === ""){
            post('/dashboard/users/add');
        }

    };


    return (

        <div className="mt-12 mb-8 flex flex-col gap-12">

            <Card>

                <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                    <Typography variant="h6" color="white">
                        Add User
                    </Typography>
                </CardHeader>

                <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
        

                    <div className="mt-12 mb-8 flex flex-col gap-12 w-[50%] mx-auto">

                        <form name="form_register" onSubmit={submit}>
                            <div style={{ display: 'flex' }}>

                                <div style={{ flex: 1}}>
                                    <InputLabel htmlFor="firstname" value="First name*" />

                                    <TextInput
                                        id="firstname"
                                        name="firstname"
                                        value={data.firstname}
                                        className="mt-1 block w-[100%]"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('firstname', e.target.value)}
                                        required
                                        maxLength='50'
                                    />

                                    <InputError message={errorMessages.firstname} className="mt-2" />
                                    <InputError message={errors.firstname} className="mt-2" />
                                </div>

                                <div style={{ flex: 1, marginLeft: '10px'}}>
                                    <InputLabel htmlFor="surname" value="Surname" />

                                    <TextInput
                                        id="surname"
                                        name="surname"
                                        value={data.surname}
                                        className="mt-1 block w-[100%]"
                                        autoComplete="name"
                                        onChange={(e) => setData('surname', e.target.value)}
                                        maxLength='100'
                                    />

                                    <InputError message={errorMessages.surname} className="mt-2" />          
                                    <InputError message={errors.surname} className="mt-2" />  
                                </div>

                            </div>

                            <div className="mt-4" style={{ display: 'flex'}}>

                                <div style={{ flex: 2}}>
                                    <InputLabel htmlFor="username" value="Username*" />

                                    <TextInput
                                        id="username"
                                        name="username"
                                        value={data.username}
                                        className="mt-1 block w-full"
                                        autoComplete="username"
                                        onChange={(e) => setData('username', e.target.value)}
                                        required
                                        maxLength='50'
                                    />

                                    <InputError message={errors.username} className="mt-2" />
                                </div>

                                <div style={{ flex: 1, marginLeft: '10px'}}>
                                    <InputLabel htmlFor="usertype" value="User type*" />

                                    <SelectInput 
                                        name="usertype" 
                                        id="usertype" 
                                        className="mt-1 block w-full"
                                        options={options} 
                                        onChange={(e) => setData('usertype', e.target.value)}
                                    />

                                    <InputError message={errors.usertype} className="mt-2" />
                                </div>

                                <div style={{ flex: 1, marginLeft: '10px'}}>
                                    <InputLabel htmlFor="enabled" value="Enabled*" />

                                    <ToggleSwitch 
                                        id="enabled"
                                        name="enabled"
                                        className="mt-2" 
                                        onChange={(e) => setData('enabled', e.target.checked)}
                                        defaultChecked = {data.enabled ? true : false}
                                    />

                                    <InputError message={errors.enabled} className="mt-2" />
                                </div>


                            </div>

                            <div className="mt-4">

                                <InputLabel htmlFor="email" value="Email*" />

                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="email"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required
                                    maxLength='100'
                                />

                                <InputError message={errors.email} className="mt-2" />

                            </div>


                            <div className="mt-4">
                                <InputLabel htmlFor="password" value="Password*" />

                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                    required
                                />

                                <InputError message={errorMessages.password} className="mt-2" />
                                <InputError message={errors.password} className="mt-2" />
                            </div>

                            <div id="message">
                                <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                                <p id="capital" className="invalid">A <b>capital uppercase</b> letter</p>
                                <p id="number" className="invalid">A <b>number</b></p>
                                <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="password_confirmation" value="Confirm Password*" />

                                <TextInput
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 block w-full"
                                    autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required
                                />

                                <InputError message={errors.password_confirmation} className="mt-2" />
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <PrimaryButton className="ms-4" disabled={processing}>
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>

                    </div>
                </CardBody>
            </Card>
        </div>


    );
}

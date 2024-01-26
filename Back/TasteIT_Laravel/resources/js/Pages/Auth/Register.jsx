import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { setupPasswordValidation, validateFirstName, validateSurname, validatePassword } from '../../../../public/assets/js/validationUtils'

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        surname: '',
        username: '',
        email: '',
        password: '',
        password_confirmation: '',
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
            post(route('register'));
        }

    };

    return (

        <section className="h-full"
            style={{
                background: 'linear-gradient(90deg, rgb(204, 152, 152), rgba(121,9,9,1))',
            }}
        >
        <div className="container h-full p-10">
            <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                    {/* <!-- Left column container--> */}
                    <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                        {/* <!--Logo--> */}
                        <div className="text-center">
                        <img
                            className="mx-auto w-48 mb-10"
                            src="/assets/img/logo.png"
                            alt="logo"
                        />

                        </div>

                        <form name="form_register" onSubmit={submit}>
                            <div>
                                <InputLabel htmlFor="firstname" value="First name*" />

                                <TextInput
                                    id="firstname"
                                    name="firstname"
                                    value={data.firstname}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('firstname', e.target.value)}
                                    required
                                    maxLength='50'
                                />

                                <InputError message={errorMessages.firstname} className="mt-2" />
                                <InputError message={errors.firstname} className="mt-2" />

                            </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="surname" value="Surname" />

                                <TextInput
                                    id="surname"
                                    name="surname"
                                    value={data.surname}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    onChange={(e) => setData('surname', e.target.value)}
                                    maxLength='100'
                                />

                                <InputError message={errorMessages.surname} className="mt-2" />          
                                <InputError message={errors.surname} className="mt-2" />  
                                
                            </div>

                            <div className="mt-4">
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
                                <Link
                                    href={route('login')}
                                    className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                                >
                                    Already registered?
                                </Link>

                                <PrimaryButton className="ms-4" disabled={processing}>
                                    Register
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                    </div>

                    {/* <!-- Right column container with background and description--> */}
                    <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                        backgroundImage:
                        `url("/assets/img/background_register.jpg")`,
                        backgroundSize: 'cover',
                    }}
                    >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                        <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                        </h4>
                        <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>



    );
}

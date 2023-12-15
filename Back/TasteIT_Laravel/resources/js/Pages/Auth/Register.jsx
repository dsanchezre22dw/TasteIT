import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

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
        // Otros campos que necesiten validación
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        var errors_exist = "";

        errors_exist += validateFirstName();
        errors_exist += validateSurname();

        if (errors_exist === ""){
            post(route('register'));
        }

    };

    function validateFirstName(){
        if (!(allLetter(data.firstname))){
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                firstname: 'Field firstname can only contain letters',
            }));

            return "yes";

        }else{

            console.log('hola1')
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                firstname: '',
            }));

            return "";
        }
    }

    function validateSurname(){
        if (!(allLetter(data.surname))){
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                surname: 'Field surname can only contain letters',
            }));

            return "yes";

        }else{

            console.log('hola2')
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                surname: '',
            }));

            return "";
        }
    }


    function allLetter(inputtxt){

        var letters = /^[A-Za-z]+$/;

        if (inputtxt.match(letters)){
            return true;
        }else{
            return false;
        }
    }

    return (
        <GuestLayout>
            <Head title="Register" />

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

                    <InputError message={errorMessages.firstname} className="mt-2" />          
                    
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
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
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
        </GuestLayout>
    );
}

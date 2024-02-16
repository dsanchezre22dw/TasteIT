import { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import SelectInput from "@/Components/SelectInput";
import ToggleSwitch from "@/Components/ToggleSwitch";
import { validateFirstName, validateSurname } from '../../../../public/assets/js/validationUtils'


export default function UpdateUserForm({ className = '', user}) {

    const options = [
        { value: 'admin', label: 'Admin' },
        { value: 'standard', label: 'Standard' },
        { value: 'chef', label: 'Chef' },
    ];

    const { data, setData, post, processing, errors, reset, recentlySuccessful} = useForm({
        id: user.id,
        firstname: user.firstname,
        surname: user.surname,
        username: user.username,
        email: user.email,
        usertype: user.type,
        enabled: user.enabled,
    });

    const [errorMessages, setErrorMessages] = useState({
        firstname: '',
        surname: '',
        // Otros campos que necesiten validación
    });

    const submit = (e) => {
        e.preventDefault();
        var errors_exist = "";

        errors_exist += validateFirstName(data, setErrorMessages);
        errors_exist += validateSurname(data, setErrorMessages);

        if (errors_exist === ""){
            post(`/dashboard/users/edit/${data.id}`);
        }

    };

    return (
        <div className="mt-12 mb-8 flex flex-col gap-12 w-[50%] mx-auto">

        <form name="form_register" onSubmit={submit} className="space-y-4">
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

            <div style={{ display: 'flex'}}>

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
                        select={user.type}
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
                        defaultChecked={user.enabled}
                    />

                    <InputError message={errors.enabled} className="mt-2" />
                </div>


            </div>

            <div>

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


            <div className="flex items-center gap-4">
                <PrimaryButton disabled={processing}>Save</PrimaryButton>

                <Transition
                    show={recentlySuccessful}
                    enter="transition ease-in-out"
                    enterFrom="opacity-0"
                    leave="transition ease-in-out"
                    leaveTo="opacity-0"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                </Transition>
            </div>

        </form>

    </div>
    );
}

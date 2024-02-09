import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
  } from "@material-tailwind/react";
  import InputError from '@/Components/InputError';
  import InputLabel from '@/Components/InputLabel';
  import PrimaryButton from '@/Components/PrimaryButton';
  import TextInput from '@/Components/TextInput';
  import { useForm } from '@inertiajs/react';
  import { Transition } from '@headlessui/react';
  import SelectInput from "@/Components/SelectInput";
  import ToggleSwitch from "@/Components/ToggleSwitch";
  import { useState } from "react";
  import { Dashboard } from "@/Pages/Dashboard/layouts";

export default function IngredientsEdit({auth, ingredient}) {

    const { data, setData, post, processing, errors, reset, recentlySuccessful} = useForm({
        name: ingredient.name,
        enabled: ingredient.enabled,
    });

    const [errorMessages, setErrorMessages] = useState({
        name: '',
        enabled: '',
    });

    const submit = (e) => {
        e.preventDefault();
        var errors_exist = "";

        if (errors_exist === ""){
            post(`/dashboard/ingredients/edit/${ingredient.id}`);
        }
    };

    return (
        <Dashboard auth={auth}>
            <div className="mt-12 mb-8 flex flex-col gap-12">

                <Card>

                    <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
                        <Typography variant="h6" color="white">
                            Edit Ingredient<br></br>
                        </Typography>
                    </CardHeader>

                    <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
                        <div className="mt-12 mb-8 flex flex-col gap-12 w-[50%] mx-auto">

                        <form name="form_register" onSubmit={submit} className="space-y-4">
                            <div style={{ display: 'flex' }}>

                                <div style={{ flex: 1}}>
                                    <InputLabel htmlFor="name" value="Ingredient Name*" />
                                    <TextInput
                                        id="name"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-[100%]"
                                        autoComplete="name"
                                        isFocused={true}
                                        onChange={(e) => setData('name', e.target.value)}
                                        required
                                        maxLength='50'
                                    />

                                    <InputError message={errorMessages.name} className="mt-2" />
                                    <InputError message={errors.name} className="mt-2" />

                                </div>
                                <div style={{ flex: 1, marginLeft: '10px'}}>
                                    <InputLabel htmlFor="enabled" value="Enabled*" />

                                    <ToggleSwitch 
                                        id="enabled"
                                        name="enabled"
                                        className="mt-2" 
                                        onChange={(e) => setData('enabled', e.target.checked)}
                                        defaultChecked={ingredient.enabled}
                                    />

                                    <InputError message={errors.enabled} className="mt-2" />
                                </div>

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
                    </CardBody>
                </Card>
            </div>
        </Dashboard>
    )
}
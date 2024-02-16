import React, { useEffect, useState } from "react";
import ImageUploader from "@/Components/ImageUploader";
import { useForm } from "@inertiajs/react";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';
import { validateIngredientDifficulty, validateImage } from "../../../../../../../public/assets/js/validationUtils";
import ToggleSwitch from "@/Components/ToggleSwitch";
import "../../../../../../css/toggle.css"

export default function IngredientForm( {auth, recipe="", recipe_types} ) {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        title: recipe.title,
        image: null,
    });

    const [errorMessages, setErrorMessages] = useState({
        image: '',
    });


    const submit = (e) => {
        e.preventDefault();

        var errors_exist = "";
        errors_exist += validateImage(data, setErrorMessages);

        if (errors_exist === ""){
            if (recipe === "") {
                post('/dashboard/recipes/store');
            } else {
                post(`/dashboard/recipes/update/${recipe.id}`);
            }
        }
        
    };

    return (
        <div>

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
    )
}
import React, { useEffect, useState } from "react";
import ImageUploader from "@/Components/ImageUploader";
import { useForm } from "@inertiajs/react";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { validateIngredientName, validateImage } from "../../../../../../../public/assets/js/validationUtils";
import "../../../../../../css/toggle.css"

export default function IngredientForm( {ingredient=""} ) {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        name: ingredient.name,
        image: null,
    });

    const [errorMessages, setErrorMessages] = useState({
        name: '',
        image: '',
    });


    const submit = (e) => {
        e.preventDefault();

        var errors_exist = "";
        errors_exist += validateIngredientName(data, setErrorMessages);

        if (ingredient === "") {
            errors_exist += validateImage(data, setErrorMessages);
        }
        
        if (errors_exist === ""){
            if (ingredient === "") {
                post('/dashboard/ingredients/store');
            } else {
                post(`/dashboard/ingredients/update/${ingredient.id}`);
            }
        }
        
    };

    return (
        <div>

            <form name="ingredientForm" onSubmit={submit} className="space-y-4">
                <div className="flex flex-wrap">

                    <ImageUploader data={data} setData={setData} errors={errors} errorMessages={errorMessages} setErrorMessages={setErrorMessages} image={ingredient.image}/>

                    <span className="m-6 ml-16">

                        <div  className='mt-3'>
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

                    </span>

                </div>

                <div className="flex items-center gap-4 ml-5">
                    <PrimaryButton disabled={processing}>Create</PrimaryButton>
                </div>

            </form>

        </div>
    )
}
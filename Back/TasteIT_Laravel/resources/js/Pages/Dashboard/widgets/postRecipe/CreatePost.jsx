import React, { useEffect, useState } from "react";
import ImageUploader from "./ImageUploader";
import AddIngredients from "./AddIngredients";
import { useForm } from "@inertiajs/react";
import { Button } from "@material-tailwind/react";
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import PrimaryButton from '@/Components/PrimaryButton';
import { Transition } from '@headlessui/react';

export default function CreatePost( {auth, recipe=""} ) {
    const { data, setData, post, processing, errors, reset, recentlySuccessful } = useForm({
        title: recipe.title,
        duration_mins: recipe.duration_mins,
        difficulty: recipe.difficulty,
        amount: {},
        description: recipe.description,
        image: null,
        user_id: auth.user.id
    });


    const submit = (e) => {
        e.preventDefault();

        post('/dashboard/recipes/store');
    };

    return (
        <div>
            <form onSubmit={submit} name="createPost" encType="multipart/form-data">
                <div className="flex flex-wrap">
                    <ImageUploader data={data} setData={setData} errors={errors}/>

                    <span className="m-6">

                        <div>
                            <InputLabel htmlFor="title" value="Title*" />
                            <TextInput
                                id="title"
                                name="title"
                                value={data.title}
                                className="mt-1 block w-[100%]"
                                autoComplete="title"
                                isFocused={true}
                                onChange={(e) => setData('title', e.target.value)}
                                required
                                maxLength='255'
                            />

                            <InputError message={errors.title} className="mt-2" />

                        </div>

                        <div>
                            <InputLabel htmlFor="duration_mins" value="Prepare Time*" />

                            <TextInput
                                id="duration_mins"
                                name="duration_mins"
                                type='number'
                                value={data.duration_mins}
                                className="mt-1 block w-[100%]"
                                autoComplete="duration_mins"
                                onChange={(e) => setData('duration_mins', e.target.value)}
                                required
                            />

                            <InputError message={errors.duration_mins} className="mt-2" />

                        </div>

                        <div>
                            <InputLabel htmlFor="description" value="Difficulty*" />
                            <select name="difficulty" defaultValue={data.difficulty} id="" className="mt-1 block w-[100%] border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm" 
                            onChange={(e) => setData('difficulty', e.target.value)} required>
                                <option hidden value="selected">Select a Difficulty</option>
                                <option value="beginner">Beginner</option>
                                <option value="medium">Medium</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>

                        <AddIngredients setData={setData} data={data} errors={errors}/>

                    </span>
                </div>

                <div className="m-6">
                    <InputLabel htmlFor="description" value="How to Prepare*" />

                    <textarea name="description" id="" className="mt-1 block w-[100%] border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"  
                    rows="10" placeholder="How to prepare the recipe..." defaultValue={data.description} onChange={(e) => setData('description', e.target.value)} required></textarea>
            
                    <InputError message={errors.description} className="mt-2" />

                </div>

                <div className="flex items-center gap-4 ml-5">
                    <PrimaryButton disabled={processing}>Create</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Created.</p>
                    </Transition>
                </div>

            </form>
        </div>
    )
}
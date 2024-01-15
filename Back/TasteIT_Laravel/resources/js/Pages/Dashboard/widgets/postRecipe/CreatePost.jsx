import React, { useEffect } from "react";
import ImageUploader from "./ImageUploader";
import { useForm } from "@inertiajs/react";

export default function CreatePost() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        duration_mins: '',
        difficulty: '',
        ingredients: '',
        description: '',
        image: '',
    });


    const submit = (e) => {
        e.preventDefault();

        post('/dashboard/postrecipe');
        reset();
      };
    return (
        <div>
            <form onSubmit={submit}>
                <div className="flex flex-wrap">
                    <ImageUploader data={data} setData={setData}/>

                    <span>

                        <div className="flex m-6">
                            <p className="w-[133px]">Title:</p>
                            <input type="text" className="w-[250px]" name="title" placeholder="Title" defaultValue={data.title} onChange={(e) => setData('title', e.target.value)}/>
                        </div>

                        <div className="flex  m-6">
                            <p className="w-[133px]">description Time:</p>
                            <input type="number" className="w-[250px]" name="duration_mins" placeholder="Minutes" defaultValue={data.duration_mins}  onChange={(e) => setData('duration_mins', e.target.value)}/>
                        </div>

                        <div className="flex m-6 flex-wrap">
                            <p className="w-[133px]">Difficulty:</p>
                            <select name="difficulty" defaultValue={data.difficulty} id="" className="w-[250px]" onChange={(e) => setData('difficulty', e.target.value)}>
                                <option hidden value="selected">Select a Difficulty</option>
                                <option value="beginner">Beginner</option>
                                <option value="medium">Medium</option>
                                <option value="expert">Expert</option>
                            </select>
                        </div>

                        <div className="flex  m-6">
                            <p className="w-[133px]">Ingredients:</p>
                            <input type="text" className="w-[250px]" name="ingredients" placeholder="Ingredients" />
                        </div>

                    </span>
                </div>

                <div className="m-6">
                    <p className="w-[133px] mb-3">How to Prepare:</p>
                    <textarea name="description" id="" className="w-full" rows="10" placeholder="How to prepare the recipe..." defaultValue={data.description} onChange={(e) => setData('description', e.target.value)}></textarea>
                </div>

                <button type="submit">Create</button>
            </form>
        </div>
    )
}
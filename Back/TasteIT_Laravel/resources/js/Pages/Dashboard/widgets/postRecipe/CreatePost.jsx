import React, { useEffect } from "react";
import ImageUploader from "./ImageUploader";

export default function CreatePost() {
    
    return (
        <div>
            <form action="" method="post" className="">
                <div className="flex">
                    <ImageUploader />

                    <span>

                        <div className="flex m-6">
                            <p className="w-[133px]">Title:</p>
                            <input type="text" className="w-[250px]" name="title" placeholder="Title" />
                        </div>

                        <div className="flex  m-6">
                            <p className="w-[133px]">Prepare Time:</p>
                            <input type="text" className="w-[250px]" name="prepareTime" placeholder="Prepare Time" />
                        </div>

                        <div className="flex  m-6">
                            <p className="w-[133px]">Difficulty:</p>
                            <select name="difficulty" defaultValue="selected" id="" className="w-[250px]">
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
                        <p className="w-[133px] mb-3">How to prepare:</p>
                        <textarea name="prepare" id="" className="w-full" rows="10" placeholder="How to prepare the recipe..."></textarea>
                    </div>
            </form>
        </div>
    )
}
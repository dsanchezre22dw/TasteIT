import React, { useEffect } from "react";
import InputError from '@/Components/InputError';

export default function ImageUploader({data, setData, errors, errorMessages, setErrorMessages, image, width=500, className=''}) {

    var imageUploader;
    var uploadInput;
    var imagePreview;

    var uploadText;
    var uploadIcon;

    useEffect (() => {
        imageUploader = document.getElementById('image-uploader');
        uploadInput = document.getElementById('upload-input');
        imagePreview = document.getElementById('image-preview');

        uploadText = document.getElementById('upload-text');
        uploadIcon = document.getElementById('upload-icon');

        imageUploader.addEventListener('click', () => uploadInput.click());
        uploadInput.addEventListener('change', handleFileSelect);
        imagePreview.addEventListener('click', () => uploadInput.click());

    },[]) 
    useEffect( () => {
        if (image) {
            console.log(image);
            handleFileSelected(image);
        }
        
    },[])

    function handleFileSelect(event) {
        const fileList = event.target.files;

        if (fileList.length > 0) {
            const file = fileList[0];
            const imageUrl = URL.createObjectURL(file);

            // Aquí puedes realizar acciones con el archivo seleccionado, como subirlo a un servidor.
            const formData = new FormData();
            formData.append('file', file);

            // Muestra la imagen seleccionada
            imagePreview.src = imageUrl;
            imagePreview.style.display = 'block';

            // Oculta el icono, el texto y el input
            uploadIcon.style.display = 'none';
            uploadText.style.display = 'none';
            uploadInput.style.display = 'none';

            setData(prevData => ({
                ...prevData,
                image: file
            }));
     
            setErrorMessages((prevErrors) => ({
                ...prevErrors,
                image: '',
            }));
        }
    }

    function handleFileSelected(filePath) {
        // Verifica que la ruta del archivo no esté vacía
        if (filePath.trim() !== '') {

            // Muestra la imagen seleccionada
            imagePreview.src = filePath;
            imagePreview.style.display = 'block';
    
            // Oculta el icono, el texto y el input
            uploadIcon.style.display = 'none';
            uploadText.style.display = 'none';
            uploadInput.style.display = 'none';

        }
    }

    
    return (
        <span id="image-uploader" className={`m-6 w-96 md:w-[${width}px] h-96 md:h-[${width}px] ${className}`}>

            <input type="file" id="upload-input" accept="image/*" name="image" defaultValue={data.image}/>
            
            <svg id="upload-icon" className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>

            <p id="upload-text" className="text-gray-500">Upload an image</p>
            <img id="image-preview" alt="Preview" />
            
            <InputError message={errorMessages.image} className="mt-2"/>
            <InputError message={errors.image} className="mt-2" />
        </span>
    )
}
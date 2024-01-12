import React, { useEffect } from "react";

export default function CreatePost() {

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
    }) 

    function handleFileSelect(event) {
        const fileList = event.target.files;

        if (fileList.length > 0) {
            const file = fileList[0];
            const imageUrl = URL.createObjectURL(file);

            // Muestra la imagen seleccionada
            imagePreview.src = imageUrl;
            imagePreview.style.display = 'block';

            // Oculta el icono, el texto y el input
            uploadIcon.style.display = 'none';
            uploadText.style.display = 'none';
            uploadInput.style.display = 'none';

            // Aquí puedes realizar acciones con el archivo seleccionado, como subirlo a un servidor.
            console.log('Archivo seleccionado:', file);
        }
    }
    
    return (
        <div>
            <div id="image-uploader">
                <input type="file" id="upload-input" accept="image/*" />
                <svg id="upload-icon" class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                <p id="upload-text" class="text-gray-500">Selecciona o arrastra una imagen</p>
                <img id="image-preview" alt="Preview" />
            </div>

            <span>

            </span>
        </div>
    )
}
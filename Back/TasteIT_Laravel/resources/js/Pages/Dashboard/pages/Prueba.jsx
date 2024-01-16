import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { useParams } from 'react-router-dom';

export default function Prueba({  }) {

    const { userId } = useParams();

    return (
        <p>{userId}</p>
    );
}

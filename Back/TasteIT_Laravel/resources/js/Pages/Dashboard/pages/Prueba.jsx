import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Prueba({ auth }) {
    return (
        <p>{auth.user.firstname}</p>
    );
}

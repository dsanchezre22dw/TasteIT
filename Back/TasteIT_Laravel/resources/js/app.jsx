import './bootstrap';
import '../css/app.css'

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { MaterialTailwindControllerProvider } from './Pages/Dashboard/context';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
import "../css/tailwind.css";

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <React.StrictMode>
                <BrowserRouter>
                    <ThemeProvider>
                        <MaterialTailwindControllerProvider>
                            <App {...props} />
                        </MaterialTailwindControllerProvider>
                    </ThemeProvider>
                </BrowserRouter>
            </React.StrictMode>
        );
    },
    progress: {
        color: '#4B5563',
    },
});

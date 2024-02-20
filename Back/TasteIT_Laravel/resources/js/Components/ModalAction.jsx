import { Fragment, useEffect } from 'react';
import { Transition } from '@headlessui/react';

export default function ModalAction({ children, show = false, maxWidth = 'sm', closeable = true, onClose = () => {} }) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose(); // Cierra el modal después de 3 segundos
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    return (
        <Transition show={show} as={Fragment}>
            <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className={`fixed inset-x-0 bottom-0 flex items-end justify-center z-50 px-4 pb-4 sm:p-0 sm:items-center sm:justify-center mb-8`}>
                    <div className={`bg-red-100 rounded-t-lg p-4 shadow-lg w-full sm:max-w-${maxWidth}`}>
                        {children}
                    </div>
                </div>
            </Transition.Child>
        </Transition>
    );
}

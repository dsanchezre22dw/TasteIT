import { Fragment, useState } from 'react';
import { Transition } from '@headlessui/react';

export default function AnswerModal({ show = false, onClose = () => {}, onConfirm = () => {}, message = 'Are you sure?', }) {
    const [confirming, setConfirming] = useState(false);

    const handleConfirm = () => {
        onConfirm();
        setConfirming(false);
        onClose();
    };

    const handleCancel = () => {
        setConfirming(false);
        onClose();
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
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                        <h2 className="text-lg font-semibold mb-4">{message}</h2>
                        <div className="flex justify-end">
                            <button
                                onClick={handleConfirm}
                                className="py-2 px-4 bg-red-500 text-white rounded-md mr-4 focus:outline-none focus:ring focus:ring-red-200"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={handleCancel}
                                className="py-2 px-4 bg-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring focus:ring-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </Transition.Child>
        </Transition>
    );
}

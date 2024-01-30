import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function SelectInput({ options = [], className = '', isFocused = false, select='', ...props }, ref) {
    const selectRef = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            selectRef.current.focus();
        }
    }, [isFocused]);

    return (
        <select
            {...props}
            className={
                'border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm ' +
                className
            }
            ref={selectRef}
        >
            {options.map((option) => (
                <option key={option.value} value={option.value} selected={option.value === select}>
                    {option.label}
                </option>
            ))}
        </select>
    );
});

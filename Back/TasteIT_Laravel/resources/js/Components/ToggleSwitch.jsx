import { forwardRef, useRef } from 'react';

const ToggleSwitch = forwardRef(({ type = 'checkbox', className = '', ...props }, ref) => {
    const inputRef = ref ? ref : useRef();

    return (
        <label className={`switch ${className}`}>
            <input
                
                {...props}
                type={type}
                ref={inputRef}
            />
            <span className="slider round"></span>
        </label>
    );
});

export default ToggleSwitch;

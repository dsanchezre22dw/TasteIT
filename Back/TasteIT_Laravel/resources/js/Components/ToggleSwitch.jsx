import { forwardRef, useRef } from 'react';

export default forwardRef(function ToggleSwitch({ type = 'checkbox', className = '', ...props }, ref) {
    const input = ref ? ref : useRef();


    return (
        <label className={`switch ${className}`}>
          <input
            {...props}
            type={type}
          />
          <span className="slider round"></span>
        </label>
      );
});

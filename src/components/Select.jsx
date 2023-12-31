/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { forwardRef, useId } from "react";

const Select = forwardRef(({ label, options, className, ...props }, ref) => {
  const id = useId();

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      <select
        id={id}
        ref={ref}
        className={`text-black border border-gray-300 px-4 py-2 rounded-md w-full focus:outline-none focus:border-blue-500 ${className}`}
        {...props}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default Select;

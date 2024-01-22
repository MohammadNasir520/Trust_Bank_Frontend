"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  //   register: UseFormRegister<FieldValues>;
  //   errors: FieldErrors;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  id,
  type,
  required,
  //   register,
  //   errors,
  disabled,
}) => {
  return (
    <div className="w-full my-4">
      <label
        className="
            text-sm
            text-gray-900
            font-light
        "
        htmlFor={id}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={id}
        className={clsx(
          `
        form-input
        w-full
        border-0
        border-b
        py-1
        px-2
        text-gray-900
        sm:text-sm
        sm:leading-6
        placeholder:text-gray-400
        focus:outline-none
        bg-transparent 
        appearance-none
    `
          // errors[id] && "focus:ring-rose-500",
          // disabled && "opacity-50 cursor-default"
        )}
      />
    </div>
  );
};

export default Input;

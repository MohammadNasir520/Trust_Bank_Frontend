// CustomFileInput.tsx
"use client";

import React, { useState, ChangeEvent } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaFile } from "react-icons/fa6";

interface CustomFileInputProps {
  label?: string;
  onChange?: (file: File | null) => void;
  className?: string;
  id?: string;
}

const CustomFileInput: React.FC<CustomFileInputProps> = ({
  label,
  onChange,
  className,
  id,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedFile(file);

    // Pass the selected file to the parent component's onChange handler if provided
    if (onChange) {
      onChange(file);
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);

    // Pass null to the parent component's onChange handler to indicate removal
    if (onChange) {
      onChange(null);
    }
  };

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="text-sm font-semibold text-black rounded-md px-4 py-2 block"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type="file"
          className="hidden"
          onChange={handleFileChange}
          id={id || ""}
        />
        <div className="border-dashed border-2 border-gray-400 p-1 rounded-md">
          {selectedFile ? (
            <div className="flex items-center space-x-2">
              <span>{selectedFile.name}</span>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-red-500 hover:text-red-700"
              >
                <FaTrashAlt />
              </button>
            </div>
          ) : (
            <label
              htmlFor={id || ""}
              className="cursor-pointer text-sm font-sm text-black py-2 px-4 rounded-lg inline-flex items-center"
            >
              <FaFile className="text-[#012169] mr-2" />
              Choose a file
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomFileInput;

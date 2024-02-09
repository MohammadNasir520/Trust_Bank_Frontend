// CustomFileInput.tsx
import React, { useState, ChangeEvent } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { FaFileImage } from 'react-icons/fa';

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
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="text-sm text-black font-semibold mb-1">
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
        <div className="rounded-md border border-gray-300 p-3 flex items-center justify-between">
          {selectedFile ? (
            <div className="flex items-center space-x-2">
              <span className="truncate mr-2">{selectedFile.name}</span>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-red-500 hover:text-red-700 focus:outline-none"
              >
                <FaTrashAlt />
              </button>
            </div>
          ) : (
            <label
              htmlFor={id || ''}
              className="cursor-pointer text-sm text-[#012169] font-semibold flex items-center space-x-1"
            >
              <FaFileImage className="text-[#012169]" />
              <span>Choose an image</span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomFileInput;

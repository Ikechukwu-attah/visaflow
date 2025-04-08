import { useState } from "react";
import { useDropzone } from "react-dropzone";
import SuccessModal from "../../modal/SuccessModal";

const DocumentUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
      "application/pdf": [".pdf"],
    },
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    },
  });

  const handleSubmit = () => {
    if (files.length > 0) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 md:px-32 lg:px-56">
      <h2 className="text-3xl font-bold text-gray-900">
        Upload Your Documents
      </h2>

      {/* Drag & Drop Area */}
      <div
        {...getRootProps()}
        className="w-full max-w-lg bg-gray-100 p-6 mt-6 border-dashed border-2 border-gray-400 rounded-lg text-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drag & drop your files here, or click to select files
        </p>
        <small className="text-gray-500">
          Accepted file types: PDF, PNG, JPEG
        </small>
      </div>

      {/* Show Uploaded Files */}
      <div className="w-full max-w-lg mt-6">
        <h3 className="text-lg font-bold">Uploaded Files</h3>
        <ul className="mt-2">
          {files.map((file, index) => (
            <li key={index} className="bg-white p-2 shadow-md rounded-md mt-2">
              {file.name} ({(file.size / 1024).toFixed(2)} KB)
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md"
      >
        Submit Documents
      </button>

      {/* Success Modal */}
      <SuccessModal
        isOpen={isSuccess}
        onClose={() => setIsSuccess(false)}
        message="Your documents have been successfully uploaded!"
      />
    </div>
  );
};

export default DocumentUpload;

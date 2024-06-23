import React, { useState } from 'react';
import './features.css'; // Import the CSS file if needed
import axios from 'axios';

const FeaturesSection = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Change = (e) => {
    setFile1(e.target.files[0]);
  };

  const handleFile2Change = (e) => {
    setFile2(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle submit logic here, e.g., send files to server
    console.log('Submitting files:', file1, file2);
    const formData  = new FormData()
    formData.append('file1', file1)
    axios.post('url', formData).then((res) => {
      console.log(res)
    })
  }

  const handleCancelFile1 = () => {
    // Clear uploaded file1
    setFile1(null);
  };

  const handleCancelFile2 = () => {
    // Clear uploaded file2
    setFile2(null);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50 dark:bg-gray-800">
      <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file1" className="input_inner_box flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-100 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                {file1 ? (
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{file1.name}</span></p>
                ) : (
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Submission File</span></p>
                )}
              </div>
              <input id="dropzone-file1" type="file" className="hidden" onChange={handleFile1Change} />
            </label>
            {file1 && (
              <div className="flex mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleSubmit}>Submit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancelFile1}>Cancel</button>
              </div>
            )}
          </div>
        </li>
        <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file2" className="input_inner_box flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                {file2 ? (
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{file2.name}</span></p>
                ) : (
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Evaluation Criterion</span></p>
                )}
              </div>
              <input id="dropzone-file2" type="file" className="hidden" onChange={handleFile2Change} />
            </label>
            {file2 && (
              <div className="flex mt-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleSubmit}>Submit</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancelFile2}>Cancel</button>
              </div>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FeaturesSection;

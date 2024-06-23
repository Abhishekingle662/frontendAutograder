import React, { useState } from 'react';
import './features.css'; // Import the CSS file if needed
import axios from 'axios';

const FeaturesSection = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const handleText1Change = (e) => {
    setText1(e.target.value);
  };

  const handleText2Change = (e) => {
    setText2(e.target.value);
  };

  const handleSubmit = () => {
    // Handle submit logic here, e.g., send text to server
    console.log('Submitting text:', text1, text2);
    // Use axios to send the text to the server
  };

  const handleCancelText1 = () => {
    // Clear text1
    setText1('');
  };

  const handleCancelText2 = () => {
    // Clear text2
    setText2('');
  };

  return (
    
    <div className="min-h-screen feature_div w-100 flex justify-center items-center bg-black-800">
      <ul className="mx-auto inner_feature_box my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
        <li className="flex inner_inner_fox w-2/3 px-6 flex-col items-center rounded-3xl bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
        
           
          <div className="flex py-16 px-16 inner_tablet_one items-center justify-center w-full">
            <div className="w-full inner_tablet_thing text-black ">
              <textarea
                className="featureinput"
                placeholder="Enter Submission Text"
                value={text1}
                onChange={handleText1Change}
              />
            </div>
          </div>
          {text1 && (
            <div className="flex mt-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleSubmit}>Submit</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancelText1}>Cancel</button>
            </div>
          )}
        </li>
        <li className="flex w-2/3 flex-col items-center py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
          <div className="flex py-16 px-16 inner_tablet_one items-center justify-center w-full">
            <div className="w-full text-black">
              <textarea
                className="featureinput"
                placeholder="Enter Evaluation Text"
                value={text2}
                onChange={handleText2Change}
              />
            </div>
          </div>
          {text2 && (
            <div className="flex mt-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded" onClick={handleSubmit}>Submit</button>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleCancelText2}>Cancel</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FeaturesSection;

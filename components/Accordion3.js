import React, { useState } from 'react';

const Accordion3 = ({ title, content,percentage,obtainPercentage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="border-b border-gray-200">
        <button
          className="flex justify-between bg-gray-300 w-full p-4 focus:outline-none"
          onClick={toggleAccordion}
        > <div className='flex'>
          <div className='text-lg font-mono font-semibold'>{title} </div>
          <div className='ml-3 text-blue-600 font-semibold'>({percentage}%)  </div>
          <i className='bx bx-right-arrow-alt ml-1 text-2xl mt-0.5 text-gray-500'></i>
          <div className='text-green-500 font-semibold'>({obtainPercentage?obtainPercentage:0}%)  </div>
          </div>
          <svg
            className={`w-4 h-4 transition-transform transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>
      {isOpen && <div className="p-2">{content}</div>}
    </div>
  );
};

export default Accordion3;

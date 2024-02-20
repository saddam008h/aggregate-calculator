import React, { useState } from 'react';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  

  return (
    <div>
      <button
        className="flex items-center justify-between w-full p-5 mb-1 font-medium bg-orange-200 text-left  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-orange-300 dark:hover:bg-gray-800"
        onClick={toggleAccordion}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transform transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="p-2 bg-orange-50 dark:border-gray-700 dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
}

export default Accordion;

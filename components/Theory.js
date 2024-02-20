import React from 'react'
import { useState } from 'react';
import PanelBar2 from './PanelBar2';
import AccordionList from './AccordionList';
export default function Theory() {
  const [concreteData,setConcreteData] = useState([])
  const [formData, setFormData] = useState({});

  // Function to handle form input changes
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data
    const numbers = [];
  
    for (let i = 1; i <= formData.sections; i++) {
      numbers.push(i);
    }
    setConcreteData(numbers)
    
  };

  //handling all section names and percentages
  const [sectionData, setSectionData] = useState([])
  const [showError,setShowError] = useState(false)
  // Function to handle form submission
const handleSubmitSection = (event) => {
  event.preventDefault();
  // Process the form data as needed
  let totalPercentage = 0
  for(let i=0;  i<(formData.sections); i++){
    totalPercentage += parseFloat(sectionData[i].percentage);
  }
  if(!(totalPercentage>=99 && totalPercentage<=101)){
  setShowError(true)
  setTimeout(() => setShowError(false),2000)
  }
  else localStorage.setItem('theoryData',JSON.stringify(sectionData))
  

};

// Function to handle input change
const handleSectionChange = (event, index) => {
  const { name, value } = event.target;
  console.log(name)
  console.log(value)
  const updatedData = [...sectionData];
  const updatedSection = {
    ...updatedData[index],
    [name.split('_')[0]]: value
  };
  updatedData[index] = updatedSection;
  setSectionData(updatedData);

};

  return (
    <>
    <div className='flex bg-gray-800 rounded-t-md items-center h-10 justify-center w-full'>
      <div className='text-white font-mono font-semibold'> Theory part (75%) </div>
    </div>
    <AccordionList/>
    <form onSubmit={handleSubmit} className='hidden'>
    <div className='flex justify-end mt-2'>
    <input  type="number" name='sections' onChange={handleChange} min={0} max={50} class="w-3/12 block p-2 mt-1 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Number of Main Sections" required/>
      <button type="submit" class="text-white mr-2 rounded-md mt-1 text-sm px-4 py-2 bg-gray-800 h-10 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Add Sections
      </button>
    </div>
    </form>

    <div className='hidden border border-gray-500 m-2 mt-2 rounded-md '>
      <form onSubmit={handleSubmitSection}>
      {concreteData.map((element,index) => 
      <div className='flex ml-4' key={element}>
        <span  class="block mt-4 mr-4 text-sm font-medium text-gray-900 dark:text-white">Section {element} </span>
        <div className='w-3/12 m-2'> 
            <input  type="text" name={`name_${index}`} onChange={(event) => handleSectionChange(event, index)} value={sectionData[index]?.name || ''} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name (quiz,mid...)" required/>
        </div>
        <div className='w-3/12 m-2'>
            <input  type="number" name={`percentage_${index}`}
             value={sectionData[index]?.percentage || ''}
             onChange={(event) => handleSectionChange(event, index)}
             min={0} max={100}
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="percentage" required/>
        </div>
      </div>
      )
      }
      <div className='flex justify-end'>
      <p className={` ${showError? '' : 'hidden' } text-sm ml-4 md:mt-2 text-red-400 font-semibold`}>The total percentage should be 100. Please check</p>
      <button type="submit" class="text-white ml-auto mr-2 mb-2 inline rounded-md text-sm px-7 bg-gray-800 h-9 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Save
      </button>
      </div>
      </form>
    </div>
    </>
  )
}

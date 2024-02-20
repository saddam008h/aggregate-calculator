import React, { useState } from 'react'

function Entries({title}) {

  const [concreteData,setConcreteData] = useState([])
  const [formData, setFormData] = useState({
    quizsections:0,
    assignsections: 0,
    midsections: 0,
    finalsections:0
  });

  // Function to handle form input changes
  const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value
  }));
};


  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the form data
    const numbers = [];
    console.log(formData)
    // for (let i = 1; i <= formData.sections; i++) {
    //   numbers.push(i);
    // }
    // setConcreteData(numbers)
    // localStorage.setItem(`${title}Data`,JSON.stringify(formData.sections))
  };
     
    //handling all section names and percentages
    const [sectionData, setSectionData] = useState([])
    const [showError,setShowError] = useState(false)
    // Function to handle form submission
  const handleSubmitEntries = (event) => {
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
    else localStorage.setItem(`${title}EntriesData`,JSON.stringify(sectionData))
    
  
  };
  
  // Function to handle input change
  const handleEntriesChange = (event, index) => {
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

  return (<>
    <form className='flex' onSubmit={handleSubmit}>
        <div className='mr-auto'>How many {title}  </div>
        <input type="number" name={`sections`} value={formData[`${title}sections`]} onChange={handleChange} min={0} max={100} className="block mr-4 w-2/12 text-gray-900 border border-gray-300 rounded-md bg-gray-50 text-xs focus:ring-1
         focus:ring-gray-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>

    <button type="submit" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-1 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
        Add Entries
    </button>
    </form>

    <div className='border border-gray-500 m-2 mt-2 rounded-md '>
    <form onSubmit={handleSubmitEntries}>
        {concreteData.map((element,index) => 
        <div className='flex ml-4' key={element}>
        <span  class="block mt-4 mr-4 text-sm font-medium text-gray-900 dark:text-white"> {element} </span>
        <div className='w-3/12 m-2'> 
            <input  type="text" name={`name_${index}`} onChange={(event) => handleEntriesChange(event, index)} value={sectionData[index]?.name || ''} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name (quiz,mid...)" required/>
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
export default React.memo(Entries)

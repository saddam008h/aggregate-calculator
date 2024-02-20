import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
export default function BasicInfo() {
    //dispatch 
    const dispatch = useDispatch()
    const givenState = useSelector(state=>state.sidebar)

    //hidding basicInfo
    const [hidden, setHidden] = useState(false)
    // course name
    const [name, setName] = useState('')
    function HandleChangeName(event){
        setName(event.target.value)
    }

    //is lab yes or no
    const [selectedValue, setSelectedValue] = useState('');
    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    }
    //min max percentage
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
    const { value } = event.target;

    
    if (value === '' || (Number(value) >= 0 && Number(value) <= 100)) {
      setInputValue(value);
    }
  };

    //STORING DATA INTO LOCAL STORAGE
    const [dataList, setDataList] = useState([]);
    console.log(dataList)
    function HandleSaveData(){
        
        const data = 
            {
                name: name,
                lab: selectedValue === 'yes' ? true : false , 
                percentage : inputValue
            }
        
        const updatedList = [...dataList,data]  
        localStorage.setItem('sidebarData',JSON.stringify(updatedList))
        setDataList(updatedList)
        
        if(givenState)
        dispatch({type:'sendState',payload:false})
        else
        dispatch({type:'sendState',payload:true})
        
        //hidding basic info
        setHidden(true)

    }  
  return (
    <>
    <div className={'hidden mt-10 border border-gray-400 rounded-md p-5'}>

        <div className=''>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course Name</label>
            <input onChange={HandleChangeName} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Course Name" required/>
        </div>

        <div className='mx-12'>
            <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Course has lab</label>
            <select id="countries" value={selectedValue} onChange={handleSelectChange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
        </div>

        <div className={selectedValue === 'yes' ? '' : 'hidden'} >
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Percentage of Lab</label>
            <input value={inputValue} onChange={handleInputChange} type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="percentage" required/>
        </div>

        <button onClick={HandleSaveData} type="button" class="text-white mt-6 bg-gray-800 h-11 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-10 py-2.5  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Save
        </button>

    </div>
    </>
  )
}

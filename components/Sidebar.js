import React from 'react'
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
export default function Sidebar() {
   //retrieve state
   const givenState = useSelector((state) => state.sidebar)
   
   const [sidebarData, setSidebarData] = useState([]);

   useEffect(() => {
     // Retrieve the stored value from local storage
     console.log('chala')
     try {
      const storedValue = localStorage.getItem('sidebarData');
      const parsedObject = JSON.parse(storedValue);

      if (parsedObject) {
         setSidebarData(parsedObject);
       }

    } catch (error) {
      console.error('Error parsing data from local storage:', error);
    }

   }, [givenState]);

  return (
    <>


<aside id="default-sidebar" class="h-full z-40 w-72 transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div class="h-full rounded-md px-3 py-4 bg-gray-50 dark:bg-gray-800">
      <ul class="text-sm space-y-2">
        {sidebarData.map((element) => 
         <li className=''>
         <a href="#" class="flex items-center py-2 px-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700">
            <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
            <span class="flex-1 ml-2">{element.name}</span>
            <span class="inline-flex items-center justify-center ml-3 px-2 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">87.9</span>
         </a>
         </li>
        )}
        

      </ul>
   </div>
</aside>



    </>
  )
}

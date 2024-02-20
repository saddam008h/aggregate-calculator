import React from 'react'
import Sidebar from './Sidebar'
import BasicInfo from './BasicInfo'
import Theory from './Theory'

export default function Container() {
  return (
    <>
    <div className='flex justify-center mt-4'>
    <div className='flex relative rounded-md w-11/12 mb-5 min-h-screen border border-gray-500'>
        <Sidebar/>

        <div className=''>
         <BasicInfo/>
        </div>
        <div className='w-full relative'>
        <div className='flex'>
          <div className='mr-auto text-lg font-bold m-2' >Course Name</div>
          
          <button type="button" class="text-white mr-2 rounded-md mt-1 text-sm px-4 py-2 bg-gray-800 h-10 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium   dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Add New Section
          </button>
        </div>
        <div className='m-2 grid grid-cols-5 gap-x-2'>
          <div className=' border border-gray-400 rounded-lg shadow-lg col-span-3' >
            <Theory/>
            </div>
          
            <div className='border border-gray-400 rounded-lg shadow-lg col-span-2 ' />
          </div>
        </div>

    </div>
    </div>
    </>
    
  )
}

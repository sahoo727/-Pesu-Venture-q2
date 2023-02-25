import React from 'react';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function AddCategory() {
  return (
    <div>
        <div className='grid grid-cols-4'>
            <div className='col-span-2 align-center'>
                <p className='font-light'>Assert Admin {'> '}<span className='font-bold'>Manage Categories</span> </p> 
            </div>
            <div className='col-end-5 flex justify-end'>
                <button className='bg-indigo-600 p-2 text-white font-semibold rounded hover:bg-indigo-800 hover:shadow-xl'><AddOutlinedIcon/> Add Category</button>
            </div>
        </div>

        <div className='my-7'>
            
            <Chip label="Finance" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Electronics" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="content Writing" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Media & Communication" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Software Service" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Human Resources" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="marketing" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Construction" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Teaching" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Business Development" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Creative Design" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Applications" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            <Chip label="Business Operations" className='dark:bg-gray-500 dark:text-white text-gray-500 mr-5 mt-2'/>
            
            
        </div>
    </div>
  )
}

export default AddCategory
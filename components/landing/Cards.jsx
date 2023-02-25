import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Cards() {
  return (
    <div className='my-10'>
        <div className='md:grid block grid-cols-5 my-2'>
            <div className='col-span-2'>
                <p className='text-indigo-600 font-semibold'>Certificates under the category</p>
            </div>
            <div className='col-span-3 flex md:justify-end my-2'>
                <input placeholder='Search Certificate' className='border-y-gray-500 border-l-gray-500 border-2 rounded-l-lg px-3 py-1'></input>
                <div className='bg-blue-500 rounded-r-lg py-1 px-2 text-white'><SearchIcon /></div>
            </div>
        </div>

        <div className='block md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-500 px-3 py-5 md:my-2 my-5'>
                <div className='grid grid-cols-3'>
                    <p className='text-gray-500 font-semibold'>Finance</p>
                    <p className='col-end-4 flex justify-end text-sm font-light'>know More {' >'}</p>
                </div>

                <p className='text-blue-500 font-bold my-1'>Accounts Finance <span className='text-green-500'>{' 7'}</span></p>

                <button className='bg-green-500 p-1 w-full text-white font-semibold rounded hover:shadow-lg my-1'>Tag a job</button>

                <button className='border border-indigo-600 text-indigo-600 p-1 w-full text-white font-semibold rounded hover:shadow-lg my-1'>Employees Enrolled {'>'}</button>
                
                <button className='bg-gray-300 text-black p-1 w-full font-light font-semibold rounded hover:shadow-lg my-1'>Assign Certificate</button>
            </div>

            <div className='w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-500 px-3 py-5 md:my-2 my-5'>
                <div className='grid grid-cols-3'>
                    <p className='text-gray-500 font-semibold'>Finance</p>
                    <p className='col-end-4 flex justify-end text-sm font-light'>know More {' >'}</p>
                </div>

                <p className='text-blue-500 font-bold my-1'>Accounts Finance <span className='text-green-500'>{' 7'}</span></p>

                <button className='bg-green-500 p-1 w-full text-white font-semibold rounded hover:shadow-lg my-1'>Tag a job</button>

                <button className='border border-indigo-600 text-indigo-600 p-1 w-full text-white font-semibold rounded hover:shadow-lg my-1'>Employees Enrolled {'>'}</button>
                
                <button className='bg-gray-300 text-black p-1 w-full font-light font-semibold rounded hover:shadow-lg my-1'>Assign Certificate</button>
            </div>

            <div className='w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-500 px-3 py-5 md:my-2 my-5'>
                <div className='grid grid-cols-3'>
                    <p className='text-gray-500 font-semibold'>Finance</p>
                    <p className='col-end-4 flex justify-end text-sm font-light'>know More {' >'}</p>
                </div>

                <p className='text-blue-500 font-bold my-1'>Accounts Finance <span className='text-green-500'>{' 7'}</span></p>

                <button className='bg-green-500 p-1 w-full text-white font-semibold rounded hover:shadow-lg my-1'>Tag a job</button>

                <button className='border border-indigo-600 text-indigo-600 p-1 w-full text-white font-semibold rounded hover:shadow-lg my-1'>Employees Enrolled {'>'}</button>
                
                <button className='bg-gray-300 text-black p-1 w-full font-light font-semibold rounded hover:shadow-lg my-1'>Assign Certificate</button>
            </div>

            <div className='w-full max-w-sm bg-gray-200 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-500 px-3 py-5 md:my-2 my-5'>
                <div className='grid grid-cols-3'>
                    <p className='text-gray-500 font-semibold'>Finance</p>
                    <p className='col-end-4 flex justify-end text-sm font-light'>know More {' >'}</p>
                </div>

                <p className='text-blue-500 font-bold my-1'>Accounts Finance <span className='text-green-500'>{' 7'}</span></p>

                <button className='bg-green-500 p-1 w-full text-white font-semibold rounded hover:shadow-lg my-1'>Tag a job</button>

                <button className='border border-indigo-600 text-indigo-600 p-1 w-full text-white font-semibold rounded hover:shadow-lg my-1'>Employees Enrolled {'>'}</button>
                
                <button className='bg-gray-300 text-black p-1 w-full font-light font-semibold rounded hover:shadow-lg my-1'>Assign Certificate</button>
            </div>

        </div>

        <div className='grid justify-items-end mt-10'>
            <ul class="inline-flex items-center align-end">
              
              <li>
                <a href="#" aria-current="page" class="z-10 mx-1 px-4 py-2 leading-tight text-blue-600 border border-blue-300 rounded-xl hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
              </li>
              <li>
                <a href="#" class="mx-1 px-4 py-2 leading-tight text-white bg-blue-500 border border-gray-300 rounded-xl hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
              </li>
                <a href="#" class="mx-1 px-4 py-2 leading-tight text-white bg-blue-500 border border-gray-300 rounded-xl hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
              <li>
              </li>
              <li>
                <a href="#" class="mx-1 px-4 py-2 leading-tight text-white bg-blue-500 border border-gray-300 rounded-xl hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
              </li>
              <li>
                <a href="#" class="mx-1 px-4 py-2 leading-tight text-white bg-blue-500 border border-gray-300 rounded-xl hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
              </li>
              
            </ul>
        </div>

    </div>
  )
}

export default Cards
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-green-200 p-36'>
           <div className='text-center align-center'>
           <p className='text-5xl text-red-500'>404 ERROR</p>
            <p className='text-4xl text-red-900'>The page is not found!!!!!</p>
            <Link to="/home" class="inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-blue-900 mt-4 md:mt-0">Reload
            </Link>
           </div>
        </div>
    );
};

export default NotFound;
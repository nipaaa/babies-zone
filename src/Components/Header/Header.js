import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header class=" body-font bg-green-300">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <img src="./img/logo.png" alt="" />
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center  justify-center">
      <img src="./img/hd" alt="" />
      <NavLink to="/home" class="mr-5 text-red-500">Home</NavLink>
      <NavLink to="/service" class="mr-5 text-green-500">Service</NavLink>
      <NavLink to="/about" class="mr-5 text-blue-500 ">About</NavLink>
      <NavLink to="/contact" class="mr-5 text-pink-500">Contact</NavLink>
     
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-blue-900 mt-4 md:mt-0">Sign In
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
            
        </div>
    );
};

export default Header;
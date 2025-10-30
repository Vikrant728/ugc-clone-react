import React from 'react'
import { FaHome } from 'react-icons/fa';

function Navbar2() {
  return (
    <div>
        <div className="bg-orange-500 text-white text-sm py-2 px-4">
        <div className="flex flex-col items-center text-center gap-1">
        
          <div className="flex flex-wrap justify-center gap-3">
            <a
  href="#"
  className="flex items-center text-white px-3 py-1 rounded transition-all duration-200 hover:bg-white hover:text-orange-500 text-sm gap-1"
>
  Home <FaHome className="inline-block" />
</a>
            
   

            <span></span>
            <div className="relative group">
  <a
    href="#"className="flex items-center text-white px-3 py-1 rounded transition-all duration-200 hover:bg-white hover:text-orange-500">About Us<span>↓</span>
</a>

  
  <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg w-44 z-50">
    <ul className="py-2 text-sm">
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Dashboard</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Profile</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Settings</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Logout</li>
    </ul>
  </div>
</div>

            <span></span>
            <div className="relative group">
  <a
    href="#"
    className="flex items-center text-white px-3 py-1 rounded transition-all duration-200 hover:bg-white hover:text-orange-500"
  >
    Organisation<span>↓</span>

  </a>

  
  <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg w-44 z-50">
    <ul className="py-2 text-sm">
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Dashboard</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Profile</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Settings</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Logout</li>
    </ul>
  </div>
</div>

            <span></span>
           
            <div className="flex flex-wrap justify-center gap-3">
            <a href="#" className="text-white px-3 py-1 rounded transition-all duration-200 hover:bg-white hover:text-orange-500">Guidlines</a>
            <span></span>
            <a href="#" className="text-white px-3 py-1 rounded transition-all duration-200 hover:bg-white hover:text-orange-500">Regulations</a>
            <span></span>
           <div className="relative group">
  <a
    href="#"
    className="flex items-center text-white px-3 py-1 rounded transition-all duration-200 hover:bg-white hover:text-orange-500"
  >
    HEIs<span>↓</span>

  </a>

 
  <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg w-44 z-50">
    <ul className="py-2 text-sm">
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Dashboard</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Profile</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Settings</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Logout</li>
    </ul>
  </div>
</div>

            <span></span>
            <div className="relative group">
  <a
    href="#"
    className="flex items-center text-white px-3 py-1 rounded transition-all duration-200 hover:bg-white hover:text-orange-500"
  >
    e-Publications<span>↓</span>

  </a>

  
  <div className="absolute left-0 mt-1 hidden group-hover:block bg-white text-gray-800 rounded-md shadow-lg w-44 z-50">
    <ul className="py-2 text-sm">
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Dashboard</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Profile</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Settings</li>
      <li className="px-4 py-2 hover:bg-orange-500 hover:text-white cursor-pointer">Logout</li>
    </ul>
  </div>
</div>

             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar2
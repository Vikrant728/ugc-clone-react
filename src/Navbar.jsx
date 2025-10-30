import React from "react";
import { FaHome,FaSearch } from 'react-icons/fa';

function Navbar() {
  return (
    <>
      
      <div className="bg-purple-950 text-white text-sm py-2 px-4">
        <div className="flex flex-col items-center text-center gap-1">
        
          <div className="flex flex-wrap justify-center gap-3">
             <a
             href="#"
             className="flex items-center text-red px-3 py-1 rounded transition-all duration-200 hover:bg-white hover:text-red-500 text-sm gap-1"
           >
              <FaHome className="inline-block" />
           </a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">Skip to main content</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">Skip to navigation</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">Screen reader</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">
              Text size <strong>A</strong> <strong>A</strong> <strong>A</strong>
            </a>
            <div className="flex flex-wrap justify-center gap-3">
            <a href="#" className="hover:text-red-600">Hindi</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">Contact us</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">FAQ</a>
            <span>|</span>
            <a href="#" className="hover:text-red-600">Jobs</a>
            <span>|</span>
           <a href="#" className="hover:text-red-600 text-1.5xl px-1 flex items-center">
  <FaSearch />
</a>
<span>|</span>



             </div>
          </div>
        </div>
      </div>

     
 <div className="bg-white py-5 flex items-center justify-between px-60">
  
  {/* Left Side – UGC Logo */}
  <img
    src="https://www.ugc.gov.in/Content/images/Header/ugc_logo.png"
    alt="UGC Logo"
    className="max-h-16 object-contain"
  />

  {/* Right Side – Other Logos */}
  <div className="flex items-center gap-5">
    <img
      src="https://www.ugc.gov.in/Content/images/Header/G20_India_Logo.png"
      alt="G20 Logo"
      className="max-h-16 object-contain"
    />

    <img
      src="https://www.ugc.gov.in/Content/images/Header/MHRD_logo.png"
      alt="MHRD Logo"
      className="max-h-16 object-contain"
    />
  </div>

</div>


    </>
  );
}

export default Navbar;

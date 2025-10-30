import React from 'react'

function NewsTicker() {
  return (
    <div className="bg-white border-t-4 border-blue-900 overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-orange-600 font-semibold py-2">
        Establishment of Equal Opportunity Cell | UGC Updates | Latest Circulars Released | New Guidelines for Universities |
      </div>
    </div>
  );
}



function News() {
  return (
    <>
    <div className="flex justify-center">
      <button className=" bg-white flex items-center cursor-pointer ">
  <img 
    src="https://cbpssubscriber.mygov.in/assets/uploads/X0qP81f7lg3YqNFI?2" 
    alt="icon" 
    className="w-full h-32 sm:h-32 md:h-32 lg:h-34 object-contain " 
  />
</button>
 </div>
 
 <div className="max-w-6xl mx-auto p-7 text-base leading-relaxed">
  <h1 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">
    About <span className="text-black">University Grants Commission</span>
  </h1>

  <p className="text-gray-700 text-base sm:text-lg leading-relaxed mx-auto">
    The University Grants Commission (UGC) came into existence on 28th December, 1953 and became a statutory organization of the Government of India by an Act of Parliament in 1956, 
    for the coordination, determination, and maintenance of standards of teaching, examination, and research in university education.
  </p>
</div>
<button className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition mb-6 cursor-pointer  ml-44">
  Read More
</button>


    </>
   
  );
  
}


export default News
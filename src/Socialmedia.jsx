import React from 'react'

function Socialmedia() {
  return (
    <div className="bg-white text-gray-800 rounded-2xl shadow-lg mt-10 mx-6 md:mx-20 p-8">
        <h2 className="text-center text-2xl font-bold text-orange-600 mb-8">
          Social Media <span className="text-gray-800">Engagement</span>
        </h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">

        <iframe width="547" height="242" src="https://www.youtube.com/embed/tKaBcUPWmB8?list=UULFlbbWYTjSiXnhShJ0Z1-05g" title="Glimpses from the Concluding Ceremony of Anti-Ragging Week 2025" 
frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

 <iframe
          src="https://www.instagram.com/p/CsXx123ABC/embed"
          width="547"
          height="242"
          frameBorder="0"
          allowTransparency="true"
          allow="encrypted-media"
          title="Instagram Post"
        ></iframe>




    </div>
    </div>
  )
}

export default Socialmedia
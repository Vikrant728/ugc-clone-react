import React from 'react'

function Performer() {

    const Perform = [

        { Img: "https://www.ugc.gov.in/Content/images/Star_Performer/0294894_Ms.-SUNITA.jpg"},
        { Img: "https://www.ugc.gov.in/Content/images/Star_Performer/6018559_Umesh-Sharma-Jan-2025.jpg"},
        { Img: "https://www.ugc.gov.in/Content/images/Star_Performer/3224992_Sridhar-Jagilinki-Assistant.jpg"},
        { Img: "https://www.ugc.gov.in/Content/images/Star_Performer/1989216_Raj-Kumari-US.jpg"}
    ];
  return (
    <>
   <div className="bg-white text-gray-800 rounded-2xl shadow-lg mt-10 mx-6 md:mx-20 p-8">
        <h2 className="text-center text-2xl font-bold text-orange-600 mb-8">
          Star Performer <span className="text-gray-800">of the Month</span>
        </h2>
  
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {Perform.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 p-3 w-60 text-center"
          >
            <img
              src={item.Img}
              alt={item.name}
              className="rounded-lg w-full h-60 object-cover mb-3"
            />
            <p className="font-semibold text-gray-700">{item.name}</p>
            <p className="text-sm text-gray-500">{item.designation}</p>
            <p className="text-sm text-gray-400 mt-1">{item.month}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
          <button className="bg-gray-800 text-white px-8 py-2 rounded-full hover:bg-orange-600 transition">
            View All
          </button>
        </div>
  
  <div>
    
  </div>
  
  
  </div>
  </>
  )
}

export default Performer
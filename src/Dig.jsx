import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Dig() {
     const settings = {
   dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
    <div className="bg-white text-gray-800 rounded-2xl shadow-lg mt-10 mx-6 md:mx-20 p-8">
        <h2 className="text-center text-2xl font-bold text-orange-600 mb-8">
          Digital <span className="text-gray-800">Initiative</span>
        </h2>
    </div>

    <div className="relative w-full overflow-hidden">
       <Slider {...settings}>
        {/* Slide 1 */}
        
        <div>
          <img
            src="https://www.ugc.gov.in/Content/images/MainPage/logo-2.jpg"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          />
        </div>
 <div>
          <img
            src="https://www.ugc.gov.in/Content/images/MainPage/NTA.jpg"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          />
        </div>
 <div>
          <img
            src="https://www.ugc.gov.in/Content/images/eGovernance/PoP_Portal.jpg"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          />
        </div>
 <div>
          <img
            src="https://www.ugc.gov.in/Content/images/MainPage/m1.png"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          />
        </div>
 <div>
          <img
            src="https://www.ugc.gov.in/Content/images/eGovernance/UTSAH.jpg"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          />
        </div>
 <div>
          <img
            src="https://www.ugc.gov.in/Content/images/MainPage/logo-1.jpg"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          />
        </div>
 <div>
          <img
            src="https://www.ugc.gov.in/Content/images/MainPage/logo-2.jpg"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          /> 
        </div>
 <div>
          <img
            src="https://www.ugc.gov.in/Content/images/MainPage/UAMP.jpg"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          />
        </div>
 <div>
          <img
            src="https://www.ugc.gov.in/Content/images/eGovernance/PoP_Portal.jpg"
            alt="banner1"
            className="w-full max-h-24 sm:max-h-28 md:max-h-32 object-contain"
          />

        </div>

        


</Slider>
    </div>
</div>
    
  )
}

export default Dig
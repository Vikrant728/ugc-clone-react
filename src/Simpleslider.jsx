import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Simpleslider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div>
          <img
            src="https://www.ugc.gov.in/Content/images/slider/main-slider3.png"
            alt="banner1"
            className="w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Slide 2 */}
        <div>
          <img
            src="https://www.ugc.gov.in/Content/images/slider/main-slider2.png"
            alt="banner2"
            className="w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover"
          />
        </div>

        {/* Slide 3 */}
        <div>
          <img
            src="https://cbpssubscriber.mygov.in/assets/uploads/X0qP81f7lg3YqNFI?2"
            alt="banner3"
            className="w-full h-40 sm:h-52 md:h-60 lg:h-72 object-contain mx-autor"
          />
        </div>
      </Slider>

      {/* Add spacing for dots */}
      <div className="pb-4"></div>

    </div>
   
  );
}

export default Simpleslider;

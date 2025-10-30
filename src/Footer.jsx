import React from "react";

function Footer() {
  const logos = [
    "https://www.ugc.gov.in/Content/images/MainPage/india_gov_logo.png",
    "https://www.mygov.in/sites/all/themes/mygov/images/logo.png",
    "https://www.ugc.gov.in/Content/images/MainPage/my_visit.png",
    "https://www.ugc.gov.in/Content/images/MainPage/digital_india.png",
    "https://www.ugc.gov.in/Content/images/MainPage/rti_logo.png",
    "https://www.ugc.gov.in/Content/images/MainPage/datagov_logo.png",
    "https://www.ugc.gov.in/Content/images/MainPage/onlineservice_logo.png",
    "https://www.ugc.gov.in/Content/images/MainPage/dialgov-logo.png",
    "https://www.ugc.gov.in/Content/images/MainPage/web-info-manager.png",
    "https://www.ugc.gov.in/Content/images/MainPage/GOI.png",
  ];

  return (
    <footer className="bg-[#1E2438] text-white">
      {/* TOP SECTION */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Column 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">For UGC Officials</h3>
            <ul className="space-y-2 text-sm">
              {[
                "e-Office",
                "NIC mail",
                "RTI online",
                "PG portal",
                "Professional Councils",
                "State Higher Education Councils",
                "MoE",
                "AICTE",
                "National Testing Agency (NTA)",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-orange-400 cursor-pointer">
                  <span className="text-orange-400">{">"}</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick links</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Web portal for Fellowship/Scholarship Legacy Cases",
                "Rashtriya Uchchatar Shiksha Abhiyan",
                "University Activity Monitoring Portal",
                "Deemed to be University Portal",
                "DEB",
                "UGC NET Online",
                "UGC Regulations",
                "UGC Circulars",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 hover:text-orange-400 cursor-pointer">
                  <span className="text-orange-400">{">"}</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <p className="text-sm leading-relaxed mb-4">
              University Grants Commission (UGC)<br />
              Bahadur Shah Zafar Marg,<br />
              New Delhi - 110002.
            </p>

            <p className="text-sm mb-3">
              Phone: 011-23604446, 011-23604200
            </p>
            <p className="text-sm mb-5">
              Email: <span className="hover:text-orange-400 cursor-pointer">contact.ugc@nic.in</span>
            </p>

            {/* Visitor Counter */}
            <div className="inline-flex items-center bg-white text-black rounded-full">
              <span className="px-3 py-2 font-semibold">Total Visitors</span>
              <span className="bg-orange-500 text-white px-4 py-2 rounded-full">224160916</span>
            </div>
          </div>
        </div>
      </div>

      {/* LOGOS SECTION */}
      <div className="border-t border-gray-600 py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-3 sm:grid-cols-5 gap-4 px-6">
          {logos.map((logo, idx) => (
            <img key={idx} src={logo} alt="Logo" className="w-full h-16 object-contain bg-white p-2 rounded-md" />
          ))}
        </div>
      </div>

      {/* COPYRIGHT + LINKS */}
      <div className="bg-gray-200 text-gray-900 text-center text-sm py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <p>Copyright © 2023 University Grants Commission New Delhi, India</p>
          <p>Website last updated on: 25-10-2025</p>
          <p className="space-x-3">
            <span className="hover:text-blue-700 cursor-pointer">Disclaimer</span> | 
            <span className="hover:text-blue-700 cursor-pointer"> Privacy Policy</span> | 
            <span className="hover:text-blue-700 cursor-pointer"> Contact Us</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

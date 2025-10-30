import React from "react";

function EGovernance() {
  const topTabs = [
    { title: "e-Governance @UGC", icon: "💻" },
    { title: "Key Initiatives", icon: "👉" },
    { title: "Student Corner", icon: "🎓" },
    { title: "Faculty Corner/ Non-Teaching Staff", icon: "👥" },
    { title: "Details of HEIs", icon: "🏛️" },
    { title: "UGC Green Initiatives", icon: "🌍" },
  ];

  const portals = [
    {
      title: "UGC Equivalence Portal",
      img: "https://www.ugc.gov.in/Content/images/eGovernance/7032830_UGC_Equivalence.jpg",
    },
    {
      title: "UGC Ph.D. Excellence Citation Portal",
      img: "https://www.ugc.gov.in/Content/images/eGovernance/PhD_Citation_Portal.jpg",
    },
    {
      title: "UGC FHEI",
      img: "https://www.ugc.gov.in/Content/images/eGovernance/fhei_logo.png",
    },
    {
      title: "Malviya Mission",
      img: "https://www.ugc.gov.in/Content/images/eGovernance/mmmc.png",
    },
  ];

  return (
    <div className="bg-[#1E1438] text-white py-10 ">
      {/* Top Tabs */}
      <div className="flex flex-wrap justify-center gap-4 px-4">
        {topTabs.map((tab, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white text-gray-800 rounded-lg shadow-md w-52 h-28 cursor-pointer border-t-4 border-transparent hover:border-orange-500 hover:shadow-lg transition"
          >
            <span className="text-2xl mb-2">{tab.icon}</span>
            <p className="text-center text-sm font-semibold">{tab.title}</p>
          </div>
        ))}
      </div>

      {/* e-Governance Section */}
      <div className="bg-white text-gray-800 rounded-2xl shadow-lg mt-10 mx-6 md:mx-20 p-8">
        <h2 className="text-center text-2xl font-bold text-orange-600 mb-8">
          e-Governance <span className="text-gray-800">@UGC</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {portals.map((portal, index) => (
            <div
              key={index}
              className="bg-gray-50 hover:bg-orange-50 rounded-xl shadow-md p-4 w-60 text-center transition"
            >
              <img
                src={portal.img}
                alt={portal.title}
                className="rounded-md mb-4 w-full h-28 object-cover"
              />
              <p className="font-semibold">{portal.title}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-gray-800 text-white px-8 py-2 rounded-full hover:bg-orange-600 transition">
            View All
          </button>
        </div>
      </div>
    </div>
  );
}

export default EGovernance;

import React from "react";
import { FaCalendarAlt, FaFileAlt } from "react-icons/fa";

export default function UgcNoticeSection() {
  const data = [
    {
      title: "Notices",
      color: "bg-orange-500",
      items: [
        {
          text: "UGC letter regarding: YUVAi-Global Youth AI Challenge.",
          date: "23/10/2025",
        },
        {
          text: "University of XYZ not recognized under UGC Act.",
          date: "15/10/2025",
        },
      ],
    },
    {
      title: "Circulars",
      color: "bg-blue-600",
      items: [
        {
          text: "Dearness Relief revised rate effective from 01-01-2024.",
          date: "19/11/2024",
        },
        {
          text: "Grant revision for pensioners processing update.",
          date: "05/10/2024",
        },
      ],
    },
    {
      title: "International Cooperation",
      color: "bg-green-600",
      items: [
        {
          text: "Security Clearance instructions for Institutions.",
          date: "12/02/2025",
        },
        {
          text: "Nominations for UNESCO-Japan Prize on Education.",
          date: "24/03/2025",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4">
        {data.map((section, index) => (
          <div key={index} className="rounded-2xl shadow-lg bg-white overflow-hidden">

            {/* Header */}
            <div className={`${section.color} text-white text-center py-4 font-bold text-lg`}>
              {section.title}
            </div>

            {/* Scroll Content using <marquee> */}
            <div className="h-48 overflow-hidden">
              <marquee behavior="scroll" direction="up" scrollamount="2" onmouseover="this.stop()" onmouseout="this.start()">
                <div className="space-y-6 p-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="border-b pb-3">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCalendarAlt className="text-orange-600" />
                        <span>Published on : {item.date}</span>
                      </div>
                      <div className="flex gap-2 mt-2 text-gray-800">
                        <FaFileAlt className="text-orange-600 mt-1" />
                        <p className="leading-tight">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </marquee>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <button className="w-full rounded-full bg-gray-100 hover:bg-gray-200 py-3 transition font-semibold">
                Read More
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

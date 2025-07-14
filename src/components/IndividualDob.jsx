import React from "react";

export default function IndividualDob() {
  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[20px] px-6 sm:px-12 lg:px-20 py-10 shadow-lg text-center mt-10">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        First, Tell us your Date of Birth
      </h2>

      {/* Label */}
      <div className="text-left mb-2 text-sm font-medium text-gray-700">
        Date Of Birth
      </div>

      {/* Select Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Day */}
        <select className="w-full border rounded-md py-3 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B6EC]">
          <option value="">Date</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        {/* Month */}
        <select className="w-full border rounded-md py-3 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B6EC]">
          <option value="">Month</option>
          {[
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ].map((month, idx) => (
            <option key={idx} value={month}>
              {month}
            </option>
          ))}
        </select>

        {/* Year */}
        <select className="w-full border rounded-md py-3 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B6EC]">
          <option value="">Year</option>
          {Array.from({ length: 100 }, (_, i) => {
            const year = new Date().getFullYear() - i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>

      {/* Button */}
      <button className="bg-[#00B6EC] text-white w-full py-3 rounded-lg text-base font-semibold">
        Next
      </button>
    </div>
  );
}

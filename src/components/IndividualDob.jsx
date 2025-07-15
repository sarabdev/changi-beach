import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function IndividualDob() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!day || !month || !year) return;

    const birthDate = new Date(`${month} ${day}, ${year}`);
    const ageDifMs = Date.now() - birthDate.getTime();
    const age = new Date(ageDifMs).getUTCFullYear() - 1970;

    if (age <= 17) {
      navigate("/individual-junior-packages");
    } else if (age >= 60) {
      navigate("/individual-senior-packages");
    } else {
      navigate("/individual-young-adult-packages");
    }
  };

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
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="w-full border rounded-md py-3 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B6EC]"
        >
          <option value="">Date</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        {/* Month */}
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="w-full border rounded-md py-3 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B6EC]"
        >
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
        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="w-full border rounded-md py-3 px-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00B6EC]"
        >
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
      <button
        onClick={handleNext}
        className="bg-[#00B6EC] text-white w-full py-3 rounded-lg text-base font-semibold hover:cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

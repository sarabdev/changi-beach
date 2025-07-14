import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChooseType() {
  const [selectedType, setSelectedType] = useState("Family");
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedType) {
      navigate("/individual-dob"); // Navigate to DOB page
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[20px] px-6 sm:px-12 lg:px-20 py-10 shadow-lg text-center mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-8">
        Membership Registration
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center items-start mb-10">
        {/* Individual */}
        <label
          className={`border rounded-[12px] px-6 py-6 flex flex-col items-center cursor-pointer hover:shadow-md ${
            selectedType === "Individual" ? "border-2 border-[#00B6EC] shadow-md" : ""
          }`}
        >
          <img src="/individual.png" alt="Individual" className="h-12 mb-4" />
          <div className="flex items-center gap-2 mt-auto">
            <input
              type="radio"
              name="membership"
              value="Individual"
              checked={selectedType === "Individual"}
              onChange={() => setSelectedType("Individual")}
              className="accent-[#00B6EC]"
            />
            <span className="text-sm font-semibold text-black">Individual</span>
          </div>
        </label>

        {/* Family */}
        <label
          className={`rounded-[12px] px-6 py-6 flex flex-col items-center cursor-pointer hover:shadow-md ${
            selectedType === "Family" ? "border-2 border-[#00B6EC] shadow-md" : "border"
          }`}
        >
          <img src="/family.png" alt="Family" className="h-12 mb-4" />
          <div className="flex items-center gap-2 mt-auto">
            <input
              type="radio"
              name="membership"
              value="Family"
              checked={selectedType === "Family"}
              onChange={() => setSelectedType("Family")}
              className="accent-[#00B6EC]"
            />
            <span className="text-sm font-semibold text-black">Family</span>
          </div>
        </label>

        {/* Corporate */}
        <label
          className={`border rounded-[12px] px-6 py-6 flex flex-col items-center cursor-pointer hover:shadow-md ${
            selectedType === "Corporate" ? "border-2 border-[#00B6EC] shadow-md" : ""
          }`}
        >
          <img src="/corporate.png" alt="Corporate" className="h-12 mb-4" />
          <div className="flex items-center gap-2 mt-auto">
            <input
              type="radio"
              name="membership"
              value="Corporate"
              checked={selectedType === "Corporate"}
              onChange={() => setSelectedType("Corporate")}
              className="accent-[#00B6EC]"
            />
            <span className="text-sm font-semibold text-black">Corporate</span>
          </div>
        </label>
      </div>

      <button
        onClick={handleNext}
        disabled={!selectedType}
        className={`w-full py-3 rounded-lg text-base font-semibold transition ${
          selectedType
            ? "bg-[#00B6EC] text-white cursor-pointer hover:bg-[#009ccc]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
}

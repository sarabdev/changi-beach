import React, { useState } from "react";

export default function PackageSelection() {
  const [activeTab, setActiveTab] = useState("Monthly");

  const isMonthly = activeTab === "Monthly";

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl px-6 sm:px-12 py-10 shadow-lg text-center mt-10">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold mb-6">Choose Your Package</h2>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-8">
        {["Monthly", "Yearly"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1.5 rounded-full text-sm font-semibold border ${
              activeTab === tab
                ? "bg-orange-400 text-white border-orange-400"
                : "text-gray-700 border-gray-300"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Main Packages */}
      <div className={`grid ${isMonthly ? "sm:grid-cols-2" : "grid-cols-1"} gap-6 mb-6`}>
        {/* Standard */}
        <div className="border border-gray-200 rounded-2xl px-6 py-8 text-left shadow-sm hover:shadow-md transition">
          <h3 className="text-lg font-bold text-black mb-1">Standard</h3>
          <p className="text-sm text-gray-500 mb-6">Best for personal use</p>

          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-3xl font-bold text-black">
              {isMonthly ? "$110" : "$1320"}
            </span>
            <span className="text-base text-gray-700">
              /{isMonthly ? "Monthly" : "year"}
            </span>
          </div>

          <p className="text-sm text-gray-500 mb-6">
            {isMonthly
              ? "1 Time Processing Fee: $110 (U.P $155/month)"
              : "No Processing fee"}
          </p>

          <p className="text-sm font-semibold text-black mb-2">What you get:</p>
          <ul className="text-sm text-gray-700 space-y-2 mb-6">
            <li className="flex gap-2 items-start">
              <span className="text-[#00B6EC] font-bold text-lg">✓</span>
              <span>
                {isMonthly ? "No Processing Fee" : "2 guest pass every month"}
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <span className="text-[#00B6EC] font-bold text-lg">✓</span>
              <span>Free 2 Guest Pass Every Month</span>
            </li>
          </ul>

          <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold w-full py-3 rounded-full">
            Get started
          </button>
        </div>

        {/* Young Adult — Only for Monthly */}
        {isMonthly && (
          <div className="border border-gray-200 rounded-2xl px-6 py-8 text-left shadow-sm hover:shadow-md transition relative">
            <h3 className="text-lg font-bold text-black mb-1">Young Adult</h3>
            <p className="text-sm text-gray-500 mb-6">Best for personal use</p>

            {/* Badge */}
            <span className="absolute top-6 right-6 bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-0.5 rounded-full">
              Special Offer
            </span>

            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl font-bold text-black">$110</span>
              <span className="text-base text-gray-700">Monthly</span>
            </div>

            <p className="text-sm text-gray-500 mb-6">No Processing fee</p>

            <p className="text-sm font-semibold text-black mb-2">What you get:</p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6">
              <li className="flex gap-2 items-start">
                <span className="text-[#00B6EC] font-bold text-lg">✓</span>
                <span>No Processing Fee</span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-[#00B6EC] font-bold text-lg">✓</span>
                <span>Free 2 Guest Pass Every Month</span>
              </li>
            </ul>

            <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold w-full py-3 rounded-full">
              Get started
            </button>
          </div>
        )}
      </div>

      {/* Trial Box */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl text-sm text-gray-600 px-6 pt-3 pb-4 text-left mb-4">
        <p className="text-xs text-center text-blue-500 font-semibold mb-2">
          Skeptical? Try Our Trial Package
        </p>
        <div className="flex justify-between flex-wrap sm:flex-nowrap gap-3 mb-2">
          <div className="text-black font-bold text-lg">
            $100{" "}
            <span className="text-xs text-gray-500 font-medium block">
              / 3 Month Package
            </span>
          </div>
          <div className="flex gap-3 text-sm items-center">
            <span className="flex items-center gap-1 text-sm">
              ✓ <span>No Processing Fee</span>
            </span>
            <span className="flex items-center gap-1 text-sm">
              ✓ <span>No Processing Fee</span>
            </span>
          </div>
        </div>
        <button className="bg-orange-400 hover:bg-orange-500 text-white text-sm font-semibold w-full py-2.5 rounded-md">
          Get Started
        </button>
      </div>

      {/* Final Next Button */}
      <button className="bg-[#00B6EC] hover:bg-[#00A6DA] text-white text-base font-semibold w-full py-3 rounded-lg mt-4 cursor-pointer">
        Next
      </button>
    </div>
  );
}

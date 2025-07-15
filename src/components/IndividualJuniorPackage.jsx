import React, { useState } from "react";

export default function IndividualJuniorPackage() {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[20px] px-6 sm:px-12 lg:px-20 py-10 shadow-lg text-center mt-10">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold mb-8">
        Choose Your Package
      </h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={() => setActiveTab("monthly")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === "monthly"
              ? "bg-orange-400 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setActiveTab("yearly")}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeTab === "yearly"
              ? "bg-orange-400 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          Yearly
        </button>
      </div>

      {/* Packages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center mb-10">
        {activeTab === "monthly" ? (
          <>
            {/* Standard Monthly */}
            <div className="border rounded-lg p-6 text-left shadow-md">
              <div className="text-lg font-semibold mb-1">Standard</div>
              <div className="text-sm text-gray-500 mb-4">
                Best for personal use
              </div>
              <div className="text-2xl font-bold mb-1">$110</div>
              <div className="text-sm text-gray-500 mb-4">
                /Monthly — One-time processing fee $110 (U.P. $155/month)
              </div>
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>✔ No Processing Fee</li>
                <li>✔ Free 2 Guest Pass Every Month</li>
              </ul>
              <button className="bg-orange-400 text-white w-full py-2 rounded-md font-medium">
                Get started
              </button>
            </div>

            {/* Junior Monthly */}
            <div className="border rounded-lg p-6 text-left shadow-md relative">
              <div className="absolute top-4 right-4 bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full">
                Special Offer
              </div>
              <div className="text-lg font-semibold mb-1">Junior</div>
              <div className="text-sm text-gray-500 mb-4">
                Best for personal use
              </div>
              <div className="text-2xl font-bold mb-1">$20</div>
              <div className="text-sm text-gray-500 mb-4">/Monthly</div>
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>
                  ✔ Access to all facilities only on weekday from 9–5pm (excl.
                  PH, Sat & Sun)
                </li>
                <li>✔ Free 2 Guest Pass Every Month</li>
              </ul>
              <button className="bg-orange-400 text-white w-full py-2 rounded-md font-medium">
                Get started
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Standard Yearly */}
            <div className="border rounded-lg p-6 text-left shadow-md">
              <div className="text-lg font-semibold mb-1">Standard</div>
              <div className="text-sm text-gray-500 mb-4">
                Best for personal use
              </div>
              <div className="text-2xl font-bold mb-1">$1320</div>
              <div className="text-sm text-gray-500 mb-4">/year</div>
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>✔ 2 guest pass every month</li>
                <li>✔ Free 2 Guest Pass Every Month</li>
              </ul>
              <button className="bg-orange-400 text-white w-full py-2 rounded-md font-medium">
                Get started
              </button>
            </div>

            {/* Junior Yearly */}
            <div className="border rounded-lg p-6 text-left shadow-md relative">
              <div className="absolute top-4 right-4 bg-blue-100 text-blue-500 text-xs px-2 py-1 rounded-full">
                Special Offer
              </div>
              <div className="text-lg font-semibold mb-1">Junior</div>
              <div className="text-sm text-gray-500 mb-4">
                Best for personal use
              </div>
              <div className="text-2xl font-bold mb-1">$200</div>
              <div className="text-sm text-gray-500 mb-4">/year</div>
              <ul className="text-sm text-gray-700 mb-6 space-y-1">
                <li>
                  ✔ Access to all facilities only on weekday from 9–5pm (excl.
                  PH, Sat & Sun)
                </li>
                <li>✔ Free 2 Guest Pass Every Month</li>
              </ul>
              <button className="bg-orange-400 text-white w-full py-2 rounded-md font-medium">
                Get started
              </button>
            </div>
          </>
        )}
      </div>

      {/* Trial */}
      <div className="bg-blue-50 rounded-lg p-4 mb-6 text-left text-sm">
        <div className="text-center text-xs text-blue-500 font-semibold mb-2">
          Skeptical? Try Our Trial Package
        </div>
        <div className="border rounded-lg p-4 flex flex-col md:flex-row items-center justify-between bg-white shadow-sm">
          <div className="text-xl font-semibold">$100</div>
          <div className="text-sm text-gray-500 mb-2 md:mb-0">
            / 3 Month Package
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-center text-sm text-gray-700">
            <span>✔ No lock-in</span>
            <span>✔ Test access</span>
          </div>
          <button className="bg-orange-400 text-white px-4 py-2 rounded-md mt-2 md:mt-0">
            Get Started
          </button>
        </div>
      </div>

      {/* Next Button */}
      <button className="bg-[#00B6EC] text-white w-full py-3 rounded-lg text-base font-semibold">
        Next
      </button>
    </div>
  );
}

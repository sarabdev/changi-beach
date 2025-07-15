import React, { useState } from "react";

export default function FamilyPackage() {
  const [activeTab, setActiveTab] = useState("Monthly");

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-[20px] px-6 sm:px-12 py-10 shadow-lg text-center mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">Choose Your Package</h2>

      {/* Tabs */}
      <div className="flex justify-center space-x-3 mb-10">
        {["Monthly", "3 Month", "Yearly"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              activeTab === tab
                ? "bg-orange-400 text-white"
                : tab === "3 Month"
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-gray-100 text-gray-600"
            }`}
            disabled={tab === "3 Month"} // Based on your UI
          >
            {tab} {tab === "3 Month" && <span className="ml-1 text-xs">Limited</span>}
          </button>
        ))}
      </div>

      {/* Package Card */}
      {activeTab === "Monthly" && (
        <div className="mx-auto max-w-md bg-white border rounded-xl p-6 shadow-md text-left">
          <h3 className="text-lg font-semibold mb-1">Family</h3>
          <p className="text-sm text-gray-500 mb-4">Best for personal use</p>
          <p className="text-3xl font-bold mb-1">$110 <span className="text-base font-medium">/Monthly</span></p>
          <p className="text-xs text-gray-500 mb-4">No processing fee</p>

          <div className="bg-gray-100 text-[10px] text-gray-600 px-3 py-2 rounded mb-5 w-fit">
            $55/month for each additional immediate family member*
          </div>

          <p className="text-sm font-semibold mb-2">What you get:</p>
          <ul className="text-sm text-gray-700 space-y-1 mb-6">
            <li>✓ No Processing Fee</li>
            <li>✓ Free 2 Guest Pass Every Month</li>
          </ul>

          <button className="bg-orange-400 text-white w-full py-3 rounded-lg text-base font-semibold hover:bg-orange-500">
            Get started
          </button>
        </div>
      )}
    </div>
  );
}

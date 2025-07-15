import React, { useState } from "react";

const packages = {
  monthly: {
    title: "Standard",
    subtitle: "Best for personal use",
    price: "$110",
    suffix: "/Monthly",
    note: "1 Time Processing Fee: $110 (U.P $155/month)",
    features: ["No Processing Fee", "Free 2 Guest Pass Every Month"],
  },
  quarterly: {
    title: "Senior",
    subtitle: "Best for personal use",
    price: "$80",
    suffix: "Quarterly",
    note: "$220 Processing Fee",
    features: ["Senior-friendly wellness", "daytime-only access"],
    special: true,
  },
  yearly: {
    title: "Standard",
    subtitle: "Best for personal use",
    price: "$1320",
    suffix: "/year",
    note: "No Processing fee",
    features: ["2 guest pass every month", "Free 2 Guest Pass Every Month"],
  },
};

export default function IndividualSeniorPackage() {
  const [selected, setSelected] = useState("monthly");

  const renderTabs = () => (
    <div className="flex justify-center mb-4 space-x-4">
      {["monthly", "quarterly", "yearly"].map((key) => (
        <button
          key={key}
          onClick={() => setSelected(key)}
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            selected === key
              ? "bg-orange-400 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {key === "monthly" && "Monthly"}
          {key === "quarterly" && (
            <span>
              3 Month <span className="text-xs text-sky-500">Limited</span>
            </span>
          )}
          {key === "yearly" && "Yearly"}
        </button>
      ))}
    </div>
  );

  const pkg = packages[selected];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 bg-white rounded-[20px] shadow">
      <h2 className="text-center text-xl font-semibold mb-6">
        Choose Your Package
      </h2>
      {renderTabs()}

      {/* Main Package Card */}
      <div className="mx-auto max-w-sm bg-white rounded-lg shadow p-6 border mb-6 relative">
        <h3 className="text-lg font-bold">{pkg.title}</h3>
        <p className="text-sm text-gray-500">{pkg.subtitle}</p>
        <div className="mt-3 text-2xl font-bold">{pkg.price}</div>
        <div className="text-sm text-gray-600">{pkg.suffix}</div>
        <p className="text-xs text-gray-400 mt-1">{pkg.note}</p>
        {pkg.special && (
          <div className="absolute top-4 right-4 text-xs text-sky-500 font-medium bg-sky-100 px-2 py-0.5 rounded-full">
            Special Offer
          </div>
        )}
        <div className="mt-4 space-y-1 text-sm text-gray-700">
          {pkg.features.map((feat, i) => (
            <div key={i} className="flex items-center space-x-2">
              <span className="text-blue-500">✔</span>
              <span>{feat}</span>
            </div>
          ))}
        </div>
        <button className="mt-6 w-full bg-orange-400 text-white py-2 rounded-lg font-medium">
          Get started
        </button>
      </div>

      {/* Trial Package */}
      <div className="bg-blue-50 border rounded-lg p-4 text-sm text-center mb-4">
        <p className="text-sky-500 mb-2">Skeptical? Try Our Trial Package</p>
        <div className="flex items-center justify-between px-4 text-black font-semibold">
          <span>$100 / 3 Month Package</span>
          <span>✔ No Processing Fee</span>
          <span>✔ Test access</span>
        </div>
        <button className="mt-2 w-full bg-orange-400 text-white py-2 rounded-lg font-medium">
          Get Started
        </button>
      </div>

      {/* Next Button */}
      <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold text-base">
        Next
      </button>
    </div>
  );
}

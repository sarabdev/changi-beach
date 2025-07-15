import React, { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid"; // Or replace with ✓

const interestOptions = [
  "Gym", "Dance Class", "Creative Workshop", "Bowling", "Tennis", "Pickleball",
  "Table Teniss", "Fitness Classes", "Karaoke", "Scuba Diving", "Pilates & Yoga", "Badminton",
  "Billiard & Snooker", "Swimming", "Squash",
];

const FamilyMembershipForm = () => {
  const [mainForm, setMainForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    occupation: "",
    maritalStatus: "",
  });

  const [familyForms, setFamilyForms] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeSelection, setActiveSelection] = useState(null);
  const [interests, setInterests] = useState([]);

  const handleMainChange = (e) => {
    setMainForm({ ...mainForm, [e.target.name]: e.target.value });
  };

  const handleFamilyChange = (index, e) => {
    const updatedForms = [...familyForms];
    updatedForms[index][e.target.name] = e.target.value;
    setFamilyForms(updatedForms);
  };

  const handleAddClick = () => {
    setShowDropdown((prev) => !prev);
    setActiveSelection(null);
  };

  const handleRelationSelect = (relation) => {
    setActiveSelection(relation);
    setFamilyForms((prev) => [
      ...prev,
      {
        role: relation,
        fullName: "",
        phone: "",
        email: "",
        occupation: "",
        maritalStatus: "",
      },
    ]);
    setShowDropdown(false);
  };

  const toggleInterest = (item) => {
    setInterests((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg">
      <h2 className="text-center font-bold text-xl mb-6">Membership Registration</h2>

      {/* Main Form */}
      <div className="border rounded-lg p-6 space-y-4 shadow-sm">
        <div>
          <label className="block font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={mainForm.fullName}
            onChange={handleMainChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            placeholder="Enter Name"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Mobile Phone Number *</label>
            <input
              type="text"
              name="phone"
              value={mainForm.phone}
              onChange={handleMainChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              placeholder="Enter Number"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              value={mainForm.email}
              onChange={handleMainChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              placeholder="Type Email"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-1">Occupation *</label>
            <input
              type="text"
              name="occupation"
              value={mainForm.occupation}
              onChange={handleMainChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              placeholder="Your Occupation"
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Marital Status *</label>
            <select
              name="maritalStatus"
              value={mainForm.maritalStatus}
              onChange={handleMainChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            >
              <option value="">Select Status</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>
        </div>
      </div>

      {/* Add Family Member Button */}
      <div className="relative mt-6">
        <button
          onClick={handleAddClick}
          className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-4 py-2 w-full rounded"
        >
          Add Family Member +
        </button>

        {/* Dropdown Style List */}
        {showDropdown && (
          <div className="absolute top-[100%] left-0 right-0 mt-2 bg-white border rounded-md shadow-lg overflow-hidden z-10">
            {["Husband", "Wife", "Children"].map((relation) => (
              <div
                key={relation}
                onClick={() => handleRelationSelect(relation)}
                className={`px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 ${
                  activeSelection === relation ? "bg-gray-50" : ""
                }`}
              >
                <span className="text-sm font-medium">{relation}</span>
                {activeSelection === relation && (
                  <CheckIcon className="w-4 h-4 text-blue-500" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Render Family Forms */}
      {familyForms.map((member, index) => (
        <div key={index} className="border rounded-lg p-6 my-6 shadow-sm">
          <h3 className="font-semibold text-lg mb-4">
            Member {index + 2} ({member.role})
          </h3>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={member.fullName}
              onChange={(e) => handleFamilyChange(index, e)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Mobile Phone Number *"
                value={member.phone}
                onChange={(e) => handleFamilyChange(index, e)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={member.email}
                onChange={(e) => handleFamilyChange(index, e)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="occupation"
                placeholder="Occupation *"
                value={member.occupation}
                onChange={(e) => handleFamilyChange(index, e)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              />
              <select
                name="maritalStatus"
                value={member.maritalStatus}
                onChange={(e) => handleFamilyChange(index, e)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm"
              >
                <option value="">Select Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
              </select>
            </div>
          </div>
        </div>
      ))}

      {/* Interest Group */}
      <div className="mt-6">
        <p className="font-semibold mb-3">Interest Group ( You Can Select Multiple ) :</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {interestOptions.map((option) => (
            <label key={option} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={interests.includes(option)}
                onChange={() => toggleInterest(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <div className="mt-10 text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 py-3 rounded-full text-base">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default FamilyMembershipForm;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const [acknowledged, setAcknowledged] = useState(false);

  const handleNext = () => {
    if (acknowledged) {
      navigate("/choose-type");
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-[20px] px-6 sm:px-12 lg:px-20 py-10 shadow-lg text-center">
      <img
        src="/home.png"
        alt="home"
        className="mx-auto mb-6 rounded-md max-w-full"
      />

      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-[#000]">
        Welcome To Changi Beach Club
      </h1>
      <p className="text-base text-gray-600 mb-6">
        We're thrilled to have you join our vibrant community.
      </p>

      <div className="text-left text-[15px] text-gray-800 leading-relaxed space-y-4 mb-6">
        <p>
          Get ready to unwind and enjoy the serene beauty of Changi's coastline
          with access to our exclusive facilities and a range of exciting
          activities. Whether you're looking to relax by the pool, participate
          in water sports, or simply enjoy a delicious meal with stunning sea
          views, Changi Beach Club offers something for everyone.
        </p>

        <p>
          <strong>Changi Beach Club</strong> is launching a membership promotion!
          Term Membership monthly subscriptions are now at $110, exclusive of GST!
          Limited to first 200 members only!
        </p>

        <p>
          For Ordinary memberships, please call CBC at{" "}
          <strong>6546 5215</strong> or email{" "}
          <a
            href="mailto:membershipsales@changibc.org.sg"
            className="text-blue-600 underline font-semibold"
          >
            membershipsales@changibc.org.sg
          </a>
        </p>
      </div>

      <div className="flex items-start gap-3 mb-6 text-sm text-left">
        <input
          type="checkbox"
          id="ack"
          checked={acknowledged}
          onChange={(e) => setAcknowledged(e.target.checked)}
          className="mt-1 accent-[#00B6EC] w-5 h-5 border border-gray-300 rounded cursor-pointer"
        />
        <label htmlFor="ack" className="text-[14px] text-gray-700 cursor-pointer">
          By clicking "Acknowledge", you confirm that you have read, understood,
          and agree to be bound by the{" "}
          <a href="#" className="text-blue-600 underline">
            Terms and Conditions
          </a>
          .
        </label>
      </div>

      <button
        onClick={handleNext}
        disabled={!acknowledged}
        className={`w-full py-3 rounded-lg text-base font-semibold transition ${
          acknowledged
            ? "bg-[#00B6EC] text-white cursor-pointer hover:bg-[#009ccc]"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        Next
      </button>
    </div>
  );
}

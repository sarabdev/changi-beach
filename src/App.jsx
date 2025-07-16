import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./components/Welcome";
import ChooseType from "./components/ChooseType";
import IndividualDob from "./components/IndividualDob";
import IndividudalYoungAdultPackage from "./components/IndividualYoungAdultPackage";
import IndividualSeniorPackage from "./components/IndividualSeniorPackage";
import IndividualJuniorPackage from "./components/IndividualJuniorPackage"; // ✅ New import
import FamilyPackage from "./components/FamilyPackage";
import FamilyMembershipForm from "./components/FamilyMembershipForm";

export default function App() {
  return (
   <>
<div className="space-y-4 text-sm text-gray-800 leading-relaxed text-center font-semibold">
  <p>
    Hi,<br />
    Instead of extending the order delivery time, I kindly request that you allow me to deliver the current work now. You can then take your time to review it with your team over the coming days. You can still request a revision before the review period ends.
  </p>

  <p>
    The reason I prefer this approach is that extending the delivery time may negatively impact my Fiverr profile, as it could appear that the work was not delivered on time.
  </p>

  <p>
    If possible, you could write a message like this on Fiverr to help facilitate the delivery:
  </p>

  <p className="italic pl-4 pr-4 border-l-4 border-gray-300 text-gray-700 text-left font-normal mx-auto max-w-2xl">
    “I have reviewed your work and you can deliver it. We’ll wait and review it with our team next week. If we need to add anything like packages or additional features, we’ll request a revision. Currently, our stakeholder is out of the country.”
  </p>

  <p>
    Once you send this, I’ll proceed to deliver the order. You’ll still have the option to request revisions and extend the review time if needed. I truly appreciate your support and understanding!
  </p>
</div>



   </>
    // <Routes>
    //   {/* Shared layout for all steps */}
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Navigate to="/get-started" replace />} />
    //     <Route path="get-started" element={<Welcome />} />
    //     <Route path="choose-type" element={<ChooseType />} />
    //     <Route path="individual-dob" element={<IndividualDob />} />
    //     <Route
    //       path="individual-young-adult-packages"
    //       element={<IndividudalYoungAdultPackage />}
    //     />
    //     <Route
    //       path="individual-senior-packages"
    //       element={<IndividualSeniorPackage />}
    //     />
    //     <Route
    //       path="individual-junior-packages"
    //       element={<IndividualJuniorPackage />}
    //     />
    //     <Route path="family-packages" element={<FamilyPackage />} />
    //     <Route path="family-membership" element={<FamilyMembershipForm />} />

    //   </Route>

    //   {/* Fallback route */}
    //   <Route
    //     path="*"
    //     element={
    //       <h1 className="text-center text-red-500 mt-10">
    //         404 - Page Not Found
    //       </h1>
    //     }
    //   />
    // </Routes>
  );
}

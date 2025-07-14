import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Welcome from "./components/Welcome";
import ChooseType from "./components/ChooseType";
import IndividualDob from "./components/IndividualDob";

export default function App() {
  return (
    <Routes>
      {/* Shared layout for all steps */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/get-started" replace />} />
        <Route path="get-started" element={<Welcome />} />
        <Route path="choose-type" element={<ChooseType />} />
        <Route path="individual-dob" element={<IndividualDob />} />
      </Route>

      {/* Fallback route (optional) */}
      <Route path="*" element={<h1 className="text-center text-red-500 mt-10">404 - Page Not Found</h1>} />
    </Routes>
  );
}

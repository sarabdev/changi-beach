import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="bg-white flex justify-center items-center h-20 shadow-sm">
        <img src="/logo.png" alt="logo" className="h-10" />
      </nav>

      {/* Blue Section */}
      <div className="bg-[#00B6EC] py-12 px-4 sm:px-6 lg:px-8">
        {/* Dynamic Page Content */}
        <Outlet />

        {/* Google Maps Embed */}
        <div className="max-w-6xl mx-auto mt-8 rounded-[20px] overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.197029060568!2d103.96914532057112!3d1.3901120491250427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1abf48b74b95%3A0x4698ad234ff19b9b!2sChangi%20Beach%20Club!5e0!3m2!1sen!2sg!4v1720959600000!5m2!1sen!2sg"
            width="100%"
            height="300"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[300px] border-0"
          ></iframe>
        </div>

        {/* Contact Info */}
        <div className="max-w-6xl mx-auto mt-8 bg-white rounded-[20px] shadow-md p-6 sm:p-10 text-sm">
          <div className="flex flex-wrap justify-between items-center gap-y-2">
            <div className="font-semibold">Main Contact :</div>
            <div className="flex-1 px-2">2 Andover Road Singapore 509984</div>
            <div className="text-blue-600">enquiries@changibc.org.sg</div>
          </div>

          <hr className="my-4" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <div className="font-semibold mb-1">Facilities Opening Hours:</div>
              <div>8am to 10pm</div>
              <div className="font-semibold mt-4 mb-1">Office Opening Hours :</div>
              <div>9am to 6pm</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Main Reception</div>
              <div>6546 51215</div>
              <div>6546 51216</div>
            </div>
            <div>
              <div className="font-semibold mb-1">Memberships</div>
              <div>6546 5204</div>
              <div>6546 5209</div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <div>
                <div className="font-semibold mb-1">Sport Complex</div>
                <div>6546 5225</div>
              </div>
              <a
                href="https://www.google.com/maps/place/Changi+Beach+Club/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-[#00B6EC] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#00a0ce] transition"
              >
                Open Google Map
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white pt-6 pb-10 text-sm text-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <img src="/logo.png" alt="logo" className="mx-auto h-10 mb-2" />
          <p className="mb-4">Delivering the perfect getaway moments with every visit.</p>
          <hr className="border-gray-300 mb-4" />
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
            <p className="text-center sm:text-left">
              © 2025 Changi Beach Club. All rights reserved.
            </p>
            <div className="flex gap-4 text-[#00B6EC] text-lg">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

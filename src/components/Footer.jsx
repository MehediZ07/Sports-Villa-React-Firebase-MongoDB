import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="bg-base-100 text-gray-400 border-t border-gray-200 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
        <div className="col-span-2">
          <Link
            to="/"
            className="btn -mt-4 bg-transparent hover:bg-transparent border-none p-2"
          >
            <img className="h-10 " src={logo} alt="Logo" />
          </Link>
          <p className="text-sm">
            Sentiments two occasional affronting solicitude travelling and one
            contrasted fortune day.
          </p>
          <div className="mt-4 space-y-1">
            <div className="flex items-center space-x-2">
              <span className="material-icons text-gray-600">
                Week-day Open
              </span>
              <span>Mon - Fri: 9AM - 10PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="material-icons text-gray-600">Weekend Open</span>
              <span>Sat-Sun: 10AM - 8PM</span>
            </div>
          </div>
          <div className="mt-4 flex space-x-2">
            <img
              src="https://i.ibb.co.com/VtYqmCb/download.jpg"
              alt="Visa"
              className="w-8"
            />
            <img
              src="https://i.ibb.co.com/VgbYCjs/download.jpg"
              alt="Mastercard"
              className="w-8"
            />
            <img
              src="https://i.ibb.co.com/jLGbvfT/download.jpg"
              alt="Apple Pay"
              className="w-8"
            />
            <img
              src="https://i.ibb.co.com/bBKyp7M/th.jpg"
              alt="Google Pay"
              className="w-8"
            />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Our stores
          </h3>
          <ul className="space-y-2 text-sm">
            <li>New York</li>
            <li>London SF</li>
            <li>Cockfosters BP</li>
            <li>Los Angeles</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Privacy Policy
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/policies">Warranty Policy</Link>
            </li>
            <li>
              <Link to="/policies">Return Policy</Link>
            </li>
            <li>
              <Link to="/policies">Refund Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Properties
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Commercial</li>
            <li>House</li>
            <li>Office</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-4">
            Our Instagram
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            <img
              src="https://i.ibb.co.com/PzfCZYX/blob.jpg"
              alt="Instagram"
              className="w-full h-16 object-cover rounded-md"
            />
            <img
              src="https://i.ibb.co.com/tXN0qTB/OIP.jpg"
              alt="Instagram"
              className="w-full h-16 object-cover rounded-md"
            />
            <img
              src="https://i.ibb.co.com/Y0hr8BW/OIP.jpg"
              alt="Instagram"
              className="w-full h-16 object-cover rounded-md"
            />
            <img
              src="https://i.ibb.co.com/Y0hr8BW/OIP.jpg"
              alt="Instagram"
              className="w-full h-16 object-cover rounded-md"
            />
            <img
              src="https://i.ibb.co.com/VN90y4B/OIP.jpg"
              alt="Instagram"
              className="w-full h-16 object-cover rounded-md"
            />
            <img
              src="https://i.ibb.co.com/DrwHLhZ/OIP.jpg"
              alt="Instagram"
              className="w-full h-16 object-cover rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="divider"></div>

      <div className=" text-gray-500 py-4 col-span-2 md:col-span-1">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            &copy; 2024 Sports Villa. Created by Mehedi Zaman Fahim Studio
          </p>
          <div className="flex space-x-4 items-center cursor-pointer">
            <span className="text-gray-500 text-sm cursor-default">
              Our Social Links:
            </span>
            <a href="https:https://www.facebook.com/">
              <img
                src="https://i.ibb.co.com/smtYcjb/img-icons8.png"
                alt="Facebook"
                className="w-8 h-8 object-cover"
              />
            </a>
            <a href="https://www.instagram.com/">
              <img
                src="https://i.ibb.co.com/QdfnqRc/img-icons8.png"
                alt="Instagram"
                className="w-8 h-8 object-cover"
              />
            </a>
            <a href="https://x.com/?mx=2">
              <img
                src="https://i.ibb.co.com/k4n5kRq/img-icons8.png"
                alt="X"
                className="w-8 h-8 object-cover"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                src="https://i.ibb.co.com/NjMMWSL/img-icons8.png"
                alt="Youtube"
                className="w-8 h-8 object-cover"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

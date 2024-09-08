// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import the specific icon (faPhone) from the free solid icons
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  const handleSubmit = () => {};
  return (
    <>
      <footer className="bg-[#60697b19] py-20 mt-20">
        <div className="container mx-auto max-w-[1170px] px-6">
          <div className="flex flex-col md:grid md:grid-cols-2 md:gap-10 lg:grid-cols-4 justify-between text-gray-800">
            <div className="w-full   mb-8 md:mb-0">
              <h4 className="text-xl  relative mb-9 text-black font-semibold">
                About Us
                <span className="absolute left-0 bottom-[-10px] w-2/3 h-[2px] bg-[#002E40]"></span>
              </h4>
              <p>
                Welcome to Structures ltd, We create digital solutions to help
                businesses succeed. To be a global leader in the IT industry,
                renowned for our creativity, technical excellence, and
                commitment to client success. We envision a future where
                businesses thrive through our cutting-edge technology solutions,
                leveraging our expertise to create a seamless and engaging
                digital world
              </p>
            </div>

            <div className="w-full  lg:ml-20 mb-8 md:mb-0">
              <h4 className="text-xl relative mb-9 font-semibold  text-black">
                Navigations
                <span className="absolute left-0 bottom-[-10px] w-1/2 h-[2px] bg-[#002E40]"></span>
              </h4>
              <ul>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="hover:pl-2 transition-all"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/services"
                    className="hover:pl-2 transition-all"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/courses"
                    className="hover:pl-2 transition-all"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Courses
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/Aboutus"
                    className="hover:pl-2 transition-all"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/Contactus"
                    className="hover:pl-2 transition-all"
                    onClick={() => window.scrollTo(0, 0)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full   mb-8 md:mb-0">
              <h4 className="text-xl font-semibold  text-black relative mb-9">
                Working Hours
                <span className="absolute left-0 bottom-[-10px] w-1/2 h-[2px] bg-[#002E40]"></span>
              </h4>
              <h5 className="font-semibold mb-2">Monday - Friday</h5>
              <p className="mb-3">9:00AM - 6:00PM</p>
              <h5 className="font-semibold mb-2">Saturday - Sunday</h5>
              <p className="mb-3">Closed</p>
            </div>

            <div className="w-full  mb-8 md:mb-0">
              <h4 className="text-xl font-semibold  text-black relative mb-9">
                Get in Touch
                <span className="absolute left-0 bottom-[-10px] w-1/2 h-[2px] bg-[#002E40]"></span>
              </h4>
              <p className="mb-4">
                <FontAwesomeIcon icon={faPhone} /> : +92334567892
              </p>
              <p className="mb-4">
                <FontAwesomeIcon icon={faEnvelope} /> : structures@gmail.com
              </p>
            </div>
          </div>
          <div className="md:mt-10 flex flex-col gap-2">
            <h1 className="font-semibold text-lg">Subscribe</h1>
            <p>Stay updated on how future of technology is shaping.</p>
            <form className="flex gap-5 items-center "     onSubmit={handleSubmit}>
              <input
                type="email"
                className="p-3 max-w-2xl w-full sm:w-[30%] focus:outline-slate-500 border-2 border-slate-400 rounded-lg"
                placeholder="Enter email here"
                required
              />
              <button
              
                className="border-4 hover:bg-black hover:text-white p-[0.8rem] rounded-xl transition-all"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigation = useNavigate();

  const Menu = [
    {
      name: "Home",
      routes: "/",
    },
    {
      name: "Services",
      routes: "/services",
    },
    {
      name: "Courses",
      routes: "/courses",
    },
    {
      name: "About",
      routes: "/aboutus",
    },
    {
      name: "Contact",
      routes: "/contactus",
    },
  ];

  const navigate = () => {
    navigation("/");
  };

  return (
    <div className=" ">
      <div className="absolute  z-50     mx-auto  ">
        <div className=" mx-auto  sm:px-16  lg:flex lg:items-center lg:justify-between   px-6 ">
          <div className="flex justify-between items-center md:gap-60">
            <img
              className="uppercase font-bold  text-white    cursor-pointer w-[80%] md:w-[50%] lg:w-[80%] xl:w-[90%] py-2"
              src={logo}
              onClick={navigate}
            />
            <div
              className="text-3xl lg:hidden 
               text-white
               "
              onClick={() => setOpen(!open)}
            >
              <FontAwesomeIcon icon={open ? faXmark : faBars} />
            </div>
          </div>
          <div className="">
            <ul className="lg:flex hidden lg:flex-row xl:text-[1.3vw]  lg:items-center lg:justify-between lg:gap-10 py-5    ">
              {Menu.map((link, index) => (
                <li key={index} className="relative group ">
                  <Link
                    to={link.routes}
                    className="flex items-center font-Poppins text-white hover:text-[#809320]"
                  >
                    {link.name}
                    {/* {(index === 1 || index === 2) && (
                                        <FontAwesomeIcon icon={faCaretDown} className="ml-2 group-hover:rotate-180" />
                                    )} */}
                  </Link>
                  {/* {(index === 1 || index === 2) && (
                                    <ul className="bg-white p-4 absolute     top-full hidden max-h-64 overflow-y-auto group-hover:block shadow-lg rounded-lg w-[30vw] ">
                                        {Data.map((links, index2) => (
                                            <li key={index2} className="px-4 py-2 hover:bg-gray-100">
                                                <Link to={`${link.routes}${links.routes}`}>
                                                    {links.Service}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )} */}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block     xl:ml-20">
            <input
              type="text"
              placeholder="Search"
              className="border-2 rounded-2xl font-Poppins border-[#809320] px-4 py-2 ml-10    "
            />
          </div>
        </div>
        {/* mobile nav */}
        <div className=" relative   z-10  ">
          <ul
            className={`lg:hidden w-[90vw] xs:w-[70vw] pl-10 flex bg-white rounded-xl flex-col absolute justify-between gap-5 py-10 duration-500 text-[#002E40] font-Poppins  ${
              open ? "left-0 " : "left-[-100%]"
            }`}
          >
            {Menu.map((link, index) => (
              <li key={index} className="relative group">
                <Link to={link.routes} className="flex items-center"  onClick={() => setOpen(!open)}>
                  {link.name}
                  {/* {(index === 1 || index === 2) && (
                                        <FontAwesomeIcon icon={faCaretDown} className="ml-2 group-hover:rotate-180" />
                                    )} */}
                   

                </Link>
                {/* {(index === 1 || index === 2) && (
                                    <ul className="absolute hidden group-hover:block bg-blue-600 shadow-lg rounded-lg top-32 py-2  max-h-80 overflow-y-auto w-56    ">
                                        {Data.map((links, index2) => (
                                            <li key={index2} className="px-4 py-2 ">
                                                <Link to={`${link.routes}${links.routes}`}>
                                                    {links.Service}
                                                </Link>
                                            </li>
                                        ))
                                        }
                                    </ul>
                                )} */}
              </li>
            ))}
            <div className="block lg:hidden">
              <input
                type="text"
                placeholder="Search"
                className="border-2 rounded-2xl font-Poppins border-[#809320]  px-4 py-2 max-sm:w-[70%]"
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

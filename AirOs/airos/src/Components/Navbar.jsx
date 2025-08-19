import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const fetchUserData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/user", {
        withCredentials: true,
      });

      setUserData(response.data);
      dispatch(addUser({ loggedInUser: response.data }));
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setUserData(null);
    }
  };
  useEffect(() => {
    fetchUserData();
  }, [navigate]);
  const handleSignInClick = () => {
    window.location.href = "http://localhost:8080/auth/google";
  };
  const HandleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:8080/logout",
        {},
        {
          withCredentials: true,
        }
      );

      setUserData(null);
      dispatch(removeUser);
      window.location.reload();
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  return (
    <nav className="w-full bg-[#122] px-4 md:px-6 lg:px-24 py-4">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-[#FFF] text-2xl md:text-[30.6px] font-bold font-['Nunito Sans']">
            Amirtham radio
          </span>
          <span className="text-[#C8C6C5] text-2xl md:text-[37.8px] font-bold font-['Nunito Sans']">
            logo
          </span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-10 ">
          {[
            { name: "Home", path: "/" },
            { name: "Donate", path: "/donate" },
            { name: "About", path: "/about" },
            { name: "Live", path: "/live" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-[#FFF] text-[16px] font-medium font-['Nunito Sans'] leading-[22.4px] tracking-[-0.32px] hover:text-gray-600 transition-colors"
              style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Section */}

        <div className="flex  justify-between items-center  gap-5 md:gap-7">
          {/* Language Selector */}
          <div className="w-0 h-2.5 origin-top-left  outline outline-[0.84px] outline-offset-[-0.42px] outline-neutral-400" />
          <div className="hidden md:flex items-center justify-center gap-2 h-[35px]">
            <span className="text-[#FFF] font-['Imprima'] text-lg">EN</span>
          </div>

          {/* Play Radio Button */}
          <button className="w-full md:w-auto md:px-4 md:py-3 bg-[#F2EEE9] border-[3px] border-[#E8E4E1] rounded-[26.413px] flex justify-center items-center h-[35px]">
            <span className="px-2 text-[#000] font-[Inter] text-[16px] font-semibold leading-[120%] tracking-[-0.32px] not-italic md:text-base">
              Play Radio
            </span>
          </button>
          {/* Sign In */}
          <div className="px-3 py-[3px] bg-white rounded-full inline-flex items-center gap-2 cursor-pointer hover:bg-[#FECC30] group transition-all duration-200">
            {userData ? (
              <div className="relative group">
                <div className="flex items-center gap-2">
                  {/* User Avatar/Icon - Modern circle design */}
                  <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
                    {userData.avatar ? (
                      <img
                        src={userData.avatar}
                        alt={userData.username}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-600"
                      >
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    )}
                  </div>

                  {/* Username with smooth transition */}
                  <span className="text-black text-sm font-medium font-['Nunito Sans'] hidden md:inline-block transition-all duration-200 group-hover:text-gray-800">
                    {userData.username}
                  </span>

                  {/* Chevron icon for dropdown indication */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-500 hidden md:block transition-transform duration-200 group-hover:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>

                {/* Modern Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl py-1 z-50 hidden group-hover:block border border-gray-100">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-900">
                      {userData.username}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {userData.email}
                    </p>
                  </div>
                  <button
                    onClick={HandleLogout}
                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors duration-150"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={handleSignInClick}
                className="flex items-center gap-2 group "
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-600"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <span className="text-black text-sm font-medium font-['Nunito Sans'] hidden md:inline-block transition-all duration-200 group-hover:text-gray-800 ">
                  Sign in
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

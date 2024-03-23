import React from 'react'
import { Link, Navigate, useHistory } from 'react-router-dom'
import { FaUserAlt, FaSearch } from 'react-icons/fa' // Import FaSearch icon
import { BsCartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { IoIosNotifications } from "react-icons/io";


function Header() {
  const userData = useSelector((state) => state.user)
  console.log(userData.email)
  const dispatch = useDispatch()

  const [showOptions, setShowOptions] = useState(false);

  const handleButtonClick = () => {
    setShowOptions(!showOptions); // Toggle the showOptions state
  };

  // Function to handle the click on the post option
  const handlePostOptionClick = () => {
    window.location.href = '/newproduct';
    setShowOptions(false); // Hide the options after clicking
  };

  return (
    <header className="fixed shadow-md w-full h-20 px-2 z-50 bg-blue-500">
      {/* desktop */}
      <div className="flex items-center h-full justify-between sticky-top ">
        <Link to={"/"}>
          <div className="h-20">
            <img src="https://thumbs.dreamstime.com/b/letter-tt-logo-design-initial-logotype-template-business-company-261892216.jpg" className="h-full" alt="logo" />
          </div>
        </Link>
        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='flex gap-4 md:gap-7 text-2xl'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>ExpoS</Link>
            <Link to={"contact"}>AboutUs</Link>
            <Link to={"newproduct"}>
              <button
                onClick={handlePostOptionClick}
              >
                Post
              </button>
            </Link>
            <Link to={"job"}>PostJob</Link>
            <Link to={"searchjob"}>SearchJobs</Link>
            <Link to={"about"}>DAO</Link>
            {/* <Link to={"newproduct"}>POST+</Link> */}
            {userData.username ? (
              <p>logout</p>) :(
                <Link to={"login"}>login</Link>
            )}
            
            {
              userData.email===process.env.REACT_APP_ADMIN &&
              <Link to={"newproduct"}>Newproduct</Link>
            }
          </nav>

          {/* Search Bar with Icon */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>

          <div className="text-4xl text-slate-600 relative ">
          <IoIosNotifications />
            <div className='absolute -top-1 -right-1 text-white bg-red-400 h-6 rounded-full text-xl '>0</div>
          </div>

          <div className="flex items-center gap-2 ">
            <div className="text-4xl text-white">
              {userData.username && (
                <Link to={"profile"} className="hover:text-gray-200">
                  <FaUserAlt />
                </Link>
              )}
            </div>
            <div className="relative">
              <button
                onClick={handleButtonClick}
                className="flex items-center hover:text-gray-200 focus:outline-none"
              >
              </button>
              {showOptions && (<div
                  className="absolute right-0 top-10 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                >
                  <button
                    onClick={handlePostOptionClick}
                    className="menu-item block w-full px-4 py-2 text-left text-sm capitalize"
                  >
                    Post
                  </button>
                  {/* More menu items go here */}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
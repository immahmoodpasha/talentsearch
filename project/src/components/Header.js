// import React from 'react'
// import { Link } from 'react-router-dom'
// import {FaUserAlt} from 'react-icons/fa'
// import {BsCartFill} from 'react-icons/bs'
// import { useDispatch, useSelector } from 'react-redux'
// function Header() {
//   const userData=useSelector((state)=>state.user)
//   console.log(userData.email)
//   const dispatch=useDispatch()
//   return (
//     <header className="fixed shadow-md w-full h-20 px-2 z-50 bg-blue-500">
//       {/* desktop */}
//       <div className="flex items-center h-full justify-between sticky-top ">
//         <Link to={"/"}>
//         <div className="h-20">
//           <img src="https://t3.ftcdn.net/jpg/03/33/90/46/360_F_333904627_tnCepUpc3Uynb6stmEbverr8HeWS2VZl.jpg" className="h-full" />
//         </div>
//         </Link>
//         <div className='flex items-center gap-4 md:gap-7'>
//           <nav className='flex gap-4 md:gap-7 text-2xl'>
//             <Link to={""}>Home</Link>
//             <Link to={"menu"}>ExpoS</Link>
//             <Link to={"about"}>About</Link>
//             <Link to={"contact"}>contact</Link>
//             <Link to={"newproduct"}>POST+</Link>
//             <Link to={"login"}>login</Link>
//             {/* {
//               userData.email===process.env.REACT_APP_ADMIN &&
//               <Link to={"newproduct"}>Newproduct</Link>
//             } */}
           
            
            

//           </nav>
//         <div className='text-4xl text-slate-600 relative '>
//           <BsCartFill/>
//           <div className='absolute -top-1 -right-1 text-white bg-red-400 h-6 rounded-full text-xl '>0</div>
//         </div>

//         <div className='text-4xl text-red-600'>
//           <FaUserAlt/>
//         </div>



//         </div>
        
//       </div>



//     </header>
//   )
// }

// export default Header



import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserAlt, FaSearch } from 'react-icons/fa' // Import FaSearch icon
import { BsCartFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'

function Header() {
  const userData = useSelector((state) => state.user)
  console.log(userData.email)
  const dispatch = useDispatch()

  return (
    <header className="fixed shadow-md w-full h-20 px-2 z-50 bg-blue-500">
      {/* desktop */}
      <div className="flex items-center h-full justify-between sticky-top ">
        <Link to={"/"}>
          <div className="h-20">
            <img src="https://t3.ftcdn.net/jpg/03/33/90/46/360_F_333904627_tnCepUpc3Uynb6stmEbverr8HeWS2VZl.jpg" className="h-full" alt="logo" />
          </div>
        </Link>
        <div className='flex items-center gap-4 md:gap-7'>
          <nav className='flex gap-4 md:gap-7 text-2xl'>
            <Link to={""}>Home</Link>
            <Link to={"menu"}>ExpoS</Link>
            <Link to={"about"}>About</Link>
            <Link to={"contact"}>contact</Link>
            <Link to={"newproduct"}>POST+</Link>
            <Link to={"login"}>login</Link>
            {/* {
              userData.email===process.env.REACT_APP_ADMIN &&
              <Link to={"newproduct"}>Newproduct</Link>
            } */}
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

          <div className='text-4xl text-slate-600 relative '>
            <BsCartFill />
            <div className='absolute -top-1 -right-1 text-white bg-red-400 h-6 rounded-full text-xl '>0</div>
          </div>

          <div className='text-4xl text-red-600'>
            <FaUserAlt />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
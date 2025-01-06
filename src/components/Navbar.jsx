// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <header className="flex justify-between items-center p-6 bg-white shadow-md">
//       <div className="text-2xl font-bold">LOGO</div>
//       <nav className="space-x-6 text-gray-600">
//         <Link to="/" className="hover:text-blue-500">Home</Link>
//         <Link to="/about" className="hover:text-blue-500">About Us</Link>
//         <Link to="/internships" className="hover:text-blue-500">Internships</Link>
//         <Link to="/profile" className="hover:text-blue-500">My Profile</Link>
//         <Link to="/contact" className="hover:text-blue-500">Contact</Link>
//       </nav>
//       {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Join For Free</button> */}
//       <button className="flex items-center justify-between bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
//       <span>Join For Free</span>
//       <div className="flex items-center justify-center w-6 h-6 bg-white rounded-lg ms-2">
//         <span className="text-black text-lg">&#8250;</span>
//       </div>
//     </button>
//     </header>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";



function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const handlenav = () => {
    navigate('/WebDev');
  };

  return (
    <nav className=" px-4 py-3 shadow-md">
      <div className="container mx-auto flex justify-around items-center">
        <Link to="/" className="text-2xl font-bold">
          Logo
        </Link>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link to="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-700">
              About Us
            </Link>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="hover:text-gray-700">
              Internships
              <span className="ml-2">▼</span>
            </button>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0 bg-white text-black shadow-lg mt-1 rounded">
                <li>
                  <Link
                    to="/WebDev"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                   {/* <div onClick={handlenav}>Web Development</div>  */}
                </li>
                <li>
                  <Link
                    to="/internships/data-science"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internships/design"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    to="/internships/Webdev"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link to="/" className="block px-4 py-2  hover:bg-gray-100">
                    Java
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/profile" className="hover:text-gray-700">
              My Profile
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-700">
              Contact
            </Link>
          </li>
        </ul>
        <button className="flex items-center justify-between bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300">
       <span>Join For Free</span>
       <div className="flex items-center justify-center w-6 h-6 bg-white rounded-lg ms-2">
         <span className="text-black text-lg">&#8250;</span>
      </div>
     </button>
      </div>
    </nav>
  );
};

export default Navbar;

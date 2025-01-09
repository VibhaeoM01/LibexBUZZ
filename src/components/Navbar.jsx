
import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";



function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const handlenav = () => {
    navigate('/login');
  };
  const handlenav1 = () => {
    navigate('/signup');
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
                    to="/course/webdev"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                   {/* <div onClick={handlenav}>Web Development</div>  */}
                </li>
                <li>
                  <Link
                    to="/course/data-science"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/ui-ux"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    UI UX
                  </Link>
                </li>
                <li>
                  <Link
                    to="/course/machine-learning"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Machine Learning
                  </Link>
                </li>
                <li>
                  <Link to="/course/java" className="block px-4 py-2  hover:bg-gray-100">
                    Java
                  </Link>
                </li>
                <li>
                  <Link to="/course/artificial-intelligence" className="block px-4 py-2  hover:bg-gray-100">
                    Artificial Intelligence
                  </Link>
                </li>
                <li>
                  <Link to="/course/python" className="block px-4 py-2  hover:bg-gray-100">
                    Python
                  </Link>
                </li>
                <li>
                  <Link to="/course/cybersecurity" className="block px-4 py-2  hover:bg-gray-100">
                    Cyber Security
                  </Link>
                </li>

              </ul>
            )}
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-700">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-700">
              Contact
            </Link>
          </li>
        </ul>
      
    <div className="flex gap-10">
    <button onClick={handlenav} className="rounded-lg py-3 px-4 border" style={{ border: '1px solid #674CEF' }}>
      Login
    </button>
     <button  onClick={handlenav1} className=" bg-[#674CEF] rounded-lg  text-white py-3 px-4  border border: 1px solid #674CEF;">
            Signup
     </button>
    </div>
      </div>
    </nav>
  );
};

export default Navbar;

//Updated Navbar - Made for automate routing and signout purpose {included login functionality} 

// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

// function Navbar() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [user, setUser] = useState(null); // Tracks user state
//   const navigate = useNavigate();
//   const auth = getAuth();

//   // Check for user authentication status
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       setUser(currentUser);
//     });
//     return () => unsubscribe();
//   }, [auth]);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {
//         setUser(null);
//         navigate("/"); // Redirect to home page
//       })
//       .catch((error) => {
//         console.error("Sign-out error:", error);
//       });
//   };

//   return (
//     <nav className="px-4 py-3 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="text-2xl font-bold">
//           Logo
//         </Link>
//         <ul className="flex space-x-6 items-center">
//           <li>
//             <Link to="/" className="hover:text-gray-700">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/about" className="hover:text-gray-700">
//               About Us
//             </Link>
//           </li>
//           <li
//             className="relative"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <button className="hover:text-gray-700">
//               Internships
//               <span className="ml-2">▼</span>
//             </button>
//             {isDropdownOpen && (
//               <ul className="absolute top-full left-0 bg-white text-black shadow-lg mt-1 rounded">
//                 <li>
//                   <Link
//                     to="/course/webdev"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Web Development
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/course/data-science"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Data Science
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/course/ui-ux"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     UI UX
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/course/machine-learning"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Machine Learning
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/course/java"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Java
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/course/artificial-intelligence"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Artificial Intelligence
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/course/python"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Python
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/course/cybersecurity"
//                     className="block px-4 py-2 hover:bg-gray-100"
//                   >
//                     Cyber Security
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link to="/profile" className="hover:text-gray-700">
//               Blogs
//             </Link>
//           </li>
//           <li>
//             <Link to="/contact" className="hover:text-gray-700">
//               Contact
//             </Link>
//           </li>
//         </ul>

//         {/* User Authentication Check */}
//         <div className="flex items-center gap-4">
//           {user ? (
//             <div className="relative">
//               <button
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                 className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"
//               >
//                 {user.photoURL ? (
//                   <img
//                     src= "/public/Images/logo.png"
//                     alt="Profile"
//                     className="w-10 h-10 rounded-full"
//                   />
//                 ) : (
//                   <span>{user.displayName?.charAt(0).toUpperCase()}</span>
//                 )}
//                 <span className="ml-1">▼</span> {/* Separate down arrow */}
//               </button>
//               {isDropdownOpen && (
//                 <ul className="absolute right-0 mt-2 w-32 bg-white text-black shadow-lg rounded">
//                   <li>
//                     <button
//                       className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                       onClick={() => navigate("/dashboard")}
//                     >
//                       My Dashboard
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                       onClick={handleSignOut}
//                     >
//                       Sign Out
//                     </button>
//                   </li>
//                 </ul>
//               )}
//             </div>
//           ) : (
//             <div className="flex gap-4">
//               <button
//                 onClick={() => navigate("/login")}
//                 className="rounded-lg py-3 px-4 border border-gray-400 hover:border-gray-700"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={() => navigate("/signup")}
//                 className="bg-[#674CEF] rounded-lg text-white py-3 px-4 hover:bg-[#543bc5]"
//               >
//                 Signup
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

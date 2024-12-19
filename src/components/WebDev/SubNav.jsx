// import React from 'react';
// import { Routes, Route, Link, Navigate } from 'react-router-dom';

// // SubNav Component
// const SubNav = () => {
//   return (
//     <nav className="flex gap-8 border-b pb-4 mb-6">
//       <Link 
//         to="overview" 
//         className="hover:text-blue-600 font-medium"
//       >
//         Overview
//       </Link>
//       <Link 
//         to="curriculum" 
//         className="hover:text-blue-600 font-medium"
//       >
//         Curriculum
//       </Link>
//       <Link 
//         to="reviews" 
//         className="hover:text-blue-600 font-medium"
//       >
//         Reviews
//       </Link>
//     </nav>
//   );
// };


// export default SubNav


import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = () => {
  return (
    <nav className="flex gap-8 border-b pb-4 mb-6 m-5 text-xl">
      <Link 
        to="/webdev/overview"  // Changed to absolute path
        className="hover:text-blue-600 font-medium"
      >
        Overview
      </Link>
      <Link 
        to="/webdev/curriculum"  // Changed to absolute path
        className="hover:text-blue-600 font-medium"
      >
        Curriculum
      </Link>
      <Link 
        to="/webdev/reviews"  // Changed to absolute path
        className="hover:text-blue-600 font-medium"
      >
        Reviews
      </Link>
    </nav>
  );
};

export default SubNav;
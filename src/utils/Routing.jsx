// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "../components/Navbar"; // Navbar appears globally
// import Home from "../pages/Home";
// import AboutUs from "../pages/AboutUs";
// import Internships from "../pages/Internships";
// import MyProfile from "../pages/MyProfile";
// import Contact from "../pages/Contact";
// import Footer from "../components/Footer";
// import CourseComp from "../pages/CourseComp";

// const Routing = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/internships" element={<Internships />} />
//         <Route path="/profile" element={<MyProfile />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* <Route path="/WebDev/*" element={<CourseComp />} />  */}
//         <Route path="/:name" element={<CourseComp />} />
//         {/* <Route path="/webdev/:wdID/*" element={<WebDev />} /><wdrouting /> */}
//         {/* <Route path="webdev" element=<</Routes>></Route> */}
//       </Routes>
//       <Footer />
//     </>
//   );
// };

// export default Routing;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar"; // Navbar appears globally
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Internships from "../pages/Internships";
import MyProfile from "../pages/MyProfile";
import ContactUs from "../pages/ContactUs";
import Footer from "../components/Footer";
// import WebDev from "../pages/internships/Webdev";
import WebDev from "../pages/CourseComp";
import DataScience from "../pages/internships/DataScience";
import Design from "../pages/internships/Design";
import CourseDetails from "../pages/CoursePage";
import Login from "../pages/Login"
import Payment from "../pages/Payment"
import SignUp from "../pages/SignUp"
import Blog from "../pages/Blogs.jsx";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/course/:courseid" element={<CourseDetails />} />
        <Route path="/internships/data-science" element={<DataScience />} />
        <Route path="/internships/design" element={<Design />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/payment" element={<Payment />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;

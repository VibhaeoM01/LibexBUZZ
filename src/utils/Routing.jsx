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
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import WebDev from "../pages/internships/Webdev";
import DataScience from "../pages/internships/DataScience";
import Design from "../pages/internships/Design";

const Routing = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/internships/web-development" element={<WebDev />} />
        <Route path="/internships/data-science" element={<DataScience />} />
        <Route path="/internships/design" element={<Design />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routing;

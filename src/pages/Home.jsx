import React, { useState } from "react";
import Cards from "../components/Cards";
import Photos from "../components/Photos";
import Counts from "../components/Counts";
import CourseCards from "../components/CourseCards";
import Courses from "../components/Courses";
import Weare from "../components/Weare";
import Testimonials from "../components/Testimonials";
import { useNavigate } from "react-router-dom";


const Home = () => {


const navigate=useNavigate();
const handlenav=()=>{
  navigate('/about');
}

  return (
    <div className="p-10 text-center">
      {/* <h1 className="text-4xl font-bold mb-6">Welcome to Home Page</h1> */}
      {/* <p className="text-gray-600">Explore internship paths and more on our platform!</p> */}
      <div className="font-bold text-6xl">
        <div className="mt-36">Internship Paths To</div>
        <div>Your Dream <span className="text-cyan-400">Career</span></div>
      </div>
      <div className="flex justify-center mt-16">
      <button className="bg-violet-500 py-4 px-5 mb-4 rounded-3xl text-white">Find Course</button>
      </div>
      <Photos />
      <Cards />
      {/* <button>Fetch Data</button> */}






     <div className="flex justify-center">
     <div className="bg-violet-200 flex p-32 rounded-3xl  h-2/3 w-10/12 m-28">
        <div  className="overflow-hidden rounded-xl"><img className="w-full" src="https://images.unsplash.com/photo-1733235014699-d7bcf05ed324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" alt="img" /></div>
        <div className=" mx-16 w-1/2 text-left ml-36">
          <div className="text-left text-orange-500 text-3xl">
            About us
          </div>
          <div className="text-4xl font-extrabold text-left mt-8">
              <span className="text-cyan-400">Training</span> Tailored For Your Success <div>With <span className="text-cyan-400">Libex</span></div>
          </div>
          <div >
           <div className="text-gray-600">
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos reiciendis eos consectetur iusto veniam nulla quam laboriosam repellendus itaque excepturi, in aut nam natus deleniti, odio veritatis placeat expedita optio.
           </div>
            <div className="flex py-10 gap-5 ">
              <div><div className="font-bold">Flexible Timings</div>
              <div className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laboriosam dicta ipsa laudantium est ea optio quas repellendus odit deserunt dolore enim </div></div>
              <div><div className="font-semibold">Expert Instructor</div> <div className="text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quae, nulla officiis porro fuga voluptatum tempora amet aliquid vitae ipsam. </div></div>
            </div>
          </div>
          <div className="flex">
            <div>
              {/* <button className="bg-violet-600 py-4 px-5 text-white rounded-lg" onClick={handlenav}>About Us </button> */}

              <button className="flex items-center justify-between bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300" onClick={handlenav}>
      <span>About Us</span>
      <div className="flex items-center justify-center w-6 h-6 bg-white rounded-lg ms-2">
        <span className="text-black text-lg">&#8250;</span>
      </div>
    </button>
                        

      
      




            </div>
            <div className="flex mx-10">
              <div className="logo"><img className="h-8 w-10" src="src/1-removebg-preview.png" alt="img" /></div>
              <div>
                <div>Call us Now</div>
                <div>987654321</div>
              </div>
      
            </div>
          </div>
        </div>
      
      </div>
      
     </div>
     
      








      
      <Counts />
      <div className="mt-24"></div>
      <hr />

      <Courses /> 
      <Weare />
      <Testimonials />



    </div>
  );
};

export default Home;

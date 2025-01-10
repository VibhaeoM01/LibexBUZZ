import React from "react";
import Photos from "../components/Photos";
import Cards from "../components/Cards";
import Counts from "../components/Counts";
import CourseCards from "../components/CourseCards";
import Courses from "../components/Courses";
import Weare from "../components/Weare";
import Testimonials from "../components/Testimonials";
import ExpertTeam from "../components/ExpertTeam";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlenav = () => {
    navigate("/about");
  };

  return (
    <div className="p-10 text-center relative">
      {/* Large image on the left */}

        <img
          src="/public/Images/Background/Overlay+Blur.png" // Replace with your large image path
          alt="Large Photo Left"
          className="w-1/4 h-auto left-0 absolute"
          />
      

      {/* Main Content */}
      <div className="font-bold text-6xl relative z-10">
        <div className="mt-36">Internship Paths To</div>
        <div>
          Your Dream <span className="text-cyan-400">Career</span>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <button className="bg-violet-500 py-4 px-5 mb-4 rounded-3xl text-white">
          Find Course
        </button>
      </div>

      <Photos  className = "z-10"/>


      {/* Large image on the right */}
        <img
          src="/public/Images/Background/Overlay+Blur-Orange.png" // Replace with your large image path
          alt="Large Photo Right"
          className="w-1/4 h-auto absolute right-0 z-0 "
        />

      <Cards className = 'z-10'/>

      {/* Other Content */}

      <div className="flex justify-center z-10">
        <div className="bg-violet-100 flex p-20 rounded-3xl h-2/3 w-10/12 m-28 z-10">
          <div className="overflow-hidden rounded-xl">
            <img className="w-full" src="Images/16.png" alt="img" />
          </div>
          <div className="mx-16 w-1/2 text-left ml-36">
            <div className="text-left text-orange-500 text-3xl">About us</div>
            <div className="text-4xl font-extrabold text-left mt-8">
              <span className="text-cyan-400">Training</span> Tailored For Your
              Success <div>With <span className="text-cyan-400">Libex</span></div>
            </div>
            <div>
              <div className="text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dignissimos reiciendis eos consectetur iusto veniam nulla quam
                laboriosam repellendus itaque excepturi, in aut nam natus
                deleniti, odio veritatis placeat expedita optio.
              </div>
              <div className="flex py-10 gap-5">
                <div>
                  <div className="font-bold">Flexible Timings</div>
                  <div className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Earum laboriosam dicta ipsa laudantium est ea optio quas
                    repellendus odit deserunt dolore enim
                  </div>
                </div>
                <div>
                  <div className="font-semibold">Expert Instructor</div>{" "}
                  <div className="text-gray-600">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Distinctio quae, nulla officiis porro fuga voluptatum
                    tempora amet aliquid vitae ipsam.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <div>
                <button
                  className="flex items-center justify-between bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-300"
                  onClick={handlenav}
                >
                  <span>About Us</span>
                  <div className="flex items-center justify-center w-6 h-6 bg-white rounded-lg ms-2">
                    <span className="text-black text-lg">&#8250;</span>
                  </div>
                </button>
              </div>
              <div className="flex mx-10">
                <div className="logo">
                  <img
                    className="h-8 w-10"
                    src="src/1-removebg-preview.png"
                    alt="img"
                  />
                </div>
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
      <ExpertTeam />
    </div>
  );
};

export default Home;

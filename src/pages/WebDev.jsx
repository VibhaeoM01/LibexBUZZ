import React from "react";
// import ReactDOM from "react-dom";
// import Wdrouting from "../utils/Wdrouting";
import SubNav from "../components/WebDev/SubNav";
import Overview from "../components/WebDev/Overview";
import Curriculum from "../components/WebDev/Curriculum";
import Reviews from "../components/WebDev/Reviews";
import { Route, Routes } from "react-router-dom";
import { Star, CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Coursecards from "../components/WebDevcom/Coursecards";

function WebDev() {
  return (
    // <div>
    <div>
      <div>
        <div className="bg-gray-300 h-80 flex justify-center items-center flex-col">
          <div>
            <div className="flex bg-white rounded-2xl p-2 font-bold">
              <div>HOME : </div>{" "}
              <div className="text-orange-400">
                OUR COURSES : THE COMPLETE WEB DEVELOPMENT COURSE
              </div>
            </div>
            <div className="text-2xl font-semibold text-center m-3">
              The Complete Web Developement Course
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div className="flex  w-2/3 justify-start">
          <div className="
          
          w-3/4">
            <div className="mb-5 fout-semibold text-3xl">
              The Complete Web Development Course
            </div>
            <hr />
            <div className="flex my-3 gap-9 text-lg">
              <div className="flex">
                <div className="w-20 rounded-full">
                  <img
                    className="rounded-full"
                    src="https://images.unsplash.com/photo-1733036432312-9db8f19fad01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                    alt=""
                  />
                </div>
                <div>Mahesh</div>
              </div>
              <div className="flex">
                <div className="rounded-full ">
                  <img
                    className="h-16 w-16"
                    src="https://static.vecteezy.com/system/resources/previews/004/852/965/non_2x/video-play-film-player-movie-line-icon-illustration-logo-template-suitable-for-many-purposes-free-vector.jpg"
                    alt=""
                  />
                </div>
                <div>30 Classes</div>
              </div>
              <div className="flex">
                <div className="rounded-full">
                  <img src="" alt="" />
                </div>
                <div>3.4 (36 Review)</div>
              </div>
            </div>

            <div>
              <img
                className="rounded-lg w-3/4"
                src="https://images.unsplash.com/photo-1733371001616-0341f62c56c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"
                alt="hgfd"
              />
            </div>

            <SubNav />
            <Routes>
              <Route path="/overview" element={<Overview />} />
              <Route path="curriculum" element={<Curriculum />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>

            <div className="flex m-5 mt-10 gap-3 p-5 border border-gray-200 rounded-lg">
              <div className="w-full">
                <img className="rounded-lg h-5/6 w-full" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Nandha Kishore</h1>
                <div className="text-xs py-3 text-gray-500">Web Developer</div>
                <div className="text-gray-500">
                  Our industry expert instructors bring years of professional
                  experience in web development, ensuring you learn from the
                  best. They specialize in modern frameworks like React,
                  Node.js, and more, delivering practical insights alongside
                  technical knowledge. Their mentorship includes hands-on
                  guidance, project reviews, and tailored feedback to help you
                  excel.
                </div>
                <hr />
                <div className="flex gap-5 p-5">
                  <div>Experience:10 Years</div>
                  <div><img src="" alt="" /> 188 Students</div>
                  <div className="flex"><Star /> 454 (36 Reviews)</div>
                </div>
                <hr /> 

                <div className="flex items-center gap-4 p-4">
              <div>Share:</div>
              <div className="h-8 w-8 border border-violet-500">
                <img src="" alt="" />
              </div>
              <div className="h-8 w-8 border border-violet-500">
                <img src="" alt="" />
              </div>
              <div className="h-8 w-8 border border-violet-500">
                <img src="" alt="" />
              </div>
              <div className="h-8 w-8 border  border-violet-500">
                <img src="" alt="" />
              </div>
            </div>
              </div>
            </div>
          </div>
          {/* <div></div> */}
          {/* <Wdrouting /> */}
          {/* <SubNav /> */}.
          <div className="border border-gray-300 rounded-lg h-fit w-96 p-4 text-xl">
            <div className="p-4 text-center">Course Includes:</div>
            <hr />
            <div className="flex justify-between p-3">
              <div className="flex">
                <img src="" alt="" />
                <div>Level:</div>
              </div>
              <div className="text-gray-400">Expert</div>
            </div>

            <hr />
            <div className="flex justify-between p-3">
              <div className="flex">
                <img src="" alt="" />
                <div>Duration:</div>
              </div>
              <div className="text-gray-400">8h30m</div>
            </div>
            <hr />

            <div className="flex justify-between p-3">
              <div className="flex">
                <img src="" alt="" />
                <div>Lessons:</div>
              </div>
              <div className="text-gray-400">15</div>
            </div>

            <hr />
            <div className="flex justify-between p-3">
              <div className="flex">
                <img src="" alt="" />
                <div>Students:</div>
              </div>
              <div className="text-gray-400">120</div>
            </div>
            <hr />
            <div className="flex justify-between p-3">
              <div className="flex">
                <img src="" alt="" />
                <div>Certifications:</div>
              </div>
              <div className="text-gray-400">Yes</div>
            </div>

            <hr />
            <div className="flex justify-between p-3">
              <div className="flex">
                <img src="" alt="" />
                <div>Language:</div>
              </div>
              <div className="text-gray-400">English</div>
            </div>
            <hr />
            <div className="flex flex-col  justify-center">
              <div className="border border-violet-500 text-violet-500 m-5 p-3 rounded-lg text-center">
                This Course Fee 15999.00
              </div>
              <div className="bg-violet-500 text-white text-center   p-3 m-3 rounded-lg">
                {" "}
                Join This Course
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>Share:</div>
              <div className="h-8 w-8 border border-violet-500">
                <img src="" alt="" />
              </div>
              <div className="h-8 w-8 border border-violet-500">
                <img src="" alt="" />
              </div>
              <div className="h-8 w-8 border border-violet-500">
                <img src="" alt="" />
              </div>
              <div className="h-8 w-8 border  border-violet-500">
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>

        
      </div>

     <div className="flex justify-center mt-44 mb-40">
     <div className="border w-2/3 ">
        <div className="flex justify-between">
        <div><h1 className="text-orange-500 font-semibold m-4">OUR COURSES</h1>
        <div className="text-3xl font-bold my-4 m-2">Our Most Popular <span className="text-cyan-400">Courses</span></div></div>
        <div className="flex">
        <div className="p-5"><CircleArrowLeft/></div>
        <div className="p-5"><CircleArrowRight /></div>
        
      </div>
      </div>
        <div className="my-10 mx-5">
        <Coursecards />
        </div>
        </div>
     </div>

    </div>
    //   </div>
  );
}

export default WebDev;

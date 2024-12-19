import React from "react";
// import ReactDOM from "react-dom";
// import Wdrouting from "../utils/Wdrouting";
import SubNav from "../components/WebDev/SubNav";
import Overview from "../components/WebDev/Overview";
import Curriculum from "../components/WebDev/Curriculum";
import Reviews from "../components/WebDev/Reviews";
import { Route, Routes } from "react-router-dom";

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
        <div className="flex border border-black w-2/3 justify-start">
          <div className="border border-black w-3/4">
            <div className="mb-5 fout-semibold text-3xl">
              The Complete Web Development Course
            </div>
            <hr />
            <div className="flex my-3 gap-9 text-lg">
              <div className="flex">
                <div className="rounded-full">
                  <img src="" alt="" />
                </div>
                <div>Mahesh</div>
              </div>
              <div className="flex">
                <div className="rounded-full">
                  <img src="" alt="" />
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
              <img className="rounded-lg" src="src/img2.png" alt="" />
            </div>

            <SubNav />
            <Routes>
              {/* <Route path="/" element={<Navigate to="overview" replace />} /> */}
              <Route path="/overview" element={<Overview />} />
              <Route path="curriculum" element={<Curriculum />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
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
          <div className="border border-violet-500 text-violet-500 m-5 p-3 rounded-lg text-center">This Course Fee 15999.00</div>
          <div className="bg-violet-500 text-white text-center p-3 m-3 rounded-lg"> Join This Course</div>
          </div>

          <div className="flex items-center gap-4"> 
            <div>Share:</div>
            <div className="h-8 w-8 border border-violet-500"><img src="" alt="" /></div>
            <div className="h-8 w-8 border border-violet-500"><img src="" alt="" /></div>
            <div className="h-8 w-8 border border-violet-500"><img src="" alt="" /></div>
            <div className="h-8 w-8 border border-violet-500"><img src="" alt="" /></div>
          </div>
          </div>
        </div>
      </div>
    </div>
    //   </div>
  );
}

export default WebDev;

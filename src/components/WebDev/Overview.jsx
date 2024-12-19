import React from "react";

function Overview() {
  return (
    <div>
     <div className="font-bold text-4xl my-3 ">Course Descriptions</div>
      {/* <div > */}
      <div className="text-gray-400 text-lg">
        Our Web Development course is designed to transform beginners into
        professional developers with industry-ready skills. Covering both
        front-end and back-end development, the program includes modules on
        HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With
        hands-on projects, you'll build real-world applications, gaining the
        confidence to tackle complex web solutions.
      </div>
      <div className="text-gray-400 mt-4 text-lg">
        Led by industry expert instructors, the course ensures students stay
        updated with the latest trends and tools in web development. You'll
        learn best practices for responsive design, performance optimization,
        and secure coding standards.
      </div>
      {/* </div> */}
      <div>
        <div className="font-bold text-4xl mt-6 my-3 text-gray-800">Requirements For The Course</div>

        <div className="text-gray-400 text-lg ">
          <div className="mb-4">
          A foundational understanding of technology and a passion for learning
          are all you need to start your journey in web development. No prior
          coding experience is required, but familiarity with basic computer
          operations is helpful.
        </div>

        <div>✔️ A Laptop or Desktop</div>
        <div>✔️ Basic Computer Skills</div>
        <div>✔️ Time Commitment</div>
        <div>✔️ Willingness to Learn</div>
        </div>
      </div>
    </div>
  );
}

export default Overview;

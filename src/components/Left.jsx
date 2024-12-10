import React from "react";

function LeftSection() {
  return (
    <div className="relative w-full md:w-1/2 p-4">
      {/* Image with rounded corners */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1733235014699-d7bcf05ed324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D" // Replace with the actual image path
          alt="Group of students"
          className="rounded-xl shadow-lg w-full"
        />
        
        {/* Badge: 200k+ Students */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-white p-2 rounded-full shadow-lg">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            {/* Circular image inside the badge */}
            <img
              src="/path/to/student-avatar.jpg" // Replace with avatar image
              alt="Student avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-sm font-semibold text-gray-700">
            200k+ Students
          </div>
        </div>
        
        {/* Years of Experience Box */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-md p-4 flex items-center space-x-2">
          <div className="text-purple-500">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11c0 3.866-3.582 7-8 7s-8-3.134-8-7 3.582-7 8-7 8 3.134 8 7z"
              />
            </svg>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-800">25+</p>
            <p className="text-sm text-gray-500">Years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;

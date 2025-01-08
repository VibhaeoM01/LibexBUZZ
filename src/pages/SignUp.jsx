import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-3/4 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Left Side: Image */}
        <div className="w-1/2 flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
          <img
            src="/public/Images/Login.png"
            alt="Illustration"
            className="h-[686px] w-[851px] object-cover"
          />
        </div>

        {/* Right Side: Sign-Up Form */}
        <div className="w-1/2 flex flex-col justify-center p-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Sign Up</h2>
          <p className="text-gray-600 mb-6">
            Create an account to explore all our features.
          </p>

          {/* Full Name Input */}
          <div className="mb-4">
            <label htmlFor="full-name" className="block text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="Enter your Full Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Create Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Create your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-blue-500 focus:ring-2 focus:ring-blue-400 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 text-gray-600">
              I agree to the{" "}
              <span className="text-blue-500 hover:underline">
                Terms of Use
              </span>{" "}
              and{" "}
              <span className="text-blue-500 hover:underline">
                Privacy Policy
              </span>
              .
            </label>
          </div>

          {/* Sign-Up Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-4">
            Sign Up
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="h-[1px] w-1/3 bg-gray-300"></span>
            <span className="px-4 text-gray-500">OR</span>
            <span className="h-[1px] w-1/3 bg-gray-300"></span>
          </div>

          {/* Google Sign-Up Button */}
          <button className="w-full flex items-center justify-center bg-gray-100 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition mb-6">
            <img
              src="/src/Images/google.png"
              alt="Google Icon"
              className="h-5 w-5 mr-2"
            />
            Sign Up with Google
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

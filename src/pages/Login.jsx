import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
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

        {/* Right Side: Login Form */}
        <div className="w-1/2 flex flex-col justify-center p-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Login</h2>
          <p className="text-gray-600 mb-6">
            Welcome back! Please login to access your account.
          </p>

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
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="text-right mt-2">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-4">
            Login
          </button>

          {/* OR Divider */}
          <div className="flex items-center justify-center my-4">
            <span className="h-[1px] w-1/3 bg-gray-300"></span>
            <span className="px-4 text-gray-500">OR</span>
            <span className="h-[1px] w-1/3 bg-gray-300"></span>
          </div>

          {/* Google Login Button */}
          <button className="w-full flex items-center justify-center bg-gray-100 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition mb-6">
            <img
              src="/public/Images/google.png"
              alt="Google Icon"
              className="h-5 w-5 mr-2"
            />
            Login with Google
          </button>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

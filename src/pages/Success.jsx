import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const Success = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <FaCheckCircle className="text-green-500 text-6xl mb-4" />
            <h1 className="text-2xl font-medium mb-2">Your payment has been successfully completed</h1>
            <Link to="/" className="text-blue-500 text-lg">
                Back to home
            </Link>
        </div>
    );
};

export default Success;
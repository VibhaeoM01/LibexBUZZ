import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cancel = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <FaTimesCircle className="text-red-500 text-6xl mb-4" />
            <h1 className="text-2xl font-medium mb-2">Sorry, your transaction was cancelled.</h1>
            <Link to="/" className="text-blue-500 text-lg">
                Go to Home
            </Link>
        </div>
    );
};

export default Cancel;
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleCancelClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmation = (confirm) => {
    setShowConfirmation(false);
    if (confirm) {
      navigate("/");
    }
  };


  const buyFunction = async (event) => {
    event.preventDefault(); // Prevent form submission
    try {
        const response = await axios.post('http://localhost:3000/stripe');
        if (response.status === 200) {
            window.location.href = response.data.url; // Redirect to Stripe page
        }
    } catch (error) {
        console.error('Error processing payment:', error);
    }
};

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:px-20 lg:py-20">
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
          <div className="bg-gray-100 rounded-lg shadow-md p-4 flex justify-center items-center">
            <img
              src="/public/Images/Payment.png"
              alt="Payment Illustration"
              className="max-w-full max-h-full"
              style={{ width: "686px", height: "851px" }}
            />
          </div>
        </div>

        {/* Payment Form Section */}
        <div className="lg:w-1/2 bg-white shadow-lg rounded-lg p-8">
          <form className="space-y-6">
            {/* Payment Options Table */}
            <table className="w-full bg-gray-100 border border-gray-300 rounded-lg p-4">
              <tbody>
                <tr>
                  <td className="text-2xl font-semibold text-gray-800 text-center py-4">
                    Pay with UPI
                  </td>
                </tr>
                <tr>
                  <td className="flex justify-center space-x-8 py-4">
                    <label className="flex items-center space-x-4 cursor-pointer">
                      <input
                        type="radio"
                        name="upi"
                        value="gpay"
                        className="form-radio text-indigo-600 w-6 h-6"
                      />
                      <img
                        src="/public/Images/logos_google-pay.png"
                        alt="GPay"
                        className="h-12"
                      />
                    </label>
                    <label className="flex items-center space-x-4 cursor-pointer">
                      <input
                        type="radio"
                        name="upi"
                        value="paytm"
                        className="form-radio text-indigo-600 w-6 h-6"
                      />
                      <img
                        src="/public/Images/simple-icons_paytm.png"
                        alt="Paytm"
                        className="h-12"
                      />
                    </label>
                    <label className="flex items-center space-x-4 cursor-pointer">
                      <input
                        type="radio"
                        name="upi"
                        value="phonepe"
                        className="form-radio text-indigo-600 w-6 h-6"
                      />
                      <img
                        src="/public/Images/simple-icons_phonepe.png"
                        alt="PhonePe"
                        className="h-12"
                      />
                    </label>
                  </td>
                </tr>
                <tr>
                  <td className="text-center font-semibold py-4 text-gray-500">Or</td>
                </tr>
                <tr>
                  <td className="text-2xl font-semibold text-gray-800 text-center py-4">
                    Pay with Credit Card
                  </td>
                </tr>
                <tr>
                  <td className="space-y-4 p-4">
                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <input
                      type="text"
                      placeholder="Card Number"
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    />
                    <div className="flex space-x-4">
                      <input
                        type="text"
                        placeholder="CVV"
                        className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                      <input
                        type="text"
                        placeholder="Exp. Date (MM/YY)"
                        className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pricing Section */}
            <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 text-center">
              <p className="text-gray-600">
                Web Development -{" "}
                <span className="text-indigo-600 font-semibold">₹15999</span>
              </p>
            </div>

            {/* Button Section */}
            <div className="space-y-4">
              <div>
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  onClick={buyFunction}
                >
                  Join the Course
                </button>
              </div>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 justify-center"
                  style={{ width: "50%" }}
                  onClick={handleCancelClick}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Are You Sure?</h2>
            <p className="text-gray-600 mb-6">
              You are about to cancel the course.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                onClick={() => handleConfirmation(true)}
              >
                Yes
              </button>
              <button
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300"
                onClick={() => handleConfirmation(false)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;

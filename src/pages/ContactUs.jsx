import React from "react";
import "./Contactpage.css";

const ContactPage = () => {
  return (
    <div>
      <div className="bg-gray-300 h-80 flex justify-center items-center flex-col">
        <div className="flex bg-white rounded-2xl p-2">
          <div>HOME : </div> <div className="text-orange-400"> CONTACT US </div>
        </div>

        <div className="text-2xl font-semibold">Contact Us 
        </div>
    </div>

      {/* Main Content */}
      <main>
    <div className="main-container">
      <div className="contact-container">

        {/* Main Content */}
     <main>
         <div className="image-container">
             <img src="/src/Images/image1.png" alt="Contact Us" />
        </div>
     </main>

      </div>

      <div className="form-container">
        <form>
          <input
            type="text"
            className="form-input"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="form-input"
            placeholder="Email Address"
            required
          />
          <input
            type="text"
            className="form-input"
            placeholder="Phone Number"
            required
          />
          <textarea
            className="form-textarea"
            placeholder="Write Message..."
            rows="4"
            required
          ></textarea>
          <button type="submit" className="submit-button">
            Submit Now ➡️
          </button>
        </form>

        <div className="form-image">
          <img
            src="/src/assets/image.png"
            alt="Group of students"
            className="parabola-shape"
          />
        </div>
  </div>
</div>

        {/* Map Section */}
        <section className="map-section">
         <iframe
  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d119109.86654298085!2d78.92105143675687!3d21.105255994817387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bd495c6e85e12f7%3A0x98bb6e2956706b46!2s4th%20Floor%2C%20G%20H%2C%20Raisoni%20College%20of%20Engineering%2C%203%2C%20Police%20Nagar%20CRPF%20Rd%2C%20Digdoh%20Hills%2C%20Police%20Nagar%2C%20Nagpur%2C%20Digdoh%2C%20Maharashtra%20440016!3m2!1d21.1052759!2d79.0034531!5e0!3m2!1sen!2sin!4v1736274101176!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: "0" }}
  allowFullScreen=""
  loading="lazy"
></iframe>

        </section>
      </main>
    </div>
  );
};

export default ContactPage;

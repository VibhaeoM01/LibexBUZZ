import React from "react";
import "./BlogPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
const BlogPage = () => {
  return (
    <div className="blog-page">
      {/* Header Section */}
      <div className="bg-gray-300 h-80 flex justify-center items-center flex-col">
        <div className="flex bg-white rounded-2xl p-2">
          <div>HOME : </div>
          <div className="text-orange-400"> OUR BLOGS : BLOG DETAILS RIGHT SIDEBAR </div>
        </div>
        <div className="text-2xl font-semibold">BlogDetailsRightSidebar</div>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Main Blog Section */}
        <div className="blog-post">
          <img
            src="/src/Images/image2.png"
            alt="Blog Post"
            className="blog-main-image"
          />
          <div className="blog-sub-images">
            <img
              src="/src/Images/image4.png"
              alt="Sub Image 1"
              className="sub-image"
            />
            <img
              src="/src/images/image3.png"
              alt="Sub Image 2"
              className="sub-image"
            />
          </div>
          <ul className="blog-points">
            <p>Here’s what makes the Libex Training and Internship Programme a game-changer for your career:</p>
            <li>Expert Guidance: Learn from seasoned professionals with years of industry experience.</li>
            <li>Hands-On Experience: Work on real-world projects to enhance your practical knowledge.</li>
            <li>Skill Development: Acquire in-demand skills that employers are actively seeking.</li>
            <li>Networking Opportunities: Connect with industry leaders, peers, and mentors to expand your professional network.</li>
            <li>Customized Learning Path: Choose from a range of specialized tracks that align with your career goals.</li>
          </ul>
          <div className="blog-footer">
  <div className="categories-tags">
    <div className="categories">
      <strong>Categories:</strong>
      <span className="category-item">Data Science</span>
      <span className="category-item">UI/UX Design</span>
    </div>
    <div className="tags">
      <strong>Tags:</strong>
      <span className="tag-item">Education</span>
      <span className="tag-item">Coach</span>
    </div>
  </div>
</div>
</div>
        {/* Sidebar */}
<aside className="sidebar">
  <div className="search-bar">
    <input type="text" placeholder="Search Here" />
    <button className="search-button">
        <FontAwesomeIcon icon={faSearch} />
    </button>
  </div>

  <div className="latest-posts">
    <h3>Latest Posts</h3>
    <ul>
      
        <img src="/src/Images/image7.png" alt="Post 1" />
        {/* <div>
          <p>By Admin</p>
          <h4>Top 5 UI Design Tips</h4>
        </div>
      <li>
        <img src="image2.jpg" alt="Post 2" />
        <div>
          <p>By Admin</p>
          <h4>How To Build Your Portfolio</h4>
        </div>
      </li>
      <li>
        <img src="image3.jpg" alt="Post 3" />
        <div>
          <p>By Admin</p>
          <h4>Preparing For Interviews</h4>
        </div>
      </li> */}


    </ul>
  </div>

  <div className="categories">
    <h3>Categories</h3>
    <ul>
      <li>Data Science (4)</li>
      <li>UX Designer (6)</li>
      <li>Frontend (2)</li>
    </ul>
  </div>
  <div className="tags">
  <h3>Tags</h3>
  <ul>
    <li>Machine Learning</li>
    <li>Design Thinking</li>
    <li>React</li>
    <li>CSS</li>
  </ul>
</div>

</aside>

      </div>

      {/* Comment Section */}
      <div className="comments-section">
  <h3>02 Comments</h3>
  <div className="comment">
    <img
      src="/src/images/image6.png"
      alt="Alfonso Culhane"
      className="comment-avatar"
    />
    <div className="comment-text">
      <p><strong>Alfonso Culhane</strong></p>
      <p>March 20, 2023 at 2:37 PM</p>  
      <hr></hr>
      <p>Very informative and well-written! It perfectly highlights why Libex is an excellent </p>
      <p>choice for anyone looking to gain practical skills and real-world experience.</p>   
    </div>
  </div>
  <div className="comment">
    <img
      src="/src/Images/image5.png"
      alt="Allison Curtis"
      className="comment-avatar"
    />
    <div className="comment-text">
      <p><strong>Allison Curtis</strong></p>
      <p>June 10, 2023 at 10:00 AM</p>
      <hr></hr>
      <p>I was skeptical about internships until I read this. The blog paints a clear picture of how </p>
      <p>Libex can transform career opportunities.I’ve already signed up for the programme!</p>
    </div>
  </div>
  <h><b>Leave a Comment</b></h>
  <form className="comment-form">
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
    <textarea placeholder="Write Message..."></textarea>
    <button>Post Comment</button>
  </form>
</div>
    </div>
  );
};

export default BlogPage;

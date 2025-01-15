import React from "react";
import { Star, CircleArrowLeft, CircleArrowRight } from "lucide-react";
// import { Box, Tabs, Tab } from '@mui/material';
import { useParams } from "react-router-dom";
// import Overview from "../components/WebDev/Overview";
// import Curriculum from "../components/WebDev/Curriculum";
// import Reviews from "../components/WebDev/Reviews";
import PropTypes from "prop-types";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import { Check } from 'lucide-react';
import CourseCards from "../components/CourseCards";

const CourseDetails = () => {
  const courseDataa = [
    {
      id: "ui-ux",
      title: "The Complete UI/UX Designer Course",
      instructor: {
        img: "/Images/courses/jonathan.jpeg",
        img1: "/Images/courses/UI.jpeg",
        name: "Jonathan Carter",
        role: "UX Designer",
        experience: "8 Years",
        students: 180,
        rating: "4.56",
        reviews: 36,
        bio: "Jonathan is a seasoned UI/UX Designer with over 8 years of experience crafting intuitive and visually compelling digital interfaces. He specializes in user-centered design, blending creativity with functionality to enhance user engagement. His expertise spans web and mobile applications, delivering solutions that align seamlessly with client goals.",
      },
      courseInfo: {
        level: "Expert",
        duration: "09h 30m",
        lessons: 20,
        students: 180,
        certifications: "Yes",
        language: "English",
        price: 19999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      overview:
      {
        part1:"Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering both front-end and back-end development, the program includes modules on HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining the confidence to tackle complex web solutions.",
        part2:"Led by industry expert instructors, the course ensures students stay updated with the latest trends and tools in web development. You'll learn best practices for responsive design, performance optimization, and secure coding standards.",
        part3:"A foundational understanding of technology and a passion for learning are all you need to start your journey in web development. No prior coding experience is required, but familiarity with basic computer operations is helpful",
          requirements: [
        "A Laptop or Desktop",
        "Basic Computer Skills",
        "Time Commitment",
        "Willingness to Learn"
      ],
    }
    },
    {
      id: "webdev",
      title: "The Complete Web Development Course",
      instructor: {
        img: "/Images/courses/Nandha.png",
        img1: "/Images/courses/wd.png",
        name: "Nandha Kishore",
        role: "Web Developer",
        experience: "10 Years",
        students: 185,
        rating: "4.54",
        reviews: 36,
        bio: "Our industry expert instructors bring years of professional experience in web development, ensuring you learn from the best. They specialize in modern frameworks like React, Node.js, and more, delivering practical insights alongside technical knowledge. Their mentorship includes hands-on guidance, project reviews, and tailored feedback to help you excel.",
      },
      courseInfo: {
        level: "Expert",
        duration: "8h 30m",
        lessons: 15,
        students: 120,
        certifications: "Yes",
        language: "English",
        price: 15999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      overview:
      {
        part1:"Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering both front-end and back-end development, the program includes modules on HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining the confidence to tackle complex web solutions.",
        part2:"Led by industry expert instructors, the course ensures students stay updated with the latest trends and tools in web development. You'll learn best practices for responsive design, performance optimization, and secure coding standards.",
        part3:"A foundational understanding of technology and a passion for learning are all you need to start your journey in web development. No prior coding experience is required, but familiarity with basic computer operations is helpful",
          requirements: [
        "A Laptop or Desktop",
        "Basic Computer Skills",
        "Time Commitment",
        "Willingness to Learn"
      ],
      }
    },
    {
      id: "data-science",
      title: "The Complete Data Science Course",
      instructor: {
        img: "/Images/courses/ramesh.jpeg",
        img1: "/Images/courses/DS.jpeg",
        name: "Ramesh Yadav",
        role: "Data Analyst",
        experience: "12 Years",
        students: 180,
        rating: "4.54",
        reviews: 36,
        bio: "Udex's expert instructors in data analysis bring extensive industry experience and cutting-edge knowledge to the classroom. These professionals guide learners through practical projects, real-world case studies, and advanced analytical tools. Their mentorship ensures students gain job-ready skills and excel in dynamic data roles.",
      },
      courseInfo: {
        level: "Expert",
        duration: "10h 30m",
        lessons: 20,
        students: 190,
        certifications: "Yes",
        language: "English",
        price: 17999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      overview: {
        part1:"Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering both front-end and back-end development, the program includes modules on HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining the confidence to tackle complex web solutions.",
        part2:"Led by industry expert instructors, the course ensures students stay updated with the latest trends and tools in web development. You'll learn best practices for responsive design, performance optimization, and secure coding standards.",
        part3:"A foundational understanding of technology and a passion for learning are all you need to start your journey in web development. No prior coding experience is required, but familiarity with basic computer operations is helpful",
        requirements: [
          "Basic understanding of mathematics and statistics",
          "Familiarity with programming languages such as Python",
          "Knowledge of database management systems and SQL",
          "Access to a computer with internet for online resources and software tools",
        ],
      },
      curriculum: {
        sectionTitle: "Introduction To Data",
        lessons: [
          {
            title: "Data Base and process",
            duration: "5.00 Min",
            completed: true,
          },
          {
            title: "Statistics",
            duration: "13.00 Min",
            completed: true,
          },
          {
            title: "Machine Learning",
            duration: "12.00 Min",
            completed: true,
          },
          {
            title: "Visualization",
            duration: "15.00 Min",
            completed: true,
          },
          {
            title: "Data Mining",
            duration: "11.00 Min",
            completed: true,
          },
        ],
      },
      reviews: {
        totalReviews: 2,
        reviewsList: [
          {
            name: "Chance Mango",
            date: "March 20, 2024",
            comment:
              "Libex's hands-on approach and expert instructors helped me land my dream job in Data Analyst i gain more skills .Thank you soo mcuh",
            rating: 5,
          },
          {
            name: "Desirae Donin",
            date: "June 10, 2024",
            comment:
              "Libex's hands-on approach and expert instructors helped me land my dream job in Data Analyst i gain more skills .Thank you soo mcuh",
            rating: 5,
          },
        ],
      },
    },
    {
      id: "artificial-intelligence",
      title: "The Complete Artificial Intelligence Course",
      instructor: {
        img: "/Images/courses/john.jpeg",
        img1: "/Images/courses/ai1.jpeg",
        name: "Dr. John",
        role: "Chief AI Scientist",
        experience: "15 Years",
        students: 180,
        rating: "4.54",
        reviews: 36,
        bio: "Dr. John Smith is a renowned expert in Artificial Intelligence, currently serving as the Chief AI Scientist at Tech Innovations Inc. With over 15 years of experience, he has contributed extensively to advancements in machine learning and natural language processing. Dr. Smith has authored numerous influential papers and is a sought-after speaker at international AI conferences.",
      },
      courseInfo: {
        level: "Expert",
        duration: "10h 30m",
        lessons: 20,
        students: 190,
        certifications: "Yes",
        language: "English",
        price: 19999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      
      // requirements: [
      //   "Basic Programming Skills",
      //   "Mathematical Knowledge",
      //   "Analytical Thinking",
      //   "Access to Tools"
      // ],
      // description: "Artificial Intelligence (AI) is a transformative field of computer science that enables machines to simulate human intelligence. This course provides an in-depth understanding of core AI concepts, including machine learning, natural language processing, computer vision, and robotics. Students will explore algorithms, data-driven decision-making, and ethical considerations in AI development. Through hands-on projects and real-world applications, learners will gain practical skills to design and implement intelligent systems."
    },
    {
      id: "java",
      title: "The Complete Java Course",
      instructor: {
        img: "/Images/courses/john.jpeg",
        img1: "/Images/courses/java.jpeg",
        name: "John Doe",
        role: "Java Software Engineer",
        experience: "10 Years",
        students: 180,
        rating: "4.56",
        reviews: 36,
        bio: "John Doe is a seasoned Java Software Engineer with over 10 years of experience in developing robust and scalable applications. He specializes in object-oriented design, microservices architecture, and optimizing code performance. His expertise lies in building enterprise-grade solutions while maintaining high coding standards and best practices.",
      },
      courseInfo: {
        level: "Expert",
        duration: "10h 30m",
        lessons: 20,
        students: 190,
        certifications: "Yes",
        language: "English",
        price: 18999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      // requirements: [
      //   "Familiarity with basic computer operations",
      //   "Access to a computer with Java Development Kit (JDK) and IDE",
      //   "An understanding of basic math concepts like variables and logic",
      //   "Commitment to practice coding exercises and assignments regularly"
      // ],
      // description: "The Java Programming course is designed to provide a comprehensive introduction to one of the most widely used programming languages. This course covers core concepts such as object-oriented programming, data structures, and multithreading, while also exploring advanced topics like Java frameworks and APIs. Participants will gain hands-on experience through practical coding exercises, real-world projects, and debugging techniques."
    },
    {
      id: "python",
      title: "The Complete Python Course",
      instructor: {
        img: "/Images/courses/harish.jpeg",
        img1: "/Images/courses/python.jpeg",
        name: "Dr. Harish",
        role: "Lead Python Developer",
        experience: "8 Years",
        students: 180,
        rating: "4.56",
        reviews: 36,
        bio: "Dr. Harish is a seasoned Python developer with over 10 years of experience in building robust applications. He specializes in machine learning, data analytics, and software architecture. His expertise extends to optimizing code for performance and scalability in large-scale systems.",
      },
      courseInfo: {
        level: "Expert",
        duration: "09h 30m",
        lessons: 20,
        students: 180,
        certifications: "Yes",
        language: "English",
        price: 18999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      // requirements: [
      //   "Basic Computer Skills",
      //   "No Prior Coding Knowledge",
      //   "Software Setup",
      //   "Motivation to Practice"
      // ],
      // description: "The Python Programming course is designed to equip learners with a solid foundation in one of the most versatile and widely-used programming languages. This course covers essential topics including Python syntax, data types, control structures, functions, and modules. Students will also explore advanced concepts such as file handling, object-oriented programming, and working with libraries like NumPy and Pandas."
    },
    {
      id: "cybersecurity",
      title: "The Complete Cyber Security Course",
      instructor: {
        img: "/Images/courses/rajesh.jpeg",
        img1: "/Images/courses/CYBER.jpeg",
        name: "Dr. Rajesh",
        role: "Cybersecurity Expert",
        experience: "15 Years",
        students: 180,
        rating: "4.54",
        reviews: 36,
        bio: "Dr. Rajesh is a seasoned cybersecurity professional with over 15 years of experience in securing enterprise networks and systems. He specializes in threat intelligence, incident response, and risk management. His expertise in developing robust security strategies has helped organizations mitigate potential cyber threats and protect sensitive data.",
      },
      courseInfo: {
        level: "Expert",
        duration: "10h 30m",
        lessons: 20,
        students: 190,
        certifications: "Yes",
        language: "English",
        price: 19999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },

      // requirements: [
      //   "Comprehensive coverage of cyber threats, vulnerabilities, and attack prevention techniques",
      //   "Hands-on training in using security tools and implementing defense mechanisms",
      //   "Real-world case studies to understand the evolving landscape of cybersecurity",
      //   "Certification upon completion, enhancing professional credibility in the field"
      // ],
      // description: "The Cybersecurity course provides a comprehensive understanding of protecting digital systems, networks, and data from cyber threats. Participants will learn about threat detection, risk assessment, and implementing effective defense mechanisms to safeguard information assets. The course covers key topics such as ethical hacking, network security, cryptography, and incident response."
    },
    {
      id: "machine-learning",
      title: "The Complete Machine Learning Course",
      instructor: {
        img: "/Images/courses/smith.jpeg",
        img1: "/Images/courses/ML.jpeg",
        name: "Dr. John Smith",
        role: "Senior Machine Learning Engineer",
        experience: "10 Years",
        students: 180,
        rating: "4.56",
        reviews: 36,
        bio: "Dr. John Smith is an expert in machine learning and artificial intelligence with over 10 years of experience in developing cutting-edge algorithms for predictive analytics and natural language processing. He has led several high-impact projects in both the tech and healthcare sectors. His work focuses on advancing the capabilities of AI models to improve decision-making and automation processes.",
      },
      courseInfo: {
        level: "Expert",
        duration: "09h 30m",
        lessons: 20,
        students: 180,
        certifications: "Yes",
        language: "English",
        price: 18999.0,
        rating: 3.4,
        classes: 30,
        reviews: 36,
      },
      // requirements: [
      //   "Programming Knowledge",
      //   "Mathematics Basics",
      //   "Data Handling Skills",
      //   "Interest in AI"
      // ],
      // description: "The Machine Learning course provides a comprehensive introduction to the principles, algorithms, and applications of machine learning. Designed for beginners and professionals alike, it covers essential topics such as supervised and unsupervised learning, regression, classification, and deep learning techniques. Participants will gain hands-on experience through practical projects and coding exercises, enabling them to build predictive models and deploy machine learning solutions."
    },
  ];

  //     const courseDataa = [

  //       { id: "ui-ux",
  //        overview: {
  //          description: "The UI/UX Designer course is designed to equip learners with the skills and knowledge to create intuitive, engaging, and user-centered experiences. Through hands-on projects and expert guidance, participants will explore design principles, user research techniques, wireframing, prototyping, and usability testing. The course emphasizes creative problem-solving and collaboration, preparing students to craft visually appealing interfaces that prioritize user needs. With a focus on industry best practices and emerging trends, learners will build a strong foundation to excel in the dynamic field of UI/UX design.",
  //          requirements: [
  //            "Foundational Knowledge",
  //            "Prototyping Skills",
  //            "User Research",
  //            "Wireframing and Design Systems"
  //          ]
  //        },
  //        curriculum: {
  //          sectionTitle: "Introduction to UI Design",
  //          lessons: [
  //            {
  //              title: "Introduction to UI/UX Design",
  //              duration: "5.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Design Fundamentals",
  //              duration: "13.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "User Research and Analysis",
  //              duration: "12.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Wireframing and Prototyping",
  //              duration: "15.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "UX Writing",
  //              duration: "11.00 Min",
  //              completed: true
  //            }
  //          ]
  //        },
  //        reviews: {
  //          totalReviews: 2,
  //          reviewsList: [
  //            {
  //              name: "Wilson Philips",
  //              date: "March 20, 2024",
  //              comment: "The UI/UX Designer course at Labex exceeded my expectations. The practical approach and real-world projects helped me sharpen my skills and build a strong portfolio.",
  //              rating: 5
  //            },
  //            {
  //              name: "Carla Levin",
  //              date: "June 10, 2024",
  //              comment: "I gained valuable insights into UI/UX design principles through this course. The hands-on assignments and expert guidance were extremely beneficial for my career growth.",
  //              rating: 5
  //            }
  //          ]
  //        }
  //      },
  //      {id: "webdev",
  //   title: "The Complete Web Development Course",
  //   overview: {
  //     description: "Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering both front-end and back-end development, the program includes modules on HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining the confidence to tackle complex web solutions.",
  //     additionalInfo: "Led by industry expert instructors, the course ensures students stay updated with the latest trends and tools in web development. You'll learn best practices for responsive design, performance optimization, and secure coding standards"
  //   },
  //   instructor: {
  //     img:""
  //     name: "Nandha Kishore",
  //     role: "Web Developer",
  //     experience: "10 Years",
  //     students: 185,
  //     rating: 4.54,
  //     reviews: 36,
  //     bio: "Our industry expert instructors bring years of professional experience in web development, ensuring you learn from the best. They specialize in modern frameworks like React, Node.js, and more, delivering practical insights alongside technical knowledge. Their mentorship includes hands-on guidance, project reviews, and tailored feedback to help you excel."
  //   },
  //   courseInfo: {
  //     level: "Expert",
  //     duration: "8h 30m",
  //     lessons: 15,
  //     students: 120,
  //     certifications: "Yes",
  //     language: "English",
  //     price: 15999.00,
  //     rating: 3.4,
  //     classes: 30,
  //     reviews: 36
  //   },
  //   curriculum: [
  //     {
  //       title: "Introduction to JavaScript, Run JavaScript in VSCode",
  //       duration: "5.00 Min"
  //     },
  //     {
  //       title: "What is variable, five things you need to declare a variable",
  //       duration: "13.00 Min"
  //     },
  //     {
  //       title: "Variable type, Numeric, String, Boolean",
  //       duration: "12.00 Min"
  //     },
  //     {
  //       title: "Simple Mathematical operations in JavaScript",
  //       duration: "15.00 Min"
  //     },
  //     {
  //       title: "(advanced) Mathematical operation shorthand",
  //       duration: "11.00 Min"
  //     }
  //   ],
  //   requirements: [
  //     "A Laptop or Desktop",
  //     "Basic Computer Skills",
  //     "Time Commitment",
  //     "Willingness to Learn"
  //   ]
  // },
  //          {
  //            id: "data-science",
  //            title: "The Complete Data Science Course",
  //            instructor: {
  //              name: "Ramesh Yadav",
  //              role: "Data Analyst",
  //              experience: "12 Years",
  //              students: 180,
  //              rating: "4.54",
  //              reviews: 36,
  //              bio: "Udex's expert instructors in data analysis bring extensive industry experience and cutting-edge knowledge to the classroom. These professionals guide learners through practical projects, real-world case studies, and advanced analytical tools. Their mentorship ensures students gain job-ready skills and excel in dynamic data roles."
  //            },
  //            courseInfo: {
  //              level: "Expert",
  //              duration: "10h 30m",
  //              lessons: 20,
  //              students: 190,
  //              certifications: "Yes",
  //              language: "English",
  //              price: 17999.00,
  //              rating: 3.4,
  //              classes: 30,
  //              reviews: 36
  //            },
  //            overview: {
  //              description: "The Data Science course is designed to equip learners with the knowledge and skills needed to analyze, visualize, and interpret complex data. The curriculum covers foundational topics such as statistics, machine learning, data wrangling, and data visualization using popular tools like Python, R, and SQL. Through hands-on projects and real-world case studies, participants will gain practical experience in extracting actionable insights from data. The course also emphasizes the ethical use of data and best practices in data-driven decision-making. Whether you're a beginner or a professional looking to upskill, this course provides a comprehensive pathway to excel in the field of data science.",
  //              requirements: [
  //                "Basic understanding of mathematics and statistics",
  //                "Familiarity with programming languages such as Python",
  //                "Knowledge of database management systems and SQL",
  //                "Access to a computer with internet for online resources and software tools"
  //              ]
  //            },
  //            curriculum: {
  //              sectionTitle: "Introduction To Data",
  //              lessons: [
  //                {
  //                  title: "Data Base and process",
  //                  duration: "5.00 Min",
  //                  completed: true
  //                },
  //                {
  //                  title: "Statistics",
  //                  duration: "13.00 Min",
  //                  completed: true
  //                },
  //                {
  //                  title: "Machine Learning",
  //                  duration: "12.00 Min",
  //                  completed: true
  //                },
  //                {
  //                  title: "Visualization",
  //                  duration: "15.00 Min",
  //                  completed: true
  //                },
  //                {
  //                  title: "Data Mining",
  //                  duration: "11.00 Min",
  //                  completed: true
  //                }
  //              ]
  //            },
  //            reviews: {
  //              totalReviews: 2,
  //              reviewsList: [
  //                {
  //                  name: "Chance Mango",
  //                  date: "March 20, 2024",
  //                  comment: "Libex's hands-on approach and expert instructors helped me land my dream job in Data Analyst i gain more skills .Thank you soo mcuh",
  //                  rating: 5
  //                },
  //                {
  //                  name: "Desirae Donin",
  //                  date: "June 10, 2024",
  //                  comment: "Libex's hands-on approach and expert instructors helped me land my dream job in Data Analyst i gain more skills .Thank you soo mcuh",
  //                  rating: 5
  //                }
  //              ]
  //            }
  //          },
  //          {
  //            id: "artificial-intelligence",
  //       title: "The Complete Artificial Intelligence Course",
  //       instructor: {
  //         name: "Dr. John",
  //         role: "Chief AI Scientist",
  //         experience: "15 Years",
  //         students: 180,
  //         rating: "4.54",
  //         reviews: 36,
  //         bio: "Dr. John Smith is a renowned expert in Artificial Intelligence, currently serving as the Chief AI Scientist at Tech Innovations Inc. With over 15 years of experience, he has contributed extensively to advancements in machine learning and natural language processing. Dr. Smith has authored numerous influential papers and is a sought-after speaker at international AI conferences."
  //       },
  //       courseInfo: {
  //         level: "Expert",
  //         duration: "10h 30m",
  //         lessons: 20,
  //         students: 190,
  //         certifications: "Yes",
  //         language: "English",
  //         price: 19999.00,
  //         rating: 3.4,
  //         classes: 30,
  //         reviews: 36
  //       },
  //            overview: {
  //              description: "Artificial Intelligence (AI) is a transformative field of computer science that enables machines to simulate human intelligence. This course provides an in-depth understanding of core AI concepts, including machine learning, natural language processing, computer vision, and robotics. Students will explore algorithms, data-driven decision-making, and ethical considerations in AI development. Through hands-on projects and real-world applications, learners will gain practical skills to design and implement intelligent systems.",
  //              requirements: [
  //                "Basic Programming Skills",
  //                "Mathematical Knowledge",
  //                "Analytical Thinking",
  //                "Access to Tools"
  //              ]
  //            },
  //            curriculum: {
  //              sectionTitle: "Introduction to Artificial Intelligence",
  //              lessons: [
  //                {
  //                  title: "Mathematical Foundations for AI",
  //                  duration: "5.00 Min",
  //                  completed: true
  //                },
  //                {
  //                  title: "Programming for AI",
  //                  duration: "13.00 Min",
  //                  completed: true
  //                },
  //                {
  //                  title: "Machine Learning",
  //                  duration: "12.00 Min",
  //                  completed: true
  //                },
  //                {
  //                  title: "Natural Language Processing (NLP)",
  //                  duration: "15.00 Min",
  //                  completed: true
  //                },
  //                {
  //                  title: "AI Ethics and Safety",
  //                  duration: "11.00 Min",
  //                  completed: true
  //                }
  //              ]
  //            },
  //            reviews: {
  //              totalReviews: 2,
  //              reviewsList: [
  //                {
  //                  name: "Nolan Press",
  //                  date: "March 20, 2024",
  //                  comment: "The Artificial Intelligence course at Labex offers a great balance of theory and hands-on practice. The instructors are knowledgeable and provide clear explanations of complex concepts.",
  //                  rating: 5
  //                },
  //                {
  //                  name: "Kaylynn Franci",
  //                  date: "June 10, 2024",
  //                  comment: "Labex's AI course was an eye-opener for me, providing a solid foundation in AI principles. The content was engaging and the support from instructors was excellent.",
  //                  rating: 5
  //                }
  //              ]
  //            }
  //          },

  //      {
  //       id: "java",
  //       title: "The Complete Java Course",
  //       instructor: {
  //         name: "John Doe",
  //         role: "Java Software Engineer",
  //         experience: "10 Years",
  //         students: 180,
  //         rating: "4.56",
  //         reviews: 36,
  //         bio: "John Doe is a seasoned Java Software Engineer with over 10 years of experience in developing robust and scalable applications. He specializes in object-oriented design, microservices architecture, and optimizing code performance. His expertise lies in building enterprise-grade solutions while maintaining high coding standards and best practices."
  //       },
  //       courseInfo: {
  //         level: "Expert",
  //         duration: "10h 30m",
  //         lessons: 20,
  //         students: 190,
  //         certifications: "Yes",
  //         language: "English",
  //         price: 18999.00,
  //         rating: 3.4,
  //         classes: 30,
  //         reviews: 36
  //       },
  //        overview: {
  //          description: "The Java Programming course is designed to provide a comprehensive introduction to one of the most widely used programming languages. This course covers core concepts such as object-oriented programming, data structures, and multithreading, while also exploring advanced topics like Java frameworks and APIs. Participants will gain hands-on experience through practical coding exercises, real-world projects, and debugging techniques.",
  //          requirements: [
  //            "Familiarity with basic computer operations",
  //            "Access to a computer with Java Development Kit (JDK) and IDE",
  //            "An understanding of basic math concepts like variables and logic",
  //            "Commitment to practice coding exercises and assignments regularly"
  //          ]
  //        },
  //        curriculum: {
  //          sectionTitle: "Introduction to Java",
  //          lessons: [
  //            {
  //              title: "Variables and Data Types",
  //              duration: "5.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Control Flow",
  //              duration: "13.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Object-Oriented Programming (OOP) Concepts",
  //              duration: "12.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Collections Framework",
  //              duration: "15.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Java Development Tools",
  //              duration: "11.00 Min",
  //              completed: true
  //            }
  //          ]
  //        },
  //        reviews: {
  //          totalReviews: 2,
  //          reviewsList: [
  //            {
  //              name: "Nolan Mango",
  //              date: "March 20, 2024",
  //              comment: "The Java course at Labex was incredibly informative and hands-on. The instructors made complex concepts easy to understand and apply.",
  //              rating: 4
  //            },
  //            {
  //              name: "Desirae Workman",
  //              date: "June 10, 2024",
  //              comment: "Labex's Java course exceeded my expectations with practical exercises and real-world examples. It gave me the skills I need to excel in my career.",
  //              rating: 4
  //            }
  //          ]
  //        }
  //      },
  //      {
  //        id: "python",
  //       title: "The Complete Python Course",
  //       instructor: {
  //         name: "Dr. Harish",
  //         role: "Lead Python Developer",
  //         experience: "8 Years",
  //         students: 180,
  //         rating: "4.56",
  //         reviews: 36,
  //         bio: "Dr. Harish is a seasoned Python developer with over 10 years of experience in building robust applications. He specializes in machine learning, data analytics, and software architecture. His expertise extends to optimizing code for performance and scalability in large-scale systems."
  //       },
  //       courseInfo: {
  //         level: "Expert",
  //         duration: "09h 30m",
  //         lessons: 20,
  //         students: 180,
  //         certifications: "Yes",
  //         language: "English",
  //         price: 18999.00,
  //         rating: 3.4,
  //         classes: 30,
  //         reviews: 36
  //       },
  //        overview: {
  //          description: "The Python Programming course is designed to equip learners with a solid foundation in one of the most versatile and widely-used programming languages. This course covers essential topics including Python syntax, data types, control structures, functions, and modules. Students will also explore advanced concepts such as file handling, object-oriented programming, and working with libraries like NumPy and Pandas.",
  //          requirements: [
  //            "Basic Computer Skills",
  //            "No Prior Coding Knowledge",
  //            "Software Setup",
  //            "Motivation to Practice"
  //          ]
  //        },
  //        curriculum: {
  //          sectionTitle: "Introduction to Python",
  //          lessons: [
  //            {
  //              title: "Data Structures",
  //              duration: "5.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Functions and Modules",
  //              duration: "13.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Object-Oriented Programming (OOP)",
  //              duration: "12.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Working with Files",
  //              duration: "15.00 Min",
  //              completed: true
  //            },
  //            {
  //              title: "Error Handling and Debugging",
  //              duration: "11.00 Min",
  //              completed: true
  //            }
  //          ]
  //        },
  //        reviews: {
  //          totalReviews: 2,
  //          reviewsList: [
  //            {
  //              name: "Phillip Torff",
  //              date: "March 20, 2024",
  //              comment: "The Python course at Labex was incredibly comprehensive and easy to follow. The hands-on approach really helped solidify my understanding of the concepts.",
  //              rating: 5
  //            },
  //            {
  //              name: "Marilyn Culhane",
  //              date: "June 10, 2024",
  //              comment: "I highly recommend the Python course at Labex! The instructors are knowledgeable, and the curriculum covers everything from basics to advanced topics.",
  //              rating: 5
  //            }
  //          ]
  //        }
  //      },

  //  // };
  //          {
  //   id: "cybersecurity",
  //   title: "The Complete Cyber Security Course",
  //   overview: {
  //     description: "The Cybersecurity course provides a comprehensive understanding of protecting digital systems, networks, and data from cyber threats. Participants will learn about threat detection, risk assessment, and implementing effective defense mechanisms to safeguard information assets. The course covers key topics such as ethical hacking, network security, cryptography, and incident response.",
  //     additionalInfo: "Designed for both beginners and professionals, it combines theoretical knowledge with practical, hands-on exercises to build real-world skills. By the end of the course, learners will be equipped to identify vulnerabilities, mitigate risks, and contribute to a secure digital environment."
  //   },
  //   instructor: {
  //     name: "Dr. Rajesh",
  //     role: "Cybersecurity Expert",
  //     experience: "15 Years",
  //     students: 180,
  //     rating: 4.54,
  //     reviews: 36,
  //     bio: "Dr. Rajesh is a seasoned cybersecurity professional with over 15 years of experience in securing enterprise networks and systems. He specializes in threat intelligence, incident response, and risk management. His expertise in developing robust security strategies has helped organizations mitigate potential cyber threats and protect sensitive data."
  //   },
  //   courseInfo: {
  //     level: "Expert",
  //     duration: "10h 30m",
  //     lessons: 20,
  //     students: 190,
  //     certifications: "Yes",
  //     language: "English",
  //     price: 19999.00,
  //     rating: 3.4,
  //     classes: 30,
  //     reviews: 36
  //   },
  //   curriculum: [
  //     {
  //       title: "Network Security",
  //       duration: "5.00 Min"
  //     },
  //     {
  //       title: "Cryptography",
  //       duration: "13.00 Min"
  //     },
  //     {
  //       title: "Threats and Vulnerabilities",
  //       duration: "12.00 Min"
  //     },
  //     {
  //       title: "Security in Web and Mobile Applications",
  //       duration: "15.00 Min"
  //     },
  //     {
  //       title: "Identity and Access Management (IAM)",
  //       duration: "11.00 Min"
  //     }
  //   ],
  //   requirements: [
  //     "Comprehensive coverage of cyber threats, vulnerabilities, and attack prevention techniques",
  //     "Hands-on training in using security tools and implementing defense mechanisms",
  //     "Real-world case studies to understand the evolving landscape of cybersecurity",
  //     "Certification upon completion, enhancing professional credibility in the field"
  //   ]
  // },
  //          {
  //   id: "machine-learning",
  //   title: "The Complete Machine Learning Course",
  //   overview: {
  //     description: "The Machine Learning course provides a comprehensive introduction to the principles, algorithms, and applications of machine learning. Designed for beginners and professionals alike, it covers essential topics such as supervised and unsupervised learning, regression, classification, and deep learning techniques. Participants will gain hands-on experience through practical projects and coding exercises, enabling them to build predictive models and deploy machine learning solutions.",
  //     additionalInfo: "With a focus on real-world applications, the course explores the use of machine learning in industries like healthcare, finance, and technology. By the end, learners will have the skills and knowledge to solve complex problems using data-driven approaches."
  //   },
  //   instructor: {
  //     name: "Dr. John Smith",
  //     role: "Senior Machine Learning Engineer",
  //     experience: "10 Years",
  //     students: 180,
  //     rating: 4.56,
  //     reviews: 36,
  //     bio: "Dr. John Smith is an expert in machine learning and artificial intelligence with over 10 years of experience in developing cutting-edge algorithms for predictive analytics and natural language processing. He has led several high-impact projects in both the tech and healthcare sectors. His work focuses on advancing the capabilities of AI models to improve decision-making and automation processes."
  //   },
  //   courseInfo: {
  //     level: "Expert",
  //     duration: "09h 30m",
  //     lessons: 20,
  //     students: 180,
  //     certifications: "Yes",
  //     language: "English",
  //     price: 18999.00,
  //     rating: 3.4,
  //     classes: 30,
  //     reviews: 36
  //   },
  //   curriculum: [
  //     {
  //       title: "Neural Networks and Deep Learning",
  //       duration: "5.00 Min"
  //     },
  //     {
  //       title: "Model Evaluation and Tuning",
  //       duration: "13.00 Min"
  //     },
  //     {
  //       title: "Advanced Topics in Machine Learning",
  //       duration: "12.00 Min"
  //     },
  //     {
  //       title: "Final Project and Case Study",
  //       duration: "15.00 Min"
  //     },
  //     {
  //       title: "Python for Machine Learning",
  //       duration: "11.00 Min"
  //     }
  //   ],
  //   requirements: [
  //     "Programming Knowledge",
  //     "Mathematics Basics",
  //     "Data Handling Skills",
  //     "Interest in AI"
  //   ]
  // }
  //        ];
  
    const reviews=
    [
      {
        src:"https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D", name:"Kevin Martin", Date:"March 20,2024",
      },  
      {
        src:"https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D", name:"Sarah Aibert", Date:"June 10,2024",
      }
    ]

    const courseItems = [
      {
        title: "Introduction to JavaScript, Run JavaScript in VSCode",
        duration: "5.00 Min",
        completed: true
      },
      {
        title: "What is variable, five things you need to declare a variable",
        duration: "13.00 Min",
        completed: true
      },
      {
        title: "Variable type, Numeric, String, Boolean",
        duration: "12.00 Min",
        completed: true
      },
      {
        title: "Simple Mathematical operations in JavaScript",
        duration: "15.00 Min",
        completed: true
      },
      {
        title: "(advanced) Mathematical operation shorthand",
        duration: "11.00 Min",
        completed: true
      }
    ];


  const { courseid } = useParams();
  const courseData = courseDataa.filter((course) => course.id === courseid)[0];
  //   const courseData=temp[0];

  console.log(courseData, courseid);
  const { id, title, instructor, courseInfo } = courseData;

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  }

  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const [value, setValue] = React.useState(0);
  console.log(title);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <div>
      <div>
        <div className="bg-gray-300 h-80 flex justify-center items-center flex-col">
          <div>
            <div className="flex bg-white rounded-2xl p-2 font-bold">
              <div>HOME : </div>
              <div className="text-orange-400">OUR COURSES : {title}</div>
            </div>
            <div className="text-2xl font-semibold text-center m-3">
              {title}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div className="flex w-2/3 justify-start">
          <div className="w-3/4">
            <div className="mb-5 text-3xl">{title}</div>
            <hr />
            <div className="flex my-3 gap-9 text-lg">
              <div className="flex gap-2 items-center">
                <div className="h-10 overflow-hidden w-10 rounded-full">
                  <img
                    className="rounded-full"
                    src="/Images/courses/mahesh.png"
                    alt="Instructor"
                  />
                </div>
                <div>Mahesh</div>
              </div>
              <div className="flex items-center">
                <div className="h-12 overflow-hidden w-10 rounded-full mx-3">
                  <img
                    className="h-10 w-16"
                    src="/Images/video.jpeg"
                    alt="Classes"
                  />
                </div>
                <div>{courseInfo.classes} Classes</div>
              </div>
              <div className="flex items-center">
                <div className="rounded-full">
                  <img className="h-10" src="/Images/star.jpeg" alt="" />
                </div>
                <div>
                  {courseInfo.rating} ({courseInfo.reviews} Review)
                </div>
              </div>
            </div>
{/* 
            <div className="h-3/5">
              <img
                className="rounded-lg object-cover w-5/6 h-3/5"
                src={instructor.img1}
                alt="Course banner"
              />
              
            </div> */}
            <div className="overflow-hidden h-3/5 w-5/6">
          <img
            className="rounded-lg object-cover h-full w-full"
            src={instructor.img1}
            alt="Course banner"
          />
          </div>

            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="course tabs"
              >
                <Tab label="Overview" {...a11yProps(0)} />
                <Tab label="Curriculum" {...a11yProps(1)} />
                <Tab label="Reviews" {...a11yProps(2)} />
              </Tabs>
            </Box>
            {/* <CustomTabPanel value={value} index={0}>
              <Overview />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Curriculum />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Reviews />
            </CustomTabPanel> */}

            {/* Overview Tab Content */}
            <CustomTabPanel value={value} index={0}>
        {/* <Typography variant="h6">HEYY</Typography>
        <Typography>{overview.description}</Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          Requirements:
        </Typography>
        <ul>
          {overview.requirements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        <div>
     <div className="font-bold text-4xl my-3 ">Course Descriptions</div>
      {/* <div > */}
      <Typography className="text-gray-400 text-lg">
        Our Web Development course is designed to transform beginners into
        professional developers with industry-ready skills. Covering both
        front-end and back-end development, the program includes modules on
        HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With
        hands-on projects, you'll build real-world applications, gaining the
        confidence to tackle complex web solutions.
      </Typography>
      <Typography className="text-gray-400 mt-4 text-lg">
        Led by industry expert instructors, the course ensures students stay
        updated with the latest trends and tools in web development. You'll
        learn best practices for responsive design, performance optimization,
        and secure coding standards.
      </Typography>
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
        </CustomTabPanel>

         {/* Curriculum Tab Content */}
            <CustomTabPanel value={value} index={1}>
            <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-semibold text-purple-800 mb-6">
        Introduction To Web Development
      </h1>
      
      
      <div className="space-y-4">
        {courseItems.map((item, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center space-x-4">
              
              <span className="text-gray-700">{item.title}</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-purple-600 bg-purple-50 px-3 py-1 rounded-full text-sm">
                {item.duration}
              </span>
              {item.completed && (
                <Check className="h-6 w-6 text-purple-600" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
            </CustomTabPanel>

            {/* Reviews Tab Content */}
            <CustomTabPanel value={value} index={2}>
              {/* <Typography variant="h6">Reviews</Typography>
              <Typography>Total Reviews: 2</Typography>
              <ul>
                <li>
                  <strong>Chance Mango:</strong> March 20, 2024
                  <br />
                  Libex's hands-on approach and expert instructors helped me
                  land my dream job in Data Analyst. ⭐⭐⭐⭐⭐
                </li>
                <li>
                  <strong>Desirae Donin:</strong> June 10, 2024
                  <br />
                  Libex's hands-on approach and expert instructors helped me
                  land my dream job in Data Analyst. ⭐⭐⭐⭐⭐
                </li>
              </ul>
               */}
               <div>
    <h1 className='font-semibold text-2xl'>2 Reviews,Web Development Course</h1>
    <div>
      {reviews.map((r,i)=>
      {
        return (
          <div className='flex w-6/7 m-5'>
            <div> <img  className='h-20 w-24 rounded-full' src={r.src} alt="" /></div>
            <div className='m-5'>
              <div>{r.name}</div>
              <div className='my-4 text-gray-400'>{r.Date}</div>
              <div className='my-5 text-gray-400'>Libex's hands-on approachand expert instructors helped me landmy dream job in Web Development</div>
            </div>
            <div className='flex'><Star/> <Star/> <Star/> <Star/> <Star/></div>
          </div>
        )
      })}
    </div>
  </div>
            </CustomTabPanel>
            
           
          </div>

          <div className="border border-gray-300 rounded-lg h-fit w-96 p-4 text-xl">
            <div className="p-4 text-center">Course Includes:</div>
            <hr />
            {[
              { label: "Level", value: courseInfo.level },
              { label: "Duration", value: courseInfo.duration },
              { label: "Lessons", value: courseInfo.lessons },
              { label: "Students", value: courseInfo.students },
              { label: "Certifications", value: courseInfo.certifications },
              { label: "Language", value: courseInfo.language },
            ].map(({ label, value }) => (
              <React.Fragment key={label}>
                <div className="flex justify-between p-3">
                  <div className="flex">
                    <div>{label}:</div>
                  </div>
                  <div className="text-gray-400">{value}</div>
                </div>
                <hr />
              </React.Fragment>
            ))}

            <div className="flex flex-col justify-center">
              <div className="border border-violet-500 text-violet-500 m-5 p-3 rounded-lg text-center">
                This Course Fee {courseInfo.price.toFixed(2)}
              </div>
              <div className="bg-violet-500 text-white text-center p-3 m-3 rounded-lg">
                Join This Course
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div>Share:</div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 border border-violet-500" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ** */}
      <div className="flex justify-center mt-60">
        <div className="flex gap-3 p-5 border border-gray-200 rounded-lg w-3/5 justify-center">
          <div>
            <img
              className="rounded-lg h-96 w-full"
              src={instructor.img}
              alt="Instructor"
            />
          </div>
          <div className="w-2/3 m-3">
            <h1 className="text-xl font-bold">{instructor.name}</h1>
            <div className="text-xs py-3 text-gray-500">{instructor.role}</div>
            <div className="text-gray-500">{instructor.bio}</div>
            <hr />
            <div className="flex gap-5 p-5">
              <div>Experience: {instructor.experience}</div>
              <div>{instructor.students} Students</div>
              <div className="flex">
                <Star /> {instructor.rating} ({instructor.reviews} Reviews)
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-4 p-4">
              <div>Share:</div>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 border border-violet-500" />
              ))}
            </div>
          </div>
        </div>
      </div>

      
      <div className="flex justify-center mt-44 mb-40">
        <div className="border w-2/3">
          <div className="flex justify-between">
            <div>
              <h1 className="text-orange-500 font-semibold m-4">OUR COURSES</h1>
              <div className="text-3xl font-bold my-4 m-2">
                Our Most Popular <span className="text-cyan-400">Courses</span>
              </div>
            </div>
            <div className="flex">
              <div className="p-5">
                <CircleArrowLeft />
              </div>
              <div className="p-5">
                <CircleArrowRight />
              </div>
            </div>
          </div>
          <div className="my-10 mx-5 w-5/6">
            <CourseCards/>
          </div>
        </div>
      </div>
      <div className="flex m-5 mt-10 gap-3 p-5 border border-gray-200 rounded-lg"></div>
    </div>
  );
};

export default CourseDetails;

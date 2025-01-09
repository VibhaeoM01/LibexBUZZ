import React from 'react';
import { Star, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import { Box, Tabs, Tab } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import Coursecards from "../components/WebDevcom/Coursecards";
import Overview from '../components/WebDev/Overview';
import Reviews from '../components/WebDev/Reviews';

const CourseDetails = () => {

    const courseDataa = [
        // {
        //   id: "ui-ux",
        //   title: "The Complete UI/UX Designer Course",
        //   instructor: {
        //     name: "Jonathan Carter",
        //     role: "UX Designer",
        //     experience: "8 Years",
        //     students: 180,
        //     rating: "4.56",
        //     reviews: 36,
        //     bio: "Jonathan is a seasoned UI/UX Designer with over 8 years of experience crafting intuitive and visually compelling digital interfaces. He specializes in user-centered design, blending creativity with functionality to enhance user engagement. His expertise spans web and mobile applications, delivering solutions that align seamlessly with client goals."
        //   },
        //   courseInfo: {
        //     level: "Expert",
        //     duration: "09h 30m",
        //     lessons: 20,
        //     students: 180,
        //     certifications: "Yes",
        //     language: "English",
        //     price: 19999.00,
        //     rating: 3.4,
        //     classes: 30,
        //     reviews: 36
        //   },
          
        //   requirements: [
        //     "Foundational Knowledge",
        //     "Prototyping Skills",
        //     "User Research",
        //     "Wireframing and Design Systems"
        //   ],
        //   description: "The UI/UX Designer course is designed to equip learners with the skills and knowledge to create intuitive, engaging, and user-centered digital experiences. Through hands-on projects and expert guidance, participants will explore design principles, user research techniques, wireframing, prototyping, and usability testing. The course emphasizes creative problem-solving and collaboration, preparing students to craft visually appealing interfaces that prioritize user needs. With a focus on industry best practices and emerging trends, learners will build a strong foundation to excel in the dynamic field of UI/UX design."
        // },
        {
          id: "webdev",
          title: "The Complete Web Development Course",
          instructor: {
            banner:"",
            insimg:"",
            name: "Nandha Kishore",
            role: "Web Developer",
            experience: "10 Years",
            students: 185,
            rating: "4.54",
            reviews: 36,
            bio: "Our industry expert instructors bring years of professional experience in web development, ensuring you learn from the best. They specialize in modern frameworks like React, Node.js, and more, delivering practical insights alongside technical knowledge. Their mentorship includes hands-on guidance, project reviews, and tailored feedback to help you excel."
          },
          courseInfo: {
            level: "Expert",
            duration: "8h 30m",
            lessons: 15,
            students: 120,
            certifications: "Yes",
            language: "English",
            price: 15999.00,
            rating: 3.4,
            classes: 30,
            reviews: 36
          },
          overview:{
            desc1: "Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering bothfront-end and back-end development, the program includes modules onHTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining theconfidence to tackle complex web solutions.",
            desc2:"Led by industry expert instructors, the course ensures students stayupdated with the latest trends and tools in web development. You'll learn best practices for responsive design, performance optimization, and secure coding standards.",
            desc3:"A foundational understanding of technology and a passion for learning are all you need to start your journey in web development. No prior coding experience is required, but familiarity with basic computer operations is helpful.",
            pt1:"A Laptop or Desktop",
            pt2:"Basic Computer Skills",
            pt3:"Time Commitment",
            pt4:"Willingness to Learn",

        },
          requirements: [
            "A Laptop or Desktop",
            "Basic Computer Skills",
            "Time Commitment",
            "Willingness to Learn"
          ],
          description: "Our Web Development course is designed to transform beginners into professional developers with industry-ready skills. Covering both front-end and back-end development, the program includes modules on HTML, CSS, JavaScript, React, Node.js, and databases like MongoDB. With hands-on projects, you'll build real-world applications, gaining the confidence to tackle complex web solutions."
        },
        {
          curriculum: {
    "sectionTitle": "Introduction To Web Development",
    "lessons": [
      {
        "title": "Introduction to JavaScript, Run JavaScript in VSCode",
        "duration": "5.00 Min",
        "completed": true
      },
      {
        "title": "What is variable, five things you need to declare a variable",
        "duration": "13.00 Min",
        "completed": true
      },
      {
        "title": "Variable type, Numeric, String, Boolean",
        "duration": "12.00 Min",
        "completed": true
      },
      {
        "title": "Simple Mathematical operations in JavaScript",
        "duration": "15.00 Min",
        "completed": true
      },
      {
        "title": "(advanced) Mathematical operation shorthand",
        "duration": "11.00 Min",
        "completed": true
      }
    ]
  },
  reviews: {
    "totalReviews": 2,
    "courseTitle": "Web Development Course",
    "reviewsList": [
      {
        "src": "https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
        "name": "Kevin Martin",
        "date": "March 20,2024",
        "comment": "Libex's hands-on approach and expert instructors helped me land my dream job in Web Development",
        "rating": 5
      },
      {
        "src": "https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D",
        "name": "Sarah Aibert",
        "date": "June 10,2024",
        "comment": "Libex's hands-on approach and expert instructors helped me land my dream job in Web Development",
        "rating": 5
      },
    ]
  },
},

        // {
        //   id: "data-science",
        //   title: "The Complete Data Science Course",
        //   instructor: {
        //     name: "Ramesh Yadav",
        //     role: "Data Analyst",
        //     experience: "12 Years",
        //     students: 180,
        //     rating: "4.54",
        //     reviews: 36,
        //     bio: "Udex's expert instructors in data analysis bring extensive industry experience and cutting-edge knowledge to the classroom. These professionals guide learners through practical projects, real-world case studies, and advanced analytical tools. Their mentorship ensures students gain job-ready skills and excel in dynamic data roles."
        //   },
        //   courseInfo: {
        //     level: "Expert",
        //     duration: "10h 30m",
        //     lessons: 20,
        //     students: 190,
        //     certifications: "Yes",
        //     language: "English",
        //     price: 17999.00,
        //     rating: 3.4,
        //     classes: 30,
        //     reviews: 36
        //   },
        //   requirements: [
        //     "Basic understanding of mathematics and statistics",
        //     "Familiarity with programming languages such as Python",
        //     "Knowledge of database management systems and SQL",
        //     "Access to a computer with internet for online resources and software tools"
        //   ],
        //   description: "The Data Science course is designed to equip learners with the knowledge and skills needed to analyze, visualize, and interpret complex data. The curriculum covers foundational topics such as statistics, machine learning, data wrangling, and data visualization using popular tools like Python, R, and SQL. Through hands-on projects and real-world case studies, participants will gain practical experience in extracting actionable insights from data."
        // },

        
        {
          id: "data-science",
          title: "The Complete Data Science Course",
          instructor: {
            name: "Ramesh Yadav",
            role: "Data Analyst",
            experience: "12 Years",
            students: 180,
            rating: "4.54",
            reviews: 36,
            bio: "Udex's expert instructors in data analysis bring extensive industry experience and cutting-edge knowledge to the classroom. These professionals guide learners through practical projects, real-world case studies, and advanced analytical tools. Their mentorship ensures students gain job-ready skills and excel in dynamic data roles."
          },
          courseInfo: {
            level: "Expert",
            duration: "10h 30m",
            lessons: 20,
            students: 190,
            certifications: "Yes",
            language: "English",
            price: 17999.00,
            rating: 3.4,
            classes: 30,
            reviews: 36
          },
          overview: {
            description: "The Data Science course is designed to equip learners with the knowledge and skills needed to analyze, visualize, and interpret complex data. The curriculum covers foundational topics such as statistics, machine learning, data wrangling, and data visualization using popular tools like Python, R, and SQL. Through hands-on projects and real-world case studies, participants will gain practical experience in extracting actionable insights from data. The course also emphasizes the ethical use of data and best practices in data-driven decision-making. Whether you're a beginner or a professional looking to upskill, this course provides a comprehensive pathway to excel in the field of data science.",
            requirements: [
              "Basic understanding of mathematics and statistics",
              "Familiarity with programming languages such as Python",
              "Knowledge of database management systems and SQL",
              "Access to a computer with internet for online resources and software tools"
            ]
          },
          curriculum: {
            sectionTitle: "Introduction To Data",
            lessons: [
              {
                title: "Data Base and process",
                duration: "5.00 Min",
                completed: true
              },
              {
                title: "Statistics",
                duration: "13.00 Min",
                completed: true
              },
              {
                title: "Machine Learning",
                duration: "12.00 Min",
                completed: true
              },
              {
                title: "Visualization",
                duration: "15.00 Min",
                completed: true
              },
              {
                title: "Data Mining",
                duration: "11.00 Min",
                completed: true
              }
            ]
          },
          reviews: {
            totalReviews: 2,
            reviewsList: [
              {
                name: "Chance Mango",
                date: "March 20, 2024",
                comment: "Libex's hands-on approach and expert instructors helped me land my dream job in Data Analyst i gain more skills .Thank you soo mcuh",
                rating: 5
              },
              {
                name: "Desirae Donin",
                date: "June 10, 2024",
                comment: "Libex's hands-on approach and expert instructors helped me land my dream job in Data Analyst i gain more skills .Thank you soo mcuh",
                rating: 5
              }
            ]
          }
        },
        {
          id: "ui-ux",
          title: "The Complete UI/UX Designer Course",
          instructor: {
            name: "Jonathan Carter",
            role: "UX Designer",
            experience: "8 Years",
            students: 180,
            rating: "4.56",
            reviews: 36,
            bio: "Jonathan is a seasoned UI/UX Designer with over 8 years of experience crafting intuitive and visually compelling digital interfaces. He specializes in user-centered design, blending creativity with functionality to enhance user engagement. His expertise spans web and mobile applications, delivering solutions that align seamlessly with client goals."
          },
          courseInfo: {
            level: "Expert",
            duration: "09h 30m",
            lessons: 20,
            students: 180,
            certifications: "Yes",
            language: "English",
            price: 19999.00,
            rating: 3.4,
            classes: 30,
            reviews: 36
          },
          overview: {
            description: "The UI/UX Designer course is designed to equip learners with the skills and knowledge to create intuitive, engaging, and user-centered digital experiences. Through hands-on projects and expert guidance, participants will explore design principles, user research techniques, wireframing, prototyping, and usability testing. The course emphasizes creative problem-solving and collaboration, preparing students to craft visually appealing interfaces that prioritize user needs. With a focus on industry best practices and emerging trends, learners will build a strong foundation to excel in the dynamic field of UI/UX design.",
            requirements: [
              "Foundational Knowledge",
              "Prototyping Skills",
              "User Research",
              "Wireframing and Design Systems"
            ]
          },
          curriculum: {
            sectionTitle: "Introduction To UI Design",
            lessons: [
              {
                title: "Introduction to UI/UX Design",
                duration: "5.00 Min",
                completed: true
              },
              {
                title: "Design Fundamentals",
                duration: "13.00 Min",
                completed: true
              },
              {
                title: "User Research and Analysis",
                duration: "12.00 Min",
                completed: true
              },
              {
                title: "Wireframing and Prototyping",
                duration: "15.00 Min",
                completed: true
              },
              {
                title: "UX Writing",
                duration: "11.00 Min",
                completed: true
              }
            ]
          },
          reviews: {
            totalReviews: 2,
            reviewsList: [
              {
                name: "Wilson Philips",
                date: "March 20, 2024",
                comment: "The UI/UX Designer course at Labex exceeded my expectations. The practical approach and real-world projects helped me sharpen my skills and build a strong portfolio.",
                rating: 5
              },
              {
                name: "Carla Levin",
                date: "June 10, 2024",
                comment: "I gained valuable insights into UI/UX design principles through this course. The hands-on assignments and expert guidance were extremely beneficial for my career growth.",
                rating: 5
              }
            ]
          }
        },
  
        {
          id: "artificial-intelligence",
          title: "The Complete Artificial Intelligence Course",
          instructor: {
            name: "Dr. John",
            role: "Chief AI Scientist",
            experience: "15 Years",
            students: 180,
            rating: "4.54",
            reviews: 36,
            bio: "Dr. John Smith is a renowned expert in Artificial Intelligence, currently serving as the Chief AI Scientist at Tech Innovations Inc. With over 15 years of experience, he has contributed extensively to advancements in machine learning and natural language processing. Dr. Smith has authored numerous influential papers and is a sought-after speaker at international AI conferences."
          },
          courseInfo: {
            level: "Expert",
            duration: "10h 30m",
            lessons: 20,
            students: 190,
            certifications: "Yes",
            language: "English",
            price: 19999.00,
            rating: 3.4,
            classes: 30,
            reviews: 36
          },
          requirements: [
            "Basic Programming Skills",
            "Mathematical Knowledge",
            "Analytical Thinking",
            "Access to Tools"
          ],
          description: "Artificial Intelligence (AI) is a transformative field of computer science that enables machines to simulate human intelligence. This course provides an in-depth understanding of core AI concepts, including machine learning, natural language processing, computer vision, and robotics. Students will explore algorithms, data-driven decision-making, and ethical considerations in AI development. Through hands-on projects and real-world applications, learners will gain practical skills to design and implement intelligent systems."
        },
        {
          id: "java",
          title: "The Complete Java Course",
          instructor: {
            name: "John Doe",
            role: "Java Software Engineer",
            experience: "10 Years",
            students: 180,
            rating: "4.56",
            reviews: 36,
            bio: "John Doe is a seasoned Java Software Engineer with over 10 years of experience in developing robust and scalable applications. He specializes in object-oriented design, microservices architecture, and optimizing code performance. His expertise lies in building enterprise-grade solutions while maintaining high coding standards and best practices."
          },
          courseInfo: {
            level: "Expert",
            duration: "10h 30m",
            lessons: 20,
            students: 190,
            certifications: "Yes",
            language: "English",
            price: 18999.00,
            rating: 3.4,
            classes: 30,
            reviews: 36
          },
          requirements: [
            "Familiarity with basic computer operations",
            "Access to a computer with Java Development Kit (JDK) and IDE",
            "An understanding of basic math concepts like variables and logic",
            "Commitment to practice coding exercises and assignments regularly"
          ],
          description: "The Java Programming course is designed to provide a comprehensive introduction to one of the most widely used programming languages. This course covers core concepts such as object-oriented programming, data structures, and multithreading, while also exploring advanced topics like Java frameworks and APIs. Participants will gain hands-on experience through practical coding exercises, real-world projects, and debugging techniques."
        },
        {
          id: "python",
          title: "The Complete Python Course",
          instructor: {
            name: "Dr. Harish",
            role: "Lead Python Developer",
            experience: "8 Years",
            students: 180,
            rating: "4.56",
            reviews: 36,
            bio: "Dr. Harish is a seasoned Python developer with over 10 years of experience in building robust applications. He specializes in machine learning, data analytics, and software architecture. His expertise extends to optimizing code for performance and scalability in large-scale systems."
          },
          courseInfo: {
            level: "Expert",
            duration: "09h 30m",
            lessons: 20,
            students: 180,
            certifications: "Yes",
            language: "English",
            price: 18999.00,
            rating: 3.4,
            classes: 30,
            reviews: 36
          },
          requirements: [
            "Basic Computer Skills",
            "No Prior Coding Knowledge",
            "Software Setup",
            "Motivation to Practice"
          ],
          description: "The Python Programming course is designed to equip learners with a solid foundation in one of the most versatile and widely-used programming languages. This course covers essential topics including Python syntax, data types, control structures, functions, and modules. Students will also explore advanced concepts such as file handling, object-oriented programming, and working with libraries like NumPy and Pandas."
        },
        {
          id: "cybersecurity",
          title: "The Complete Cyber Security Course",
          instructor: {
            name: "Dr. Rajesh",
            role: "Cybersecurity Expert",
            experience: "15 Years",
            students: 180,
            rating: "4.54",
            reviews: 36,
            bio: "Dr. Rajesh is a seasoned cybersecurity professional with over 15 years of experience in securing enterprise networks and systems. He specializes in threat intelligence, incident response, and risk management. His expertise in developing robust security strategies has helped organizations mitigate potential cyber threats and protect sensitive data."
          },
          courseInfo: {
            level: "Expert",
            duration: "10h 30m",
            lessons: 20,
            students: 190,
            certifications: "Yes",
            language: "English",
            price: 19999.00,
            rating: 3.4,
            classes: 30,
            reviews: 36
          },
          requirements: [
            "Comprehensive coverage of cyber threats, vulnerabilities, and attack prevention techniques",
            "Hands-on training in using security tools and implementing defense mechanisms",
            "Real-world case studies to understand the evolving landscape of cybersecurity",
            "Certification upon completion, enhancing professional credibility in the field"
          ],
          description: "The Cybersecurity course provides a comprehensive understanding of protecting digital systems, networks, and data from cyber threats. Participants will learn about threat detection, risk assessment, and implementing effective defense mechanisms to safeguard information assets. The course covers key topics such as ethical hacking, network security, cryptography, and incident response."
        },
        {
          id: "machine-learning",
          title: "The Complete Machine Learning Course",
          instructor: {
            name: "Dr. John Smith",
            role: "Senior Machine Learning Engineer",
            experience: "10 Years",
            students: 180,
            rating: "4.56",
            reviews: 36,
            bio: "Dr. John Smith is an expert in machine learning and artificial intelligence with over 10 years of experience in developing cutting-edge algorithms for predictive analytics and natural language processing. He has led several high-impact projects in both the tech and healthcare sectors. His work focuses on advancing the capabilities of AI models to improve decision-making and automation processes."
          },
          courseInfo: {
            level: "Expert",
            duration: "09h 30m",
            lessons: 20,
            students: 180,
            certifications: "Yes",
            language: "English",
            price: 18999.00,
            rating: 3.4,
            classes: 30,
            reviews: 36
          },
          requirements: [
            "Programming Knowledge",
            "Mathematics Basics",
            "Data Handling Skills",
            "Interest in AI"
          ],
          description: "The Machine Learning course provides a comprehensive introduction to the principles, algorithms, and applications of machine learning. Designed for beginners and professionals alike, it covers essential topics such as supervised and unsupervised learning, regression, classification, and deep learning techniques. Participants will gain hands-on experience through practical projects and coding exercises, enabling them to build predictive models and deploy machine learning solutions."
        }
      ];
      


    const {courseid} = useParams();
    const courseData = courseDataa.filter(
        (course) => course.id === courseid 
      )[0];
    //   const courseData=temp[0];
    
    console.log(courseData,courseid);
  const { id, title, instructor, courseInfo } = courseData;



  const [value, setValue] = React.useState(0);
      console.log(title);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  };
const navigate=useNavigate();
const pay=()=>{navigate('/payment')};
  return (
    <div>
      <div>
        <div className="bg-gray-300 h-80 flex justify-center items-center flex-col">
          <div>
            <div className="flex bg-white rounded-2xl p-2 font-bold">
              <div>HOME : </div>
              <div className="text-orange-400">
                OUR COURSES : {title}
              </div>
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
            <div className="mb-5 fout-semibold text-3xl">
              {title}
            </div>
            <hr />
            <div className="flex my-3 gap-9 text-lg">
              <div className="flex gap-2">
                <div className="h-10 overflow-hidden w-10 rounded-full">
                  <img className="rounded-full" src="/Images/profile.png" alt="Instructor" />
                </div>
                <div>{instructor.name}</div>
              </div>
              <div className="flex">
                <div className="h-12 overflow-hidden w-10 rounded-full">
                  <img className="h-8 w-13" src="/Images/video.jpeg" alt="Classes" />
                </div>
                <div>{courseInfo.classes} Classes</div>
              </div>
              <div className="flex">
                <div className="rounded-full">
                  <img  className='h-8' src="/Images/star.jpeg" alt="" />
                </div>
                <div>{courseInfo.rating} ({courseInfo.reviews} Review)</div>
              </div>
            </div>

            <div>
              <img className="rounded-lg w-3/4" src="/api/placeholder/800/400" alt="Course banner" />
            </div>

            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="course tabs">
                <Tab label="Overview" {...a11yProps(0)} />
                <Tab label="Curriculum" {...a11yProps(1)} />
                <Tab label="Reviews" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
  <Overview/>
</CustomTabPanel>
 <CustomTabPanel value={value} index={1}>
   <Curriculum />
 </CustomTabPanel>
 <CustomTabPanel value={value} index={2}>
   <Reviews />
 </CustomTabPanel>
            <div className="flex m-5 mt-10 gap-3 p-5 border border-gray-200 rounded-lg">
              <div className="w-full">
                <img className="rounded-lg h-5/6 w-full" src="/api/placeholder/400/300" alt="Instructor" />
              </div>
              <div>
                <h1 className="text-xl font-bold">{instructor.name}</h1>
                <div className="text-xs py-3 text-gray-500">{instructor.role}</div>
                <div className="text-gray-500">{instructor.bio}</div>
                <hr />
                <div className="flex gap-5 p-5">
                  <div>Experience: {instructor.experience}</div>
                  <div>{instructor.students} Students</div>
                  <div className="flex"><Star /> {instructor.rating} ({instructor.reviews} Reviews)</div>
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

          <div className="border border-gray-300 rounded-lg h-fit w-96 p-4 text-xl">
            <div className="p-4 text-center">Course Includes:</div>
            <hr />
            {[
              { label: 'Level', value: courseInfo.level },
              { label: 'Duration', value: courseInfo.duration },
              { label: 'Lessons', value: courseInfo.lessons },
              { label: 'Students', value: courseInfo.students },
              { label: 'Certifications', value: courseInfo.certifications },
              { label: 'Language', value: courseInfo.language },
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
              <div className="bg-violet-500 text-white text-center p-3 m-3 rounded-lg hover:cursor-pointer" onClick={pay}>
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
              <div className="p-5"><CircleArrowLeft /></div>
              <div className="p-5"><CircleArrowRight /></div>
            </div>
          </div>
          <div className="my-10 mx-5">
            <Coursecards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
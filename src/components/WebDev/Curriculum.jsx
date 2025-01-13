// // import React from 'react';
// // import { Check } from 'lucide-react';

// // const WebDevCourse = () => {
// //   const courseItems = [
// //     {
// //       title: "Introduction to JavaScript, Run JavaScript in VSCode",
// //       duration: "5.00 Min",
// //       completed: true
// //     },
// //     {
// //       title: "What is variable, five things you need to declare a variable",
// //       duration: "13.00 Min",
// //       completed: true
// //     },
// //     {
// //       title: "Variable type, Numeric, String, Boolean",
// //       duration: "12.00 Min",
// //       completed: true
// //     },
// //     {
// //       title: "Simple Mathematical operations in JavaScript",
// //       duration: "15.00 Min",
// //       completed: true
// //     },
// //     {
// //       title: "(advanced) Mathematical operation shorthand",
// //       duration: "11.00 Min",
// //       completed: true
// //     }
// //   ];

// //   return (
// //     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
// //       <h1 className="text-2xl font-semibold text-purple-800 mb-6">
// //         Introduction To Web Development
// //       </h1>
      
      
// //       <div className="space-y-4">
// //         {courseItems.map((item, index) => (
// //           <div 
// //             key={index}
// //             className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
// //           >
// //             <div className="flex items-center space-x-4">
              
// //               <span className="text-gray-700">{item.title}</span>
// //             </div>
            
// //             <div className="flex items-center space-x-4">
// //               <span className="text-purple-600 bg-purple-50 px-3 py-1 rounded-full text-sm">
// //                 {item.duration}
// //               </span>
// //               {item.completed && (
// //                 <Check className="h-6 w-6 text-purple-600" />
// //               )}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WebDevCourse;

import React from 'react';
import { Check } from 'lucide-react';

const WebDevCourse = () => {
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

  return (
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
  );
};

export default WebDevCourse;

// import React from "react";
// import { Check } from "lucide-react";

// function Curriculum({ sectionTitle, lessons }) {
//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow">
//       <h1 className="text-2xl font-semibold text-purple-800 mb-6">
//         {sectionTitle}
//       </h1>
//       <div className="space-y-4">
//         {lessons.map((lesson, index) => (
//           <div
//             key={index}
//             className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
//           >
//             <div className="flex items-center space-x-4">
//               <span className="text-gray-700">{lesson.title}</span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <span className="text-purple-600 bg-purple-50 px-3 py-1 rounded-full text-sm">
//                 {lesson.duration}
//               </span>
//               {lesson.completed && (
//                 <Check className="h-6 w-6 text-purple-600" />
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Curriculum;

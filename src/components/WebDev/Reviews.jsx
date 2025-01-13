import { Star } from 'lucide-react'
import React from 'react'

function Reviews() {
  const reviews=
  [
    {
      src:"https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D", name:"Kevin Martin", Date:"March 20,2024",
    },  
    {
      src:"https://images.unsplash.com/photo-1734533992947-44970e6e5010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2MHx8fGVufDB8fHx8fA%3D%3D", name:"Sarah Aibert", Date:"June 10,2024",
    }
  ]
  return (
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
  )
}

export default Reviews

// import React from "react";
// import { Star } from "lucide-react";

// function Reviews({ reviews }) {
//   return (
//     <div>
//       <h1 className="font-semibold text-2xl">
//         {reviews.totalReviews} Reviews, Web Development Course
//       </h1>
//       <div>
//         {reviews.reviewsList.map((review, index) => (
//           <div key={index} className="flex w-6/7 m-5">
//             <div>
//               <img
//                 className="h-20 w-24 rounded-full"
//                 src={review.src}
//                 alt={review.name}
//               />
//             </div>
//             <div className="m-5">
//               <div>{review.name}</div>
//               <div className="my-4 text-gray-400">{review.date}</div>
//               <div className="my-5 text-gray-400">{review.comment}</div>
//             </div>
//             <div className="flex">
//               {[...Array(review.rating)].map((_, starIndex) => (
//                 <Star key={starIndex} />
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Reviews;

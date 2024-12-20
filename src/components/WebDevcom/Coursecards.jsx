import React from 'react';

function Coursecards() {
  const data = [
    {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
      weeks: '25',
      name: 'UI/UX',
      lesson: '25',
      students: '350'
    },
    {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww",
      weeks: '20',
      name: 'DS',
      lesson: '20',
      students: '300'
    },
    {
      src: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29kaW5nfGVufDB8fDB8fHww ",
      weeks: '30',
      name: 'WD',
      lesson: '32',
      students: '250'
    }
  ];

  return (
    <div className='flex gap-20'>
      {data.map((course, key) => (
        <div key={key} className="border p-4 rounded-lg mb-4">
          <img src={course.src} alt={course.name} className="w-full h-48 object-cover rounded-lg mb-4" />
          <div className='flex justify-between mb-2'>
            <div className='bg-cyan-500 text-white p-2 rounded'>Experts</div>
            <div className='bg-violet-600 text-white p-2 rounded'>{course.weeks} Weeks</div>
          </div>
          <div className="text-lg font-semibold mb-2">{course.name}</div>
          <hr />
          <div className='flex justify-between text-gray-500 mt-2'>
            <div>{course.lesson} Lessons</div>
            <div>{course.students} Students</div>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Coursecards;
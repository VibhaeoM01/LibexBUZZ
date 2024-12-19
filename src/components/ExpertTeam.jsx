import React from 'react';

const ExpertTeam = () => {
  const instructors = [
    {
      name: 'David Cooper',
      role: 'Sr. Manager',
      image: 'https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXhwZXJ0fGVufDB8fDB8fHww', // Replace with actual image URL
    },
    {
      name: 'Lincoln Kenter',
      role: 'Digital Marketer',
      image: 'https://images.unsplash.com/photo-1732153504267-c8b7940d81d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV4cGVydHxlbnwwfHwwfHx8MA%3D%3D', // Replace with actual image URL
    },
    {
      name: 'Gustavo Lipshutz',
      role: 'Sr. Manager',
      image: 'https://media.istockphoto.com/id/1369199737/photo/portrait-of-a-handsome-young-businessman-working-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=U34pKX1za17CtIvhvI3WXPXMSsP-jLnT0dmlV20jwik=', // Replace with actual image URL
    },
    {
      name: 'Abram Vetrovs',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1581368129682-e2d66324045b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwZXJ0fGVufDB8fDB8fHww', // Replace with actual image URL
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="text-center mb-12">
        <h2 className="text-orange-500 font-semibold">OUR EXPERT TEAM</h2>
        <h1 className="text-4xl font-bold">
          Our <span className="text-blue-500">Expert Instructor</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {instructors.map((instructor, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 text-center"
          >
            <div className="relative">
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{instructor.name}</h3>
            <p className="text-blue-500">{instructor.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertTeam;

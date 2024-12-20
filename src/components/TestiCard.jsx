import React from 'react'

function TestiCard({name,proff,description}) {
  return (
    <div className='bg-white text-left  w-72 rounded-xl'>
        <div className='flex justify-between'>
        <div className="text-pink-600 text-9xl font-bold">
        &#8220; 
      </div>
      <div className='h-20 overflow-hidden w-20 rounded-full'><img className='rounded-full' src="https://images.unsplash.com/photo-1734335225921-06e1b6d94ed0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
        </div>
        <div className='font-bold'>{name}</div>
        <div className='text-sm text-gray-500 mb-5'>{proff}</div>
        <div className='text-gray-600'>{description}</div>
        <div>star</div>
    </div>
  )
}

export default TestiCard
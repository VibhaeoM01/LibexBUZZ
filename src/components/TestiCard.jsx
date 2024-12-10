import React from 'react'

function TestiCard({name,proff,description}) {
  return (
    <div className='bg-white text-left  w-72 rounded-xl'>
        <div className="text-pink-600 text-9xl font-bold">
        &#8220; {/* This is the quotation mark */}
      </div>
        <div className='font-bold'>{name}</div>
        <div className='text-sm text-gray--399'>{proff}</div>
        <div>{description}</div>
        <div>star</div>
    </div>
  )
}

export default TestiCard
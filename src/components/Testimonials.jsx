import React from 'react'
import TestiCards from './TestiCards'

function Testimonials() {
  return (
       <div className='flex flex-col justify-center items-center mt-36 bg-red-100'>
      <div className='text-orange-500'>OUR TESTIMONIAL</div>
      <div className='font-bold text-4xl text-center'>
        People <span className='text-cyan-400'>Say About</span> Eduhive
      </div>
    {/* </div> */}

        <TestiCards />
        <div className='flex'>
            <hr /> 
            <div className='rounded-full border border-black'>left</div>
            <div className='rounded-full border border-black'>right</div>
            <hr />
        </div>
    </div>
  )
}

export default Testimonials
import React from 'react'
import TestiCards from './TestiCards'
import { CircleArrowLeft, CircleArrowRight } from 'lucide-react'

function Testimonials() {
  return (
       <div className='flex flex-col justify-center items-center mt-36 bg-red-100 p-20'>
      <div className='text-orange-500'>OUR TESTIMONIAL</div>
      <div className='font-bold text-4xl text-center'>
        People <span className='text-cyan-400'>Say About</span> Eduhive
      </div>
    {/* </div> */}

        <TestiCards />
        <div className='flex'>
            <hr /> 
            <div className='flex p-5'>
            <div className='m-4' >
              <CircleArrowLeft /> 
            </div>
            <div className='m-4'>
              <CircleArrowRight />
            </div>
            </div>
            <hr />
        </div>
    </div>
  )
}

export default Testimonials
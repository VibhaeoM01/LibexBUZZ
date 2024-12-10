import React from 'react'
import CourseCards from './CourseCards'
function Courses() {
  return (
    <div className='pt-20 bg-zinc-50 mb-48'>
        <div className='text-orange-500 text-xl'>OUR COURSES</div>
        <div className='font-bold text-5xl mt-6'>Our Most Popular <span className='text-cyan-400'>Courses</span></div>

        <CourseCards />
    </div>
  )
}

export default Courses
import React from 'react'
import Courseblog from './Courseblog'

function blog() {
  return (
    <div className='flex justify-center w-full bg-violet-200 h-5/6'>
      <div className='flex w-3/4 justify-center items-center gap-16 bg-violet-200'>
        <div className='w-3/5 text-left flex flex-col gap-2'>
            <div className='text-orange-500'>LATEST BLOG</div>
            <div className='font-semibold text-5xl'>Our Latest <span className='text-cyan-500'>Blog News</span>
            </div>
            <div>
            Tailored for students and professionals, the program combines expert-led training with real-world project exposure. Kickstart your career with mentorship, networking opportunities, and a pathway to innovation-driven growth!
            </div>
        </div>
        <div className='flex gap-5 p-10'>
            <Courseblog />
        </div>
    </div>
    </div>
  )
}

export default blog
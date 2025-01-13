import React from 'react'

function CourseCard({src,weeks,CName,lessons,students}) {
  return (
    // <div>CourseCard</div>
 <div className='flex border bg-white rounded-xl  w-3/5'>
    <div className='h-full w-full overflow-hidden rounded-3xl'><img className='h-full' src={src} alt="img" /></div>
    <div className='px-10 py-4'>
        <div className='flex'>
            <div className='bg-cyan-100 text-cyan-400 py-2 px-3 rounded-xl  m-2'> Experts</div>
            <div className='py-2 px-3 bg-violet-200 text-violet-400 rounded-xl m-2'>{weeks} Weeks</div>
        </div>
        <div>{CName}</div>
        <div className='flex'>
            <div className='p-5'><span>📚</span>{lessons} lessons</div>
            <div className='p-5'><span>👩‍💻</span>{students} students</div>
        </div>
        <div className='flex'>
        ⭐⭐⭐⭐⭐
  <div>5 Star</div>
</div>
    </div>
 </div>
  )
}

export default CourseCard
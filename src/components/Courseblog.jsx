import React from 'react'

var data=
[
  {src:"/Images/blog1.png", val:"How Our Training and Internship Program Prepares You for Success"},
  {src:"/Images/blog2.jpeg", val:"The Power of Hands-On Training and Internships"},
  // {src:"/Images/blog3.jpeg", val:"Real-World Skills You Gain Through Our Internship Program"},
]

function Courseblog() {
  return (
    data.map((item,index)=>
    <div className='w-3/4 border border-white p-5 bg-white rounded-xl'>
    <div className='h-40 overflow-hidden'><img className='object-cover object-center h-full w-full rounded-xl'src={item.src} alt="" /></div>
    <div className='flex gap-4 text-gray-500'> 
        <div className='flex'>
            <div><img className='h-8 w-12' src="/Images/pfp.png" alt="" /></div>
            <div>By Admin</div>
        </div>
        <div className='flex'>
            <div><img className='h-8 w-12' src="public/Images/tag.png" alt="" /></div>
            <div>2 Comments</div>
        </div>
        
        </div>
        <div>{item.val}</div>
</div>)
  )
}

export default Courseblog
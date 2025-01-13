import React from 'react'
import Photo from './Photo'

function Photos() {
    const photoss=[
        {src:"Images/home1.jpeg",alt:"photo1"},
        {src:"Images/home2.jpeg",alt:"photo2"},
        {src:"Images/home3.jpeg",alt:"photo3"},
        {src:"Images/home11.jpeg",alt:"photo4"},
    ];
  return (
    // <div>photos</div>
    <div className='flex justify-center gap-6'>
        {photoss.map((ph,i)=>(
          <div key={i} className={i==1 || i==2 ? 'mt-24' : ''}><Photo prop={ph.src} alt={ph.alt} /></div>
        ))}
        
    </div>
    // </div>

  )
}

export default Photos;
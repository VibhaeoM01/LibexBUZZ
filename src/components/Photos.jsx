import React from 'react'
import Photo from './Photo'

function Photos() {
    const photoss=[
        {src:"https://plus.unsplash.com/premium_photo-1689266188052-704d33673e69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8",alt:"photo1"},
        {src:"https://images.unsplash.com/photo-1725610147161-5caa05b3b156?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",alt:"photo2"},
        {src:"https://images.unsplash.com/photo-1728327511538-e9624254ed84?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",alt:"photo3"},
        {src:"https://plus.unsplash.com/premium_photo-1732667406794-02925ff2007c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",alt:"photo4"},
    ];
  return (
    // <div>photos</div>
    <div className='flex justify-center gap-3'>
        {photoss.map((ph,i)=>(
          <div key={i} className={i==1 || i==2 ? 'mt-24' : ''}><Photo prop={ph.src} alt={ph.alt} /></div>
        ))}
        
    </div>
    // </div>

  )
}

export default Photos;
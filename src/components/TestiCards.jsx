import React from 'react'
import TestiCard from './TestiCard'


const val=[
    {name:"John D" ,proff:"Web Development Graduate",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. "},
    {name:"Maren Geidt" ,proff:"Web Development Graduate",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
    {name:"Mira Dias" ,proff:"Web Development Graduate",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit."},
]


function TestiCards() {
  return (
    <div className='flex justify-center gap-24 mt-20'>
        {val.map((val)=>(
            <TestiCard name={val.name} proff={val.proff} description={val.description} />
        ))}
    </div>
  )
}

export default TestiCards
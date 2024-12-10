import React from 'react'
import Count from './Count'

const val=[
    {bclr:'bg-blue-100',clr:'bg-blue-500',logo:'👩‍💻',cnt:'1000',data:' Satisfied Students'},
    {bclr:'bg-green-100',clr:'bg-green-500',logo:'📚',cnt:'100',data:' Class Completed'},
    {bclr:'bg-yellow-100',clr:'bg-yellow-500',logo:'��',cnt:'50',data:'Active Students'},
    {bclr:'bg-pink-100',clr:'bg-pink-500',logo:'���️',cnt:'10',data:'Experts Intructors'},
];
function Counts() {
  return (
    <div className='flex justify-center gap-16 '>
        {val.map((val)=>
        (
            <Count bclr={val.bclr} clr={val.clr} logo={val.logo} cnt={val.cnt} data={val.data} /> 
        ))}
    </div>
  )
}

export default Counts
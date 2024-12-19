import React from 'react'
import Head from './Head'
const val=
{
    "name":"ABOUTUS", "description":"AboutUs",
    "name":"OUR COURSES : THE COMPLETEWEB DEVELOPMENT COURSE", "description":"The Complete Web Developement Course"
}
function Header() {
  return (
    
    // <div className="bg-gray-300 h-80 flex justify-center items-center flex-col">
    //     <div className="flex">
    //       <div>HOME</div> <div className="text-orange-400">ABOUT US</div>
    //     </div>

    //     <div className="text-2xl font-semibold">AboutUs</div>
    //   </div>
    <div className='h-1/4  bg-gray-400 '>
        val.map((val, i)={
            <Head key={i} name={val.name} description={val.description}/>
        })
        
    </div>
  )
}

export default Header

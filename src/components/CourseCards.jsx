import React from 'react'
import CourseCard from './CourseCard';

const val=[
 {weeks:7 ,Cname:'React',lessons:70,students:1000,src:'https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D'},
    {weeks:6 ,Cname:'Angular',lessons:60,students:900,src:'https://images.unsplash.com/photo-1601543461574-3a431aefc27d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D'},
    {weeks:5 ,Cname:'Vue',lessons:50,students:800 ,src:'https://plus.unsplash.com/premium_photo-1684971642831-f88b3fd4e089?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvdXJzZXN8ZW58MHx8MHx8fDA%3D'},
    {weeks:4 ,Cname:'Node',lessons:40,students:700 ,src:'https://images.unsplash.com/photo-1719937050640-71cfd3d851be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8    '},
];
function CourseCards() {
  return (
    // <div>CourseCards</div>
    <div className='flex justify-center pt-16'>
        <div className='flex flex-wrap w-2/3 gap-16 justify-center'>
       {val.map((val) =>(
        <CourseCard weeks={val.weeks} CName={val.Cname} lessons={val.lessons} students={val.students} star={val.star} src={val.src}  />
       ))}
       

    </div>
    </div>
  )
}

export default CourseCards
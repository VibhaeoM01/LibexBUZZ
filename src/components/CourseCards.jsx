import React from 'react'
import CourseCard from './CourseCard';

const val=[
 {weeks:7 ,Cname:'WordPress For Everyone: Unlock Your Creativity',lessons:70,students:1000,src:'Images/12.png'},
    {weeks:6 ,Cname:'The Data Science Revolution: Upgrading Your Skills',lessons:60,students:900,src:'Images/13.png'},
    {weeks:5 ,Cname:'From Zero to Website: A Web Development Adventure',lessons:50,students:800 ,src:'Images/14.png'},
    {weeks:4 ,Cname:'advanced Mastering UI/UX: Design Fundamentals course',lessons:40,students:700 ,src:'Images/15.png'},
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
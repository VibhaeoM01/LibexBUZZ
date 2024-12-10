    // import React from 'react'

    // function Weare() {
    //   return (
    //     <div className=' flex justify-center items-center gap-10 bg-red-50'>
    //         <div className='items-center'><img className='overflow-hidden h-24 w-32 ' src="https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D" alt="" /></div>
    //         <div>
    //             <div>Who We Are</div>
    //             <div>
    //                 <div>We Offer The <span className='text-cyan-500'>Best Carrier</span></div>
    //                 <hr />
    //                 <div className='w-1/2'>
    //                 <div className='flex m-4 '>
    //                     <div className='bg-cyan-300 rounded-full h-16 w-16'>logo</div>
    //                     <div>
    //                         <div className='font-semibold'>Industry Expert Instructor</div>
    //                         <div>Earn from Industry expert Instructors through courses in Web Development, UI/UX Design, Data Science, Artifical Intelligence and more</div>
    //                     </div>
    //                 </div>
    //                 <hr />
    //                 <div className='flex m-4'>
    //                     <div>logo</div>
    //                     <div>
    //                         <div className='font-semibold'>Up-to-Date Course Content</div>
    //                         <div>Earn from Industry expert Instructors through courses in Web Development, UI/UX Design, Data Science, Artifical Intelligence and more</div>
    //                     </div>
    //                 </div>
    //                 <hr />
    //                 <div className='flex m-4'>
    //                     <div>logo</div>
    //                     <div>
    //                         <div className='font-semibold'>Biggest Student Community`</div>
    //                         <div>Earn from Industry expert Instructors through courses in Web Development, UI/UX Design, Data Science, Artifical Intelligence and more</div>
    //                     </div>
    //                 </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    //   )
    // }

    // export default Weare


    import React from 'react';

    function Weare() {
    return (
        <div className='flex justify-center items-center gap-10 border border-black p-10'>
        <div className='  bg-red-100 flex items-center'>
            <img
            className='overflow-hidden h-2/3 w-3/4 rounded-lg'
            src="https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Course"
            />
        </div>
        <div> 
            <div className='text-2xl font-bold mb-4 text-start'>Who We Are</div>
            <div>
            <div className='text-xl mb-2 text-start'>
                We Offer The <span className='text-cyan-500'>Best Career</span>
            </div>
            <hr className='mb-4' />
            <div className='w-full md:w-1/2 '>
                <div className='flex m-4'>
                <div className='bg-cyan-300 rounded-full h-16 w-16 flex items-center justify-center'>
                    <span>logo</span>
                </div>
                <div className='ml-4'>
                    <div className='font-semibold'>Industry Expert Instructor</div>
                    <div>
                    Learn from Industry expert Instructors through courses in Web Development, UI/UX Design, Data Science, Artificial Intelligence, and more.
                    </div>
                </div>
                </div>
                <hr className='mb-4' />
                <div className='flex m-4'>
                <div className='bg-cyan-300 rounded-full h-16 w-16 flex items-center justify-center'>
                    <span>logo</span>
                </div>
                <div className='ml-4'>
                    <div className='font-semibold'>Up-to-Date Course Content</div>
                    <div>
                    Learn from Industry expert Instructors through courses in Web Development, UI/UX Design, Data Science, Artificial Intelligence, and more.
                    </div>
                </div>
                </div>
                <hr className='mb-4' />
                <div className='flex m-4'>
                <div className='bg-cyan-300 rounded-full h-16 w-16 flex items-center justify-center'>
                    <span>logo</span>
                </div>
                <div className='ml-4'>
                    <div className='font-semibold'>Comprehensive Learning Paths</div>
                    <div>
                    Our courses are designed to provide comprehensive learning paths that help you achieve your career goals.
                    </div>
                </div>
                </div>
                <hr className='mb-4' />
            </div>
            </div>
        </div>
        </div>
    );
    }

    export default Weare;

import React, { useState } from 'react';
import Card from './Card';
// import Modal as 
// import BasicModal from './Modal';

const cardData = [
  { name: 'Web Development', clr: 'bg-cyan-500' ,bclr:'bg-cyan-200', },
  { name: 'Data Science', clr: 'bg-pink-300' ,bclr:'bg-pink-200' },
  { name: 'AI', clr: 'bg-green-500' ,bclr:'bg-green-200'},
  { name: 'UI/UX', clr: 'bg-red-500' ,bclr:'bg-red-200' },
  { name: 'Java', clr: 'bg-gray-500'  ,bclr:'bg-gray-200'},
  { name: 'Python', clr: 'bg-yellow-500' ,bclr:'bg-yellow-200'},
  { name: 'Cyber Security', clr: 'bg-blue-500' ,bclr:'bg-blue-200'},
  { name: 'Machine Learning', clr: 'bg-orange-500' ,bclr:'bg-orange-200'},
];

function Cards() {
  return (  
    <div className='flex justify-center'>
          <div className="grid grid-cols-4  gap-6 w-3/4 p-1 mt-36">
      {cardData .map((card, idx) => (
        <Card key={idx} name={card.name} clr={card.clr} bclr={card.bclr} />
      ))}
    </div>
    </div>
  );
}

export default Cards;



// function Cards() {
  
//   // const [data,setdata]=useState(cardData);
//   // const addData = () => {
//   //   setdata([...data, { name: 'New Course', clr: 'bg-purple-500',bclr:'bg-purple-200' }]);
//   // }

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
//       {cardData .map((card, idx) => (
//         <Card key={idx} name={card.name} clr={card.clr} bclr={card.bclr} />
//       ))}
//       {/* <button onClick={addData}>Add new</button> */}
//       {/* <BasicModal setdata={setdata} data={data} /> */}
//     </div>
//   );
// }
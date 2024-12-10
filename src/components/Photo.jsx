import React from 'react'

function Photo({prop,alt}) {

  return (
    // <div>photo</div>
    <div>
      <img className='h-96 w-60 rounded-t-full rounded-b-full' src={prop} alt={alt} />
    </div>
  );
}

export default Photo;
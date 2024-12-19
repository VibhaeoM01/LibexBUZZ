import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ name, clr, bclr }) {
  const navigate = useNavigate();
  const handlenav = () => {
    navigate('/WebDev');
  };

  return (
    <div onClick={handlenav}
      className={`flex items-center space-x-4 p-4 ${bclr} w-72 rounded-xl hover:cursor-pointer hover:bg-opacity-50`}
    >
      <div className={`w-12 h-12 rounded-full ${clr} hover:bg-opacity-50`}></div>
      <div className="text-lg font-semibold">{name}</div>
    </div>
  );
}

export default Card;
import React from 'react';

function Item({ fooditem }) {
  
 
  return (
    <div className='flex justify-between items-center space-x-10 '>
      <li key={fooditem} className="flex py-5 " >{fooditem}</li>
      <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  "
      >
        Button
      </button>
    </div>
  );
}

export default Item;

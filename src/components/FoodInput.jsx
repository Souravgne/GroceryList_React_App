import React from 'react'

function FoodInput({handleKeyDown}) {
   
  return (
    <>
       <input type='text' placeholder = "Enter Food Item here"
        className='border-black w-[90%] p-3 m-3'
        onKeyDown={handleKeyDown } />
    </>
  )
}

export default FoodInput
import React from 'react'

function Item({fooditem}) {
  return (
    <div> <li key={fooditem} className="flex justify-between gap-x-6 py-5 " >{fooditem}</li>
     
    </div>
  )
}

export default Item
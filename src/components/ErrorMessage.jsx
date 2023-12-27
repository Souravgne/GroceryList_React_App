import React from 'react'

function ErrorMessage({items}) {

  return (
    <div>
    {items.length===0 ? <h3>I am Still Hugury!</h3> :null}

    </div>
  )
}

export default ErrorMessage
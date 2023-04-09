import React, { useEffect, useState } from 'react'
import Node from './DS'

function OK() {
  const [state, setstate] = useState(new Node(1))

  const foo = () => {
    state.left = 100
  }

  const hola = () => {
    setstate(state)
    console.log(state)
  }

  return (
    <div>
      {JSON.stringify(state)}
      <button onClick={foo}>Button</button>
      <button onClick={hola}>hola</button>
    </div>
  )
}

export default React.memo(OK);
import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Counter: {count}</p>
      <Button onClick={() => setCount(count - 1)}>-</Button>
      <Button onClick={() => setCount(count + 1)}>+</Button>
    </div>
  )
}

export default Counter

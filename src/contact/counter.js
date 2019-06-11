import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'

function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You Clicked {count} times</p>
      <Button onClick={() => setCount(count + 1)}>Click Me</Button>
    </div>
  )
}

export default Example

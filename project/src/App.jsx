import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

return (
          <div>
            <h1>The count is:{count} </h1>
            <button onClick={() => setCount((count) => count + 1)}>increment</button>
            <button onClick={() => setCount((count) => count - 1)}>decrement</button>
          </div>
        )
}


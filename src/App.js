import { useState } from "react";

export default function App() {
  return (
    <div className="app">
      <h1>Simple Counter App</h1>
      <Counter initialValue={0} />
    </div>
  );
}

function Counter({ initialValue = 0 }) {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="counter">
      <h2>Count: {count}</h2>
      <button className="btn increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button className="btn decrement" onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

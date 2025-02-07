import { useState } from "react";

export default function App() {
  return (
    <>
      <h1>Simple Counter App</h1>
      <Counter initialValue={0} step={5} />
      <Counter initialValue={1} step={1} />
    </>
  );
}

function Counter({ initialValue = 0, step = 1 }) {
  const [count, setCount] = useState(initialValue);
  return (
    <div className="app counter">
      <h2 style={{ color: count < 0 ? "#dc3545" : "#28a745" }}>
        Count: {count}
      </h2>
      <button className="btn increment" onClick={() => setCount(count + step)}>
        Increment (+{step})
      </button>
      <button className="btn decrement" onClick={() => setCount(count - step)}>
        Decrement (-{step})
      </button>
      <button className="btn reset" onClick={() => setCount(initialValue)}>
        Reset
      </button>
    </div>
  );
}

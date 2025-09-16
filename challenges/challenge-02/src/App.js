import { useState } from "react";

export default function App() {
  return (
    <div>
      <h3>Simple days Navigator</h3>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();
  today.setDate(today.getDate() + count);

  return (
    <div>
      <div>
        <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount((s) => s - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((s) => s + step)}>+</button>
      </div>

      <div>
        <span>
          {count === 0
            ? `Today's date is: `
            : count > 0
            ? `${count} day${count === 1 ? "" : "s"} from today is: `
            : `${-count} day${-count === 1 ? "" : "s"} ago was: `}
        </span>
        <span>{today.toDateString()}</span>
      </div>
    </div>
  );
}

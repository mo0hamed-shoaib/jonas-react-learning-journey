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
  // const [step, setStep] = useState(1);
  // const [count, setCount] = useState(0);
  const [range, setRange] = useState(1);
  const [input, setInput] = useState(0);

  const today = new Date();
  today.setDate(today.getDate() + input);

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={range}
          onChange={(e) => setRange(Number(e.target.value))}
        ></input>
        <span>Step: {range}</span>

        {/* from version 1 */}
        {/* <button
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
        >
          -
        </button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setInput((s) => s - range)}>-</button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={() => setInput((s) => s + range)}>+</button>

        {/* from version 1 */}
        {/* <button onClick={() => setCount((s) => s - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((s) => s + step)}>+</button> */}
      </div>

      <div>
        <span>
          {input === 0
            ? `Today's date is: `
            : input > 0
            ? `${input} day${input === 1 ? "" : "s"} from today is: `
            : `${-input} day${-input === 1 ? "" : "s"} ago was: `}

          {/* from version 1 */}
          {/* {count === 0
            ? `Today's date is: `
            : count > 0
            ? `${count} day${count === 1 ? "" : "s"} from today is: `
            : `${-count} day${-count === 1 ? "" : "s"} ago was: `} */}
        </span>
        <span>{today.toDateString()}</span>
        {input ? (
          <button
            onClick={() => {
              setRange(1);
              setInput(0);
            }}
          >
            Reset
          </button>
        ) : null}
      </div>
    </div>
  );
}

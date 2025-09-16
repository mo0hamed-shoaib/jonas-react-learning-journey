import React, { useState } from "react";

function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  function nextStep() {
    setStep((s) => s + 1);
  }

  function prevStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  return (
    <div>
      <button onClick={prevStep}>-</button>
      <span>Step: {step}</span>
      <button onClick={nextStep}>+</button>
      <Count step={step} />
    </div>
  );
}

function Count({ step }) {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((s) => s + step);
  }

  function decreaseCount() {
    setCount((s) => s - step);
  }

  return (
    <div>
      <button onClick={decreaseCount}>-</button>
      <span>Count: {count}</span>
      <button onClick={increaseCount}>+</button>
      <DisplayDate count={count} />
    </div>
  );
}

function DisplayDate({ count }) {
  const today = new Date();

  function handleDate(count) {
    const displayDate = new Date(today);
    displayDate.setDate(today.getDate() + count);
    return displayDate.toDateString();
  }

  return (
    <div>
      <span>
        {count === 0
          ? `Today is ${today.toDateString()}`
          : count > 0
          ? `${count} day${count === 1 ? "" : "s"} from today is ${handleDate(
              count
            )}`
          : `${-count} day${-count === 1 ? "" : "s"} ago was ${handleDate(
              count
            )}`}
      </span>
    </div>
  );
}

export default App;

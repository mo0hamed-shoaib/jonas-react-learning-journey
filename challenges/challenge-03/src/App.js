import React, { useState } from "react";

export default function App() {
  const [billInput, setBillInput] = useState("");
  const [percentageYou, setPercentageYou] = useState(0);
  const [percentageFriend, setPercentageFriend] = useState(0);

  const tip = Math.round(
    billInput * ((percentageYou + percentageFriend) / 2 / 100)
  );

  function handleReset() {
    setBillInput("");
    setPercentageYou(0);
    setPercentageFriend(0);
  }

  return (
    <div>
      <BillInput billInput={billInput} onSetBillInput={setBillInput} />
      <SelectPercentage percentage={percentageYou} onSelect={setPercentageYou}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        percentage={percentageFriend}
        onSelect={setPercentageFriend}
      >
        How did your friend like the service?
      </SelectPercentage>
      {billInput > 0 && (
        <>
          <OutputTotal billInput={billInput} tip={tip} />
          <ResetBtn onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ billInput, onSetBillInput }) {
  return (
    <div>
      <label>Bill Total:</label>
      <input
        type="number"
        value={billInput}
        placeholder="Enter total..."
        onChange={(e) => onSetBillInput(Number(e.target.value))}
        style={{ marginLeft: "5px" }}
      ></input>
    </div>
  );
}

function SelectPercentage({ percentage, onSelect, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
        style={{ marginLeft: "5px" }}
      >
        <option value={0}>Disatisfied (0%)</option>
        <option value={5}>Mild (5%)</option>
        <option value={10}>Good (10%)</option>
        <option value={20}>Amazing (20%)</option>
      </select>
    </div>
  );
}

function OutputTotal({ billInput, tip }) {
  return (
    <div>
      <p>
        <b>
          You pay ${billInput + tip} (Bill: ${billInput} + Tip: ${tip})
        </b>
      </p>
    </div>
  );
}

function ResetBtn({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

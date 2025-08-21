import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is ReactJS</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

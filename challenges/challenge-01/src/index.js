import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return <Card />;
}

function Card() {
  return (
    <div className="card">
      <PersonalImage />
      <FullName />
      <Bio />
      <SkillList />
    </div>
  );
}

function PersonalImage() {
  return <img src="pfp.jpg" alt="Personal" className="personal-image" />;
}

function FullName() {
  return <h2 className="full-name">Mohamed Gamal</h2>;
}

function Bio() {
  return (
    <p className="bio">
      Full-stack web developer with hands-on experience building scalable
      projects and business effecient solutions, with 6-months internship
      certificate from Information Technology Institute in Egypt
    </p>
  );
}

function SkillList() {
  return (
    <div>
      <Skill skill="React" />
      <Skill skill="JavaScript" />
      <Skill skill="GitHub" />
    </div>
  );
}

function Skill(props) {
  console.log(props);
  return (
    <div>
      <div className="skills">{props.skill}</div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

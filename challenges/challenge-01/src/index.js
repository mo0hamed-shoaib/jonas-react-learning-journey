import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="pfp.jpg" alt="My Avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Mohamed Gamal</h1>
      <p>
        A Frontend developer with experience building scalable full stack
        projects, currently learning ReactJS and Next.js from Jonas's course.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skillName="React.js" bgColor="skyblue" emoji="🌐 " />
      <Skill skillName="Next.js" bgColor="orange" emoji="⏭️ " />
      <Skill skillName="JavaScript" bgColor="yellow" emoji="🪝 " />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bgColor }}>
      <span>
        {props.emoji}
        {props.skillName}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

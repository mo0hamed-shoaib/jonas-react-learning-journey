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
  return <img src="pfp.jpg" alt="Mohamed Gamal" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Mohamed Gamal</h1>
      <p>
        Full-Stack MERN Developer with experience building responsive front-end
        interfaces using React.js and JavaScript (ES6+), and developing scalable
        back-end systems with Node.js, Express.js, and MongoDB. Skilled in
        crafting RESTful APIs, enhancing user experience with Bootstrap and
        Tailwind CSS, and delivering clean, maintainable code.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="❤️" bg="aqua" />
      <Skill skill="JavaScript" emoji="✨" bg="yellow" />
      <Skill skill="Git" emoji="🔍" bg="orange" />
      <Skill skill="Figma" emoji="⚡" bg="red" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.bg }}>
      <span>
        {props.skill} {props.emoji}
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

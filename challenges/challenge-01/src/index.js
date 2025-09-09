import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "pink",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#60DAFB",
  },
  {
    skill: "Next.js",
    level: "beginner",
    color: "lightgray",
  },
];

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
      {skills.map((skill) => (
        <Skill skillsObject={skill} />
      ))}
    </div>
  );
}

function Skill({ skillsObject }) {
  return (
    <div className="skill" style={{ backgroundColor: skillsObject.color }}>
      <span>{skillsObject.skill}</span>
      <span>
        {skillsObject.level === "advanced" && "💪🏻"}
        {skillsObject.level === "intermediate" && "👍🏻"}
        {skillsObject.level === "beginner" && "👶🏻"}
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

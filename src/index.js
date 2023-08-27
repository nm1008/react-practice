import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
      <SkillList />
    </div>
  );

  function Avatar() {
    return (
      <div className="avatar">
        <img src="dog.jpg" alt="dog" />
      </div>
    );
  }
  
  function Intro() {
    return (
        <div className="data">
            <h2>Nikko Mallari</h2>
            <h3>
                Hey there! I'm an aspiring software engineer, a culinary arts
                graduate, and a tech enthusiast. With a background in creating flavors
                and experiences through food, I'm now immersed in the world of coding
                and web development.
            </h3>
        </div>
    )
  }

  function SkillList() {
    return (
      <div className="skill-list">
        <Skill name="React " emoji="💪" color="red" />
        <Skill name="HTML+CSS " emoji="💪" color="orange" />
        <Skill name="Bootstrap " emoji="💪" color="yellow" />
        <Skill name="Node JS " emoji="💪" color="green" />
        <Skill name="Next JS " emoji="💪" color="brown" />
        <Skill name="Tailwind " emoji="💪" color="pink" />
      </div>
    );
  }

  function Skill(props) {
    console.log(props);
    return (
      <div className="skill">
        <div className="skill" style={{ backgroundColor: props.color }}>
          <span>{props.name}</span>
          <span>{props.emoji}</span>
        </div>
      </div>
    );
  }


}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [
    {
        name: "HTML + CSS",
        level: "intermediate",
        color: "#2662EA"

    },
    {
        name: "React",
        level: "beginner",
        color: "#60DAFB"
    },
    {
        name: "Bootstrap",
        level: "intermediate",
        color: "lightgreen"
    },
    {
        name: "Git and GitHub",
        level: "intermediate",
        color: "#C3DCAF"
    },
    {
        name: "Javascript",
        level: "intermediate",
        color: "#EFD81D"
    },
    {
        name: "Next JS",
        level: "beginner",
        color: "brown"
    },
    {
        name: "Node JS",
        level: "beginner",
        color: "green"
    },
    {
        name: "Tailwind",
        level: "intermediate",
        color: "pink"
    }
]

function App() {
  return (
    <div className="card">
        <div className="data">
            <Avatar />
            <Intro />
            <SkillList />
        </div>
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
      <div>
        <h2>Nikko Mallari</h2>
        <h3>
          Hey there! I'm an aspiring software engineer, a culinary arts
          graduate, and a tech enthusiast. With a background in creating flavors
          and experiences through food, I'm now immersed in the world of coding
          and web development.
        </h3>
      </div>
    );
  }

  function SkillList() {
    return (
      <div className="skill-list">

        {/* we used map so that when the obj-arr is looped it will return a new array - we didn't use forEach since it prints out every item inside the array */}
       {skills.map((skill) => (

        //added key for each obj it is a unique value - you can use the name of the obj
        <Skill skillObj={skill} key={skill.name} />

       ))}

         {/* passing key to another component  as props  */}
            {/* <Skill name="React " emoji="💪" color="red" />
            <Skill name="HTML+CSS " emoji="💪" color="orange" />
            <Skill name="Bootstrap " emoji="💪" color="yellow" />
            <Skill name="Node JS " emoji="💪" color="green" />
            <Skill name="Next JS " emoji="💪" color="brown" />
            <Skill name="Tailwind " emoji="💪" color="pink" /> */}
      </div>
    );
  }

  function Skill(props) {
    console.log(props.skillObj.emoji);

    let emoji;

    if(props.skillObj.level === "beginner"){
        emoji = <span>👶</span>
    }else if(props.skillObj.level === "intermediate"){
        emoji = <span>🔥</span>
    }else if(props.skillObj.level === "advanced") {
        emoji = <span>💪</span>
    }

    return (
      <div className="skill">
        <div className="skill" style={{ backgroundColor: props.skillObj.color }}>
          <span>{props.skillObj.name}</span>
            {emoji}
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

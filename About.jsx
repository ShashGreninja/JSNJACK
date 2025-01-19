import React from "react";

const About = () => {
  const topics = ["React", "JavaScript", "Web Development"];

  return (
    <div>
      <h1>About Page</h1>
      <p>We cover the following topics:</p>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;

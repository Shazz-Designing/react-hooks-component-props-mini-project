import React from "react";
import logo from "../assets/logo";

const About = ({ image, aboutText }) => {
  const defaultImage = "https://via.placeholder.com/215";

  return (
    <aside>
        <img src={image || logo || defaultImage} alt="blog logo" />
        <p>{aboutText}</p>
    </aside>
  );
};

export default About;

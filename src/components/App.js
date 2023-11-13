import React from "react";
import Header from "./Header";
import About from "./About";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.blogName} />
      <About image={blogData.about.image} aboutText={blogData.about.text} />
    </div>
  );
}

export default App;

import React from "react";
import "./styles.scss";

// Components
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

export default function App() {
  return (
    <div className="outer-container">
      <div className="inner-container">
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </div>
  );
}
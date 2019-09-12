import React from "react";
import Timer from "./Timer";
import "./App.css";
const miliSeconds = 5144320; //in milliseconds
function App() {
  return (
    <div className="block">
      <Timer miliSeconds={miliSeconds} />
    </div>
  );
}

export default App;

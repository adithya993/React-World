import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red" }}
            className="text-black outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Red
          </button>
          <button
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue" }}
            className="text-black outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            style={{ backgroundColor: "yellow" }}
            className="text-black outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green" }}
            className="text-black outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Green
          </button>
          <button
            onClick={() => setColor("orange")}
            style={{ backgroundColor: "orange" }}
            className="text-black outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >
            Orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

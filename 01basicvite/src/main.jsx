import React from "react";
import ReactDom from "react-dom/client";
import App from "./App.jsx";

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

function MyApp() {
  return (
    <div>
      <h1>Custom React App</h1>
    </div>
  );
}

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

const areactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "click to visit google"
);

// ReactDom.createRoot(document.getElementById("root")).render(AnotherElement);
// ReactDom.createRoot(document.getElementById("root")).render(areactElement);

ReactDom.createRoot(document.getElementById("root")).render(<App />);

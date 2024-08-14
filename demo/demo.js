import React from "react";
import { createRoot } from "react-dom/client";

import "../src/styles/nucleo.scss";

import { Button } from "../src/index.js";

const App = () => {
  return (
    <main className="wrapper">
      <h1>Nuclelo</h1>
      <h2>Button</h2>
      <Button onClick={() => alert("Clicked")}>Button</Button>
    </main>
  )
};

const wrapper = document.getElementById("app");
const root = createRoot(wrapper);
root.render(<App />);

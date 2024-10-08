import React from "react";
import { createRoot } from "react-dom/client";
import { Button, classNames, OtpInput } from "../src/index.js";
import "./demo.css";

const App = () => {
  const int = 3;
  const customClass = undefined;
  const dynamicClassNames = classNames("always-true", customClass, {
    "always-false": false,
    [`dynamic-${int}`]: true
  });
  const anotherClass = classNames(
    { "btn": true },
    { "lorem": false },
    { "active": true },
    "test"
  );
  return (
    <main className="wrapper">
      <h1>Nucleo Toolkit</h1>
      <h2>Button</h2>
      <div className="canvas">
        <Button onClick={() => alert("Hello, World!")}>Button</Button>
      </div>
      <div className="canvas">
        <Button disabled onClick={() => alert("Never fired")}>Disabled</Button>
      </div>
      <div className="canvas">
        <Button pressed>Pressed</Button>
      </div>
      <div className="canvas">
        <Button size="sm" onClick={() => alert("Hello, World!")}>Small</Button>&nbsp;
        <Button size="lg" onClick={() => alert("Hello, World!")}>Large</Button>
      </div>
      <h2>classNames</h2>
      <div className="canvas">
        {dynamicClassNames}<br />
        {anotherClass}
      </div>
        <h2>OtpInput</h2>
        <div className="canvas">
          <OtpInput length={6} onChange={console.log} />
        </div>
    </main>
  )
};

const wrapper = document.getElementById("app");
const root = createRoot(wrapper);
root.render(<App />);

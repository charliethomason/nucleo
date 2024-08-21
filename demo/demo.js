import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Button,
  classNames,
  OtpInput,
  Input
} from "../src/index.js";
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
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("12345");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
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
      <h2>Input</h2>
      <div className="canvas">
        <Input placeholder="Enter text..." value={input1} onChange={({ target }) => setInput1(target.value)} />
      </div>
      <div className="canvas">
        <Input size="sm" value="small" />&nbsp;
        <Input size="lg" value="large" />
      </div>
      <div className="canvas">
        <Input disabled value="Disabled input" onChange={() => {}} />
      </div>
      <div className="canvas">
        <Input placeholder="Enter only 5 numbers" value={input2} maxLength={5} onChange={({ target }) => setInput2(target.value)} />
      </div>
      <div className="canvas">
        <Input placeholder="Enter text..." value={input3} onChange={({ target }) => setInput3(target.value)} errorMessage={!input3 ? "Must enter a value" : null} />
      </div>
      <div className="canvas">
        <Input placeholder="Enter text..." type="textarea" value={input4} onChange={({ target }) => setInput4(target.value)} />
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

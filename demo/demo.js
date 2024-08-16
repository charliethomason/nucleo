import React from 'react';
import { createRoot } from 'react-dom/client';

import '../src/styles/nucleo.scss';
import './demo.css';

import { Button, OtpInput } from '../src/index.js';

const App = () => {
  return (
    <main className="wrapper">
      <h1>Nucleo Toolkit</h1>
      <h2>Button</h2>
      <div className="canvas">
        <Button onClick={() => alert('Hello, World!')}>Button</Button>
      </div>
      <div className="canvas">
        <Button disabled>Disabled</Button>
      </div>
      <div className="canvas">
        <OtpInput inputQty={6} correctOtp="123456" />
      </div>
    </main>
  );
};

const wrapper = document.getElementById('app');
const root = createRoot(wrapper);
root.render(<App />);

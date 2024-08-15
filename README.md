# Nucleo Toolkit

A front-end toolkit built with React, focused on simplicity and accessibility

## Requirements

* [Node.js](https://nodejs.org/en) v18+
* [React](https://react.dev/) v16+
* [PropTypes](https://www.npmjs.com/package/prop-types) v15+

## Usage

### CSS Styles

```jsx
import "nucleo-toolkit/nucleo.css";
```

Includes a CSS reset inspired by [Eric Meyer's Reset](https://meyerweb.com/eric/tools/css/reset/).

### Button

```jsx
import { Button } from "nucleo-toolkit";
```

**Props:**

`onClick`<br>
Function called when clicking the button

`type` (default: "button")<br>
Set to `type="submit"` to have the button submit a form onClick

`disabled`<br>
Sets a disabled attribute on the button and prevents the `onClick` function

`children`<br>
The content rendered inside the button (ideally a text string)

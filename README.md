# Nucleo Toolkit

A front-end toolkit built with React, focused on simplicity and accessibility

## Requirements

- [Node.js](https://nodejs.org/en) v18+
- [React](https://react.dev/) v16+
- [PropTypes](https://www.npmjs.com/package/prop-types) v15+

## Usage

### CSS Styles

```jsx
import 'nucleo-toolkit/nucleo.css';
```

Includes a CSS reset inspired by [Eric Meyer's Reset](https://meyerweb.com/eric/tools/css/reset/).

### Button

```jsx
import { Button } from 'nucleo-toolkit';
```

**Props:**
  children = "",
  type = "button",
  size = SIZES.default,
  onClick = () => {},
  disabled = false,
  pressed = false,
  className = ""

`children`<br>
The content rendered inside the button (ideally a text string)

`type` (default: "button")<br>
Set to `type="submit"` to have the button submit a form onClick

`size` (default: "md")<br>
Sets the size of the button. Options: `sm`, `md`, `lg`.

`onClick` (function)<br>
Function called when clicking the button

`disabled` (boolean)<br>
Sets a disabled attribute on the button and prevents the `onClick` function

`pressed` (boolean)<br>
Applies a classname of `pressed` to the button, making it appear `:active`.

`className` (string)<br>
One or more optional classnames to apply to the button.

### classNames

A simple JS utility for conditionally joining classnames together into a single string. There is no limit to the number of arguments it can be passed. All arguments must be a string or object.

```jsx
import { classNames } from "nucleo-toolkit";

const int = 3;
const customClass = undefined;

classNames("always-true", customClass, {
  "always-false": false,
  [`dynamic-${int}`]: true
});
// returns "always-true dynamic-3"

classNames(
  { "btn": true },
  { "lorem": false },
  { "active": true },
  "test"
);
// returns "btn active test"
```

### OtpInput

```jsx
import { OtpInput } from 'nucleo-toolkit';
```

**Props:**

`inputQty` (default: 6)<br>
The number of input fields to display

`correctOtp`<br>
The correct OTP to compare against

## Demo

```
npm install
npm run dev
```

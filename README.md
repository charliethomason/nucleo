# Nucleo Toolkit

A front-end toolkit built with React, focused on simplicity and accessibility

## Requirements

- [Node.js](https://nodejs.org/en) v18+
- [React](https://react.dev/) v16+
- [PropTypes](https://www.npmjs.com/package/prop-types) v15+

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

### OtpInput

```jsx
import { OtpInput } from "nucleo-toolkit";
```

**Props:**

`inputQty` (default: 6)<br>
The number of input fields to display

`correctOtp`<br>
The correct OTP to compare against

### Input

```jsx
import { Input } from "nucleo-toolkit";
```

**Props**

`type` (default = "text")<br>
Sets the `type` attribute on the input. Use "textarea" for `<textarea />`. Options: "text", "textarea", "password", "number", "email", "search", "tel"

`value` (string or number)<br>
Sets the `value` attribute on the input.

`placeholder` (string)<br>
Sets the `placeholder` attribute on the input.

`onChange` (function)<br>
Function called when typing in the input.

`onFocus` (function)<br>
Function called when the input receives focus.

`onBlur` (function)<br>
Function called when the input loses focus.

`size` (default = "md")<br>
Sets the size of the input. Options: `sm`, `md`, `lg`.

`disabled` (bool)<br>
Makes the input disabled.

`className` (string)<br>
One or more optional classnames to apply to the input.

`maxLength` (number or string)<br>
Sets the `maxLength` attribute on the input.

`id` (string)<br>
Sets an `id` attribute on the input.

`errorMessage` (string)<br>
Sets the input to be invalid and have red error message text below.

### DropdownButton

```jsx
import { DropdownButton } from "nucleo-toolkit";
```

**Props**

`children`<br>
The content rendered inside the button (ideally a text string)

`options` (boolean)<br>
An array of strings or objects used to render the options in the dropdown. If using an array of objects, each object must have a `label` and `value` property. You may also specify a `disabled` property to make an option disabled.

`onClick` (function)<br>
Function called when a dropdown option is clicked. Receives a single parameter of the option string or option.value.

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

### uniqueId

Returns a unique ID string, using a custom prefix. Inspired by Lodash _.uniqueId.

```jsx
import { uniqueId } from "nucleo-toolkit";

uniqueId("lorem-");
// returns "lorem-3"
```

## Demo

```
npm install
npm run dev
```

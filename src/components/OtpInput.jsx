import React, { useState, useRef, useEffect } from "react";
import { keyCodes } from "../utils/keyCodes";
import "../styles/otpInput.scss";

export const OtpInput = ({ inputQty = 6, onSubmit, correctOtp }) => {
  const [otp, setOtp] = useState("");
  const [readyToCheck, setReadyToCheck] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, inputQty);
  }, [inputQty]);

  const updateInput = () => {
    const inputValue = inputRefs.current.reduce((acc, input) => {
      acc += input?.value.length ? input.value : " ";
      return acc;
    }, "");
    setOtp(inputValue);
    setReadyToCheck(inputRefs.current.every((input) => input?.value !== ""));
  };

  const handleInput = (index) => (e) => {
    if (e.target.value.length === 1 && index + 1 < inputQty) {
      inputRefs.current[index + 1]?.focus();
    }
    if (e.target.value.length > 1) {
      handlePaste(e.target.value, index);
    }
    updateInput();
  };

  const handleKeyDown = (index) => (e) => {
    if (e.keyCode === keyCodes.backspace && index > 0) {
      shiftInputValues(index);
      inputRefs.current[index - 1]?.focus();
    } else if (e.keyCode === keyCodes.delete && index !== inputQty - 1) {
      shiftInputValues(index + 1);
      e.preventDefault();
    } else if (e.keyCode === keyCodes.left && index > 0) {
      e.preventDefault();
      inputRefs.current[index - 1]?.focus();
    } else if (e.keyCode === keyCodes.right && index + 1 < inputQty) {
      e.preventDefault();
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, inputQty);

    pastedData.split("").forEach((char, index) => {
      if (index < inputQty) {
        const input = inputRefs.current[index];
        if (input) {
          input.value = char;
        }
      }
    });

    if (inputRefs.current[pastedData.length]) {
      inputRefs.current[pastedData.length].focus();
    } else if (inputRefs.current[inputQty - 1]) {
      inputRefs.current[inputQty - 1].focus();
    }

    updateInput();
  };

  const shiftInputValues = (startIndex) => {
    for (let pos = startIndex; pos < inputQty - 1; pos++) {
      if (inputRefs.current[pos] && inputRefs.current[pos + 1]) {
        inputRefs.current[pos].value = inputRefs.current[pos + 1].value;
      }
    }
    if (inputRefs.current[inputQty - 1]) {
      inputRefs.current[inputQty - 1].value = "";
    }
    updateInput();
  };

  const resetForm = () => {
    inputRefs.current.forEach((input) => {
      if (input) input.value = "";
    });
    setOtp("");
    setReadyToCheck(false);
  };

  const checkOtp = (enteredOtp) => {
    const isMatch = enteredOtp === correctOtp;
    setIsCorrect(isMatch);
    return isMatch;
  };

  const submitOtp = (e) => {
    e.preventDefault();
    if (readyToCheck) {
      const isMatch = checkOtp(otp);
      onSubmit?.(otp, isMatch);
      if (!isMatch) {
        alert("Incorrect OTP");
        resetForm();
      } else {
        alert("Success");
        resetForm();
      }
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <form className="otp-form" onSubmit={submitOtp}>
      <div className="otp-input-container">
        {Array.from({ length: inputQty }).map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="number"
            className={`otp-input ${isCorrect === false ? "incorrect" : ""}`}
            maxLength={1}
            pattern="\d*"
            id={`otp-input-${index}`}
            onChange={handleInput(index)}
            onKeyDown={handleKeyDown(index)}
            onPaste={handlePaste}
          />
        ))}
        <input type="hidden" name="otp" value={otp} />
      </div>
      <button type="submit" className="otp-submit-btn" disabled={!readyToCheck}>
        Submit
      </button>
    </form>
  );
};

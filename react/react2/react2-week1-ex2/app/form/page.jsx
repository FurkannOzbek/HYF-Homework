"use client";
import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Form() {
  // Create refs for each input field
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // Function to handle key press and move focus to the next field
  const handleKeyPress = (e, nextRef) => {
    if (e.key === "Enter") {
      // Focus on the next input field if Enter is pressed
      nextRef.current.focus();
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "300px",
        margin: "50px auto",
      }}
    >
      {/* First Name Input */}
      <TextField
        sx={{ marginTop: "2rem" }}
        label="First Name"
        variant="outlined"
        inputRef={firstNameRef}
        onKeyPress={(e) => handleKeyPress(e, lastNameRef)} // Move focus to the next input
      />

      {/* Last Name Input */}
      <TextField
        label="Last Name"
        variant="outlined"
        inputRef={lastNameRef}
        onKeyPress={(e) => handleKeyPress(e, emailRef)} // Move focus to the next input
      />

      {/* Email Input */}
      <TextField
        label="Email"
        variant="outlined"
        inputRef={emailRef}
        onKeyPress={(e) => handleKeyPress(e, phoneRef)}
      />
      {/* Phone Input */}
      <TextField
        label="phone"
        variant="outlined"
        inputRef={phoneRef}
        onKeyPress={(e) => handleKeyPress(e, firstNameRef)}
      />

      <Button variant="contained">Submit</Button>
    </div>
  );
}

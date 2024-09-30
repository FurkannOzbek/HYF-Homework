"use client";
import React, { useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/navigation";

export default function Form() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const router = useRouter();

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [emailHelperText, setEmailHelperText] = useState("");
  const [phoneHelperText, setPhoneHelperText] = useState("");

  const handleKeyPress = (e, nextRef) => {
    if (e.key === "Enter") {
      nextRef.current.focus();
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;

    if (isValidEmail(emailValue)) {
      setErrorEmail(false);
      setEmailHelperText("");
    } else {
      setErrorEmail(true);
      setEmailHelperText("Invalid email format");
      return; // stop the submitting if we get error on format
    }

    const phoneValue = phoneRef.current.value;
    if (isValidPhone(phoneValue)) {
      setErrorPhone(false);
      setPhoneHelperText("");
    } else {
      setErrorPhone(true);
      setPhoneHelperText("Invalid phone number");
      return; // same logic as above
    }

    router.push("/"); // if everything is okay redirect to homepage
    console.log(emailRef.current.value);
  };

  function isValidEmail(email) {
    return email.includes("@");
  }
  function isValidPhone(phone) {
    const phonePattern = /^\d+$/;
    return phonePattern.test(phone);
  }

  return (
    <form
      onSubmit={formSubmit}
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
        required
        sx={{ marginTop: "2rem" }}
        label="First Name"
        variant="outlined"
        inputRef={firstNameRef}
        onKeyPress={(e) => handleKeyPress(e, lastNameRef)} // Move focus to the next input
      />

      {/* Last Name Input */}
      <TextField
        required
        label="Last Name"
        variant="outlined"
        inputRef={lastNameRef}
        onKeyPress={(e) => handleKeyPress(e, emailRef)} // Move focus to the next input
      />

      {/* Email Input */}
      <TextField
        required
        label="Email"
        variant="outlined"
        inputRef={emailRef}
        onKeyPress={(e) => handleKeyPress(e, phoneRef)}
        // I could also add validation with MUI but prefered to do with JS
        error={errorEmail}
        helperText={errorEmail ? emailHelperText : ""}
      />
      {/* Phone Input */}
      <TextField
        required
        label="phone"
        variant="outlined"
        inputRef={phoneRef}
        onKeyPress={(e) => handleKeyPress(e, firstNameRef)}
        error={errorPhone}
        helperText={errorPhone ? phoneHelperText : ""}
      />

      <Button type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
}

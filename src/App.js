import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // to check if all inputs have values
    const test = Object.keys(values).every((key) => {
      return values[key] !== "";
    });
    // if test turns true then  the form is valid
    test && setValid(true);
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={(e) => handleSubmit(e)}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid && (
          <div className="success-message">
            Success! Thank you for registering
          </div>
        )}
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={(e) => handleChange(e)}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={(e) => handleChange(e)}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={(e) => handleChange(e)}
        />
        {/* Uncomment the next line to show the error message */}
        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

import React from "react";
import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import Button from "../UI/Button";
import classes from "./Contact.module.css";

const ContactForm = () => {
  const [firstName, isFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [timeDuration, setTimeDuration] = useState("");
  const [price, setPrice] = useState("");
  const [isMessage, setIsMessage] = useState("");

  const firstNameChangeHandler = (event) => {
    isFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const phoneChangeHandler = (event) => {
    setPhone(event.target.value.replace(/\D/g, ""));
  };

  const timeChangeHandler = (event) => {
    setTimeDuration(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setIsMessage(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (firstName.trim().length === 0) {
      alert("Please Enter your First Name");
      return;
    }
    if (lastName.trim().length === 0) {
      alert("Please enter your last name");
      return;
    }
    if (email.trim().length === 0) {
      alert("Please enter your email");
      return;
    }
    if (phone.trim().length === 0) {
      alert("Please enter phone number");
      return;
    }
    if (timeDuration.length === 0) {
      alert("Please select");
      return;
    }
    if (price.length === 0) {
      alert("Please select Price");
      return;
    }
    if (isMessage.trim().length === 0) {
      alert("Please enter Message");
      return;
    }
    isFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setTimeDuration("");
    setPrice("");
    setIsMessage("");
  };
  return (
    <Form
      action="#"
      method="post"
      className={`row ${classes.form}`}
      name="myContact"
      onSubmit={formSubmitHandler}
    >
      <Col xs={12} md={6}>
        <Form.Control
          size="lg"
          type="text"
          name="firstName"
          placeholder="First Name"
          className={classes["last-name"]}
          value={firstName}
          onChange={firstNameChangeHandler}
        />
        <span id="fName"></span>
      </Col>
      <Col xs={12} md={6}>
        <Form.Control
          size="lg"
          type="text"
          name="lastName"
          placeholder="Last Name"
          className={classes["last-name"]}
          value={lastName}
          onChange={lastNameChangeHandler}
        />
        <span id="lName"></span>
      </Col>
      <Col xs={12} md={6}>
        <Form.Control
          size="lg"
          type="text"
          name="userEmail"
          placeholder="Your Email"
          className={classes["last-name"]}
          value={email}
          onChange={emailChangeHandler}
        />
        <span id="uEmail"></span>
      </Col>
      <Col xs={12} md={6}>
        <Form.Control
          size="lg"
          type="tel"
          name="userPhone"
          placeholder="Your Phone"
          minLength="10"
          maxLength="13"
          className={classes["last-name"]}
          value={phone}
          onChange={phoneChangeHandler}
        />
      </Col>
      <Col xs={12} md={6}>
        <Form.Select
          size="lg"
          className={classes["last-name"]}
          aria-label="Default select example"
          onChange={timeChangeHandler}
          value={timeDuration}
        >
          <option>Select Time</option>
          <option value="weekDays">Week Days</option>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </Form.Select>
      </Col>
      <Col xs={12} md={6}>
        <Form.Select
          size="lg"
          className={classes["last-name"]}
          aria-label="Default select example"
          onChange={priceChangeHandler}
          value={price}
        >
          <option>$100 - $200</option>
          <option value="$201 - $400">$201 - $400</option>
          <option value="$401 - $600">$401 - $600</option>
          <option value="$601 - $800">$601 - $800</option>
        </Form.Select>
      </Col>
      <Col xs={12}>
        <textarea
          cols="30"
          rows="5"
          className={`form-control ${classes["last-name"]}`}
          placeholder="Give us more details..."
          onChange={messageChangeHandler}
          value={isMessage}
        ></textarea>
      </Col>
      <Col xs={12}>
        <Button type="submit" className={classes["btn-form-bottom"]}>
          Get Appointment
        </Button>
      </Col>
    </Form>
  );
};

export default ContactForm;

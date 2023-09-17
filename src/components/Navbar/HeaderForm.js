import React from "react";
import { useState } from "react";
import { Col, Form } from "react-bootstrap";
import Button from "../UI/Button";
import classes from "./TopGap.module.css";

const HeaderForm = () => {
  const [userInput, setUserInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectTime: "",
    selectPrice: "",
  });

  const firstNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        firstName: event.target.value,
      };
    });
  };

  const lastNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        lastName: event.target.value,
      };
    });
  };

  const emailChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        email: event.target.value,
      };
    });
  };

  const phoneChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        phone: event.target.value.replace(/\D/g, ""),
      };
    });
  };

  const selectTimeChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        selectTime: event.target.value,
      };
    });
  };

  const selectPriceChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        selectPrice: event.target.value,
      };
    });
  };

  const headerFormSubmitHandler = (event) => {
    event.preventDefault();
    if (userInput.firstName.trim().length === 0) {
      alert("Please enter First name!");
      return;
    }
    if (userInput.lastName.trim().length === 0) {
      alert("please enter last name");
      return;
    }
    if (userInput.email.trim().length === 0) {
      alert("Please enter email");
      return;
    }
    if (userInput.phone.trim().length === 0) {
      alert("Please enter phone number");
      return;
    }
    if (userInput.selectTime.length === 0) {
      alert("Please select time");
      return;
    }
    if (userInput.selectPrice.length === 0) {
      alert("Please select Price range");
      return;
    }
    setUserInput("");
  };

  return (
    <Form
      action="#"
      method="post"
      name="headForm"
      className="row"
      onSubmit={headerFormSubmitHandler}
    >
      <Col lg={6}>
        <Form.Control
          type="text"
          name="firstName"
          placeholder="First Name"
          className={classes["first-name"]}
          onChange={firstNameChangeHandler}
        />
        <span id="firstName"></span>
      </Col>
      <Col lg={6}>
        <Form.Control
          type="text"
          name="lastName"
          placeholder="Last Name"
          className={classes["first-name"]}
          onChange={lastNameChangeHandler}
        />
        <span id="lastName"></span>
      </Col>
      <Col lg={6}>
        <Form.Control
          type="text"
          name="userEmail"
          placeholder="Your Email"
          className={classes["first-name"]}
          onChange={emailChangeHandler}
        />
        <span id="userEmail"></span>
      </Col>
      <Col lg={6}>
        <Form.Control
          type="tel"
          name="userPhone"
          minLength="10"
          maxLength="12"
          placeholder="Your Phone"
          className={classes["first-name"]}
          onChange={phoneChangeHandler}
        />
      </Col>
      <Col lg={6}>
        <Form.Select
          className={classes["first-name"]}
          aria-label="Default select example"
          onChange={selectTimeChangeHandler}
        >
          <option>Select Time</option>
          <option value="weekDays">Week Days</option>
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </Form.Select>
      </Col>
      <Col lg={6}>
        <Form.Select
          className={classes["first-name"]}
          aria-label="Default select example"
          onChange={selectPriceChangeHandler}
        >
          <option>$100 - $200</option>
          <option value="$201 - $400">$201 - $400</option>
          <option value="$401 - $600">$401 - $600</option>
          <option value="$601 - $800">$601 - $800</option>
        </Form.Select>
      </Col>
      <Col>
        <Button type="submit" className={classes.btn_form_head}>
          Get an appointment
        </Button>
      </Col>
    </Form>
  );
};

export default HeaderForm;

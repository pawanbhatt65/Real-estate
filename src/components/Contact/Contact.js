import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Contact.module.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <Container>
        <Row>
          <Col lg={{ span: 10, offset: 1 }}>
            <div className={classes["contact-info"]}>
              <h3>
                Get an Appointment Today <sup>*</sup>
              </h3>
              <p>
                Let us give you more details about the special offer website you
                want us. Please fill out the form below. We have million of
                website owners who happy to work with us!
              </p>
            </div>
          </Col>
          <Col xs={11} md={9} lg={8} className={`mx-auto`}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

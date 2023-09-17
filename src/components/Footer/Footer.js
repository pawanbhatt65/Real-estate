import React from "react";
import { Col, Container, Form, Image, Row } from "react-bootstrap";
import classes from "./Footer.module.css";

// import image
import Logo from "../../images/logo.png";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-top"]}>
        <Container>
          <Row>
            <Col xs={12} lg={4}>
              <div className={classes["footer-part-1"]}>
                <Image
                  src={Logo}
                  alt="logo"
                  fluid={true}
                  className={`d-block`}
                />
                <p>
                  Integer rutrum ligula eu dignissim laoreet. Pellentesque
                  venenatis nibh sed tellus faucibus bibendum. Sed fermentum est
                  vitae rhoncus molestie. Cum sociis natoque penatibus et magnis
                  dis montes.
                </p>
                <p>
                  Sed fermentum est vitae rhoncus molestie. Cum sociis natoque
                  penatibus et magnis dis montes.
                </p>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className={classes["footer-part-2"]}>
                <h3>Contact Details</h3>
                <ul>
                  <li>
                    <a href="#">info@yoursite.com</a>
                  </li>
                  <li>
                    <a href="#">www.yoursite.com</a>
                  </li>
                  <li>
                    PO Box 16122 Collins Street West Victoria 8007 Australia
                  </li>
                  <li>+61 3 8376 6284</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={3}>
              <div className={classes["footer-part-3"]}>
                <h3>Twitter Feed</h3>
                <ul>
                  <li>
                    <a href="#">
                      {" "}
                      @Rt_miOnline o zaman en yakın Apple Store seni bekler
                      geçmiş olsun
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      @Harry - Thanks you so much for your help. Still waiting
                      update for my Ticket!
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      @MedyaPet - Welcome to the our community dude! You are
                      awesome!
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col xs={12} lg={2}>
              <div className={classes["footer-part-4"]}>
                <h3>Social</h3>
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f"></i> 22.543 Likes
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-github"></i> 128 Projects
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i> 12.860 Followers
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-globe"></i> 3312 Shots
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-pinterest"></i> 3331 Pins
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={classes["footer-bottom"]}>
        <Container>
          <Row>
            <Col xs={12} lg={6}>
              <div className={classes["copywrites-1"]}>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">blog</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">pricing</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">about</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">faq</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">contact</a>
                  </li>
                </ul>
                <p>
                  All Rights Reserved. <a href="#">html.design</a> © 2021
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6}>
              <div className={classes["copywrites-2"]}>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Subscribe our newsletter..."
                />
                <i className="far fa-envelope"></i>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

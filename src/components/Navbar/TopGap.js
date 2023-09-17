import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "../UI/Button";
import HeaderForm from "./HeaderForm";
import classes from "./TopGap.module.css";

const TopGap = () => {
  return (
    <div className={classes.topGap} id="home">
      <Container>
        <Row>
          <Col lg={6}>
            <div className={classes.sell}>
              <h1>Sell Your Property With Aven</h1>
              <p>
                With Aven responsive landing page template, you can promote your
                all property &amp; real estate projects.
              </p>
              <Button className={classes["btn-view"]}>view gallery</Button>
            </div>
          </Col>
          <Col lg={6} className="col-12 d-none d-lg-block">
            <div className={classes["contact-form"]}>
              <h3>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                quick appointment
              </h3>
              <HeaderForm />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopGap;

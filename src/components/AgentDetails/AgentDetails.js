import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Button from "../UI/Button";
import classes from "./AgentDetails.module.css";

// import images
import Agent from "../../images/agent.jpg";

const AgentDetails = () => {
  return (
    <section className={classes["agent-details"]} id="agent">
      <Container>
        <Row>
          <Col xs={12} lg={{ span: 10, offset: 1 }}>
            <div className={classes["agent-info"]}>
              <h3 className="text-center">Agent Details</h3>
              <p className="text-center">
                Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
                vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus
                dignissim.
              </p>
            </div>
          </Col>
          <Col xs={12} lg={9}>
            <Card className={classes.card}>
              <Row>
                <Col lg={4} className={classes["agent-viedo"]}>
                  <Card.Img src={Agent} variant="top" alt="Agent" />
                  <a href="#">
                    <i className="far fa-play-circle"></i>
                  </a>
                </Col>
                <Col lg={8}>
                  <Card.Body>
                    <h5 className={classes["card-title"]}>THE AGENT</h5>
                    <h3 className={classes["card-title"]}>Jenny Martines</h3>
                    <p className={classes["card-text"]}>
                      <i>
                        Quisque eget nisl id nulla sagittis auctor quis id.
                        Aliquam quis vehicula enim, non aliquam risus. Sed a
                        tellus quis mi rhoncus dignissim.
                      </i>
                    </p>
                    <p className={classes["card-text"]}>
                      Integer rutrum ligula eu dignissim laoreet. Pellentesque
                      venenatis nibh sed tellus faucibus bibendum. Sed fermentum
                      est vitae rhoncus molestie. Cum sociis natoque penatibus
                      et magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <Button type="button">Contact Me</Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col xs={12} lg={3}>
            <ul className={classes["agent-contact"]}>
              <li>
                <a href="#">support@sitename.com</a>
              </li>
              <li>
                <a href="#"> www.sitename.com</a>
              </li>
              <li> +1 232 444 55 66</li>
              <li>+1 232 444 55 66</li>
              <li>
                <a href="#"> facebook.com/tagline</a>
              </li>
              <li>
                <a href="#">twitter.com/tagline</a>
              </li>
              <li>
                <a href="#">linkedin.com/tagline</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AgentDetails;

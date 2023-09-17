import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import classes from "./PropertyGallery.module.css";

// import images
import HomeOne from "../../images/home_01.jpg";
import HomeTwo from "../../images/home_02.jpg";
import HomeThree from "../../images/home_03.jpg";
import HomeFour from "../../images/home_04.jpg";
import HomeFive from "../../images/home_05.jpg";
import HomeSix from "../../images/home_05.jpg";

const PropertyGallery = () => {
  return (
    <section className={classes.gallery} id="gallery">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className={classes["gallery-details"]}>
              <h3>Property Gallery</h3>
              <p>
                Quisque eget nisl id nulla sagittis auctor quis id. Aliquam quis
                vehicula enim, non aliquam risus. Sed a tellus quis mi rhoncus
                dignissim.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={classes["gallery-img"]}>
              <a href="#">
                <Image src={HomeOne} fluid={true} alt="home" />
              </a>
              <div>
                <i className="fas fa-link"></i>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={classes["gallery-img"]}>
              <a href="#">
                <Image src={HomeTwo} fluid={true} alt="home" />
              </a>
              <div>
                <i className="fas fa-link"></i>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={classes["gallery-img"]}>
              <a href="#">
                <Image src={HomeThree} fluid={true} alt="home" />
              </a>
              <div>
                <i className="fas fa-link"></i>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={classes["gallery-img"]}>
              <a href="#">
                <Image src={HomeFour} fluid={true} alt="home" />
              </a>
              <div>
                <i className="fas fa-link"></i>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={classes["gallery-img"]}>
              <a href="#">
                <Image src={HomeFive} fluid={true} alt="home" />
              </a>
              <div>
                <i className="fas fa-link"></i>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className={classes["gallery-img"]}>
              <a href="#">
                <Image src={HomeSix} fluid={true} alt="home" />
              </a>
              <div>
                <i className="fas fa-link"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PropertyGallery;

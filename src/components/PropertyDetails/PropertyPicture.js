import React from "react";
import { Col, Image } from "react-bootstrap";
import classes from "./PropertyDetails.module.css";

const PropertyPicture = (props) => {
  return (
    <Col xs={12} md={6} lg={4} className="mt-5">
      <div className={classes["show-property"]}>
        <div className={classes["zoom-property"]}>
          <Image
            src={props.pictureImage}
            fluid={true}
            alt="EstateOne site"
            className="d-block"
          />
          <a href="#">
            <i className={props.anchorTag}></i>
          </a>
        </div>
        <ul>
          <li>{props.heading}</li>
          <li>{props.content}</li>
        </ul>
      </div>
    </Col>
  );
};

export default PropertyPicture;

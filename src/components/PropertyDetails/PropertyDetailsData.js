import classes from "./PropertyDetails.module.css";

import React from "react";
import { Col } from "react-bootstrap";

const PropertyDetailsData = (props) => {
  return (
    <Col xs={6} sm={4} lg={2} id={props.id}>
      <div className={classes["property-box"]}>
        <span>
          <i className={props.iTag}></i>
        </span>
        <ul>
          <li>{props.liFirst}</li>
          <li>{props.liSecond}</li>
        </ul>
      </div>
    </Col>
  );
};

export default PropertyDetailsData;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./PropertyDetails.module.css";

// import images
import EstateOne from "../../images/estate_01.jpg";
import EstateTwo from "../../images/estate_02.jpg";
import EstateThree from "../../images/estate_03.jpg";
import PropertyDetailsData from "./PropertyDetailsData";
import PropertyPicture from "./PropertyPicture";

const PropertyDetails = (props) => {
  const propertyData = [
    {
      id: "p1",
      iTag: "fas fa-cut",
      liFirst: "Square Feet : ",
      liSecond: "3200px",
    },
    {
      id: "p2",
      iTag: "fas fa-users",
      liFirst: "Ideal For Family",
      liSecond: "",
    },
    { id: "p3", iTag: "fas fa-city", liFirst: "Garage : 2", liSecond: "" },
    {
      id: "p4",
      iTag: "fas fa-flag-usa",
      liFirst: "Bedrooms : 3",
      liSecond: "",
    },
    {
      id: "p5",
      iTag: "fas fa-swimming-pool",
      liFirst: "Pool : Yes",
      liSecond: "",
    },
    {
      id: "p6",
      iTag: "fab fa-simplybuilt",
      liFirst: "Build In : 2015",
      liSecond: "",
    },
  ];

  const image = [
    {
      id: "m1",
      pictureImage: EstateOne,
      anchorTag: "fas fa-link",
      heading: "Spacious and Large Garden",
      content:
        "Aliquam sagittis ligula et sem lacinia ut facilisis enim sollicitudin Proin nisi est convallis nec purus vitae, iaculis posuere. sapien Cum sociis natoque",
    },
    {
      id: "m2",
      pictureImage: EstateThree,
      anchorTag: "fas fa-link",
      heading: "With its Own Pool",
      content:
        "Duis at tellus at dui tincidunt scelerisque nec sed felis. Suspendisse id dolor sed leo rutrum euismod. Nullam vestibulum fermentum erat. It nam auctor.",
    },
    {
      id: "m3",
      pictureImage: EstateTwo,
      anchorTag: "fas fa-link",
      heading: "In Forests- Fresh Clean Air",
      content:
        "Etiam materials ut mollis tellus, vel posuere nulla. Etiam sit amet lacus vitae massa sodales aliquam at eget quam. Integer ultricies et magna quis.",
    },
  ];
  return (
    <section className={classes["property-details"]} id="features">
      <Container>
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }}>
            <div className={classes.detail}>
              <ul>
                <li>ALL AWESOME PROPERTY DETAILS</li>
                <li>Property Details</li>
                <li>
                  Quisque eget nisl id nulla sagittis auctor quis id. Aliquam
                  quis vehicula enim, non aliquam risus. Sed a tellus quis mi
                  rhoncus dignissim.
                </li>
              </ul>
            </div>
          </Col>
          <Col md={2}></Col>
          {propertyData.map((element) => (
            <PropertyDetailsData
              key={element.id}
              iTag={element.iTag}
              liFirst={element.liFirst}
              liSecond={element.liSecond}
            />
          ))}

          {image.map((element) => (
            <PropertyPicture
              key={element.id}
              pictureImage={element.pictureImage}
              anchorTag={element.anchorTag}
              heading={element.heading}
              content={element.content}
            />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PropertyDetails;

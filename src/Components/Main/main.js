import React from "react";
import "./main.css";
import { Row, Form, Col , Button } from "react-bootstrap";


const SiteInfo = () => {
  return (
    <div className="site-info">
      <div className="title">
      Mercedes-Benz The Best Or Nothing

      
      </div>
      <div className="sub-title">
            Mercedes-Benz AMG-GT

        </div>
        <Form className="Form">
  <Row>
    <Col xs={7}>
      <Form.Control placeholder="City" />
    </Col>
    <Col>
      <Form.Control placeholder="State" />
    </Col>
    <Col>
      <Form.Control placeholder="Zip" />
    </Col>
    <Col>
    <Button variant="primary">Submit</Button>{' '}

    </Col>

  </Row>

</Form>
    </div>
  );
};

export default SiteInfo;


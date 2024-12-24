import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import classes from "./MainPage.module.css";

const MainPage = ({ goToTypeSelection }) => {
  return (
    <Container className="text-center mt-5">
      <Row className={classes.mainTitle}>
        <h1>당수 A5 옵션 선택 도우미</h1>
      </Row>
      <Row>
        <Col>
          <h2 className="mb-4">타입을 선택해주세요</h2>
          <Button
            color="success"
            onClick={() => goToTypeSelection("46A")}
            className="m-2"
          >
            46A
          </Button>
          <Button
            color="success"
            onClick={() => goToTypeSelection("46B")}
            className="m-2"
          >
            46B
          </Button>
          <Button
            color="success"
            onClick={() => goToTypeSelection("55A")}
            className="m-2"
          >
            55A
          </Button>
          <Button
            color="success"
            onClick={() => goToTypeSelection("55B")}
            className="m-2"
          >
            55B
          </Button>
          <Button
            color="success"
            onClick={() => goToTypeSelection("55C")}
            className="m-2"
          >
            55C
          </Button>
          <Button
            color="success"
            onClick={() => goToTypeSelection("55D")}
            className="m-2"
          >
            55D
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;

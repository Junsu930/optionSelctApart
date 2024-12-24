import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

const TypeSelectionPage = ({ selectedType, goToOptionSelection, goBack }) => {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h2>{selectedType} 타입을 선택했습니다.</h2>
          <br />
          <h3>일반형 또는 확장형을 선택해주세요</h3>
          <Button
            color="primary"
            onClick={() => goToOptionSelection("normal")}
            className="m-2"
          >
            일반형
          </Button>
          {selectedType === "46B" || selectedType === "55D" ? (
            <></>
          ) : (
            <Button
              color="primary"
              onClick={() => goToOptionSelection("expanded")}
              className="m-2"
            >
              확장형
            </Button>
          )}

          <br />
          <br />
          <Button onClick={goBack}>이전으로 돌아가기</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TypeSelectionPage;

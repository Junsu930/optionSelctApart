import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

import img46a_1 from "../assets/images/46a(1).jpg";
import img46a_2 from "../assets/images/46a(2).jpg";
import img46b_1 from "../assets/images/46b(1).jpg";
import img46b_2 from "../assets/images/46b(2).jpg";
import img55a_1 from "../assets/images/55a(1).jpg";
import img55a_2 from "../assets/images/55a(2).jpg";
import img55b_1 from "../assets/images/55b(1).jpg";
import img55b_2 from "../assets/images/55b(2).jpg";
import img55c_1 from "../assets/images/55c(1).jpg";
import img55c_2 from "../assets/images/55c(2).jpg";
import img55d_1 from "../assets/images/55d(1).jpg";
import img55d_2 from "../assets/images/55d(2).jpg";

import img46aDetail from "../assets/images/46aDetail.jpg";
import img46bDetail from "../assets/images/46bDetail.jpg";
import img55aDetail from "../assets/images/55aDetail.jpg";
import img55bDetail from "../assets/images/55bDetail.jpg";
import img55cDetail from "../assets/images/55cDetail.jpg";
import img55dDetail from "../assets/images/55dDetail.jpg";

import A46Options from "../options/A46";
import A46EOptions from "../options/A46E";
import A55Options from "../options/A55";
import A55EOptions from "../options/A55E";
import B46Options from "../options/B46";
import B55Options from "../options/B55";
import B55EOptions from "../options/B55E";
import C55Options from "../options/C55";
import C55EOptions from "../options/C55E";
import D55Options from "../options/D55";

const OptionPage = ({ selectedType, selectedExpandable, goBack }) => {
  const [cost, setCost] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [modalOpen, setModalOpen] = useState(false); // 모달 상태
  const [modalImage, setModalImage] = useState(""); // 모달에 띄울 이미지
  const [modalTitle, setModalTitle] = useState(""); // 모달 제목
  const [warnings, setWarnings] = useState({}); // 경고 메시지 상태 추가

  const handleOptionChange = (category, value) => {
    let warningMessage = "";

    if (selectedType === "46A" && value === "5-2") {
      warningMessage =
        "냉장고장+싱크대연장(김치냉장고장 삭제)을 선택하였을 경우만 선택 가능한 옵션입니다";
    }

    if (
      selectedType === "46A" &&
      (value === "1-2" || value === "1-4" || value === "1-6")
    ) {
      warningMessage = "대형 드레스룸 선택시 팬트리는 삭제됩니다.";
    }

    if (selectedType === "46B" && value === "2-2") {
      warningMessage = "해당 옵션 선택시 팬트리는 삭제됩니다.";
    }

    if (selectedType === "46B" && value === "5-2") {
      warningMessage =
        "냉장고장+싱크대연장(김치냉장고장 삭제)을 선택하였을 경우만 선택 가능한 옵션입니다.";
    }

    if (selectedType === "46B" && value === "14-3") {
      warningMessage =
        "[침실2/팬트리 통합] 드레스룸(도어+시스템선반) 옵션 선택시 선택 가능한 옵션입니다.";
    }

    if (selectedType === "55A" && (value === "1-1" || value === "1-3")) {
      warningMessage = "대형 드레스룸 선택시 부부욕실 도어방향이 변경됩니다.";
    }

    if (selectedType === "55A" && value === "5-2") {
      warningMessage =
        "냉장고장+싱크대연장(김치냉장고장 삭제)을 선택하였을 경우만 선택 가능한 옵션입니다.";
    }

    if (selectedType === "55A" && value === "15-1") {
      warningMessage = "선택시 팬트리 입구 및 크기가 변경됩니다.";
    }

    if (selectedType === "55A" && value === "11-1") {
      warningMessage = "다기능팬은 공용욕실에만 설치됩니다.";
    }

    if (selectedType === "55A" && value === "12-1") {
      warningMessage = "비데일체형 양변기는 부부욕실에만 설치됩니다.";
    }

    if (selectedType === "55B" && (value === "1-1" || value === "1-3")) {
      warningMessage = "대형 드레스룸 선택시 부부욕실 도어방향이 변경됩니다.";
    }

    if (selectedType === "55B" && value === "5-2") {
      warningMessage =
        "냉장고장+싱크대연장(김치냉장고장 삭제)을 선택하였을 경우만 선택 가능한 옵션입니다.";
    }

    if (selectedType === "55B" && value === "11-1") {
      warningMessage = "다기능팬은 공용욕실에만 설치됩니다.";
    }

    if (selectedType === "55B" && value === "12-1") {
      warningMessage = "비데일체형 양변기는 부부욕실에만 설치됩니다.";
    }

    if (selectedType === "55C" && value === "5-2") {
      warningMessage =
        "냉장고장+싱크대연장(김치냉장고장 삭제)을 선택하였을 경우만 선택 가능한 옵션입니다.";
    }

    if (selectedType === "55C" && value === "11-1") {
      warningMessage = "다기능팬은 공용욕실에만 설치됩니다.";
    }

    if (selectedType === "55C" && value === "12-1") {
      warningMessage = "비데일체형 양변기는 부부욕실에만 설치됩니다.";
    }
    if (selectedType === "55C" && value === "15-1") {
      warningMessage = "선택시 팬트리 입구 및 크기가 변경됩니다.";
    }

    if (selectedType === "55D" && (value === "1-1" || value === "1-3")) {
      warningMessage = "대형 드레스룸 선택시 부부욕실 도어방향이 변경됩니다.";
    }

    if (selectedType === "55D" && value === "5-2") {
      warningMessage =
        "냉장고장+싱크대연장(김치냉장고장 삭제)을 선택하였을 경우만 선택 가능한 옵션입니다.";
    }

    if (selectedType === "55D" && value === "11-1") {
      warningMessage = "다기능팬은 공용욕실에만 설치됩니다.";
    }

    if (selectedType === "55D" && value === "12-1") {
      warningMessage = "비데일체형 양변기는 부부욕실에만 설치됩니다.";
    }

    // 최종적으로 경고 메시지를 업데이트
    setWarnings((prev) => ({
      ...prev,
      [category]: warningMessage,
    }));
    setSelectedOptions((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  // 선택된 옵션에 따라 총 금액 계산
  useEffect(() => {
    let totalCost = 0;
    const currentOptions = renderOption();
    if (currentOptions) {
      Object.entries(selectedOptions).forEach(([category, optionId]) => {
        const categoryData = currentOptions.find(
          (c) => c.category === category
        );
        const selectedItem = categoryData?.items.find(
          (item) => item.id === optionId
        );
        if (selectedItem) {
          totalCost += selectedItem.price;
        }
      });
    }
    setCost(totalCost);
  }, [selectedOptions]);

  const handleDetailClick = () => {
    let detailImage = ""; // 상세 이미지 변수

    switch (selectedType) {
      case "46A":
        detailImage = img46aDetail;
        break;
      case "46B":
        detailImage = img46bDetail;
        break;
      case "55A":
        detailImage = img55aDetail;
        break;
      case "55B":
        detailImage = img55bDetail;
        break;
      case "55C":
        detailImage = img55cDetail;
        break;
      case "55D":
        detailImage = img55dDetail;
        break;
      default:
        detailImage = ""; // 기본값 설정
    }
    setModalImage(detailImage); // 모달에 표시할 이미지 설정
    setModalTitle("옵션 상세 확인"); // 모달 제목 설정
    setModalOpen(true); // 모달 열기
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen); // 모달 상태 토글
  };

  const renderOption = () => {
    switch (selectedType) {
      case "46A":
        return selectedExpandable === "normal" ? A46Options : A46EOptions;
      case "46B":
        return B46Options;
      case "55A":
        return selectedExpandable === "normal" ? A55Options : A55EOptions;
      case "55B":
        return selectedExpandable === "normal" ? B55Options : B55EOptions;
      case "55C":
        return selectedExpandable === "normal" ? C55Options : C55EOptions;
      case "55D":
        return D55Options;
      default:
        return [];
    }
  };

  const renderImage = () => {
    switch (selectedType) {
      case "46A":
        return (
          <div style={{ marginBottom: "50px" }}>
            <img
              src={img46a_1}
              alt="46A 타입"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={img46a_2}
              alt="46A 타입"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      case "46B":
        return (
          <div style={{ marginBottom: "50px" }}>
            <img
              src={img46b_1}
              alt="46B 타입"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={img46b_2}
              alt="46B 타입"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      case "55A":
        return (
          <div style={{ marginBottom: "50px" }}>
            <img
              src={img55a_1}
              alt="55A 타입"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={img55a_2}
              alt="55A 타입"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      case "55B":
        return (
          <div style={{ marginBottom: "50px" }}>
            <img
              src={img55b_1}
              alt="55B 타입"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={img55b_2}
              alt="55B 타입"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      case "55C":
        return (
          <div style={{ marginBottom: "50px" }}>
            <img
              src={img55c_1}
              alt="55C 타입"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={img55c_2}
              alt="55C 타입"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      case "55D":
        return (
          <div style={{ marginBottom: "50px" }}>
            <img
              src={img55d_1}
              alt="55D 타입"
              style={{ width: "100%", height: "auto" }}
            />
            <img
              src={img55d_2}
              alt="55D 타입"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Container fluid="md" className="py-4">
      {renderImage()}
      <Card>
        <CardHeader>
          <h5 className="mb-0">공간옵션 선택</h5>
        </CardHeader>
        <CardBody>
          <Button
            className="m-2"
            color="secondary"
            size="sm"
            onClick={handleDetailClick}
          >
            옵션 상세 사진 확인
          </Button>
          {renderOption().map((category) => (
            <div key={category.category} className="mb-4">
              <h6 className="mb-3 text-primary">{category.category}</h6>
              {category.items.map((item) => (
                <Card key={item.id} className="mb-2">
                  <CardBody className="p-2">
                    <FormGroup check className="m-0">
                      <Input
                        type="radio"
                        id={item.id}
                        name={category.category}
                        onChange={() =>
                          handleOptionChange(category.category, item.id)
                        }
                        checked={selectedOptions[category.category] === item.id}
                      />
                      <Label check for={item.id} className="w-100">
                        <Row className="align-items-center">
                          <Col>{item.name}</Col>
                          <Col xs="auto">
                            <Badge
                              color={
                                item.type === "유상" ? "primary" : "success"
                              }
                            >
                              {item.type}
                            </Badge>
                          </Col>
                          <Col xs="auto" className="text-muted">
                            {item.price.toLocaleString()} 원
                          </Col>
                        </Row>
                      </Label>
                    </FormGroup>
                    {/* 경고 메시지 렌더링 */}
                    {selectedOptions[category.category] === item.id &&
                      warnings[category.category] && (
                        <div className="text-danger mt-2">
                          {warnings[category.category]}
                        </div>
                      )}
                  </CardBody>
                </Card>
              ))}
            </div>
          ))}

          <Card className="mt-4 bg-light">
            <CardBody>
              <h4 className="mb-3">
                <strong>선택된 옵션</strong>
              </h4>
              <div className="border-bottom">
                {Object.entries(selectedOptions).map(([category, value]) => (
                  <div key={category} className="pb-2 mb-2 border-bottom">
                    <strong>{category}:</strong>{" "}
                    {
                      renderOption()
                        .find((c) => c.category === category)
                        ?.items.find((item) => item.id === value)?.name
                    }
                  </div>
                ))}
              </div>
              <h4 className="mb-3">
                <strong>총 금액</strong>
              </h4>
              <div>{cost.toLocaleString()} 원</div>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
      <br />
      <Button onClick={goBack}>이전으로 돌아가기</Button>

      {/* 모달 컴포넌트 */}
      <Modal isOpen={modalOpen} toggle={toggleModal} size="lg">
        <ModalHeader toggle={toggleModal}>{modalTitle}</ModalHeader>
        <ModalBody>
          <img
            src={modalImage}
            alt={modalTitle}
            style={{ width: "100%", height: "auto" }}
          />
        </ModalBody>
      </Modal>
    </Container>
  );
};

export default OptionPage;

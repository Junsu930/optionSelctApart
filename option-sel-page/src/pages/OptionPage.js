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
import img46aartwall from "../assets/images/46a(artwall).jpg";
import img46abedroom1 from "../assets/images/46a(bedroom1).jpg";
import img46abedroom2 from "../assets/images/46a(bedroom2).jpg";
import img46acdoor from "../assets/images/46a(cdoor).jpg";
import img46agas from "../assets/images/46a(gas).jpg";
import img46alight from "../assets/images/46a(light).jpg";
import img46apannel from "../assets/images/46a(pannel).jpg";
import img46arefreg from "../assets/images/46a(refreg).jpg";
import img46asink from "../assets/images/46a(sink).jpg";
import img46awashdish from "../assets/images/46a(washdish).jpg";
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

  const handleOptionChange = (category, value) => {
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

  const handleCategoryClick = (category) => {
    // 제외할 카테고리 리스트
    const excludedCategories = [
      "기타",
      "기타2",
      "시스템에어컨",
      "화장실",
      "화장실2",
    ];

    // 제외할 카테고리에 해당하면 모달을 열지 않음
    if (excludedCategories.includes(category)) {
      return;
    }

    setModalImage(categoryImages[category] || ""); // 이미지 설정
    setModalTitle(category); // 모달 제목 설정
    setModalOpen(true); // 모달 열기
  };

  // 카테고리별 이미지 설정
  const categoryImages = {
    침실: img46abedroom1, // 카테고리명에 맞는 이미지 설정
    침실2: img46abedroom2,
    냉장고장: img46arefreg,
    식기세척기장: img46awashdish,
    주방싱크: img46asink,
    주방가전: img46agas,
    "거실/현관": img46aartwall,
    "벽 특화": img46apannel,
    조명: img46alight,
    기타2: img46acdoor,
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          {renderOption().map((category) => (
            <div key={category.category} className="mb-4">
              <h6
                className="mb-3 text-primary"
                style={{ cursor: "pointer" }}
                onClick={() => handleCategoryClick(category.category)}
              >
                {category.category}
              </h6>
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

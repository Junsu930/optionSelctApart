import React, { useState } from "react";
import MainPage from "./pages/MainPage";
import OptionPage from "./pages/OptionPage";
import TypeSelectionPage from "./pages/TypeSelectionPage";

function App() {
  const [page, setPage] = useState("main"); // 현재 페이지 상태
  const [selectedType, setSelectedType] = useState(null); // 선택된 타입
  const [selectedExpandable, setSelectedExpandable] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null); // 선택된 옵션

  // 페이지 이동 함수
  const goToTypeSelection = (type) => {
    setSelectedType(type);
    setPage("typeSelection");
  };

  const goToOptionSelection = (expandable) => {
    setSelectedExpandable(expandable);
    setPage("optionSelection");
  };
  const goBackToMain = () => setPage("main");
  const goBackToTypeSelection = () => setPage("typeSelection");

  return (
    <div className="App">
      {page === "main" && <MainPage goToTypeSelection={goToTypeSelection} />}
      {page === "typeSelection" && (
        <TypeSelectionPage
          selectedType={selectedType}
          goToOptionSelection={goToOptionSelection}
          goBack={goBackToMain}
        />
      )}
      {page === "optionSelection" && (
        <OptionPage
          selectedType={selectedType}
          selectedExpandable={selectedExpandable}
          goBack={goBackToTypeSelection}
        />
      )}
    </div>
  );
}

export default App;

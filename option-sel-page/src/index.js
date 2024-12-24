import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root"); // 'root'라는 ID의 요소를 찾음
const root = ReactDOM.createRoot(rootElement); // 해당 요소를 root로 사용

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

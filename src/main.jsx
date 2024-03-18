import React from "react";
import ReactDOM from "react-dom/client";
import App from "./question1/App.jsx";
import "./index.css";
import App2 from "./question2/App2.jsx";
import App3 from "./question3/App3.jsx";
import App4 from "./question4/App4.jsx";
import App5 from "./question5/App5.jsx";
import App6 from "./question6/App6.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <App2/>
    <App3/>
    <App4/>
    <App5/>
    <App6/>
  </React.StrictMode>
);

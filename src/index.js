import React from "react";
import ReactDom from 'react-dom/client'
// import App from "./ClassComponents/App";
import App from "./FunctionalComponents/App"
// eslint-disable-next-line no-use-before-define
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <>
    <App/>
    </>
)
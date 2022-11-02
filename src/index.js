import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Heading from "./components";
import InputQuery from "./components";
import SubHeading from "./components";
import SubmitButton from "./components";

ReactDOM.render(<App />, document.getElementById("root"));

export {Heading, InputQuery, SubHeading, SubmitButton};

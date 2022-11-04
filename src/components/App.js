import React, { Component, useState } from "react"
import '../styles/App.css'
import Heading from "Heading"
import InputQuery from "InputQuery"
import SubHeading from "SubHeading"
import SubmitButton from "SubmitButton"


// import App from "./components/App";
// import Heading from "./components/Heading";
// import InputQuery from "./components/InputQuery";
// import SubHeading from "./components/SubHeading";
// import SubmitButton from "./components/SubmitButton";


//import { Heading, SubHeading, InputQuery, SubmitButton } from './components/'

const App = () => {
 // render()
  //{  
    return (
    <div id="main">
      < Heading />
      < SubHeading />
      <InputQuery />
      <SubmitButton />
    </div>
  );
 // }
}
export default App;
export { Heading, SubHeading, InputQuery, SubmitButton };

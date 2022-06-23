import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./components/Form";
import { Report } from "./components/Report";
import { ReportServer } from "./components/ReportServer";
import {Survey} from "./context/survey";
import { useState } from "react";
import { Validate } from "./context/Validate";

const App = () => {
  const [info, setinfo] = useState({name:'',country:'',email:'',ratings:[]})
  const [validate,setvalidate]=useState(false)
  return (
    <BrowserRouter>
      <Validate.Provider value={{validate,setvalidate}}>
      <Survey.Provider value={{info,setinfo}}>
        <Routes>
          <Route exact path="/" element ={<Form/>}/>
          <Route exact path="/report" element ={<Report/>} />
          <Route exact path="/reportserver" element ={<ReportServer/>} />
        </Routes>
      </Survey.Provider>
      </Validate.Provider>
    </BrowserRouter>
  );
};

export default App;

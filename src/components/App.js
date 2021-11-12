import React from "react";
import ContentWrapper from "./ContantWrapper/ContentWrapper";
import AboutUs from "./AboutUs/AboutUs";
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ContentWrapper/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
      </Routes>
  </Router>
  );
}

export default App;

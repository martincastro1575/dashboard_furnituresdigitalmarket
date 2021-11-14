import React from "react";
import ContentWrapper from "./ContantWrapper/ContentWrapper";
import AboutUs from "./AboutUs/AboutUs";
import ProductDetailView from "./ProductDetailView/ProductDetailView";

import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import ProductsView from "./ProductsView/ProductsView";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ContentWrapper/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/products" element={<ProductsView/>}/>
        <Route exact path="/products/:id" element={<ProductDetailView/>}/>
      </Routes>
  </Router>
  );
}

export default App;

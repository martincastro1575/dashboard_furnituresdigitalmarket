import React from "react";
import ContentWrapper from "./ContantWrapper/ContentWrapper";
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
        <Route path="/" element={<ContentWrapper/>}/>
        <Route path="/products" element={<ProductsView/>}/>
        <Route path="/products/:id" element={<ProductDetailView/>}/>
      </Routes>
  </Router>
  );
}

export default App;

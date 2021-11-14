import React from "react";
import ContentWrapper from "./ContantWrapper/ContentWrapper";
import ProductDetailView from "./ProductDetailView/ProductDetailView";

import {
  Route, Routes
} from "react-router-dom";
import ProductsView from "./ProductsView/ProductsView";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContentWrapper />} />
      <Route path="/products" element={<ProductsView />} />
      <Route path="/products/:id" element={<ProductDetailView />} />
    </Routes>
  );
}

export default App;

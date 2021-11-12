import React, { useEffect, useState } from "react";
import Topbar from "./Topbar/Topbar";
import NavMenu from "./NavMenu/NavMenu";
import CardTop from "./CardTop";
import Footer from "./Footer";

import axios from "axios";

function ContentWrapper() {
  const [countProduct, setCountProduct] = useState("");
  const [categories, setCategories] = useState("");
  console.log(
    "🚀 ~ file: ContentWrapper.js ~ line 12 ~ ContentWrapper ~ categories",
    categories
  );

  useEffect(() => {
    const handleProducts = async () => {
      let resultados = await axios.get(
        `http://localhost:3500/api/products/all`
      );
      setCountProduct(resultados.data.data.count);
    };
    handleProducts();
  }, []);
  useEffect(() => {
    const handleCategories = async () => {
      let resultados = await axios.get(`http://localhost:3500/api/products`);
      setCategories(resultados.data.totalProdByCategory);
    };
    handleCategories();
  }, []);

  return (
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Topbar />
        <NavMenu />
          <div className="container-fluid">
          <div className="row">
            {/* <!-- Cards totales --> */}
              <CardTop cols='col-md-3 mb-4' title="Total productos" quantity={countProduct} />
              <CardTop cols='col-md-3 mb-4' title="Total categorias" quantity={categories.length} />
              {/* <!-- Cards totales --> */}
          </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContentWrapper;

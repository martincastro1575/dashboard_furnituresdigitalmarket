import React from "react";
import './ProductsView.css'
import Topbar from "../Topbar/Topbar";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer";
import PropTypes from "prop-types";

function ProductsView({ cols, products }) {
  return (
    <div id="content-wrapper" className="">
      <Topbar />
      <NavMenu />
      <div className={cols}>
        <div class="card">
          <img class="card-img-top" src="..." alt="Card cap" />
          <div class ="card-body">
          <h5 class ="card-title">Card title</h5>
          <p class ="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class ="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>

  );
}

ProductsView.propTypes = {
  products: PropTypes.array,
  image: PropTypes.string,
  cols: PropTypes.string,
};



ProductsView.defaultProps = {
  products: []
}


export default ProductsView;

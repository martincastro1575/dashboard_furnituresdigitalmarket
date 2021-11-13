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
        <section class="cards">
          <article class="card card--1">
            <div class="card__img">
              <img src/>
            </div>
            <div class="card__info">
              <span class="card__category"> Recipe</span>
              <h3 class="card__title">Crisp Spanish tortilla Matzo brei</h3>
            </div>
          </article>

        </section>
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

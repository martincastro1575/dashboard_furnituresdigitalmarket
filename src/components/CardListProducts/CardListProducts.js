import React from "react";
import './CardListProducts.css'

import PropTypes from "prop-types";

function CardListProducts({ cols, products, handlePagePrevious, handlePageNext }) {
  return (
    <div className={cols}>
      <div class="card mt-4">
        <div class="card-header card-header-list">
          Listado de productos
          <div className='arrow-buttons'>
            <button onClick={handlePagePrevious}><i class="fas fa-angle-left"></i></button>
            <button onClick={handlePageNext}><i class="fas fa-angle-right"></i></button>
          </div>

        </div>
        <ul class="list-group list-group-flush">
          {products.map((p, idx) =>
            <li key={idx} class="list-group-item">{p.name}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

CardListProducts.propTypes = {
  products: PropTypes.array,
  image: PropTypes.string,
  cols: PropTypes.string,
};



CardListProducts.defaultProps = {
  products: []
}


export default CardListProducts;

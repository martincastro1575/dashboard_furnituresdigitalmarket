import React from "react";
import './CardListProducts.css'

import PropTypes from "prop-types";

function CardListProducts({ cols, products, handlePagePrevious, handlePageNext, page, totalPages }) {
  return (
    <div className={cols}>
      <div className="card mt-4">
        <div className="card-header card-header-list">
          Listado de productos
          <div className='arrow-buttons'>
            <button onClick={handlePagePrevious}><i className="fas fa-angle-left"></i></button>
            <span>{page} / <b>{totalPages}</b></span>
            <button onClick={handlePageNext}><i className="fas fa-angle-right"></i></button>
          </div>

        </div>
        <ul className="list-group list-group-flush">
          {products.map((p, idx) =>
            <li key={idx} className="list-group-item">{p.name}</li>
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

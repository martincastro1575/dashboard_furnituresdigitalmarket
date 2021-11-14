import React from "react";
import './CardListCategories.css'

import PropTypes from "prop-types";

function CardListCategories({ cols, products, handlePagePrevious, handlePageNext }) {
  return (
    <div className={cols}>
      <div class="card mt-4">
        <div class="card-header card-header-list">
          Listado de categorias

        </div>
        <ul class="list-group list-group-flush">
          {products.map((p, idx) =>
            <li key={idx} class="list-group-item">{p.Category} {p.cantidad}</li>
          )}
        </ul>
      </div>
    </div>
  );
}

CardListCategories.propTypes = {
  products: PropTypes.array,
  image: PropTypes.string,
  cols: PropTypes.string,
};



CardListCategories.defaultProps = {
  products: []
}


export default CardListCategories;

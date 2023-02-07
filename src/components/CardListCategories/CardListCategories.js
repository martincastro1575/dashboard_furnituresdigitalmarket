import React from "react";
import './CardListCategories.css'

import PropTypes from "prop-types";

function CardListCategories({ cols, categories }) {
  return (
    <div className={cols}>
      <div class="card card-categories mt-4">
        <div class="card-header card-header-list">
          Listado de categorias
          <span>Cantidad de productos</span>
        </div>
        <ul class="list-group list-group-flush">
          {categories.map((c, idx) =>
            <li key={idx} class="list-group-item">{c.Category} <span>{c.cantidad}</span> </li>
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

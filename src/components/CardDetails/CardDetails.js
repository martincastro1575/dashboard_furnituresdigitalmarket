import React from "react";
import './CardDetails.css'

import PropTypes from "prop-types";

function CardDetails({ cols, image, title, description, aditionalData }) {
  return (
    <div className={cols}>
      <div className="card">
        <img src={`${'/assets/images/'}${image}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">{aditionalData}</small></p>
        </div>
      </div>
    </div>
  );
}

CardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  cols: PropTypes.string,
  description: PropTypes.string,
  aditionalData: PropTypes.string,
};

CardDetails.defaultProps = {
  title: "Total",
  quantity: 0,
  image:'any'
};

export default CardDetails;

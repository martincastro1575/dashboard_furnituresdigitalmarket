import React from "react";
import './CardDetails.css'

import PropTypes from "prop-types";
import { isEmpty } from "lodash";

function CardDetails({ cols, image, title, description, aditionalData, linkTo, props, onClickCard, detail }) {

  return (
    <div className='col card-details'>
      <div className="card" onClick={detail ? () => onClickCard(detail) : ''}>
        {!isEmpty(image) ?
            <img src={`${'/assets/images/products/'}${image}`} className="card-img-top" alt="..." />
            : <img src={'/assets/images/products/not-empty.jpg'} className="card-img-top" alt="..." />
        }
        
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">$ {aditionalData}</small></p>
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
  linkTo: PropTypes.string,
  onClickCard: PropTypes.func,
  detail: PropTypes.string,
};

CardDetails.defaultProps = {
  title: "Total",
  quantity: 0,
};

export default CardDetails;

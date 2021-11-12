import React from "react";

import PropTypes from "prop-types";

function CardTop({ title, quantity, cols, icon }) {
  return (
    <div className={cols}>
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                {title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {quantity}
              </div>
            </div>
            
            <div className="col-auto">
              <i className={`${icon}${" fa-2x text-gray-300"}`}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

CardTop.propTypes = {
  title: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  cols: PropTypes.string,
  icon: PropTypes.string,
};

CardTop.defaultProps = {
  title: "Total",
  quantity: 0,
};

export default CardTop;

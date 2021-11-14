import React, { useEffect, useState } from "react";
import './ProductDetailView.css'
import Topbar from "../Topbar/Topbar";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { isEmpty, isUndefined } from 'lodash'
import axios from "axios";
import CardDetails from "../CardDetails/CardDetails";
function ProductDetailView({ }) {
  const [product, setProduct] = useState([]);
  const { id } = useParams()

  useEffect(() => {

    const hadleProductsPage = async () => {
      let resultados = await axios.get(`http://localhost:3500/api/products/${id}`);
      console.log(resultados.data.data)
      setProduct(resultados.data.data);
    };
    hadleProductsPage();

  }, [id]);

  return (    
    <div>
      <Topbar />
      <NavMenu />

      <div className="container-fluid product-details">
        <div className="card-columns">
          {!isEmpty(product) && !isUndefined(product) && 
            <CardDetails 
            title={product.name} 
            image={product?.images[0].name} 
            description={product.description} 
            aditionalData={product.price} />
            }
        </div>
      </div>
      <Footer />
    </div>

  );
}

ProductDetailView.propTypes = {
  product: PropTypes.array,
};



export default ProductDetailView;

import React, { useEffect, useState } from "react";
import './ProductDetailView.css'
import Topbar from "../Topbar/Topbar";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { isEmpty, isUndefined } from 'lodash'
import axios from "axios";
function ProductDetailView() {
  const [product, setProduct] = useState([]);
  const { id } = useParams()

  useEffect(() => {

    const hadleProductsPage = async () => {
      let resultados = await axios.get(`http://127.0.0.1:3500/api/products/${id}`);
      setProduct(resultados.data.data);
    };
    hadleProductsPage();

  }, [id]);

  return (
    <div className='container-general' >
      <Topbar />
      <NavMenu />

      <div className="container-fluid product-details">
          {!isEmpty(product) && !isUndefined(product) &&
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                {!isEmpty(product.images) ?
            <img src={`${'/assets/images/products/'}${product.images[0].name}`} className="card-img-top" alt="..." />
            : <img src={'/assets/images/products/not-empty.jpg'} className="card-img-top" alt="..." />
        }                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">Descripción: {product.description}</p>
                    <p class="card-text">Medida de alto: {product.high}</p>
                    <p class="card-text">Medida de ancho: {product.width}</p>
                    <p class="card-text">Cantidad disponible: {product.quantity}</p>
                    <p class="card-text">Descuento para clientes registrados: {product.discount}</p>
                    <p class="card-text">Precio full sin descuento: $ {product.price}</p>
                  </div>
                </div>
              </div>
            </div>
          }
      </div>
      <Footer />
    </div>

  );
}

ProductDetailView.propTypes = {
  product: PropTypes.array,
};



export default ProductDetailView;

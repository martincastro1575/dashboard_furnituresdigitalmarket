import React, {useEffect, useState} from "react";
import './ProductsView.css'
import Topbar from "../Topbar/Topbar";
import NavMenu from "../NavMenu/NavMenu";
import Footer from "../Footer";
import PropTypes from "prop-types";

import {useNavigate} from 'react-router-dom';

import { isEmpty } from 'lodash'
import axios from "axios";
import CardDetails from "../CardDetails/CardDetails";
function ProductsView({}) {
  const [productByPage, setProductByPage] = useState([]);
  const [page, setPage] = useState(1);

  const history = useNavigate()


  useEffect(() => {
    const hadleProductsPage = async () => {
        let resultados = await axios.get(`http://localhost:3500/api/products?page=${page}`);
        setProductByPage(resultados.data);
    };
    hadleProductsPage();

}, [page]);


const handlePageNext = () => {
    if(page + 1 >= (productByPage.pages)){
        setPage(productByPage.pages)
    }else{
        setPage(page + 1)
    }
}
const handlePagePrevious = () => {
    if(page - 1 <= 0){
        setPage(1)
    }else{
        setPage(page - 1)
    }
}

const handleCard = (e) =>{
  history(e)
}

  return (
    <div>
      <Topbar />
      <NavMenu />
      <div className="container-fluid products-view">
      <div className='arrow-buttons'>
            <button onClick={handlePagePrevious}><i className="fas fa-angle-left"></i></button>
            <span>{page} / <b>{productByPage.pages}</b></span>
            <button onClick={handlePageNext}><i className="fas fa-angle-right"></i></button>
          </div>
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {!isEmpty(productByPage.data) && productByPage.data.map((p, idx) => (
            <CardDetails key={idx} title={p.name} image={!isEmpty(p.images) ? p.images[0].name : 'not-empty.jpg'} description={p.description} aditionalData={p.price} onClickCard={handleCard} detail={p.detail}/>
          ))} 
        </div>
      </div>

      <Footer />
    </div>

  );
}

ProductsView.propTypes = {
  productByPage: PropTypes.array,
};



export default ProductsView;

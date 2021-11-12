import React, { useEffect, useState } from "react";
import Topbar from "../Topbar/Topbar";
import NavMenu from "../NavMenu/NavMenu";
import CardTop from "../CardTop";
import CardDetails from "../CardDetails/CardDetails";
import Footer from "../Footer";

import './ContentWrapper.css'

import { isEmpty, isUndefined } from 'lodash'
import axios from "axios";

function ContentWrapper() {
    const [product, setProduct] = useState();
    const [categories, setCategories] = useState("");
    const [count, setCount] = useState("");


    useEffect(() => {
        if (!isEmpty(product)) {
            setCount(product.count - 1)
        } 
    }, [product]);

    useEffect(() => {
        const handleProducts = async () => {
            let resultados = await axios.get(
                `http://localhost:3500/api/products/all`
            );
            setProduct(resultados.data.data);
        };
        handleProducts();
    }, []);


    useEffect(() => {
        const handleCategories = async () => {
            let resultados = await axios.get(`http://localhost:3500/api/products`);
            setCategories(resultados.data.totalProdByCategory);
        };
        handleCategories();
    }, []);



    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar />
                <NavMenu />
                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- Cards totales --> */}
                        <CardTop cols='col-md-3 mb-4' title="Total productos" quantity={product?.count} icon='fas fa-shopping-bag' />
                        <CardTop cols='col-md-3 mb-4' title="Total categorias" quantity={categories.length} icon='fas fa-stream' />
                        {/* <!-- Cards totales --> */}
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-md-6 title-col'>
                        <h2>Nuestro ultimo producto agregado</h2>
                    </div>
                    <div className='col-md-6'>
                        <CardDetails
                            cols='col'
                            image={`${'products/'}${!isEmpty(product) ? product.rows[0].images[0].name : ''}`}
                            title={!isEmpty(product) ? product.rows[0].name : ''}
                            description={!isEmpty(product) ? product.rows[0].description : ''}
                            aditionalData={!isEmpty(product) ? product.rows[0].price : ''}
                        />
                    </div>
                </div>
                <div className='row row-content'>
                    <div className='col-md-6'>
                        {!isEmpty(product) && !isUndefined(count) &&
                            <CardDetails
                                cols='col'
                                image={`${'products/'}${product.rows[count]?.images[0].name}`}
                                title={product.rows[count]?.name}
                                description={product.rows[count]?.description}
                                aditionalData={product.rows[count]?.price}
                            />
                        }
                    </div>
                    <div className='col-md-6 title-col'>
                        <h2>Nuestro primer producto en stock</h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContentWrapper;

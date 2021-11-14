import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Topbar from "../Topbar/Topbar";
import NavMenu from "../NavMenu/NavMenu";
import CardTop from "../CardTop";
import CardDetails from "../CardDetails/CardDetails";
import Footer from "../Footer";

import './ContentWrapper.css'

import { isEmpty, isUndefined } from 'lodash'
import axios from "axios";


import CardListProducts from "../CardListProducts/CardListProducts";
import CardListCategories from "../CardListCategories/CardListCategories";

function ContentWrapper({pageNumber}) {
    const [product, setProduct] = useState();
    const [categories, setCategories] = useState("");
    const [count, setCount] = useState("");
    const [productByPage, setProductByPage] = useState("");
    const [users, setUsers] = useState([]);
    console.log("🚀 ~ file: ContentWrapper.js ~ line 23 ~ ContentWrapper ~ users", users)
    const [page, setPage] = useState(pageNumber);


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
        const handleUsers = async () => {
            let resultados = await axios.get(
                `http://localhost:3500/api/users/`
            );
            setUsers(resultados.data.total);
        };
        handleUsers();
    }, []);


    useEffect(() => {
        const handleCategories = async () => {
            let resultados = await axios.get(`http://localhost:3500/api/products`);
            setCategories(resultados.data.totalProdByCategory);
        };
        handleCategories();
    }, []);

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
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <Topbar />
                <NavMenu />
                <div className="container-fluid">
                    <div className="row">
                        {/* <!-- Cards totales --> */}
                        <CardTop cols='col-md-4 mb-4' title="Total Productos" quantity={product?.count} icon='fas fa-shopping-bag' />
                        <CardTop cols='col-md-4 mb-4' title="Total Categorias" quantity={categories.length} icon='fas fa-stream' />
                        <CardTop cols='col-md-4 mb-4' title="Total Usuarios" quantity={users} icon='fas fa-users' />
                        {/* <!-- Cards totales --> */}
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row row-content'>
                        <div className='col-md-6 title-col'>
                            <h2>Nuestro ultimo producto agregado</h2>
                        </div>
                        <div className='col-md-6'>
                            <CardDetails
                                cols='col'
                                image={!isEmpty(product) ? product.rows[0].images[0].name : ''}
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
                                    image={product.rows[count]?.images[0].name}
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
                    <div className='row'>
                        <div className='col-md-6'>
                            {!isEmpty(productByPage) &&
                                <CardListProducts 
                                page={page} 
                                totalPages={productByPage.pages} 
                                handlePageNext={handlePageNext} 
                                handlePagePrevious={handlePagePrevious} 
                                products={productByPage.data} />
                            }
                        </div>
                        <div className='col-md-6'>
                            {!isEmpty(productByPage) &&
                                <CardListCategories handlePageNext={handlePageNext} handlePagePrevious={handlePagePrevious} categories={categories} />
                            }
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}

ContentWrapper.propTypes = {
    pageNumber: PropTypes.number,
};

ContentWrapper.defaultProps = {
    pageNumber: 1
  }

export default ContentWrapper;

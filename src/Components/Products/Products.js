import React, { useState, useEffect } from 'react';
import Product from '../Product/Product'
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://lit-savannah-17178.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className="container my-5">
            <h2 className='fw-bold'>
                <span style={{ color: '#6c63ff'}}>
                    Our
                </span> Products
            </h2>
            <div className="row mt-4">
                {
                    products?.map(product => <Product key={products?.id} product={product}></Product>)
                }
            </div>

        </div>
    );
};

export default Products;
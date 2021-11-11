import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProduct/AllProduct';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const AllProducts = () => {
    const[allProducts,setAllProducts]=useState([]);
    useEffect(()=>{
        fetch(`https://lit-savannah-17178.herokuapp.com/allProducts`)
        .then(res=>res.json())
        .then(data=>setAllProducts(data));
    },[])
    return (
        <div className='container-fluid'>
            <MenuBar></MenuBar>
            <div className="row my-4 ms-5">
                {
                    allProducts?.map(allProduct=><AllProduct key={allProduct?._id} allProduct={allProduct}></AllProduct>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProducts;
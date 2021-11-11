import React, { useEffect, useState } from 'react';
import { Card, CardImg } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const ManageProducts = () => {
    const[allProducts,setAllProducts]=useState([]);
    useEffect(()=>{
        fetch(`https://lit-savannah-17178.herokuapp.com/allProducts`)
        .then(res=>res.json())
        .then(data=>setAllProducts(data));
    },[])

    const handleDeleteProducts=(id)=>{
        fetch(`https://lit-savannah-17178.herokuapp.com/allProducts/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const confirm=window.confirm('Do you really want to delete!!!');
                if(confirm===true){
                    const remainingOrders=allProducts?.filter(data=>parseInt(data?._id)!== parseInt(id));
   setAllProducts(remainingOrders);
                }
                else{
                    console.log('false');
                }
            }
        })
    }
    return (
        <div className="container-fluid">
            <MenuBar></MenuBar>
            <h2 style={{color:'#6c63ff',fontWeight:'bold',margin:'2rem 1rem'}}>
                MANAGE PRODUCTS
            </h2>
            <div className="row mx-3" 
          >
                {
                    allProducts?.map(allProduct=>
                      <div className="col-md-4 mb-4"key={allProduct?._id}>
                            <Card className='p-3 h-100 ' style={{border:'2px solid #6c63ff'}}>
                            <CardImg src={allProduct?.img} variant='top' style={{width:'40%',marginLeft:'5rem'}}></CardImg>
                            <Card.Body>
                                <h3 style={{color:'#6c63ff',textAlign:'start'}}>
                                    {allProduct?.title}
                                </h3>
                                <p className="text-start">
                                    {allProduct?.shortDesc}
                                </p>
                                <button className="btn btn-danger" onClick={()=>handleDeleteProducts(allProduct?._id)}>
                                    Delete
                                </button>
                            </Card.Body>
                        </Card>
                      </div>
                        )
                }
            </div>
           <Footer></Footer>
        </div>
    );
};

export default ManageProducts;
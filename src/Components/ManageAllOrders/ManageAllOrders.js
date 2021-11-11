import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const ManageAllOrders = () => {
    const[allOrders,setAllOrders]=useState([]);
    useEffect(()=>{
        fetch('https://lit-savannah-17178.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setAllOrders(data))

        
    },[])
    
    const handleUpdateStatus=(id)=>{
        fetch(`https://lit-savannah-17178.herokuapp.com/orders/${id}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            },
            body:JSON.stringify(allOrders)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.modifiedCount>0){
                alert('Updated status successfully!!!')
              
            }
        })
    }
    const handleDeleteAllOrders=(id)=>{
        fetch(`https://lit-savannah-17178.herokuapp.com/orders/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const confirm=window.confirm('Do you really want to delete!!!');
                if(confirm===true){
                    const remainingOrders=allOrders?.filter(data=>parseInt(data?._id)!== parseInt(id));
                    setAllOrders(remainingOrders);
                }
                else{
                    console.log('false');
                }
            }
        })
    }
    return (
        <div>
            <MenuBar></MenuBar>
            <h3 style={{color:'#6c63ff',fontWeight:'bold',margin:'2rem 1rem'}}>
                MANAGE ALL ORDERS
            </h3>
            <div className="row my-3">
                <div className="col-md-3 ">
                    <h2 className='ps-5'>Product </h2>
                </div>
                <div className="col-md-3">
                    <h2 style={{paddingLeft:'3rem'}}>User Name</h2>
                </div>
                <div className="col-md-3">
                    <h2 style={{paddingRight:'3rem'}}>Status</h2>
                </div>
                <div className="col-md-3">
                    <h2 style={{paddingRight:'7rem'}}> Action</h2>
                </div>
            </div>
            <hr />
            <div className="container">
                {
                    allOrders?.map(allOrder=>
                        <div className='row' key={allOrder?._id}>
                            <div className="col-md-3">
                                <h3 style={{paddingRight:'5rem'}}>{allOrder?.productName}</h3>
                            </div>
                            <div className="col-md-3">
                                <h3>{allOrder?.name}</h3>
                            </div>
                            <div className="col-md-3">
                               <h3>{allOrder?.status}</h3>
                            </div>
                            <div className="col-md-3 mb-3">
                           <div className="d-flex">
                           <button className="btn-success btn mx-2 "
                                onClick={()=>handleUpdateStatus(allOrder?._id)}>
                                    Update Status
                                </button>
                                <button className="btn btn-danger my-2" onClick={()=>handleDeleteAllOrders(allOrder?._id)}>
                                    Delete
                                </button>
                           </div>
                            </div>
                        </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ManageAllOrders;
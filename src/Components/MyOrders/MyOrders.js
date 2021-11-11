import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';
const MyOrders = () => {
    const{user}=useAuth();
    const[myOrders,setMyOrders]=useState([]);
    useEffect(()=>{
        fetch(`https://lit-savannah-17178.herokuapp.com/orders/${user?.email}`)
        .then(res=>res.json())
        .then(data=>setMyOrders(data))
    },[user.email])

    const handleDeleteMyOrders=(id)=>{
        fetch(`https://lit-savannah-17178.herokuapp.com/orders/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                const confirm=window.confirm('Do you really want to delete!!!');
                if(confirm===true){
                    const remainingOrders=myOrders?.filter(data=>parseInt(data?._id)!== parseInt(id));
                    setMyOrders(remainingOrders);
                }
                else{
                    console.log('false');
                }
            }
        })
    }
    return (
        <div className='container-fluid'>
            <MenuBar></MenuBar>
            <div className="row mt-4">
                <div className="col-md-4">
                    <h3>
                        Product Name
                    </h3>

                </div>
                <div className="col-md-4">
                <h3>
                        User Name
                    </h3>
                </div>
                <div className="col-md-4">
                <h3>
                        Action
                    </h3>
                </div>
            </div>
            <hr />
                <div className='mt-2'>
                    {
                        myOrders?.map(myOrder=>
                            <div key={myOrder?._id} className='row '>
                                <div className='col-md-4 '>
                                   
                                    <h3>
                                        {myOrder?.productName}
                                    </h3>

                                    </div>
                                <div className='col-md-4'>
                                    <h3>
                                        {myOrder?.name}
                                    </h3>

                                    </div>
                                <div className='col-md-4'>
                                    <button className="btn btn-danger" onClick={()=>handleDeleteMyOrders(myOrder?._id)}>Delete</button>

                                    </div>
                                    
                                    
                            </div>)
                    }
                </div>
                <Footer></Footer>
        </div>
    );
};

export default MyOrders;
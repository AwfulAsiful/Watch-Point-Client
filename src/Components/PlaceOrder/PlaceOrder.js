import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './PlaceOrder.css'
const PlaceOrder = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [details, setDetails] = useState([]);
    const [specificDetails, setSpecificDetails] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://lit-savannah-17178.herokuapp.com/allProducts`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])
    useEffect(() => {
        if (details.length > 0) {
            const found = details?.find((detail) => parseInt(detail?.id) === parseInt(id))
            setSpecificDetails(found);

        }
    }, [details,id])

    const onSubmit = data => {
        axios.post(`https://lit-savannah-17178.herokuapp.com/orders`, data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order Added Successfully!!')
                    reset();
                }
            })
    }
    return (
        <div className="">
            <MenuBar></MenuBar>
            <div className="row mx-3">
                <div className="col-md-6 col-sm-6 ">
                    <div className="row" style={{ marginTop: '6rem' }}>
                        <div className="col-md-4 detail-img">
                            <img src={specificDetails?.img} alt="" className="w-100" />
                        </div>
                        <div className="col-md-8 detail-text">
                            <h3 className="fw-bold">{specificDetails?.title}</h3>
                            <p><span>{specificDetails?.desc}</span></p>
                            <h4>Price: <span style={{ color: '#6c63ff', fontWeight: 'bold' }}>{specificDetails?.price}</span></h4>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6" style={{ marginTop: '5rem' }}>
                    <h3 style={{ color: '#6c63ff', fontWeight: 'bold', marginBottom: '2rem' }}>PLACE ORDER</h3>
                    <form
                        style={{ border: '2px solid #6c63ff', padding: '1.3rem' }}
                        onSubmit={handleSubmit(onSubmit)}>
                        <input
                            value={user?.displayName}
                            className="form-control mb-3" {...register("name", { required: true, maxLength: 20 })} />
                        <input

                            value={user?.email}
                            className="form-control mb-3" {...register("Email")} placeholder="E-mail" />

                        <input
                            defaultValue={specificDetails?.title}
                            className="form-control mb-3" {...register("productName", { required: true, maxLength: 20 })} />
                        <input className="form-control mb-3" {...register("address", {
                            required: true
                        })} placeholder="Enter your address" />
                        <input className="form-control mb-3" {...register("phone", {
                            required: true
                        })} placeholder="Enter your phone number" />


                        <input
                            value='Pending'
                            className="form-control" {...register("status", {
                                required: true
                            })} />
                        <input type="submit" value="Purchase" className="btn-regular my-3" />

                    </form>
                </div>
              
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PlaceOrder;
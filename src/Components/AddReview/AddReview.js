import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import MenuBar from '../MenuBar/MenuBar';
import Footer from '../Footer/Footer';
const AddReview = () => {
    const { register, handleSubmit,reset } = useForm();
    const{user}=useAuth();
    const onSubmit = (data) => {
       axios.post(`https://lit-savannah-17178.herokuapp.com/reviews`,data)
       .then(res=>{
           if(res.data.insertedId){
               alert('Review added successfully!!!!')
               reset()
           }
       })
      };
    return (
        <div className="container-fluid">
            <MenuBar></MenuBar>
            <h1 className='my-4'>Add your review</h1>
            <form onSubmit={handleSubmit(onSubmit)}
            style={{border:'2px solid #6c63ff',marginLeft:'16rem'}} className='form-control w-50'
            >
        <input
          className="form-control w-100 my-2"
          name="email"
          value={user?.email}
          type="email"
          {...register("email", { required: true })}
        />
        
      
        <textarea
          className="form-control  my-4"
          name="comments"
          placeholder="Add your comment"
          rows='5' cols='10'
          {...register("comments", { required: true })}
        />
        <input
          className="form-control  my-4"
          name="rating"
          placeholder="Add ratings from 0-5"
          {...register("rating", { required: true })}
        />

        <input
          className="btn-regular mt-3"
          type="submit"
          value="Add"
        />
      </form>
      <Footer></Footer>
        </div>
    );
};

export default AddReview;
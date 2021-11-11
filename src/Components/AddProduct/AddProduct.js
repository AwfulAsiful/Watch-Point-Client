import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import MenuBar from '../MenuBar/MenuBar'
import Footer from '../Footer/Footer'
const AddProduct = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        axios.post(`https://lit-savannah-17178.herokuapp.com/allProducts`,data)
        .then(res=>{
            if(res.data.insertedId){
                alert("Successfully inserted your product!!")
                reset();
            }
        })
        // console.log(data)
    };
    return (
        <div className='container-fluid'>
            <MenuBar></MenuBar>
        <h1 style={{color:'#6c63ff',fontWeight:'bold',margin:'2rem 1rem'}}>
            ADD A PRODUCT
        </h1>
        <div className="container">
        <form 
        onSubmit={handleSubmit(onSubmit)}
        style={{border:'2px solid #6c63ff',width:'70%',padding:'2rem',marginLeft:'8rem'}}>
            <input className="form-control" {...register("title", { required: true, maxLength: 20 })} placeholder="Title" />
            
          
            <input className="form-control mt-3" {...register("img")} placeholder="Img Url" />

            <input className="form-control my-3" {...register("price", { required: true, maxLength: 20 })} placeholder="Price" />

            <textarea className="form-control mt-3" {...register("desc")} placeholder="Desc" rows="10" cols="38" />
            <textarea className="form-control mt-3" {...register("shortDesc")} placeholder="Short Desc" rows="10" cols="38" />

            <input className="btn-regular my-3" type="submit" value='Add'/>
        </form>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default AddProduct;
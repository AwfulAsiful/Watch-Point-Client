import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import './MakeAdmin.css'
const MakeAdmin = () => {
    const [admin, setAdmin] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAdminData = { ...admin };
        newAdminData[field] = value;
        setAdmin(newAdminData);
    }

    const handleMakeAdmin = e => {
        const user = { admin };
        fetch(`https://lit-savannah-17178.herokuapp.com/users/admin`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
               if(data.modifiedCount){
                   alert('Succesfully added as admin');
               }
            })
        e.preventDefault();

    }
    return (
        <div className="container-fluid">
            <MenuBar></MenuBar>
            <h1 
            style={{color:"#6c63ff",fontWeight:'bold',margin:'3rem 1rem'}}>
                MAKE ADMIN
            </h1>
           <div className="container">
           <form
                style={{ 
                    border: '2px solid #6c63ff',padding:'2rem',
                    width:'65%',
                    marginLeft:'9rem'
                }}
                onSubmit={handleMakeAdmin} className='form'>
                <input
                    type="text"
                    name="email"
                    onBlur={handleOnBlur}
                    className='form-control w-75'
                    
                    placeholder='Enter email' />
                <input
                    type="password"
                    name="password"
                    onBlur={handleOnBlur}
                    className='form-control w-75 my-4'
                    placeholder='Enter password' />

                <input
                    type="submit"
                    value="Make Admin"
                    className='btn-regular' />
            </form>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    
    
    return (
        <div className='container-fluid'>
            <MenuBar></MenuBar>
            <div style={
                { margin: '10rem', marginRight: '8rem' }}>
                <h1 style={
                    { color: '#6C63FF', 
                    fontWeight: 'bold', 
                    marginRight: '3rem' }
                    }>
                        REGISTER
                    </h1>
                <form 
                onSubmit={handleLoginSubmit}
                className="form-control mt-3 p-4 " style={
                    { border: "1px solid #6C63FF", width: '88%' }
                    }>
                    <input 
                    type="text" 
                    name="name" 
                    id=""
                    className="form-control my-4" placeholder='Enter your name' onBlur={handleOnBlur}
                    required/>

                    <input 
                     type="email"
                     name="email" 
                     id="" 
                     className="form-control my-4"
                     placeholder='Enter your email' 
                     onBlur={handleOnBlur}
                     required/>

                    <input 
                    type="password" 
                    name="password" 
                    id="" 
                    className="form-control mb-4" placeholder='Enter your password' 
                    onBlur={handleOnBlur}
                    required/>

                    <input 
                    type="password" 
                    name="password2" 
                    id="" 
                    className="form-control mb-4" placeholder='Confirm your password' 
                    onBlur={handleOnBlur}
                    required/>

                    <input 
                    type="submit" 
                    value="Register" className="btn-regular" />
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;
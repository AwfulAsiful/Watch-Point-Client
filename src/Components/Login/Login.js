import React, { useState } from 'react';
import { Link, NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        
        e.preventDefault();
    }
    return (
        <div className='container-fluid'>
            <MenuBar></MenuBar>
            <div style={{margin:'10rem',marginRight:'8rem'}}>

                <h1 className="" style=
                {
                    {color:'#6C63FF',fontWeight:'bold',marginRight:'3rem'}
            }>LOGIN</h1>

                <form 
                onSubmit={handleLoginSubmit} 
                className="form-control my-4 p-4 " style={
                    {border:"1px solid #6C63FF",width:'88%'}
                }
                >
                    <input type="email"
                     name="email" 
                     id="" 
                     onBlur={handleOnChange}

                     className="form-control my-4" placeholder='Enter your email'/>

                    <input 
                    type="password" 
                    name="password" 
                    id="" 
                    onBlur={handleOnChange}
                    className="form-control mb-4" placeholder='Enter your password'/>

                    <input type="submit" 
                    value="Login" className="btn-regular"  />
                   
                </form>
                        <Link
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <h5 className="text-dark pe-5">New User? Please <button className='btn-regular'>Register</button></h5>
                        </Link>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
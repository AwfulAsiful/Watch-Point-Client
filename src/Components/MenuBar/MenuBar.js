import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './MenuBar.css';
const MenuBar = () => {
    const{user,logout}=useAuth();
    return (
        <div className="container-fluid menubar">
            <div className="row">
                <div className="col-md-4 col-sm-4">
                <h3 className="fw-bold brand-name py-3">Watch Point</h3> 
                </div>
                <div className="col-md-8 col-sm-8">
                    <ul className="d-flex justify-content-end align-items-center">
                    <Link to='/home' className='items'>
                        <li >
                            Home
                        </li>
                        </Link>
                        <Link to='/explore' className='items'>
                        <li >
                            Explore
                        </li>
                        </Link>
                        <Link to='/dashboard' className='items'>
                        <li >
                            Dashboard
                        </li>
                        </Link>
                        {
                            user?.email?(
                                <button className="btn btn-dark" onClick={logout}>
                            Logout
                        </button>
                            ):(<Link to='/login'className="items">
                            <li>Login</li>
                        </Link>)
                        }
                        {user?.email? (<h4 className="mx-2 my-1">Hello!!  {user?.displayName}</h4>):(<Link to='/register'>
                        <button className="btn btn-dark">
                            Register
                        </button>
                        </Link>)}
                        
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
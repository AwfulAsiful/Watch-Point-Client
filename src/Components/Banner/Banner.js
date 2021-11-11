import React from 'react';
import banner from '../../images/banner.png'
const Banner = () => {
    return (
        <div className="container my-4" style={{borderBottom:'2px solid #6C63FF'}}>
            <div className="row">
                <div className="col-md-7 col-sm-7 ">
                    <img src={banner} alt=""  className='img-fluid px-3'/>
                </div>
                <div className="col-md-5 col-sm-5 text-start">
                    <h4 style={{color:'#6C63FF',fontWeight:'800',paddingTop:'4rem',fontSize:'1.7rem'}}>OUR WATCHES <br /> ARE CRAFTED <br /> WITH SCRUPULOUS <br /> ATTENTION TO DETAIL.</h4>
                </div>
            </div>
        </div>
    );
};

export default Banner;
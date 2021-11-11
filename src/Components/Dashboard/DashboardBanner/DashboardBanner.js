import React from 'react';
import dashboardBanner from '../../../images/makeAdmin.jpg'

const DashboardBanner = () => {
    return (
        <div className='container-fluid' style={{borderBottom:'3px solid #6c63ff',paddingBottom:'2rem'}}>
            <div className="row">
                <div className="col-md-7">
                    <img src={dashboardBanner} alt="" className='w-100'/>
                </div>
                <div className="col-md-5" style={{marginTop:'7rem'}}>
                    <h3 
                    style={{color:'#6c63ff',fontWeight:'bold',textAlign:'start'}}>
                    Dashboard <br /> <span className='fw-bold text-dark'>Increases Your</span> <br /> Productivity  & <br /> <span className='fw-bold text-dark'>Saves your </span> precious time
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default DashboardBanner;
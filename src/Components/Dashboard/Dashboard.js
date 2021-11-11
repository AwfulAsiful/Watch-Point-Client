import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import DashboardBanner from './DashboardBanner/DashboardBanner';
import DashboardNavigation from './DashboardNavigation/DashboardNavigation';
const Dashboard = () => {
    return (
        <div className='container-fluid'>
          <MenuBar></MenuBar>  
         <DashboardBanner></DashboardBanner>   
         <DashboardNavigation></DashboardNavigation>
         <Footer></Footer>
        </div>
    );
};

export default Dashboard;
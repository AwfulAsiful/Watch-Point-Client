import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import myOrdersImg from '../../../images/myOrders.png';
import reviewsImg from '../../../images/revview.png';
import payImg from '../../../images/pay.png';
import manageOrdersImg from '../../../images/manageOrders.png';
import addProductImg from '../../../images/addProduct.png';
import manageProductsImg from '../../../images/manageProduct.png';
import makeAdminImg from '../../../images/makeAdmin2.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import MenuBar from '../../MenuBar/MenuBar';
import Footer from '../../Footer/Footer';
const DashboardNavigation = () => {
    const{user,admin}=useAuth();
    console.log(admin);
    return (
        <div className='container' style={{marginTop:'4rem'}}>
            
            <h3 className="">Navigate through different routes </h3>
            <div className="row my-4">
                <div className="col-md-4 mb-4">
                    <Card style={{border:'2px solid #6c63ff'}}>
                        <CardImg src={myOrdersImg} variant='top'></CardImg>
                        <Card.Body>
                            <h4 className='fw-bold'>
                                MY ORDERS
                            </h4>
                            <Link to={`/orders/${user?.email}`}>
                                <button className="btn-regular">
                                    GO NOW
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mb-4">
                    <Card style={{border:'2px solid #6c63ff'}}>
                        <CardImg src={payImg} variant='top'></CardImg>
                        <Card.Body>
                            <h4 className='fw-bold'>
                                PAYMENT                            </h4>
                            <Link to='/pay'>
                                <button className="btn-regular">
                                    GO NOW
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mb-4">
                    <Card style={{border:'2px solid #6c63ff'}}>
                        <CardImg src={reviewsImg} variant='top'></CardImg>
                        <Card.Body>
                            <h4 className='fw-bold'>
                                ADD REVIEW
                            </h4>
                            <Link to='/addReview'>
                                <button className="btn-regular">
                                    GO NOW
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            {
                admin && <div className='row'>
                                   <div className="col-md-4 mb-4">
                    <Card style={{border:'2px solid #6c63ff'}}>
                        <CardImg src={manageOrdersImg} variant='top'></CardImg>
                        <Card.Body>
                            <h4 className='fw-bold'>
                                MANAGE ORDERS
                            </h4>
                            <Link to='/manageAllOrders'>
                                <button className="btn-regular">
                                    GO NOW
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mb-4">
                    <Card style={{border:'2px solid #6c63ff'}}>
                        <CardImg src={manageProductsImg} variant='top'></CardImg>
                        <Card.Body>
                            <h4 className='fw-bold'>
                                MANAGE PRODUCTS
                            </h4>
                            <Link to='/manageProduct'>
                                <button className="btn-regular">
                                    GO NOW
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
              
                <div className="col-md-4 mb-4">
                    <Card style={{border:'2px solid #6c63ff'}}>
                        <CardImg src={addProductImg} variant='top'></CardImg>
                        <Card.Body>
                            <h4 className='fw-bold'>
                                ADD PRODUCTS
                            </h4>
                            <Link to='/addProduct'>
                                <button className="btn-regular">
                                    GO NOW
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 mb-4">
                    <Card style={{border:'2px solid #6c63ff'}}>
                        <CardImg src={makeAdminImg} variant='top'></CardImg>
                        <Card.Body>
                            <h4 className='fw-bold'>
                                MAKE ADMIN
                            </h4>
                            <Link to='/makeAdmin'>
                                <button className="btn-regular">
                                    GO NOW
                                </button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
                </div>
            }
            </div>
            
        </div>
    );
};

export default DashboardNavigation;
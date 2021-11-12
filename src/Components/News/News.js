import React from 'react';
import newsImgOne from '../../images/news-1.jpg';
import newsImgTwo from '../../images/news-2.jpg';
import newsImgThree from '../../images/news-3.png';
import './News.css'
const News = () => {
    return (
        <div className='container mt-5'>
            <h1 className="text-center fw-bold my-4">
                News <span style={{color:'#6c63ff'}}> About</span> Watches
            </h1>
            <div className='row'>
                <div className="col-md-4">
                    <div className='' style={{
                        border:'3px solid #6c63ff',
                        padding:'1.2rem'
                    }}>
                        <div>
                        <img src={newsImgOne} className='w-100' alt=''/>
                        </div>
                        <div className=' py-3'>
                            <h3 className="fw-bold text-center">
                                Luxury watches for men
                            </h3>
                            <a href='https://watchestobuy.com/' target='_blank' rel="noreferrer">
                            <button className="btn-news">
                                Read Now
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='' style={{
                        border:'3px solid #6c63ff',
                        padding:'1.2rem',
                        height:'100%'
                    }}>
                        <div >
                        <img src={newsImgTwo} className='w-100 ' alt=''/>
                        </div>
                        <div className=' py-3'>
                            <h3 className="fw-bold text-center">
                                Watches To Buy
                            </h3>
                            <a href='https://watchestobuy.com/' target='_blank' rel="noreferrer">
                            <button className="btn-news">
                                Read Now
                            </button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className='' style={{
                        border:'3px solid #6c63ff',
                        padding:'1.2rem',
                        height:'100%'
                    }}>
                        <div className=''>
                        <img src={newsImgThree} className='w-100' alt=''/>
                        </div>
                        <div className=' py-3'>
                            <h3 className="fw-bold text-center">
                                Smart Watches Guide
                            </h3>
                            <a href='https://www.tomsguide.com/us/smartwatch-buying-guide,review-3360.html' target='_blank' rel="noreferrer">
                            <button className="btn-news">
                                Read Now
                            </button>
                            </a>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;
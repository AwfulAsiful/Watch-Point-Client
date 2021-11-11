import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch(`https://lit-savannah-17178.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='container'>
            <h2 className="text-center fw-bold">
                Customer <span style={{ color: '#6c63ff' }}>
                    Reviews
                </span>
            </h2>
            <div className="row mt-5">
                {
                    reviews?.map(review =>
                        <div className="col-md-4" key={review?._id}>
                            <Card style={{ border: '2px solid black' }}>
                                <Card.Body>
                                    <h3 className='fw-bold'>
                                        FROM: <span style={{ color: '#6c63ff' }}>
                                            {review?.email}
                                        </span>
                                    </h3>
                                    <p className='text-start'>{review?.comments}</p>
                                    <h4 className="fw-bold text-warning">
                                        <i className="fas fa-star"></i>
                                        {review?.rating}
                                    </h4>
                                </Card.Body>
                            </Card>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Reviews;
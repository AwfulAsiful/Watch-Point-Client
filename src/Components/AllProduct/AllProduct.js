import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {
    const{title,shortDesc,img,price,id}=props.allProduct || {};

    return (
       <div className="col-md-4 col-sm-4 mb-4">
            <Card className="h-100 p-3 w-75" style={{border:'2px solid #6C63FF',width:'70%'}}>
                
                <CardImg variant="top" src={img} className="w-50"/>
                    <Card.Body className="text-start " style={{color:"black"}}>
                        <h3 className="fw-bold">{title}</h3>
                        <p className=''>{shortDesc}</p>
                        <h4>Price: <span style={{color:'#6C63FF',fontWeight:'bold'}}>{price}</span> </h4>
    
                        <Link to={`/allProducts/${id}`}>
                      <button className="btn-regular">
                           Buy Now
                       </button>
                      </Link>
                       
                    </Card.Body>
                </Card>
        </div>
    );
};

export default AllProduct;
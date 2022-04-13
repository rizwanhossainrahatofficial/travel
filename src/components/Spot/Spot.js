import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Spot.css'

const Spot = (props) => {
        const{name,img,_id,description}=props.spot;
       const navigate=useNavigate()

       const handeBook =()=>{
           navigate(`myorder/${_id}`)
       } 

    return (
        <div>
              <Col >
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className='scroller '>
            {description}
          </Card.Text >
          <Button onClick={handeBook}>Book Now</Button>
        </Card.Body>
      </Card>
   
    </Col>
        </div>
    );
};

export default Spot;
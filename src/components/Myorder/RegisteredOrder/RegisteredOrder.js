import React, { useEffect, useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './RegisteredOrder.css'

const RegisteredOrder = (props) => {
    
    
    const {orderName,fullname,from,destination,price,_id}=props.order;
    console.log(props.order._id)
const[orders,setorders]=useState([])
console.log(orders._id)
    useEffect(()=>{
        fetch('http://localhost:5000/myorder')
        .then(res=>res.json())
        .then(data=>setorders(data))
    },[])

    const handleDelete=id=>{
        const proceed=window.confirm('Are you sure you want to delete?')
        if(proceed){
            const url=`http://localhost:5000/myorder${id}`
            fetch(url,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    alert('successfully deleted')
                    const remainingOrder=orders.filter(order=>order._id!==id)
                    setorders(remainingOrder);
                }
            })
        }
    }

    return (
        <div className='container'  >
           

          
            <Card  style={{ width: '18rem' }}>
  <Card.Header>{orderName}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>{fullname}</ListGroup.Item>
    <ListGroup.Item>{from}</ListGroup.Item>
    <ListGroup.Item>{price}</ListGroup.Item>
    <ListGroup.Item>{destination}</ListGroup.Item>


    <Button onClick={()=>handleDelete(orders._id)}>Delete order</Button>

  </ListGroup>
</Card>

        </div>
    );
};

export default RegisteredOrder;
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import useFirebase from '../../hooks/useFirebase';
import Spot from '../Spot/Spot';

const Home = () => {
   
    const [spots,setSpots]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/spots')
        .then(res=>res.json())
        .then(data=>setSpots(data))
    },[])
    return (
        <div style={{marginTop:'15px'}}>
            
             <Row xs={1} md={3} className="g-4">
         {
             spots.map(spot=><Spot spot={spot}></Spot>)
         }
           </Row>
        </div>
    );
};

export default Home;
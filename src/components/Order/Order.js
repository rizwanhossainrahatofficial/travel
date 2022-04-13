import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import './Order.css'

const Order = () => {
     const {id} =useParams()
     const [order,setorder]=useState([])

     useEffect(()=>{
         fetch(`https://aqueous-island-70963.herokuapp.com/spots/${id}`)
         .then(res=>res.json())
         .then(data=>setorder(data))
     },[])

    const { register, formState: { errors }, handleSubmit ,reset} = useForm();
    const onSubmit = data =>{ 
        console.log(data)
        axios.post('https://aqueous-island-70963.herokuapp.com/spots',data)
        .then(res=>{
            if(res.data.insertedId){
                alert('Register succesfully complete')
                reset();
            }
        })
    }
    return (
        <div className='addoder'>
              <h3 style={{marginLeft:'400px',color:'goldenrod'}}>Please register your Tour package </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("orderName")}  defaultValue={order.name} placeholder="order Name"/>
      <input {...register("fullname")}  placeholder="Full Name"/>

      <input {...register("from")}  placeholder="From"/>

      <input {...register("destination")}  placeholder="Destination"/>
      

      <input {...register("price")} defaultValue={order.price} placeholder="price"/>

 
      <textarea {...register("description")} placeholder="description" />
    

     
      

      {/* register with validation and error message */}
     
      

      <input style={{backgroundColor:'goldenrod'}} type="submit" />
    </form>

            
        </div>
    );
};

export default Order;
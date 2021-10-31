
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
  import "./ManageAllOrders.css"
const ManageAllOrders = () => {
    const [bookings, setBookings] = useState([]);
   
    const {user} = useAuth();
    useEffect(() => {
        fetch('http://localhost:5000/allbookings',{
            headers:{
                "Content-Type":  'application/json'
            },
        })
        .then(res => res.json())
        .then(data => setBookings(data));

    },[]);
    const handleDelete=(id)=>{
   
        fetch(`http://localhost:5000/mybookings/${id}`,{
            method: "DELETE",
        })
        .then(res=>res.json())
        .then((data) =>{
            if (data.deletedCount){
                alert('deleted')
            }
            const remaining= bookings.filter(booking=>booking._id !== id)
            setBookings(remaining)
        });
            
        

    }


    return (
        <div className="manage-order">
         <h2> All ORDERS:{bookings.length}</h2>  
         {console.log(bookings)}
            {
                bookings.map(booking =>
                    <div className="order-form"> 
                        <img src={`http://localhost:5000/${booking.destination.image}`}></img>
                        <h6>Destination:{booking.destination.name}</h6>
                        <h4>Cost:<small>{booking.destination?.price}</small></h4>
                        <small>Email:{booking.user}</small>
                          <button onClick={()=>handleDelete(booking._id)} className="btn btn-danger">Delete</button>
                          
                    </div>
                )
            }
        </div>
    );
        }
export default ManageAllOrders;
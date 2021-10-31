import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/travelers')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])
    return (
        <div className='row'>
            <h2> All Orders available: {orders.length}</h2>

            {
          orders.map(order=>
              <div>
               <h4>{order._id}</h4>
               <h6>{order.name}</h6>
               <h3>{}</h3>

              </div>
          )      
            }
        </div>
    );
};

export default ManageAllOrders;

import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
const Tours = () => {
    const history = useHistory();
    const [places, setplaces] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/destinations')
        .then(res=>res?.json())
        .then(data => setplaces(data))
    }, [])
    const handleTourDetails=(id)=>{
        console.log('clicked');
        history.push(`/tours/${id}`);
    }
    
    return (
        <div className="row">
           <h2>Choose Your  Desired destinations:{places?.length}</h2> 
             
            {
                places.map(place=> <div className="col-md-4">
                    <img src={`http://localhost:5000/${place?.image}`} alt="" width="200px" />
                    <h4>{place?.name}</h4>
                    <h3> {place?.price} </h3>
                    <button onClick={()=>handleTourDetails(place?._id)}  className="btn btn-warning">Book Now</button>
                </div>
                    )
            }
         
          
           
        </div>
    );
};

export default Tours;
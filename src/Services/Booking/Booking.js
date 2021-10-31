import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth.js";
const Booking = () => {
    const {user} = useAuth();
    const [booking, setBooking] =useState({});
    const { id } = useParams();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        const sendingdata = data;
        sendingdata.destinationId = id;
        sendingdata.user = user.email;
        fetch(`http://localhost:5000/booking`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(sendingdata),
        })
            .then((res) => res.json())
            .then((res) => console.log(res));
    };
    useEffect(() => {
        fetch(`http://localhost:5000/booking/${id}`)
            .then(res => res.json())
            .then(data => {
                setBooking(data);
                console.log(data);
                console.log(user);
            });
    }, []);
    return (
        <div className='d-flex'>
            <div className="w-50">
                <img src={`http://localhost:5000/${booking?.image}`} alt="" width="100%"/>
                <h4>{booking?.name}</h4>
                <h3> {booking?.price} </h3>
                <p>{booking?.description}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column w-50">
                <h2>Book your Tour</h2>
                {/* register your input into the hook by invoking the "register" function */}
                <input
                    className="p-2 m-2"
                    {...register("name")}
                    placeholder="name of tour"
                />

                {/* include validation with required or other standard HTML validation rules */}
                <input
                    className="p-2 m-2"
                    type="date"
                    {...register("date", { required: true })}
                    placeholder="Date"
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <input
                    className="p-2 m-2"
                    type="address"
                    {...register("address", { required: true })}
                    placeholder="write your address"
                />
                {/* errors will return when field validation fails  */}
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <button className="btn btn-danger mt-3" type="submit" >Book Now!</button>
            </form>
      
        </div>
    );
};

export default Booking;

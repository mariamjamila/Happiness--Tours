import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const MyOrders = () => {
  const [bookings, setBookings] = useState([]);

  const { user } = useAuth();
  useEffect(() => {
    fetch("http://secure-everglades-53022.herokuapp.com/mybookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user: user.email }),
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);
  const handleDelete = (id) => {
    const deleteCertain = window.confirm("Do you want to delete?");

    if (deleteCertain) {
      fetch(`http://secure-everglades-53022.herokuapp.com/mybookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
          }
          const remaining = bookings.filter((booking) => booking._id !== id);
          setBookings(remaining);
        });
    } else {
      console.log("User cancelled delete");
    }
  };

  return (
    <div>
      <h2> My Orders:{bookings.length}</h2>
      {console.log(bookings)}
      {bookings.map((booking) => (
        <div>
          <img src={`${booking.destination.image}`}></img>
          <h6>Destination:{booking.destination.name}</h6>
          <h4>
            Cost:<small>{booking.destination?.price}</small>
          </h4>
          <small>Email:{booking.user}</small>
          <button
            onClick={() => handleDelete(booking._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
export default MyOrders;

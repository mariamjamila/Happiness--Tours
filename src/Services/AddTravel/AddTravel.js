import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const AddTravel = () => {
  const [travel, setTravel] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    fetch(`http://secure-everglades-53022.herokuapp.com/addTravel`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <h2>Add a new Travel</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column w-50"
      >
        <input
          className="p-2 m-2"
          placeholder="image URL"
          {...register("image")}
        />

        <input
          className="p-2 m-2"
          placeholder="Destination Name"
          {...register("name", { required: true })}
        />

        <input
          type="number"
          className="p-2 m-2"
          placeholder="Destination Price"
          {...register("price", { required: true })}
        />

        <textarea
          className="p-2 m-2"
          placeholder="Add a description..."
          cols="30"
          rows="10"
          {...register("description", { required: true })}
        ></textarea>
        {errors.exampleRequired && <span>This field is required</span>}

        <input className="btn btn-danger p-2 m-2" type="submit" />
      </form>
    </div>
  );
};

export default AddTravel;

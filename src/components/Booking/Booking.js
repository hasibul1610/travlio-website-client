import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const { user } = useAuth();
    // console.log(user.email);
    const { singlePackageId } = useParams();
    console.log(singlePackageId);
    const [singlePackage, setSinglePackage] = useState({});

    const email = user.email;

    useEffect(() => {
        fetch(`https://peaceful-wildwood-29357.herokuapp.com/singlePackage/${singlePackageId}`)
            .then(res => res.json())
            .then(data => setSinglePackage(data))
    }, [])
    // console.log(singlePackage);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.email = email;
        data.status = "pending";

        fetch('https://peaceful-wildwood-29357.herokuapp.com/confirmBooking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data),

        })
            .then(res => {
                res.json()
                reset()
                alert("Booked Done!!!")
            })
            .then(result => console.log(result));

        // console.log(data);
    }

    return (
        <div>
            <br />
            <br />
            <br />
            <h1 className="text-center my-5">Booking</h1>
            <div className="booking-container">
                <div className="row container">
                    <div className="col-md-6">
                        <div className="details-img">
                            <img className="w-75" src={singlePackage?.image} alt="" />
                        </div>
                        <h2 className="text-start">{singlePackage?.name}</h2>
                        <p className="text-start">{singlePackage?.description}</p>
                        <h2 className="text-warning"> price: {singlePackage?.price} $</h2>

                    </div>
                    <div className="col-md-6">

                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input
                                {...register("location")}
                                defaultValue={singlePackage?.location}
                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("name")}
                                defaultValue={singlePackage?.name}
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("date")}
                                // placeholder="Name"
                                type="date"
                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("comments")}
                                placeholder="comments"

                                className="p-2 m-2 w-100"
                            />
                            <br />

                            <input
                                {...register("price", { required: true })}
                                defaultValue={singlePackage?.price}

                                className="p-2 m-2 w-100"
                            />
                            <br />
                            <input
                                {...register("image", { required: true })}
                                defaultValue={singlePackage?.image}

                                className="p-2 m-2 w-100"
                            />
                            <br />


                            {errors.exampleRequired && <span>This field is required</span>}

                            <input
                                type="submit"
                                value="Book Now"
                                className="btn btn-info w-50"
                            />
                        </form>
                        <NavLink to="/myBookings">
                            <div className="text-center my-3">
                                <button className="back-to-home-btn">See all Booking</button>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
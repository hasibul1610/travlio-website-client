import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const MyBookings = () => {
    const { user } = useAuth();
    const userEmail = user.email;
    const [packages, setPackages] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://peaceful-wildwood-29357.herokuapp.com/myBookings/${userEmail}`)
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, [control]);//control

    const handleDelete = id => {
        const proceed = window.confirm("Are You Sure");
        if (proceed) {
            fetch(`https://peaceful-wildwood-29357.herokuapp.com/deleteBooking/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setControl(!control)
                    }
                })
            // console.log(id);
        }
    }

    return (
        <div className="container my-5 py-5">

            <h2>Booking By Email : {userEmail}</h2>

            <div className="services mt-5">
                <div className="row container">
                    {packages?.map((pg) => (
                        <div className="col-md-4 mt-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pg?.image} alt="" />
                                </div>

                                <h6>{pg?.name}</h6>

                                <h3 className="text-danger"> Cost :{pg?.price}$</h3>

                                <button
                                    onClick={() => handleDelete(pg?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyBookings;





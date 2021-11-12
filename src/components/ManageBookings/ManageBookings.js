import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageBookings = () => {

    const [bookings, setBookings] = useState([]);

    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value)
    }
    // console.log(status);

    useEffect(() => {
        fetch('http://localhost:5000/allBookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleUpdate = id => {
        fetch(`http://localhost:5000/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        })
    }
    return (
        <div>

            <h1>All Orders : {bookings.length}</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bookings Title</th>
                        <th>Event description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {bookings?.map((pg, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pg.name}</td>
                            <td>{pg.description}</td>
                            <td>{pg.image}</td>
                            <td>
                                <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pg.status} /></td>
                            <button
                                onClick={() => handleUpdate(pg._id)}
                                className="btn bg-success p-1"
                            >Update</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageBookings;
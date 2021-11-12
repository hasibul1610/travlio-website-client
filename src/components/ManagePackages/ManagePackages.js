import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManagePackages = () => {
    const [packages, setPackages] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/packages")
            .then((res) => res.json())
            .then((data) => setPackages(data));
    }, [control]);


    const handleDelete = id => {
        fetch(`http://localhost:5000/deletePackage/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    setControl(!control)
                }
            })
        console.log(id);
    }

    return (
        <div>
            <div className="container">
                <h1>Manage Packages </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Package Title</th>
                            <th>Event description</th>
                            <th>Image Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {packages?.map((pg, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pg.name}</td>
                                <td>{pg.description}</td>
                                <td>{pg.image}</td>
                                <td>{pg.status}</td>
                                <button
                                    onClick={() => handleDelete(pg?._id)}
                                    className="btn bg-danger p-2"
                                >Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>

        </div>
    );
};

export default ManagePackages;
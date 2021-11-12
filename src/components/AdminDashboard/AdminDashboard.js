import React, { useState } from 'react';
import AddPackages from '../AddPackages/AddPackages';
import ManageBookings from '../ManageBookings/ManageBookings';
import ManagePackages from '../ManagePackages/ManagePackages';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [control, setControl] = useState("addPackages");
    return (

        <div className="admin-dashboard">
            <div className="row">
                <div className="col-lg-2 col-md-3">
                    <ul className="all-menu">
                        <li
                            onClick={() => setControl("addPackages")}
                        >Add Packages</li>
                        <li
                            onClick={() => setControl("managePackages")}
                        >Manage Packages</li>
                        <li
                            onClick={() => setControl("manageBookings")}
                        >Manage Bookings</li>
                    </ul>
                </div>
                <div className="col-lg-10 col-md-9">
                    <h2>Render Here</h2>
                    {control === "addPackages" && <AddPackages></AddPackages>}
                    {control === "managePackages" && <ManagePackages></ManagePackages>}
                    {control === "manageBookings" && <ManageBookings></ManageBookings>}
                </div>
            </div>
        </div>

    );
};

export default AdminDashboard;
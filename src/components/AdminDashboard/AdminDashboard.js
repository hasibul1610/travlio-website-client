import React, { useState } from 'react';
import AddPackages from '../AddPackages/AddPackages';
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
                            onClick={() => setControl("services")}
                        >Manage Packages</li>
                        <li
                            onClick={() => setControl("manageBooking")}
                        >Manage Booking</li>
                        <li
                            onClick={() => setControl("status")}
                        >Booking Status</li>
                    </ul>
                </div>
                <div className="col-lg-10 col-md-9">
                    <h2>Render Here</h2>
                    {control === "addPackages" && <AddPackages></AddPackages>}
                </div>
            </div>
        </div>


        // <div className="admin-dashboard">
        //     <div className="admin-container">
        //         <div className="dashboard">
        //             <div className="admin-box">
        //                 <div className="row admin-container">
        //                     <div className="col-lg-3 col-sm-3 ">
        //                         <div className="admin-area">
        //                             <h6>Dashboard</h6>
        //                             <div className="all-menu mt-5">
        //                                 <li
        //                                     onClick={() => setControl("addServices")}
        //                                     className="admin-menu p-2"
        //                                 >
        //                                     Add Services
        //                                 </li>

        //                                 <li
        //                                     onClick={() => setControl("services")}
        //                                     className="admin-menu p-2"
        //                                 >
        //                                     Manage Services
        //                                 </li>
        //                                 <li
        //                                     onClick={() => setControl("MangeOrder")}
        //                                     className="admin-menu p-2"
        //                                 >
        //                                     Manage Orders
        //                                 </li>
        //                                 <li
        //                                     onClick={() => setControl("status")}
        //                                     className="admin-menu p-2"
        //                                 >
        //                                     Orders Status
        //                                 </li>
        //                             </div>
        //                         </div>
        //                     </div>
        //                     <div className="col-lg-9 col-sm-9 text-center">
        //                         <h1>render your components</h1>

        //                         {/* {control === "services" && <Services></Services>} */}
        //                         {/* {control === "MangeOrder" && <ManageOrders></ManageOrders>} */}
        //                         {/* {control === "addServices" && <AddServices></AddServices>} */}
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default AdminDashboard;
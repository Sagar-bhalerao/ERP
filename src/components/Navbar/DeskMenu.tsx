import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DeskMenu = () => {
    const {isAuthenticated,user} = useSelector((state:any)=> state.auth);
    const role = JSON.parse(user);
    
    return (
        <div className="flex-auto">
            {isAuthenticated ? (<>
                <div className="navbar-start hidden lg:flex">
                {/* dropdown menu */}

                {/* deskMenu */}

                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1">Gatepass</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                       {role.role === "Security" && (<li><Link to='/inout'>In/Out</Link></li>) } 
                        <li><Link to='/gpassentry'>Entry</Link></li>
                        {role.role === "Manager" || role.role ==="Admin" || role.role === "Master" ?  ( <li><Link to="/post">Post</Link></li>) :null}
                        
                        <li><a>Close</a></li>
                        <li><Link to='/dinout'>Director In/Out</Link></li>

                        <li>
                            <details >
                                <summary>Reports</summary>
                                <ul>
                                    <li><a>Dashboard</a></li>
                                    <li><Link to="/gatepassreport">Gatepass</Link></li>
                                    <li><a>Director</a></li>
                                </ul>
                            </details>
                        </li>


                    </ul>
                </div>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1">Book Meet</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/create">Create</Link></li>
                        <li><Link to="/view">View</Link></li>
                    </ul>
                </div>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1">Veh Req</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/createveq">Create</Link></li>
                        <li><Link to="/viewreq">View</Link></li>
                        <li><Link to="/voucher">Voucher</Link></li>
                        <li><a>Report</a></li>
                        <li><a>Print Voucher</a></li>
                        <li><a>Bank Report</a></li>
                        <li><a>In/Out</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} className="btn btn-sm m-1">Society</div>
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Master</summary>
                                    <ul>
                                    <li><Link to='/society/memview'>Member</Link></li>
                      <li><Link to='/society/groupview'>AC Group</Link></li>
                      <li><Link to='/society/accview'>Account</Link></li>
                      <li><Link to='/society/schemeview'>Scheme</Link></li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Transaction</summary>
                                    <ul>
                                        <li><a>Dashboard</a></li>
                                        <li><a>Gatepass</a></li>
                                        <li><a>Director</a></li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Reports</summary>
                                    <ul>
                                        <li><a>Dashboard</a></li>
                                        <li><a>Gatepass</a></li>
                                        <li><a>Director</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="dropdown">
                    <div tabIndex={0} className="btn btn-sm m-1">HR</div>
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Master</summary>
                                    <ul>
                                        <li><Link to="/category">Category</Link></li>
                                        <li><Link to="/department">Department</Link></li>
                                        <li><Link to="/designation">Designation</Link></li>
                                        <li><Link to="/location">Location</Link></li>
                                        <li><Link to="/employee">Employee</Link></li>
                                        <li><Link to="/piecerate">Piece Rate</Link></li>
                                        <li><a>Week Off</a></li>
                                        <li><Link to="/vehicle">Vehicle</Link></li>
                                        <li><Link to="/products">Products</Link></li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Transaction</summary>
                                    <ul>
                                        <li><Link to="/prodview">Production</Link></li>
                                        <li><Link to="/attendview">Attendance</Link></li>

                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Reports</summary>
                                    <ul>

                                        <li><Link to="/report">Report</Link></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </ul>
                </div>

                <div className="dropdown">
                    <div tabIndex={0} className="btn btn-sm m-1">Canteen</div>
                    <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Master</summary>
                                    <ul>
                                        <li><a>Item</a></li>
                                        <li><a>Today's Menu</a></li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Transaction</summary>
                                    <ul>
                                        <li><a>Bill Entry</a></li>


                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details onClick={(e) => {
                                    const detailsElements = document.querySelectorAll('details');
                                    detailsElements.forEach((el) => {
                                        if (el !== e.target) {
                                            el.open = false;
                                        }
                                    });
                                }}>
                                    <summary>Reports</summary>
                                    <ul>

                                        <li><a>Report</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </ul>
                </div>



                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-sm m-1">Dashboard</div>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Vehicle</a></li>

                    </ul>
                </div>


            </div></>):(<></>)}
            


        </div>
    )
}

export default DeskMenu;

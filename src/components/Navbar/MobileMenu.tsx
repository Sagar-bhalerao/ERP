import { Link } from "react-router-dom";

const MobileMenu = () => {
    return (
        <div className="flex-none">
            <div className="drawer lg:hidden">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <label className="btn btn-circle swap swap-rotate z-10" htmlFor="my-drawer">
                    <svg className="swap-off fill-current [:checked~*_&]:!-rotate-45 [:checked~*_&]:!opacity-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                    <svg className="swap-on fill-current [:checked~*_&]:!rotate-0 [:checked~*_&]:!opacity-100" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                </label>
                
                <div className="drawer-content"></div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content mt-10">
                        <ul className="menu bg-base-200 w-56 rounded-box">
                            <li><a>Item 1</a></li>
                            <li>
                                <details>
                                    <summary>Gatepass</summary>
                                    <ul>
                                        <li><Link to='/inout'>In/Out</Link></li>
                                        <li><Link to='/gpassentry'>Entry</Link></li>
                                        <li><Link to="/post">Post</Link></li>
                                        <li><a>Close</a></li>
                                        <li><Link to='/dinout'>Director In/Out</Link></li>
                                        <li>
                                            <details>
                                                <summary>Reports</summary>
                                                <ul>
                                                    <li><a>Dashboard</a></li>
                                                    <li><a>Gatepass</a></li>
                                                    <li><a>Director</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                            <li>
                                <details >
                                    <summary>Book Meet</summary>
                                    <ul>
                                        <li><a>Create</a></li>
                                        <li><a>View</a></li>

                                    </ul>
                                </details>
                            </li>


                            <li>
                                <details>
                                    <summary>Veh Req</summary>
                                    <ul>
                                        <li><a>Create</a></li>
                                        <li><a>View</a></li>
                                        <li><a>Voucher</a></li>
                                        <li><a>Report</a></li>
                                        <li><a>Print Voucher</a></li>
                                        <li><a>Bank Report</a></li>
                                        <li><a>In/Out</a></li>

                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details>
                                    <summary>Society</summary>
                                    <ul>

                                        <li>
                                            <details>
                                                <summary>Master</summary>
                                                <ul>
                                                    <li><a>Dashboard</a></li>
                                                    <li><a>Gatepass</a></li>
                                                    <li><a>Director</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Transaction</summary>
                                                <ul>
                                                    <li><a>Dashboard</a></li>
                                                    <li><a>Gatepass</a></li>
                                                    <li><a>Director</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Reports</summary>
                                                <ul>
                                                    <li><a>Dashboard</a></li>
                                                    <li><a>Gatepass</a></li>
                                                    <li><a>Director</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details>
                                    <summary>HR</summary>
                                    <ul>

                                        <li>
                                            <details>
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
                                            <details>
                                                <summary>Transaction</summary>
                                                <ul>
                                                <li><Link to="/prodview">Production</Link></li>
                                                <li><Link to="/attendview">Attendance</Link></li>

                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Reports</summary>
                                                <ul>
                                                    <li><a>Report</a></li>

                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details>
                                    <summary>Canteen</summary>
                                    <ul>

                                        <li>
                                            <details>
                                                <summary>Master</summary>
                                                <ul>
                                                    <li><a>Dashboard</a></li>
                                                    <li><a>Gatepass</a></li>
                                                    <li><a>Director</a></li>
                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Transaction</summary>
                                                <ul>
                                                    <li><a>Bill Entry</a></li>

                                                </ul>
                                            </details>
                                        </li>
                                        <li>
                                            <details>
                                                <summary>Reports</summary>
                                                <ul>
                                                    <li><a>Report</a></li>

                                                </ul>
                                            </details>
                                        </li>
                                    </ul>
                                </details>
                            </li>

                            <li>
                                <details>
                                    <summary>Dashboard</summary>
                                    <ul>
                                        <li><a>Vehicle</a></li>

                                    </ul>
                                </details>
                            </li>
                        </ul>

                    </ul>

                </div>
            </div>

        </div>
    )
}

export default MobileMenu;

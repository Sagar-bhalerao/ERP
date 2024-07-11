 
import { fetchEmpData } from "../../../../Services/HR/Master/MasterAPI"
import {useEffect, useState } from "react";

import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import Paginations from "../../../../Helper/Pagination/Pagination";
import ReusableHeader from "../ReusableHeader";
import { toast } from "sonner";


interface Employee {
    emp_name: string;
    emp_id: number;
    off_day: string;
    dept_name: string;
}


const Employee = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    
    const [loading, setloading] = useState(true);
    const itemperPage = 8;

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await fetchEmpData();
                setData(response);
                setloading(false);

            } catch (error: any) {
              toast.error(`Something went wrong,   ${error.message}`);
               

            }

        }
        fetchdata();
    }, [])
    console.log(data);


    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };
    const indexOfLastItem = currentPage * itemperPage;
    const indexOfFirstItem = indexOfLastItem - itemperPage;

    const currentItems: any = data.filter((item: any) =>
        (item.emp_name && item.emp_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (item.off_day && (item.off_day).toLowerCase().includes(searchTerm)) ||
        (item.dept_name && (item.dept_name).toLowerCase().includes(searchTerm))
    ).slice(indexOfFirstItem, indexOfLastItem);


    let loadingfall = <h1 className="flex justify-center"><span className=" loading loading-spinner text-info"></span></h1>

    const handleCreateButton = () => {
        console.log("emp");

    }

    return (
        <>
            <div className="flex justify-center items-center ">
                <div className="overflow-x-auto w-full p-2 m-5 shadow-xl rounded-xl ">
                    <ReusableHeader setSearchTerm={setSearchTerm} name="List of Employees" createButtonAction={handleCreateButton} />
                    {loading ? loadingfall : (
                        <table className="table table-zebra ">
                            {/* head */}
                            <thead className=" btn-sm font-bold bg-base-200  text-sm">
                                <tr className="" >
                                    <th>Code</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Gender</th>
                                    <th>Department</th>
                                    <th>Location</th>
                                    <th>Category</th>
                                    <th>Desgination</th>
                                    <th>WeekOff</th>
                                    <th>Action</th>


                                </tr>
                            </thead>

                            {currentItems.map((item: any, index: number) => (

                                <tbody key={index}>

                                    <tr>
                                        <td>{item.emp_id}</td>
                                        <td>{item.emp_name}</td>
                                        <td>{item.status}</td>
                                        <td>{item.gender}</td>
                                        <td>{item.dept_name}</td>
                                        <td>{item.loc_name}</td>
                                        <td>{item.catg_name}</td>
                                        <td>{item.desg_name}</td>
                                        <td>{item.off_day}</td>
                                        <td className="flex justify-center"><Link to={`/empedit/${item.emp_id}`} className="btn btn-outline  btn-xs "><CiEdit size={17} /></Link>
                                            <Link to={`/empview/${item.emp_id}`} className="btn btn-outline ml-2 btn-accent btn-xs "><IoEyeOutline size={17} /></Link></td>
                                    </tr>

                                </tbody>
                            ))}
                        </table>
                    )}


                </div>
            </div >

            {/* pagination */}
            {!loading && < Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />}


        </>
    )
}

export default Employee;

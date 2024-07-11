import { useState } from "react";
import ReusableHeader from "../../../HR/Master/ReusableHeader";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

const ViewReq = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setloading] = useState(true);

    const navigate = useNavigate();
    let loadingfall = <h1 className="flex justify-center"><span className=" loading loading-spinner text-info"></span></h1>
    const handleCreateButton = ()=>{
        navigate("/createveq");
    }
  return (
  <>
     <div className="flex justify-center items-center ">
                <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-6  ">
                    <ReusableHeader setSearchTerm={setSearchTerm} name="Lists of Vehicle Requirement" createButtonAction={handleCreateButton} />
                    {/* {loading ? loadingfall : ( */}
                        <table className="table table-zebra">
                        {/* head */}
                        <thead className=" font-bold  bg-base-200 text-sm">
                            <tr >
                                <th>Traveller Name</th>
                                <th>Entry Date</th>
                                <th>Entry Date</th>
                                <th>Req</th>
                                <th>Veh</th>
                                <th>To Date</th>
                                <th>Depart</th>
                                <th>Time</th>
                                <th>Approved</th>
                                <th>Whatsapp</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* {currentItems.map((item: any, index: number) => ( */}
                            <tbody >

                                <tr className="hover">
                                    <td>1</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td>2</td>
                                    <td><button className="btn btn-xs btn-outline"><CiEdit size={18} /></button></td>

                                </tr>

                            </tbody>
                        {/* // ))} */}
                    </table>
                {/* // )} */}

                </div>
            </div>
  </>
  )
}

export default ViewReq;

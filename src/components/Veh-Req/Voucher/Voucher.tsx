import { useState } from "react";
import ReusableHeader from "../../HR/Master/ReusableHeader";

const Voucher = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setloading] = useState(true);
    let loadingfall = <h1 className="flex justify-center"><span className=" loading loading-spinner text-info"></span></h1>
    const handleCreateButton = () => {

    }
    return (
        <>
            <div className="flex justify-center items-center ">
                <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-6  ">
                    <ReusableHeader setSearchTerm={setSearchTerm} name="Lists of Trip Vouchers" createButtonAction={handleCreateButton} />
                    {loading ? loadingfall : (<table className="table table-zebra">
                        {/* head */}
                        <thead className=" font-bold  bg-base-200 text-sm">
                            <tr >
                                <th>No.</th>
                                <th>Date</th>
                                <th>Driver</th>
                                <th>Veh No</th>
                                <th>Amount</th>
                                <th>Post</th>
                                <th>Paid</th>
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
                            </tr>



                        </tbody>
                        {/* // ))} */}
                    </table>)}

                </div>
            </div>
        </>
    )
}

export default Voucher;

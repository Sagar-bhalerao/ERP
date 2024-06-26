import { useEffect, useState } from "react";
import Paginations from "../../../../Helper/Pagination/Pagination";
import { getUnits } from "../../../../Services/HR/Master/MasterAPI";
import { BsCheck2Square } from "react-icons/bs";
import {handleSelectedUnit} from "../../../../features/HR/Master/Product/productSlice"
import { useDispatch } from "react-redux";

const ModalUnit = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Added loading state
    const [error, setError] = useState(""); // Added error state
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUnit = async () => {
            try {
                const unitData = await getUnits();
               if (unitData.length > 0) {
                setData(unitData);
                
               }
                setData(unitData);
            } catch (error: any) {
                console.log("Error fetching units:", error.message);
                setError(error.message); // Use the error message from the API function
            } finally {
                setLoading(false);
            }
        };
        fetchUnit();
    }, []);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filteredData = data.filter((item: any) =>
        item.unit_name && item.unit_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    if (error) {
        return <div>{error}</div>;
    }
    if (loading) {
        return <div>Loading...</div>;
    }

   const handleSelect = (item:any)=>{
    dispatch(handleSelectedUnit({id:item.unit_id,name:item.unit_name}));
    (document.getElementById("UnitModal") as HTMLDialogElement).close();

   }

    return (
        <dialog id="UnitModal" className="modal">
            <div className="modal-box">
                <button
                    onClick={() => (document.getElementById("UnitModal") as HTMLDialogElement)?.close()}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
                <div className="sticky left-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <h1 className="text-xl font-bold">Select Unit from list...</h1>
                        </div>
                    </div>
                    <div className="flex justify-end mb-4">
                        <label className="input input-bordered input-sm flex items-center w-full sm:w-auto">
                            <input
                                onChange={(e) => setSearchTerm(e.target.value)}
                                type="text"
                                className="grow"
                                placeholder="Search"
                            />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="w-4 h-4 opacity-70"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </label>
                    </div>
                </div>
                <div className="overflow-x-auto w-full mb-3">
                    <table className="table">
                        <thead className="bg-base-300">
                            <tr>
                                <th>ID</th>
                                <th>Unit</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item: any, index: number) => (
                                <tr key={index}>
                                    <td>{item.unit_id}</td>
                                    <td>{item.unit_name}</td>
                                    <td>
                                        <button onClick={()=>handleSelect(item)} className="btn btn-sm btn-info btn-outline">
                                            <BsCheck2Square size={15} /> Select
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Paginations
                    data={filteredData}
                    currentPage={currentPage}
                    itemperPage={itemsPerPage}
                    handlePageChange={handlePageChange}
                />
                <button
                    onClick={() => (document.getElementById("UnitModal") as HTMLDialogElement)?.close()}
                    className="btn float-end p-2 mt-2 btn-sm btn-outline btn-error"
                >
                    Close
                </button>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};

export default ModalUnit;

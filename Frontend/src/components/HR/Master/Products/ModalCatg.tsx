
import { useEffect, useState } from "react";
import { getCategory } from "../../../../Services/HR/Master/MasterAPI";
import Paginations from "../../../../Helper/Pagination/Pagination";
import { BsCheck2Square } from "react-icons/bs";
import { useDispatch, } from "react-redux";
import { handleSelectedCatg } from "../../../../features/HR/Master/Product/productSlice"

const ModalCatg = () => {
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const catgData = await getCategory();
                setData(catgData)

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };
    const itemperPage = 8;
    const indexOfLastItem = currentPage * itemperPage;
    const indexOfFirstItem = indexOfLastItem - itemperPage;

    const currentItems = data.filter((item: any) =>
        (item.catg_name && item.catg_name.toLowerCase().includes(searchTerm.toLowerCase()))

    ).slice(indexOfFirstItem, indexOfLastItem);

    const handleSelect = (item: any) => {
        dispatch(handleSelectedCatg({ id: item.catg_id, name: item.catg_name, }));
        (document.getElementById("CatgModal") as HTMLDialogElement)?.close()
    }
    return (


        <dialog id="CatgModal" className="modal">

            <div className="modal-box ">
                <button onClick={() => (document.getElementById("CatgModal") as HTMLDialogElement)?.close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className=" sticky left-0  ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <h1 className="text-xl font-bold">Select Category</h1>
                        </div>
                        <div className="flex justify-end">

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
                        {/* head */}
                        <thead className="bg-base-300">
                            <tr>
                                <th>ID</th>
                                <th>Category</th>
                                <th>Action</th>

                            </tr>
                        </thead>

                        {currentItems?.map((item: any, index: number) => (
                            <tbody key={index}>
                                <tr >
                                    <td>{item.catg_id}</td>
                                    <td>{item.catg_name}</td>
                                    <td><button onClick={() => handleSelect(item)} className="btn btn-sm btn-info  btn-outline"><BsCheck2Square size={15} />Select</button></td>
                                </tr>

                            </tbody>
                        ))}
                    </table>
                </div>
                <Paginations data={data} currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} />
                <button onClick={() => (document.getElementById("CatgModal") as HTMLDialogElement)?.close()} className="btn float-end p-2 mt-2 btn-sm btn-outline btn-error">Close</button>
            </div>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export default ModalCatg;

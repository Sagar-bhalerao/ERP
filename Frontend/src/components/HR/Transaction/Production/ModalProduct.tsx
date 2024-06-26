import { useEffect, useState } from "react";
import Paginations from "../../../../Helper/Pagination/Pagination";
import { BsCheck2Square } from "react-icons/bs";
import { toast } from "sonner";
import { getProduction } from "../../../../Services/HR/Master/Transaction/TransactionAPI";
import { useDispatch } from "react-redux";
import { getProductData } from "../../../../features/HR/Transaction/newProdSlice"


const ModalProduct = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true); // Added loading state
    
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await getProduction();
                setData(response);
                setLoading(false);


            } catch (error: any) {
                toast.error(`Something went wrong,   ${error.message}`);

            }
        }
        fetchdata();
    }, [])

    const itemperPage = 8;

    const handlePageChange = (pageNumber: any) => {
        setCurrentPage(pageNumber);
    };
    const indexOfLastItem = currentPage * itemperPage;
    const indexOfFirstItem = indexOfLastItem - itemperPage;
    const currentItems = data.filter((item: any) =>
        (item.product_name && item.product_name.toLowerCase().includes(searchTerm.toLowerCase()))
    ).slice(indexOfFirstItem, indexOfLastItem);
    
    if (loading) {
        return <div>Loading...</div>;
    }

    const handleSelect = (item: any) => {
        console.log(item.product_name);
        (document.getElementById("product") as HTMLDialogElement).close();
        dispatch(getProductData({ product_name: item.product_name, product_code: item.product_code }))

    }

    return (
        <dialog id="product" className="modal">
            <div className="modal-box w-auto max-w-5xl">
                <button
                    onClick={() => (document.getElementById("product") as HTMLDialogElement)?.close()}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                    ✕
                </button>
                <div className="sticky left-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <h1 className="text-xl font-bold">Select Product from list......</h1>
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
                                <th>Product Name</th>
                                <th>Product Code</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((item: any, index: number) => (
                                <tr key={index}>
                                    <td>{item.product_name}</td>
                                    <td>{item.product_code}</td>
                                    <td>
                                        <button onClick={() => handleSelect(item)} className="btn btn-sm btn-info btn-outline">
                                            <span className="flex gap-1"><BsCheck2Square size={15} />
                                                Select</span>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Paginations
                    data={data}
                    currentPage={currentPage}
                    itemperPage={itemperPage}
                    handlePageChange={handlePageChange}
                />
                <button
                    onClick={() => (document.getElementById("product") as HTMLDialogElement)?.close()}
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

export default ModalProduct;

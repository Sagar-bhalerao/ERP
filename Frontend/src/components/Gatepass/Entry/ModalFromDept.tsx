import { useEffect, useState } from "react"
import { toast } from "sonner";
import { BsCheck2Square } from "react-icons/bs";
import Paginations from "../../../Helper/Pagination/Pagination";
import { useDispatch } from "react-redux";
import { handleFromDept } from "../../../features/Gatepass/gatepassSlice";
import { getDepatment } from "../../../Services/HR/Master/MasterAPI";

const ModalFromDept = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemperPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDepatment();
        setData(response);
      } catch (error) {
        toast.error("Something Went wrong...!")
      }
    }
    fetchData();
  }, [])

  const indexOfLastItem = currentPage * itemperPage;
  const indexOfFirstItem = indexOfLastItem - itemperPage;

  const currentItems = data.filter((item: any) =>
    (item.dept_name && item.dept_name.toLowerCase().includes(searchTerm.toLowerCase()))
  ).slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  }

  const handleSelect = (item: any) => {
    dispatch(handleFromDept({ id: item.dept_id, name: item.dept_name }));
    (document.getElementById("FDeptModal") as HTMLDialogElement).close();
  }

  return (
    <dialog id="FDeptModal" className="modal">
      hello
      <div className="modal-box">
        <button
          onClick={() => (document.getElementById("FDeptModal") as HTMLDialogElement)?.close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <div className="sticky left-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h1 className="text-xl font-bold">Select Department from list...!</h1>
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
                <th>Employee</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item: any, index: number) => (
                <tr key={index}>
                  <td>{item.dept_id}</td>
                  <td>{item.dept_name}</td>
                  <td>
                    <button className="btn btn-sm btn-info btn-outline" onClick={() => handleSelect(item)}>
                      <BsCheck2Square size={15} /> Select
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />
        <button
          onClick={() => (document.getElementById("FDeptModal") as HTMLDialogElement)?.close()}
          className="btn float-end p-2 mt-2 btn-sm btn-outline btn-error"
        >
          Close
        </button>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

export default ModalFromDept

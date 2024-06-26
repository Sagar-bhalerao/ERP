import { useEffect, useState } from "react"
import ReusableHeader from "../../Master/ReusableHeader"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { getProductionView } from "../../../../Services/HR/Master/Transaction/TransactionAPI"
import Paginations from "../../../../Helper/Pagination/Pagination"
import moment from "moment"

const Production = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProductionView();
        setData(response);
      } catch (error: any) {
        toast.error(`Someting went wrong  ${error.message}`)

      }
    }
    fetchData();
  }, [])
  const handleCreateButton = () => {
    navigate("/newprod");
  }

  const itemperPage = 8;
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemperPage;
  const indexOfFirstItem = indexOfLastItem - itemperPage;
  const currentItems = data.filter((item: any) =>
    (item.full_name && item.full_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.product_name && item.product_name.toLowerCase().includes(searchTerm.toLowerCase()))

  ).slice(indexOfFirstItem, indexOfLastItem);
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="overflow-x-auto w-full items-center  shadow-xl rounded-xl p-2 m-6  ">
          <ReusableHeader setSearchTerm={setSearchTerm} name="List of all production" createButtonAction={handleCreateButton} />
          <table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
              <tr >
                <th>Date</th>
                <th>Employee</th>
                <th>Product</th>
                <th>Quantity</th>

              </tr>
            </thead>

            {currentItems.map((item: any, index: number) => (
              <tbody key={index} >
                <tr className="hover">
                  <td>{moment(item.Date).format("DD/MM/YYYY")}</td>
                  <td>{item.full_name}</td>
                  <td>{item.product_name}</td>
                  <td>{item.product_qty}</td>

                </tr>

              </tbody>
            ))}

          </table>

        </div>
      </div>
      <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />
    </>
  )
}

export default Production

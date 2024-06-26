
import { useState, useEffect } from "react";
import Paginations from "../../../../Helper/Pagination/Pagination";
import { getProducts } from "../../../../Services/HR/Master/MasterAPI";
import ReusableHeader from "../ReusableHeader";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Products = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchCatg = async () => {
      try {
        const response = await getProducts();
        setData(response);
        setloading(false);

      } catch (error: any) {
        toast.error(`Something went wrong,   ${error.message}`);

      }
    }
    fetchCatg();
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
  let loadingfall = <h1 className="flex justify-center"><span className=" loading loading-spinner text-info"></span></h1>
  const handleCreateButton = () => {
    console.log("Products");

    navigate("/newproduct")

  }
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="overflow-x-auto w-full items-center  shadow-xl rounded-xl p-2 m-6  ">
          <ReusableHeader setSearchTerm={setSearchTerm} name="List of all Products" createButtonAction={handleCreateButton} />
          {loading ? loadingfall : (<table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
              <tr >
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Unit Name</th>
                <th>Category Name</th>

              </tr>
            </thead>
            {currentItems.map((item: any, index: number) => (
              <tbody key={index}>

                <tr className="hover">
                  <td>{item.product_id}</td>
                  <td>{item.product_name}</td>
                  <td>{item.unit_name}</td>
                  <td>{item.category_name}</td>

                </tr>

              </tbody>
            ))}
          </table>)}

        </div>
      </div>
      {!loading && <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />}
    </>
  )
}

export default Products;

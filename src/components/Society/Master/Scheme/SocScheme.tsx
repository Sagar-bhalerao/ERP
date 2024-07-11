import { useState, useEffect } from "react";
import { toast } from "sonner";
import ReusableHeader from "../../../HR/Master/ReusableHeader";
import { getAllScheme } from "../../../../Services/Society/Master/MasterApis";
import Paginations from "../../../../Helper/Pagination/Pagination";
import { useNavigate } from "react-router-dom";

const SocScheme = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);
  
  const navigate = useNavigate();
  useEffect(() => {
      const fetchCatg = async () => {
          try {
              const response =  await getAllScheme();                
                  setData(response);
                  setloading(false);                

          } catch (error: any) {
              toast.error(`Something went wrong,   ${error.message}`);
              
              
          }

      }
      fetchCatg();
  }, [])
  // dipatch(StoreCategory({ data }))
  const itemperPage = 8;

  // const currentItems = data.filter((item: any) => item.catg_name.toLowerCase().includes(searchTerm.toLowerCase()))
  const handlePageChange = (pageNumber: any) => {
      setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemperPage;
  const indexOfFirstItem = indexOfLastItem - itemperPage;
  const currentItems = data.filter((item: any) =>
      (item.scheme_name && item.scheme_name.toLowerCase().includes(searchTerm.toLowerCase()))

  ).slice(indexOfFirstItem, indexOfLastItem);

  let loadingfall = <h1 className="flex justify-center"><span className=" loading loading-spinner text-info"></span></h1>

  const handleCreateButton = () => {
   
  navigate("/newscheme");

  }
  return (
    <>
    <div className="flex justify-center items-center ">
    <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-6  ">
        <ReusableHeader setSearchTerm={setSearchTerm} name="List of Scheme" createButtonAction={handleCreateButton} />
        {loading ? loadingfall : (<table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
                <tr >
                    <th>Scheme Code</th>
                    <th>Scheme Name</th>
                    <th>Interrest Acc</th>
                    <th>Loan Acc</th>
                </tr>
            </thead>
            {currentItems.map((item: any, index: number) => (
                <tbody key={index}>

                    <tr className="hover">
                        <td>{item.scheme_code}</td>
                        <td>{item.scheme_name}</td>
                        <td>{item.interest}</td>
                        <td>{item.loan_ac}</td>

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

export default SocScheme

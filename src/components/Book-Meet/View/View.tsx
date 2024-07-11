import { useState, useEffect } from "react"
import { toast } from "sonner"
import Paginations from "../../../Helper/Pagination/Pagination"
import { getCategory } from "../../../Services/HR/Master/MasterAPI"
import ReusableHeader from "../../HR/Master/ReusableHeader"
import { useNavigate } from "react-router-dom"
import { GetAllBooking } from "../../../Services/Book-met/BookMet"
import moment from "moment"

const View = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();
  // const dipatch = useDispatch();
  useEffect(() => {
      const fetchdata = async () => {
          try {
              const response =  await GetAllBooking();                
                  setData(response);
                  setloading(false);                

          } catch (error: any) {
              toast.error(`Something went wrong,   ${error.message}`);
                            
          }

      }
      fetchdata();
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
      (item.location && item.location.toLowerCase().includes(searchTerm.toLowerCase())) ||
       (item.meet_hall && item.meet_hall.toLowerCase().includes(searchTerm.toLowerCase()))

  ).slice(indexOfFirstItem, indexOfLastItem);

  let loadingfall = <h1 className="flex justify-center"><span className=" loading loading-spinner text-info"></span></h1>

  const handleCreateButton = () => {
    navigate("/create");

  }
  return (
    <>
            <div className="flex justify-center items-center ">
                <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-6  ">
                    <ReusableHeader setSearchTerm={setSearchTerm} name="Meeting Hall Booking Details for Today" createButtonAction={handleCreateButton} />
                    {loading ? loadingfall : (<table className="table table-zebra">
                        {/* head */}
                        <thead className=" font-bold  bg-base-200 text-sm">
                            <tr >
                                <th>Location</th>
                                <th>Date</th>
                                <th>Hall</th>
                                <th>Time</th>
                                <th>Details</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        {currentItems.map((item: any, index: number) => (
                            <tbody key={index}>
                                <tr className="hover">
                                    <td>{item.location}</td>
                                    <td>{moment(item.meet_date).format("DD/MM/YYYY")}</td>
                                    <td>{item.meet_hall}</td>
                                    <td>{item.meet_time}</td>
                                    <td>{item.meet_detail}</td>
                                    <td><button>E</button></td>

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

export default View

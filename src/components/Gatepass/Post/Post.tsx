import { useEffect, useState } from "react"
import { toast } from "sonner"
import { postProgress } from "../../../Services/Gatepass/GatepassApis"
import ReusableHeader from "../../HR/Master/ReusableHeader";
import { Link, useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import Paginations from "../../../Helper/Pagination/Pagination";
import moment from "moment";

const Post = () => {

  const [data,setData] = useState([]);
  const [searchTerm,setSearchTerm] = useState('')
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    const fetchdata = async()=>{
      try {
        const response = await postProgress();
        setData(response);
        setloading(false);           
        if (response.status === 400) {
          toast.error(response.message);
          
        }
        
      } catch (error:any) {
        toast.error(error)
      }
    }
    fetchdata();
  },[])

  const itemperPage = 8;

  // const currentItems = data.filter((item: any) => item.catg_name.toLowerCase().includes(searchTerm.toLowerCase()))
  const handlePageChange = (pageNumber: any) => {
      setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * itemperPage;
  const indexOfFirstItem = indexOfLastItem - itemperPage;
  const currentItems = data.filter((item: any) =>
      (item.emp_name && item.emp_name.toLowerCase().includes(searchTerm.toLowerCase()))

  ).slice(indexOfFirstItem, indexOfLastItem);

  const handleCreateButton = ()=>{
    navigate("/gpassentry")
  }
  return (
    <>
      <div className="flex justify-center items-center ">

        <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-10  ">

          <ReusableHeader setSearchTerm={setSearchTerm} name="List of all Gatepass" createButtonAction={handleCreateButton} />

          <table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
              <tr >
                <th>Emp Name</th>
                <th>GP Date</th>
                <th>GP No</th>
                <th>GP Type</th>
                <th>From Loc</th>
                <th>To Loc</th>
                <th>Action</th>
              </tr>
            </thead>
            {currentItems.map((item:any,index:number)=>(
            <tbody key={index}>
              <tr className="hover">
                <td>{item.emp_name}</td>
                <td>{moment(item.gp_date).format("DD/MM/YYYY")}</td>
                <td>{item.gp_no}</td>
                <td>{item.gp_type}</td>
                <td>{item.from_loc_name}</td>
                <td>{item.to_loc_name}</td>
                <td><Link to={`/postview/${item.gp_no}`} className="btn btn-sm btn-outline btn-primary"><CiEdit size={18} /></Link> </td>
              </tr>

            </tbody>
            ))}

          </table>

        </div>

      </div >
      {!loading && <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />}

    </>
  )
}

export default Post
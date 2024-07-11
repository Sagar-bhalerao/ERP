import { useEffect, useState } from "react";
import ReusabelHeaders from "../../../HR/Master/ReusableHeader";
import Paginations from "../../../../Helper/Pagination/Pagination";
import { getSocMembers } from "../../../../Services/Society/Master/MasterApis";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import EditMember from "./EditMember";

const SocMember = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemperPage, setItemPerPage] = useState(5);
  const [editMember, setEditMember] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSocMembers();
        setData(response);
      } catch (error) {
        console.log("Error to fetching data from database", error);

      }
    }
    fetchData();
  }, [])

  const indexOfLastItem = currentPage * itemperPage;
  const indexOfFirstItem = indexOfLastItem - itemperPage;

  const currentItems = data.filter((item: any) =>
    (item.mem_name && item.mem_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.birth_date && item.birth_date.toString().includes(searchTerm.toString())) ||
    (item.join_date && item.join_date.toString().includes(searchTerm.toString()))


  ).slice(indexOfFirstItem, indexOfLastItem)

  const handleCreateButton = () => {
    navigate("/society/newmember");
  }

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  }
  const handleEditMember = (item: any) => {
    console.log(item);
    setEditMember(item);
    navigate(`/society/editmember/${item.mem_code}`);
  }
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="overflow-x-auto w-full items-center  shadow-xl rounded-xl p-2 m-6  ">
          <ReusabelHeaders setSearchTerm={setSearchTerm} name="List of all Members" createButtonAction={handleCreateButton}  />
          <table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
              <tr >
                <th>Mem Code</th>
                <th>Emp Name</th>
                <th>Date Of Birth</th>
                <th>Date Of Joining</th>
                <th>Status</th>
                <th>Action</th>

              </tr>
            </thead>
            {currentItems.map((item: any, index: number) => (
              <tbody key={index}>

                <tr className="hover">
                  <td>{item.mem_code}</td>
                  <td>{item.mem_name}</td>
                  <td>{moment(item.birth_date).format("DD/MM/YYYY")}</td>
                  <td>{moment(item.join_date).format("DD/MM/YYYY")}</td>
                  <td>{item.status}</td>
                  <td><button className="btn btn-sm btn-neutral btn-outline" onClick={() => handleEditMember(item)}><FiEdit /></button></td>
                </tr>

              </tbody>
            ))}
          </table>

        </div>
      </div>
      <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />
      {/* <EditMember MemData={editMember} /> */}
    </>
  )
}

export default SocMember

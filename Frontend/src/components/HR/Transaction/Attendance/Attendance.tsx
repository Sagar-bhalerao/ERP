import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReusableHeader from "../../Master/ReusableHeader";

const Attendance = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate();

  const handleCreateButton = ()=>{
    navigate("/attendnew")
  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-10  ">
          <ReusableHeader setSearchTerm={setSearchTerm} name="Today's Attendnace" createButtonAction={handleCreateButton} />
          <span className="font-semibold text-lg">List of Driver</span>
          <table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
              <tr >
                <th>Date</th>
                <th>Employee</th>
                <th>Flag</th>

              </tr>
            </thead>

            <tbody>

              <tr className="hover">
                <td>1</td>
                <td>2</td>
                <td>3</td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>
      {/* {!loading && <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />} */}
    </>
  )
}

export default Attendance

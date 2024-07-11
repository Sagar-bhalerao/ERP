import { useEffect, useState } from "react"
import Paginations from "../../../../Helper/Pagination/Pagination"
import ReusableHeader from "../../../HR/Master/ReusableHeader"
import { toast } from "sonner"

import { getGroup } from "../../../../Services/Society/Master/MasterApis"
import { useNavigate } from "react-router-dom"

const AcGroup = () => {
  const [data, setData] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setloading] = useState(true);

const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
        try {
            const response =  await getGroup();                
                setData(response);
                setloading(false);                

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
      (item.group_name && item.group_name.toLowerCase().includes(searchTerm.toLowerCase()))

  ).slice(indexOfFirstItem, indexOfLastItem);

  let loadingfall = <h1 className="flex justify-center"><span className=" loading loading-spinner text-info"></span></h1>

  const handleCreateButton = () => {
     navigate('/newgroup')

  }
  return (
    <>
   <div className="flex justify-center items-center ">
                <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-6  ">
                    <ReusableHeader setSearchTerm={setSearchTerm} name="List of Group" createButtonAction={handleCreateButton} />
                    {loading ? loadingfall : (<table className="table table-zebra">
                        {/* head */}
                        <thead className=" font-bold  bg-base-200 text-sm">
                            <tr >
                                <th>Group code</th>
                                <th>Group Name</th>
                                <th>Main Group</th>
                            </tr>
                        </thead>
                        {currentItems.map((item: any, index: number) => (
                            <tbody key={index} >

                                <tr className="hover">
                                    <td>{item.group_code}</td>
                                    <td>{item.group_name}</td>
                                    <td>{item.main_group}</td>

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

export default AcGroup

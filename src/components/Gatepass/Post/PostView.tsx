
import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { getEmp, postGatePass } from "../../../Services/Gatepass/GatepassApis";
import {formatDate} from "../../../Helper/Helper"

const PostView = () => {
    const [data,setData] = useState([])
    const id = useParams();
    console.log(id.gp_no);  
    useEffect(()=>{
         const fetchdata = async()=>{
            try {
                const response = await getEmp(id.gp_no);
                setData(response)
            } catch (error:any) {
                toast.error(error.message)
            }
         }   
         fetchdata();
    },[])
    
 const handleSubmit = (e:FormEvent)=>{
    e.preventDefault();
    let body = {
        post:"Y",
        gp_no:id.gp_no
    }
    console.log(body);
    
    try {
        postGatePass(body);
    } catch (error:any) {
        toast.error(error.response.data.test)
        
    }
 }
  return (
    <div className="flex justify-center">
    <div className="w-full max-w-4xl shadow-xl rounded-xl p-4 m-4">
      <h1 className="text-lg font-semibold">Create Gatepass...!</h1>
      {data.map((item:any,index:number)=>(
      <form key={index} onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
          <label htmlFor="date" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
            Date <span className="text-red-600">*</span>
          </label>
          <input defaultValue={formatDate(item.gp_date)} type="date" name="date" className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs"
           />

          <label htmlFor="entryNo" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
            Entry No
          </label>
          <input defaultValue={item.gp_no} type="text" name="entryNo" className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs"
          />

          <label htmlFor="employee" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
            Emp Name <span className="text-red-600">*</span>
          </label>
          <div className="col-span-3 md:col-span-1 flex w-full join">
            <input defaultValue={item.emp_name}  name="employee" className="input input-sm input-bordered flex-grow join-item"
              readOnly />
          
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label htmlFor="type" className="col-span-1 flex justify-center items-center">
            Type <span className="text-red-600">*</span>
          </label>

          <div className="col-span-1 flex items-center justify-center md:justify-start">
            <input defaultValue={item.gp_type}  checked={item.gp_type === "O"}   name="official" type="checkbox" className="checkbox checkbox-info"  /> <span className="ml-2">Official</span>
          </div>

          <div className="col-span-1 flex items-center justify-center md:justify-start">
            <input defaultValue={item.gp_type} checked={item.gp_type ==="P"} name="private" type="checkbox" className="checkbox checkbox-info" /> <span className="ml-2">Private</span>
          </div>
        </div>

      

      {item.gp_type === "O" && (  <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="fromLoc" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                From Location<span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input defaultValue={item.from_loc_name}  name="fromLoc" className="input input-sm input-bordered flex-grow join-item" readOnly />
               
              </div>

              <label htmlFor="toLoc" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                To Location <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input defaultValue={item.to_loc_name} name="toLoc" className="input input-sm input-bordered flex-grow join-item" readOnly />
               
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="fromDept" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                From Dept <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input defaultValue={item.from_dept_name}  name="fromDept" className="input input-sm input-bordered flex-grow join-item" readOnly />
               
              </div>

              <label htmlFor="toDept" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                To Dept <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input defaultValue={item.to_dept_name} name="toDept" className="input input-sm input-bordered flex-grow join-item" readOnly />
                
              </div>
            </div>
          </>)}
        
       

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
          <label htmlFor="reason" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
            Reason <span className="text-red-600">*</span>
          </label>
          <div className="col-span-3 md:col-span-3">
            <input defaultValue={item.reason} name="reason" type="text" className="input input-sm input-bordered w-full"  />
          </div>
        </div>

        <div className="flex justify-center items-center gap-4">
          <button type="submit" className="btn btn-sm btn-outline btn-success">Post</button>
          <button className="btn btn-sm btn-outline btn-error">Reject</button>
        </div>
      </form>
      ))}
    </div>
  </div>
  )
}

export default PostView;

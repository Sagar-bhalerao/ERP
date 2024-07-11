import { IoReorderThreeOutline } from "react-icons/io5";
import ModalGroup from "./ModalGroup";
import { useDispatch, useSelector } from "react-redux";
import { FormEvent, useState } from "react";
import { handleSelectGroup } from "../../../../features/Society/SocietySlice";
import { toast } from "sonner";
import { addGroup } from "../../../../Services/Society/Master/MasterApis";
import { Link, useNavigate } from "react-router-dom";
const CreateNewGroup = () => {
    const [groupName,setGroupName] = useState("")
    const {group_code,group_name} = useSelector((state:any)=>state.Society);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = async(e:FormEvent)=>{
        e.preventDefault();
    // if (!groupName || group_name) {
    //     toast.error("Please enter group name");
    //     return;
        
    // }
        navigate("/society/groupview");
        let body = {
            group_name:groupName,           
           main_group:group_code
        }
        console.log(body);
        try {
          await addGroup(body);
        } catch (error:any) {
            toast.error(error);
        }
        dispatch(handleSelectGroup({id:0,name:""}))
    }
    return (
        <>
            <div className="flex justify-center items-center mt-5">
                <div className="shadow-xl rounded-xl p-4  w-auto">
                    <form onSubmit={handleSubmit} className="form-control ">
                        <h1 className="flex justify-center mb-5"><span className="font-bold">Group Master</span></h1>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Group Code*</span>
                                </label>
                            </div>

                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input readOnly name="search" type="search" spellCheck="true" aria-autocomplete="list" aria-controls="typeahead-0.dm6sqswaxfi-listbox" aria-labelledby="typeahead-0.dm6sqswaxfi-label" id="typeahead-0.dm6sqswaxfi" className="svlte-wqugyy input  input-bordered input-md" />
                            </div>

                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Group Name</span>
                                </label>
                            </div>

                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input onChange={(e)=>setGroupName(e.target.value)} name="search" type="text" placeholder="Enter Group Name..." spellCheck="true" aria-autocomplete="list" aria-controls="typeahead-0.dm6sqswaxfi-listbox" aria-labelledby="typeahead-0.dm6sqswaxfi-label" id="typeahead-0.dm6sqswaxfi" className="svlte-wqugyy input w-full input-bordered input-md" />
                            </div>

                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Main Group*</span>
                                </label>
                            </div>

                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input value={group_name} type="text" placeholder="Select Main Group ..." className=" input w-[200px] join-item input-bordered input-md" />
                                    <button type="button" onClick={() => (document.getElementById("groupModal") as HTMLDialogElement).showModal()} className="btn join-item btn-outline btn-info"><IoReorderThreeOutline size={20} /></button>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center mt-9">
                            <button className="btn btn-sm btn-success btn-outline mr-3">Submit</button>
                            <Link to="/society/groupview" type="button" className="btn btn-sm btn-error btn-outline">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
            <ModalGroup/>

        </>
    )
}

export default CreateNewGroup;

import { FormEvent, useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ModalGroup from "../AC Group/ModalGroup";
import { addAccount } from "../../../../Services/Society/Master/MasterApis";
import { handleSelectGroup } from "../../../../features/Society/SocietySlice";
import { toast } from "sonner";

const CreateNewAccount = () => {
    const [accountName,setAccountName] = useState('');
    const {group_name,group_code} = useSelector((state:any)=>state.Society);
     const dispatch = useDispatch();
     const navigate = useNavigate();
    const handleSubmit = async(e:FormEvent)=>{
        e.preventDefault();
        if (!accountName || group_name) {
            toast.error("Please enter Account name");
            return;
            
        }
            navigate("/society/accview");
        let body = {
            account_name:accountName,
            group_code:group_code,

        }
        console.log(body);
        
        try {

             await addAccount(body);
        } catch (error) {
            console.log(error);
            
        }
        dispatch(handleSelectGroup({id:0,name:""}))
    }
  return (
    <>
    <div className="flex justify-center items-center mt-5">
    <div className="shadow-xl rounded-xl p-4  w-auto">
        <form onSubmit={handleSubmit} className="form-control ">
            <h1 className="flex justify-center mb-5"><span className="font-bold">Account Master</span></h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                <div className="col-span-12 lg:col-span-2">
                    <label className="label">
                        <span className="label-text font-bold">Acc Code*</span>
                    </label>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <input readOnly name="search" type="search" spellCheck="true" aria-autocomplete="list" aria-controls="typeahead-0.dm6sqswaxfi-listbox" aria-labelledby="typeahead-0.dm6sqswaxfi-label" id="typeahead-0.dm6sqswaxfi" className="svlte-wqugyy input  input-bordered input-md" />
                </div>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                <div className="col-span-12 lg:col-span-2">
                    <label className="label">
                        <span className="label-text font-bold">Acc Name</span>
                    </label>
                </div>

                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                    <input onChange={(e)=>setAccountName(e.target.value)} name="search" type="text" placeholder="Enter Account Name..." spellCheck="true" aria-autocomplete="list" aria-controls="typeahead-0.dm6sqswaxfi-listbox" aria-labelledby="typeahead-0.dm6sqswaxfi-label" id="typeahead-0.dm6sqswaxfi" className="svlte-wqugyy input w-full input-bordered input-md" />
                </div>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                <div className="col-span-12 lg:col-span-2">
                    <label className="label">
                        <span className="label-text font-bold"> Group*</span>
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

export default CreateNewAccount;

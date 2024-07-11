import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import MemModal from "./MemModal";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { handleNewMem } from "../../../../Services/Society/Master/MasterApis";


const Newmember = () => {
  const navigate = useNavigate();
  const [dob, setDob] = useState("");
  const [doj, setDoj] = useState("");
  const [status, setStatus] = useState("");
  const [statusDate, setStatusDate] = useState("");
  const [srNo, setSrNo] = useState(1);
  const [nomName, setNomName] = useState("");
  const [nomRelate, setNomRelate] = useState("");
  const [nomDob, setNomDob] = useState("");
  const [nomShare, setNomShare] = useState("");
  const [srBankNo, setBankSrNo] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankIfsc, setBankIfsc] = useState("");
  const [bankAcc, setBankAcc] = useState("");
  const [bankBranch, setBankBranch] = useState("");


  const { emp_id, emp_name } = useSelector((state: any) => state.Society);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      emp_id: emp_id,
      emp_name: emp_name,
      birth_date: dob,
      join_date: doj,
      status: status,
      status_date: statusDate,
      sr_no: srNo,
      nom_name: nomName,
      nom_relat: nomRelate,
      nom_dob: nomDob,
      nom_share: nomShare,
      sr_no_bank: srBankNo,
      bank_name: bankName,
      bank_ifsc: bankIfsc,
      bank_branch: bankBranch,
      bank_acc: bankAcc
    }
    console.log(body);
    try {
      const response = await handleNewMem(body);
      navigate("/society/memview");

    } catch (error) {
      toast.error("Something Went Wrong...!")
    }

  }
  return (
    <>
      <div className="flex justify-center items-center mt-6 lg:m-5">
        <div className="shadow-xl rounded-xl p-4  w-full max-w-7xl">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
              <div className="col-span-12 lg:col-span-2">
                <label className="label join">
                  Member Name
                  <span className="text-error join-item font-bold">*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div className="join">
                  <input readOnly name="unit" className="input input-bordered input-sm join-item" value={emp_name} />
                  <button onClick={() => (document.getElementById("EmpModal") as HTMLDialogElement).showModal()} type="button" className="btn join-item btn-sm border-cyan-400 "><span className="text-cyan-400">☰</span></button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
              <div className="col-span-12 lg:col-span-2">
                <label className="label join">
                  Date Of Birth
                  <span className="text-error font-bold join-item">*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="date" name="unit" className="input input-bordered  input-sm join-item" onChange={(e) => setDob(e.target.value)} />
              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label join">
                  Date Of Join
                  <span className="text-error font-bold join-item">*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="date" name="catg" className="input input-bordered  input-sm join-item" onChange={(e) => setDoj(e.target.value)} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
              <div className="col-span-12 lg:col-span-2">
                <label className="label join">
                  Status
                  <span className="text-error join-item font-bold"> *</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <div>
                  <select className="select select-sm select-bordered w-full max-w-xs" onChange={(e) => setStatus(e.target.value)}>
                    <option disabled selected>Select</option>
                    <option value='A'>Active</option>
                    <option value='I'>Inactive</option>
                    <option value='R'>Resigned</option>
                    <option value='D'>Death</option>
                  </select>
                </div>
              </div><div className="col-span-12 lg:col-span-2">
                <label className="label join">
                  Status Date
                  <span className="text-error join-item font-bold"> *</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="date" name="catg" className="input input-bordered  input-sm join-item"
                  onChange={(e) => setStatusDate(e.target.value)} />
              </div>
            </div>

            <div className="overflow-x-auto  items-center  p-2 border border-gray-300 mb-2">
              <span className="font-bold  text-base sticky left-0">Nominee Details...!</span>
              <table className="table ">
                {/* head */}
                <thead className=" font-bold bg-base-200 text-sm">
                  <tr >
                    <th>Sr No.</th>
                    <th>Nominee Name</th>
                    <th>Relation</th>
                    <th>DOB</th>
                    <th>Share</th>
                  </tr>
                </thead>

                <tbody >

                  <tr className="" >
                    <td><input type="text" className="input input-sm input-bordered w-12" defaultValue={1} readOnly /></td>
                    <td><input type="text" className="input input-sm input-bordered" onChange={(e) => setNomName(e.target.value)} /></td>
                    <td><input type="text" className=" input input-sm input-bordered w-28" onChange={(e) => setNomRelate(e.target.value)} /></td>
                    <td><input type="date" className="input input-sm input-bordered w-auto" onChange={(e) => setNomDob(e.target.value)} /></td>
                    <td><input type="number" className="input input-sm input-bordered w-20" onChange={(e) => setNomShare(e.target.value)} /></td>
                  </tr>

                </tbody>

              </table>
            </div>
            <div className="overflow-x-auto  items-center p-2 border border-gray-300">
              <span className="font-bold text-base sticky left-0">Bank Details...!</span>

              <table className="table table-zebra">
                {/* head */}
                <thead className=" font-bold  bg-base-200 text-sm">
                  <tr >
                    <th>Sr No.</th>
                    <th>Bank Name</th>
                    <th>IFSC Code</th>
                    <th>Branch Name</th>
                    <th>A/C Number</th>
                  </tr>
                </thead>

                <tbody >

                  <tr className="hover">
                    <td><input type="text" className="input input-sm input-bordered w-12" defaultValue='1'
                      onChange={(e) => setBankSrNo(e.target.value)} readOnly /></td>
                    <td><input type="text" className="input input-sm input-bordered " onChange={(e) => setBankName(e.target.value)} /></td>
                    <td><input type="text" className="input input-sm input-bordered w-28" onChange={(e) => setBankIfsc(e.target.value)} /></td>
                    <td><input type="text" className="input input-sm input-bordered w-28" onChange={(e) => setBankBranch(e.target.value)} /></td>
                    <td><input type="text" className="input input-sm input-bordered " onChange={(e) => setBankAcc(e.target.value)} /></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center p-2">
              <button type="submit" className="btn btn-sm  btn-outline btn-success mr-3">Submit</button>
              <Link to="/society/memview" className="btn btn-outline btn-error btn-sm">Cancel</Link>
            </div>
          </form>

        </div >
      </div >
      <MemModal />
    </>
  )
}
export default Newmember;

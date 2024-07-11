import { ChangeEvent, useState } from "react";
import ModalEmp from "./ModalEmp";
import { useDispatch, useSelector } from "react-redux";
import ModalLoc from "./ModalLoc";
import ModalToLoc from "./ModalToLoc";
import ModalFromDept from "./ModalFromDept";
import ModalToDept from "./ModalToDept";
import { toast } from "sonner";
import { getGpass, newGpEntry } from "../../../Services/Gatepass/GatepassApis";
import { handleSelectEmp ,incrementDependencyTrigger} from "../../../features/Gatepass/gatepassSlice";
import { useNavigate } from "react-router-dom";

const Entry = () => {
  const [isOfficial, setIsOfficial] = useState<boolean>(false);
  const { emp_id, emp_name, from_loc_id, from_loc_name, to_loc_id, to_loc_name, from_dept_name, to_dept_name, from_dept_id, to_dept_id } = useSelector((state: any) => state.Gatepass);
  const dispatch = useDispatch();
  const cureentDate = new Date();
  const [Inputs, setInputs] = useState({
    date: cureentDate.toISOString().split("Y")[0],
    entryNo: "",
    employee: "",
    official: false,
    private: false,
    fromLoc: "",
    toLoc: "",
    fromDept: "",
    toDept: "",
    reason: ""
  });
  const navigate = useNavigate();
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setInputs((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (name === 'official') {
      setIsOfficial(checked);
    }
  }
  
  const handleSubmit = async (e: any) => {
    navigate("/")
    e.preventDefault();
    const body = {
      emp_id: emp_id,
      emp_name: emp_name,
      gp_date: Inputs.date,
      gp_type: isOfficial ? 'O' : 'P',
      from_dept_id: from_dept_id,
      from_dept_name: from_dept_name,
      to_dept_id: to_dept_id,
      to_dept_name: to_dept_name,
      from_loc_name: from_loc_name,
      from_loc_id: from_loc_id,
      to_loc_name: to_loc_name,
      to_loc_id: to_loc_id,
      reason: Inputs.reason
    }
    console.log(body);
    try {
      const response = await newGpEntry(body);
      getGpass();
      dispatch(incrementDependencyTrigger());
      dispatch(handleSelectEmp({name:"",id:0}));
      setInputs({
        date: cureentDate.toISOString().split("Y")[0],
        entryNo: "",
        employee: "",
        official: false,
        private: false,
        fromLoc: "",
        toLoc: "",
        fromDept: "",
        toDept: "",
        reason: ""
      })
      console.log(response);
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.message}`);
    }

  }

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl shadow-xl rounded-xl p-4 m-4">
          <h1 className="text-lg font-semibold">Create Gatepass...!</h1>
          <form >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="date" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Date <span className="text-red-600">*</span>
              </label>
              <input type="date" name="date" className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs"
                onChange={handleInput} value={cureentDate.toISOString().split("T")[0]} />

              <label htmlFor="entryNo" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Entry No
              </label>
              <input type="text" name="entryNo" className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs"
                onChange={handleInput} value={Inputs.entryNo} readOnly />

              <label htmlFor="employee" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Emp Name <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input value={emp_name} name="employee" className="input input-sm input-bordered flex-grow join-item"
                  readOnly />
                <button type="button" className="btn btn-sm border-cyan-400 join-item "
                  onClick={() => (document.getElementById("EmpModal") as HTMLDialogElement)?.showModal()}>
                  <span className="text-cyan-400">☰</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <label htmlFor="type" className="col-span-1 flex justify-center items-center">
                Type <span className="text-red-600">*</span>
              </label>

              <div className="col-span-1 flex items-center justify-center md:justify-start">
                <input name="official" type="checkbox" className="checkbox checkbox-info" onChange={handleInput} checked={Inputs.official} /> <span className="ml-2">Official</span>
              </div>

              <div className="col-span-1 flex items-center justify-center md:justify-start">
                <input name="private" type="checkbox" className="checkbox checkbox-info" onChange={handleInput} checked={Inputs.private} /> <span className="ml-2">Private</span>
              </div>
            </div>

            {isOfficial && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
                  <label htmlFor="fromLoc" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                    From Location<span className="text-red-600">*</span>
                  </label>
                  <div className="col-span-3 md:col-span-1 flex w-full join">
                    <input value={from_loc_name} name="fromLoc" className="input input-sm input-bordered flex-grow join-item" readOnly />
                    <button type="button" className="btn btn-sm border-cyan-400 join-item"
                      onClick={() => (document.getElementById("FLocModal") as HTMLDialogElement)?.showModal()}>
                      <span className="text-cyan-400">☰</span>
                    </button>
                  </div>

                  <label htmlFor="toLoc" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                    To Location <span className="text-red-600">*</span>
                  </label>
                  <div className="col-span-3 md:col-span-1 flex w-full join">
                    <input value={to_loc_name} name="toLoc" className="input input-sm input-bordered flex-grow join-item" readOnly />
                    <button type="button" className="btn btn-sm border-cyan-400 join-item"
                      onClick={() => (document.getElementById("TLocModal") as HTMLDialogElement)?.showModal()}>
                      <span className="text-cyan-400">☰</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
                  <label htmlFor="fromDept" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                    From Dept <span className="text-red-600">*</span>
                  </label>
                  <div className="col-span-3 md:col-span-1 flex w-full join">
                    <input value={from_dept_name} name="fromDept" className="input input-sm input-bordered flex-grow join-item" readOnly />
                    <button type="button" className="btn btn-sm border-cyan-400 join-item"
                      onClick={() => (document.getElementById("FDeptModal") as HTMLDialogElement)?.showModal()}>
                      <span className="text-cyan-400">☰</span>
                    </button>
                  </div>

                  <label htmlFor="toDept" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                    To Dept <span className="text-red-600">*</span>
                  </label>
                  <div className="col-span-3 md:col-span-1 flex w-full join">
                    <input value={to_dept_name} name="toDept" className="input input-sm input-bordered flex-grow join-item" readOnly />
                    <button type="button" className="btn btn-sm border-cyan-400 join-item"
                      onClick={() => (document.getElementById("ToDeptModal") as HTMLDialogElement)?.showModal()}>
                      <span className="text-cyan-400">☰</span>
                    </button>
                  </div>
                </div>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="reason" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Reason <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-3">
                <input name="reason" type="text" className="input input-sm input-bordered w-full" onChange={handleInput} value={Inputs.reason} />
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <button className="btn btn-sm btn-outline btn-success" onClick={handleSubmit}>Submit</button>
              <button type="button" className="btn btn-sm btn-outline">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <ModalEmp />
      <ModalLoc />
      <ModalToLoc />
      <ModalFromDept />
      <ModalToDept />
    </>
  );
}

export default Entry;

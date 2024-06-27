import { useState } from "react";
import { Link } from "react-router-dom";
import { RiDeleteBin6Line } from "react-icons/ri";
import ModalEmp from "./ModalEmp";
import { useDispatch, useSelector } from "react-redux";

interface Row {
  srNo: number;
  employee: string;
  attendFlag:string;
}

const Newattend = () => {
  const [isTAble, SetIsTable] = useState<Boolean>(false);
  const [rows, setRows] = useState<Row[]>([{ srNo: 1, employee: '',attendFlag:"" }]);
  const [rowIndex, setrowIndex] = useState(0);

  const handleContinueButton = () => {
    SetIsTable(true);
  }
  const handleAddEntry = () => {
    const newEntry = {
      srNo: rows.length + 1,
      employee: '',
      attendFlag: ''
    }
    setRows([...rows, newEntry]);
  };
  const handleDeleteEntry = () => {
    // setRows((prev: any) => {
    //   if (prev.length > 1) {
    //     const updateEntries = [...prev];
    //     updateEntries.pop();
    //     return updateEntries;

    //   }
    //   return prev;

    // })

    let test = setRows(rows.filter((row, index) => index !== rows.length - 2));
    console.log(typeof test);
    

  }
  const handleBTNSelect = (index: number) => {
    setrowIndex(index);
    (document.getElementById("empModal") as HTMLDialogElement)?.showModal();
  }
  const handleSelect = (item: any) => {
    if (rowIndex !== null) {
      const updatedEntries = rows.map((entry, index) => {
        if (index === rowIndex) {
          return {
            ...entry,
            employee: item.emp_name,
          };
        }
        return entry;
      });
      setRows(updatedEntries);
    }
    
  }
  
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="overflow-x-auto items-center w-full lg:w-[80rem] shadow-xl rounded-xl p-4 m-2  ">
          <span className="font-semibold text-2xl">Attendance Entry...!</span>

          <form>
            <div className="grid  grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4 ">
              <label htmlFor="date" className="col-span-1 flex items-center justify-center md:justify-end mr-4 font-semibold">
                Date <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-3">
                <input type="date" className="input input-sm flex items-center  sm:w-auto input-bordered " />
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button type="button" className="btn btn-sm btn-outline btn-success" onClick={handleContinueButton}> Continue...</button>
              <Link to='/attendview' className="btn btn-sm btn-outline btn-default">Cancel</Link>
            </div>
            {isTAble && (<div className="flex justify-center items-center ">
              <div className="overflow-x-auto w-full lg:w-[60rem] items-center rounded-xl p-4   ">
                <span className="font-semibold text-xl">Details...!</span>
                <table className="table table-zebra mt-2">
                  {/* head */}
                  <thead className=" font-bold  bg-base-200 text-sm">
                    <tr >
                      <th>Sr No.</th>
                      <th>Employee</th>
                      <th>Attend Flag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((item, index) => (
                      <tr className="hover" key={index}>
                        <td>{index + 1} </td>
                        <td><div className="join">
                          <input value={item.employee} className="input input-sm input-bordered flex-grow join-item" readOnly />
                          <button type="button" onClick={() => handleBTNSelect(index)} className="btn btn-sm border-cyan-400 join-item">
                            <span className="text-cyan-400">☰</span>
                          </button>
                        </div></td>
                        <td><div>
                          <select className="select select-sm select-bordered max-w-xs">
                            <option selected>Select</option>
                            <option value="P" className="text-success">Present</option>
                            <option value="A" className="text-error">Absent</option>
                            <option value="O" className="text-info">OutStation</option>
                            <option value="H" className="text-warning">Half Day</option>
                          </select>
                        </div></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 sticky left-0 flex">
                  <button type="button" className="btn btn-sm mr-3 btn-outline btn-success" onClick={handleAddEntry}>Add Entry</button>
                  <button type="button" className="btn btn-sm btn-outline btn-error" onClick={handleDeleteEntry}><RiDeleteBin6Line size={15} /></button>
                </div>
              </div>

            </div>)}

            {isTAble && (<div className="flex justify-center gap-4 m-2">
              <button type="button" className="btn btn-sm btn-outline btn-success" >Submit</button>
              <Link to='/attendview' className="btn btn-sm btn-outline btn-default">Cancel</Link>
            </div>)}
          </form>

        </div>
      </div >
      <ModalEmp  handleSelect={handleSelect} />
    </>
  )
}

export default Newattend;

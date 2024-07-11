import { FormEvent, useState } from "react";
import ModalEmp from "./ModalEmp";
import { toast } from "sonner"; // Assuming this is your toast library
import { getpassReport } from "../../../../Services/Gatepass/GatepassApis";
import moment from "moment";
import { BsDownload } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { handleSelectEmp } from "../../../../features/Gatepass/gatepassSlice";
import axios from "axios";


const GatepassReport = () => {
  const [data, setData] = useState<any[]>([]);
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [Inputs, setInputs] = useState({
    start_date: "",
    end_date: "",
    emp_id: "",
    official: false,
    private: false,
    without: false,
    All: false,
  });
  const { emp_id, emp_name } = useSelector((state: any) => state.Gatepass);
  const dispatch = useDispatch();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setShow(true);
    // Determine gp_type based on checkbox state
    let gp_type = "";
    if (Inputs.official) {
      gp_type = "O";
    } else if (Inputs.private) {
      gp_type = "P";
    } else if (Inputs.without) {
      gp_type = "W";
    } else if (Inputs.All) {
      gp_type = "";
    }

    const body = {
      start_date: Inputs.start_date,
      end_date: Inputs.end_date,
      emp_id: emp_id,
      gp_type: gp_type,
    };


    dispatch(handleSelectEmp({ name: "", id: 0 }));
    try {

      const response = await getpassReport(body);
      setData(response);
      // setInputs({
      //  start_date: "",
      //  end_date: "",
      //   emp_id: "",
      //   official: false,
      //   private: false,
      //   without: false,
      //   All: false,
      // });

      // Show success toast or handle success scenario
      toast.success("Report generated successfully");
    } catch (error) {
      console.error("Error generating report:", error);
      toast.error("Failed to generate report");
    }
  };
  const handleDownload = async() => {
     
    

    // Assume convertToCSV function converts your data to CSV format
    const csvContent = convertToCSV(data);
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "gatepass_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const convertToCSV = (data: any[]) => {
    // Implement your conversion logic here
    // Example:
    const csvRows = data.map(item => `${item.emp_name},${moment(item.gp_date).format("DD/MM/YYYY")},${item.gp_type_desc},${item.gp_no},${item.reason},${item.gp_type},${item.gp_status},${item.total_time}`).join('\n');
    return `Employee,Current Date,Type,GP No,Purpose,Flag,Status,Total Time\n${csvRows}`;
  };
  const handleInputs = (e: FormEvent) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setInputs((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };


  return (
    <>
      <div className="flex justify-center">
        <div className="w-full max-w-4xl shadow-xl rounded-xl p-4 m-4">
          <h1 className="text-lg font-semibold">Employee Gatepass Report...</h1>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label
                htmlFor="date"
                className="col-span-1 flex items-center justify-center md:justify-end mr-4"
              >
                From Date <span className="text-red-600">*</span>
              </label>
              <input
                value={Inputs.start_date}
                onChange={handleInputs}
                type="date"
                name="start_date"
                className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs"
              />

              <label
                htmlFor="entryNo"
                className="col-span-1 flex items-center justify-center md:justify-end mr-4"
              >
                To Date <span className="text-red-600">*</span>
              </label>
              <input
                value={Inputs.end_date}
                onChange={handleInputs}
                type="date"
                name="end_date"
                className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs"
              />

              <label
                htmlFor="employee"
                className="col-span-1 flex items-center justify-center md:justify-end mr-4"
              >
                Emp Name <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input
                  defaultValue={emp_name}
                  name="emp_id"
                  className="input input-sm input-bordered flex-grow join-item"
                  readOnly
                />
                <button
                  type="button"
                  className="btn btn-sm border-cyan-400 join-item "
                  onClick={() =>
                    (document.getElementById("EmpModal") as HTMLDialogElement)?.showModal()
                  }
                >
                  <span className="text-cyan-400">☰</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <label htmlFor="type" className="col-span-1 flex justify-center items-center">
                Type <span className="text-red-600">*</span>
              </label>

              <div className="col-span-1 flex items-center justify-center md:justify-start">
                <input
                  name="official"
                  onChange={handleInputs}
                  checked={Inputs.official}
                  type="checkbox"
                  className="checkbox checkbox-info"
                />{" "}
                <span className="ml-2">Official</span>
              </div>

              <div className="col-span-1 flex items-center justify-center md:justify-start">
                <input
                  name="private"
                  onChange={handleInputs}
                  checked={Inputs.private}
                  type="checkbox"
                  className="checkbox checkbox-info"
                />{" "}
                <span className="ml-2">Private</span>
              </div>

              <div className="col-span-1 flex items-center justify-center md:justify-start">
                <input
                  name="without"
                  onChange={handleInputs}
                  checked={Inputs.without}
                  type="checkbox"
                  className="checkbox checkbox-info"
                />{" "}
                <span className="ml-2">Without</span>
              </div>

              <div className="col-span-1 flex items-center justify-center md:justify-start">
                <input
                  name="All"
                  onChange={handleInputs}
                  checked={Inputs.All}
                  type="checkbox"
                  className="checkbox checkbox-info"
                />{" "}
                <span className="ml-2">All</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 mt-4">
              <button type="submit" className="btn btn-sm btn-outline btn-success">
                Generate Report
              </button>
            </div>
          </form>
        </div>
      </div>

      {show && (<div className="flex justify-center">
        <div className="w-full max-w-6xl shadow-xl rounded-sm p-4 m-4 border border-gray-300">
          <div className="overflow-x-auto w-full">
            <table className="table">
              {/* head */}
              <thead className="font-semibold">
                <tr className=" font-extrabold">
                  <th>Employee</th>
                  <th>Current Date</th>
                  <th>Type</th>
                  <th>GP No</th>
                  <th>Purpose</th>
                  <th>Flag</th>
                  <th>Status</th>
                  <th>Total Time</th>
                </tr>
              </thead>
              {data.map((item: any, index: number) => (
                <tbody key={index}>
                  {index === 0 || item.emp_name !== data[index - 1].emp_name ? (
                    <tr>
                      <td colSpan={8}>
                        <div className="border-t border-dashed border-gray-400 my-2"></div>
                      </td>
                    </tr>
                  ) : null}
                  <tr key={`${item.emp_name}-${index}`}>
                    <td rowSpan={3} className="align-top">
                      {item.emp_name}
                    </td>
                    <td>{moment(item.gp_date).format("DD/MM/YYYY")}</td>
                    <td>{item.gp_type_desc}</td>
                    <td>{item.gp_no}</td>
                    <td>{item.reason}</td>
                    <td>{item.gp_type}</td>
                    <td>{item.gp_status}</td>
                    <td>{item.total_time}</td>
                  </tr>
                </tbody>
              ))}
            </table>


          </div>
          <div className="flex py-3">
            <button onClick={handleDownload} className="btn btn-sm btn-warning">
              Download <BsDownload size={18} />
            </button>
          </div>
        </div>

      </div>)}


      <ModalEmp />
    </>
  );  
};

export default GatepassReport;

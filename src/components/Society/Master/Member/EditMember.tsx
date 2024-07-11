import { Link, useParams } from "react-router-dom";
import MemModal from "./MemModal";

import { getmem, updateEmp } from "../../../../Services/Society/Master/MasterApis";
import { toast } from "sonner";
import { FormEvent, useEffect, useState } from "react";

import { formatDate } from "../../../../Helper/Helper";

const initialState = {
  dob: "",
  doj: "",
  status: "",
  status_date: "",

  srno: "",
  Nomi: "",
  relation: "",
  ndob: "",
  share: "",
  ifsccode: "",
  branchName: "",
  acno: "",
  bankname: "",
};

const EditMember = () => {
  const { mem_id } = useParams();
  const [data, setData] = useState<any>([]);
  const [inputs, setInputs] = useState(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getmem(mem_id);
        setData(response);
        // Initialize inputs state with fetched data
        setInputs({
          dob: formatDate(response.birth_date),
          doj: formatDate(response.join_date),
          status: response.status,
          status_date: formatDate(response.status_date),
          srno: "",
          Nomi: response.nom_name,
          relation: response.nom_relat,
          ndob: formatDate(response.nom_dob),
          share: response.nom_share,
          ifsccode: response.bank_ifsc,
          branchName: response.bank_branch,
          acno: response.bank_acc,
          bankname: response.bank_name,
        });

      } catch (error: any) {
        toast.error(error);
      }
    };
    fetchData();
  }, [mem_id]);

  const handleInputs = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(inputs);

    let body = {
      
      status: inputs.status,    
      status_date: inputs.status_date || data.status_date,
      nom_name: inputs.Nomi || data.nom_name,
      nom_relat: inputs.relation || data.nom_relat,
      nom_dob: inputs.ndob || data.nom_dob,
      nom_share: inputs.share || data.nom_share,
      bank_name: inputs.bankname || data.bank_name,
      bank_ifsc: inputs.ifsccode || data.bank_ifsc,
      bank_branch: inputs.branchName || data.bank_branch,
      bank_acc: inputs.acno || data.bank_acc,
    };

    console.log(body);

    try {
      const response = await updateEmp(mem_id, body);
      console.log(response);
    } catch (error: any) {
      toast.error(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center mt-6 lg:m-5">
        <div className="shadow-xl rounded-xl p-4 w-full max-w-7xl">
          {data.map((item: any, index: number) => (
            <form key={index} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
                <div className="col-span-12 lg:col-span-2">
                  <label className="label join">
                    Member Name
                    <span className="text-error join-item font-bold">*</span>
                  </label>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                  <div>
                    <input
                      defaultValue={item.mem_name}
                      readOnly
                      name="empname"
                      className="input input-bordered input-sm "
                    />
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
                  <input
                    onChange={handleInputs}
                    defaultValue={formatDate(item.birth_date)}
                    type="date"
                    name="dob"
                    className="input input-bordered input-sm join-item"
                  />
                </div>
                <div className="col-span-12 lg:col-span-2">
                  <label className="label join">
                    Date Of Join
                    <span className="text-error font-bold join-item">*</span>
                  </label>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <input
                    onChange={handleInputs}
                    defaultValue={formatDate(item.join_date)}
                    type="date"
                    name="doj"
                    className="input input-bordered input-sm join-item"
                  />
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
                    <select
                      className="select select-sm select-bordered w-full max-w-xs"
                      name="status"
                      onChange={handleInputs}
                      defaultChecked={item.status}
                    >
                      <option disabled selected>
                        Select
                      </option>
                      <option value="A">Active</option>
                      <option value="I">Inactive</option>
                      <option value="R">Resigned</option>
                      <option value="D">Death</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-2">
                  <label className="label join">
                    Status Date
                    <span className="text-error join-item font-bold"> *</span>
                  </label>
                </div>
                <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <input
                    onChange={handleInputs}
                    defaultValue={formatDate(item.status_date)}
                    type="date"
                    name="status_date"
                    className="input input-bordered input-sm join-item"
                  />
                </div>
              </div>

              <div className="overflow-x-auto items-center p-2 border border-gray-300 mb-2">
                <span className="font-bold text-base sticky left-0">Nominee Details...!</span>
                <table className="table table-zebra">
                  {/* head */}
                  <thead className="font-bold bg-base-200 text-sm">
                    <tr>
                      <th>Sr No.</th>
                      <th>Nominee Name</th>
                      <th>Relation</th>
                      <th>DOB</th>
                      <th>Share</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="hover">
                      <td>
                        <input
                          type="text"
                          className="input input-sm input-bordered w-12"
                          defaultValue={1}
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInputs}
                          type="text"
                          name="Nomi"
                          className="input input-sm input-bordered"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInputs}
                          type="text"
                          name="relation"
                          className="input input-sm input-bordered w-28"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInputs}
                          type="date"
                          name="ndob"
                          className="input input-sm input-bordered w-auto"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInputs}
                          type="number"
                          name="share"
                          className="input input-sm input-bordered w-20"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto items-center p-2 border border-gray-300">
                <span className="font-bold text-base sticky left-0">Bank Details...!</span>

                <table className="table table-zebra">
                  {/* head */}
                  <thead className="font-bold bg-base-200 text-sm">
                    <tr>
                      <th>Sr No.</th>
                      <th>Bank Name</th>
                      <th>IFSC Code</th>
                      <th>Branch Name</th>
                      <th>A/C Number</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr className="hover">
                      <td>
                        <input
                          type="text"
                          className="input input-sm input-bordered w-12"
                          defaultValue="1"
                          readOnly
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInputs}
                          value={item.bank_name}
                          name="bankname"
                          type="text"
                          className="input input-sm input-bordered"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInputs}
                          type="text"
                          name="ifsccode"
                          className="input input-sm input-bordered w-28"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInputs}
                          type="text"
                          name="branchName"
                          className="input input-sm input-bordered w-28"
                        />
                      </td>
                      <td>
                        <input
                          onChange={handleInputs}
                          type="text"
                          name="acno"
                          className="input input-sm input-bordered"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center p-2">
                <button
                  type="submit"
                  className="btn btn-sm btn-outline btn-success mr-3"
                >
                  Submit
                </button>
                <Link to="/society/memview" className="btn btn-outline btn-error btn-sm">
                  Cancel
                </Link>
              </div>
            </form>
          ))}
        </div>
      </div>
      <MemModal />
    </>
  );
};

export default EditMember;

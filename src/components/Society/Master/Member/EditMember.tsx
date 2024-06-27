import { Link } from "react-router-dom"
import MemModal from "./MemModal"
import { useSelector } from "react-redux"
import { FC } from "react"
interface MemData {
  MemData: any[]
}
const EditMember = () => {

  return (
    <>
      <div className="flex justify-center items-center mt-6 lg:m-5">
        <div className="shadow-xl rounded-xl p-4  w-full max-w-7xl">
          <form >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
              <div className="col-span-12 lg:col-span-2">
                <label className="label join">
                  Member Name
                  <span className="text-error join-item font-bold">*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                <div >
                  <input readOnly name="empname" className="input input-bordered input-sm " />
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
                <input type="date" name="unit" className="input input-bordered  input-sm join-item" />
              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label join">
                  Date Of Join
                  <span className="text-error font-bold join-item">*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="date" name="catg" className="input input-bordered  input-sm join-item" />
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
                  <select className="select select-sm select-bordered w-full max-w-xs" >
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
                <input type="date" name="catg" className="input input-bordered  input-sm join-item" />
              </div>
            </div>

            <div className="overflow-x-auto  items-center  p-2 border border-gray-300 mb-2">
              <span className="font-bold  text-base sticky left-0">Nominee Details...!</span>
              <table className="table table-zebra">
                {/* head */}
                <thead className=" font-bold  bg-base-200 text-sm">
                  <tr >
                    <th>Sr No.</th>
                    <th>Nominee Name</th>
                    <th>Relation</th>
                    <th>DOB</th>
                    <th>Share</th>
                  </tr>
                </thead>

                <tbody >

                  <tr className="hover" >
                    <td><input type="text" className="input input-sm input-bordered w-12" defaultValue={1} readOnly /></td>
                    <td><input type="text" className="input input-sm input-bordered" /></td>
                    <td><input type="text" className="input input-sm input-borderedw-28" /></td>
                    <td><input type="date" className="input input-sm input-bordered w-auto" /></td>
                    <td><input type="number" className="input input-sm input-bordered w-20" /></td>
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
                    <td><input type="text" className="input input-sm input-bordered w-12" defaultValue='1' readOnly /></td>
                    <td><input type="text" className="input input-sm input-bordered " /></td>
                    <td><input type="text" className="input input-sm input-bordered w-28" /></td>
                    <td><input type="text" className="input input-sm input-bordered w-28" /></td>
                    <td><input type="text" className="input input-sm input-bordered " /></td>
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

export default EditMember

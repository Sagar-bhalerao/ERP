import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSpecificEmp } from '../../../../Services/HR/Master/MasterAPI'

import { formatDate } from "../../../../Helper/Helper"
const Empview = () => {
  const [data, setData] = useState([])
  const { emp_id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const userData: any = await getSpecificEmp(emp_id);
        setData(userData);
      } catch (error) {

      }
    }
    getData();
  }, [])



  return (
    <div className="flex justify-center items-center mt-5">
      <div className="shadow-xl rounded-xl p-4 w-full max-w-4xl">
        {data.map((item: any, index: any) => (
          <form key={index}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Member Name*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                <input type="text" placeholder="First Name" className="input input-sm input-bordered w-full" value={item.first_name} readOnly />
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                <input type="text" placeholder="Middle Name" className="input input-sm input-bordered w-full" value={item.middle_name} readOnly />
              </div>
              <div className="col-span-12 sm:col-span-12 lg:col-span-4">
                <input type="text" placeholder="Last Name" className="input input-sm input-bordered w-full" value={item.last_name} readOnly />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Email ID*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="email" placeholder="Email" className="input input-sm input-bordered w-full" value={item.email_id} readOnly />
              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Mobile No*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="number" placeholder="Mobile No" className="input input-sm input-bordered w-full" value={item.mobile_no} readOnly />
              </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Date Of Birth*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="date" className="input input-sm input-bordered w-full" value={formatDate(item.birth_date)} readOnly />
              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Date Of Join*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="date" placeholder="Mobile No" className="input input-sm input-bordered w-full" value={formatDate(item.join_date)} readOnly />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Status*</span>
                </label>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <select className="select select-sm select-bordered w-full" value={item.status}>
                  <option value="" disabled selected>Select status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>

                </select>
              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Gender*</span>
                </label>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <select className="select select-sm select-bordered w-full" value={item.gender}>
                  <option value="" disabled selected>Select Gender</option>
                  <option value="M">Male</option>
                  <option value="F">Female</option>

                </select>
              </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Location*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                <input className="input input-sm input-bordered w-full" value={item.loc_name} readOnly />



              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Department*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                <input className="input input-sm input-bordered  w-full" value={item.dept_name} readOnly />


              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Category*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                <input className="input input-sm input-bordered  w-full" value={item.catg_name} readOnly />



              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Designation*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                <input className="input input-sm input-bordered  w-full" value={item.desg_name} readOnly />


              </div>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">User Profile*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                <input className="input input-sm input-bordered  w-full" value={item.userrole} readOnly />


              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Week off*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">

                <input className="input input-sm input-bordered join-item w-full" value={item.off_day} readOnly />

              </div>
            </div>



            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Bank IFSC*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="text" className="input input-sm input-bordered w-full" value={item.ifsc_code} readOnly />
              </div>
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Bank Account*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="text" className="input input-sm input-bordered w-full" value={item.bank_account} readOnly />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
              <div className="col-span-12 lg:col-span-2">
                <label className="label">
                  <span className="label-text font-bold">Company*</span>
                </label>
              </div>
              <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                <input type="text" className="input input-sm input-bordered w-full" value={item.vc_comp_name} readOnly />
              </div>

            </div>
          </form>
        ))}
        <div className="flex justify-center">
          <Link to="/Employee" className="btn btn-outline btn-sm ">Cancel</Link>
        </div>
      </div>
    </div>
  )
}

export default Empview;

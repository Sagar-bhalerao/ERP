import { Link, useParams } from "react-router-dom";
import { getSpecificEmp } from "../../../../Services/HR/Master/MasterAPI"
import { FormEvent, useEffect, useState } from "react";
import { empEdit } from "../../../../Services/HR/Master/MasterAPI"
const initialState = {
    emp_id: "",
    email_id: "",
    mobile_no: "",
    birth_date: "",
    join_date: "",
    status: "",
    gender: "",
    loc_name: "",

    dept_name: "",
    catg_name: "",
    desg_name: "",
    userrole: "",
    off_day: "",
    ifsc_code: "",
    bank_account: "",
    vc_comp_name: "",
}

const Empedit = () => {
    const { emp_id } = useParams();
    const [data, setData] = useState([]);
    const [user, setUser] = useState(initialState);
    
    const [loading,setloading] = useState(true)


    useEffect(() => {
        const fetchdata = async () => {
            try {
                const UserData : any = await getSpecificEmp(emp_id);
        
                    setData(UserData);
                    setloading(false);
        
            } catch (error: any) {
                console.log("the errro from empedit", error);
                
                setloading(false);

            }
        }
        fetchdata();

    }, [])

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(user);
        try {
            await empEdit(user, emp_id);

        } catch (error) {

        }

    }
    const handleInput = (e: FormEvent) => {
        const { name, value }: any = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,

        }))

    }
    if (loading) {
        return <h1 className="flex justify-center"><span className="loading loading-spinner text-info"></span></h1>;
    }
    
    return (
 
         <>
         <div className="flex justify-center  items-center mt-5">
          <div className="shadow-xl rounded-xl p-4 w-full max-w-4xl">
                {data.map((item: any, index: any) => (
                    <form onSubmit={handleSubmit} key={index}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Member Name*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <input name="emp_name" type="text" placeholder="First Name" className="input input-sm input-bordered w-full" value={item.first_name} readOnly />
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
                                <input onChange={handleInput} name="email_id" type="email" placeholder="Email" className="input input-sm input-bordered w-full" required />
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Mobile No*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input onChange={handleInput} name="mobile_no" type="number" placeholder="Mobile No" className="input input-sm input-bordered w-full" required />
                            </div>
                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Date Of Birth*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input onChange={handleInput} name="birth_date" type="date" className="input input-sm input-bordered w-full" required />
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Date Of Join*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input onChange={handleInput} name="join_date" type="date" className="input input-sm input-bordered w-full" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Status*</span>
                                </label>
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                                <select className="select select-sm select-bordered w-full" onChange={handleInput} name="status">
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
                                <select className="select select-sm select-bordered w-full" onChange={handleInput} name="gender">
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
                                <div className="join">
                                    <input onChange={handleInput} name="loc_name" className="input input-sm input-bordered join-item w-[210px]" />
                                    <button type="button" className="btn btn-outline btn-sm join-item">Select</button>
                                </div>

                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Department*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input onChange={handleInput} name="dept_name" className="input input-sm input-bordered join-item w-[210px]" />
                                    <button type="button" className="btn btn-outline btn-sm join-item ">Select</button>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Category*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input onChange={handleInput} name="catg_name" className="input input-sm input-bordered join-item w-[210px]" />
                                    <button type="button" className="btn btn-outline btn-sm join-item">Select</button>
                                </div>

                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Designation*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input onChange={handleInput} name="desg_name" className="input input-sm input-bordered join-item w-[210px]" />
                                    <button type="button" className="btn btn-outline btn-sm join-item ">Select</button>
                                </div>
                            </div>
                        </div>


                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">User Profile*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input onChange={handleInput} name="userrole" className="input input-sm input-bordered join-item w-[210px]" />
                                    <button type="button" className="btn btn-outline btn-sm join-item">Select</button>
                                </div>

                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Week off*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input onChange={handleInput} name="off_day" className="input input-sm input-bordered join-item w-[210px]" />
                                    <button type="button" className="btn btn-outline btn-sm join-item ">Select</button>
                                </div>
                            </div>
                        </div>



                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Bank IFSC*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input onChange={handleInput} name="ifsc_code" type="text" className="input input-sm input-bordered w-full" required />
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Bank Account*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input onChange={handleInput} name="bank_account" type="text" className="input input-sm input-bordered w-full" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-3">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Company*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input onChange={handleInput} name="vc_comp_name" className="input input-sm input-bordered join-item w-[210px]" />
                                    <button type="button" className="btn btn-outline  btn-sm join-item ">Select</button>
                                </div>
                            </div>

                        </div>
                        <div className="flex justify-center ">
                            <button className=" btn btn-sm btn-primary mr-3" type="submit">Submit</button>
                            <Link to="/employee" className=" btn btn-sm btn-error btn-outline" type="submit">Cancel</Link>
                        </div>
                    </form>
                ))}
            </div>

        </div>
       
        </>
    )
}

export default Empedit;

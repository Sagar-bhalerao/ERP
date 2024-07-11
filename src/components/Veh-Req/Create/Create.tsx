import { Link } from "react-router-dom";

const CreateVeq = () => {
    return (
        <>
            <div className="flex justify-center p-4">
                <div className="w-full max-w-4xl rounded-lg shadow-xl p-8">
                    <h1 className="font-bold text-xl mb-5 flex justify-center">Veh Requirement Entry</h1>
                    <form className="form-control space-y-5">

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Entry Date<span className="text-red-700">*</span></span>
                                </label>
                            </div>

                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="entrydate" type="date" placeholder="Email" className="input input-sm input-bordered w-full" required />
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">
                                    Req No<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input readOnly name="mobile_no" type="number" className="input input-sm input-bordered w-full" required />
                            </div>
                        </div>
                    
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Traveller Name<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input type="text" className="input input-bordered w-[205px] input-sm join-item" placeholder="Email" />
                                    <button className="btn btn-sm btn-info btn-outline join-item ">Select</button>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Approver<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="join">
                                    <input type="text" className="input input-bordered w-[205px] input-sm join-item" placeholder="Email" />
                                    <button className="btn btn-sm btn-info btn-outline join-item ">Select</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Mobile Number<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="email_id" type="number" placeholder="Email" className="input input-sm input-bordered w-full" required />
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">No. of Employee<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="mobile_no" type="number" placeholder="Mobile No" className="input input-sm input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Veh Type<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="email_id" type="email" placeholder="Email" className="input input-sm input-bordered w-full" required />
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Req Type<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="mobile_no" type="number" placeholder="Mobile No" className="input input-sm input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">From City<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="email_id" type="email" placeholder="Email" className="input input-sm input-bordered w-full" required />
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">To City<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="mobile_no" type="number" placeholder="Mobile No" className="input input-sm input-bordered w-full" required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Depart Date Time<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="flex">
                                <input name="email_id" type="date" placeholder="date" className="input input-sm input-bordered w-full join-horizontal" required />
                                <input name="email_id" type="time" placeholder="time" className="input input-sm input-bordered w-full join-horizontal" required />
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Arrival Date Time<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="flex">
                                <input name="email_id" type="date" placeholder="date" className="input input-sm input-bordered w-full join-horizontal" required />
                                <input name="email_id" type="time" placeholder="time" className="input input-sm input-bordered w-full join-horizontal" required />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 ">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Details<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="email_id" type="email" placeholder="Email" className="input input-sm input-bordered w-full" required />
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Return Status<span className="text-red-700">*</span></span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <input name="mobile_no" type="number" placeholder="Mobile No" className="input input-sm input-bordered w-full" required />
                            </div>
                        </div>
                        
                        <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                        <label className="label">
                                    <span className="label-text font-bold">Remakrs if any</span>
                                </label>
                                <input name="mobile_no" type="number" placeholder="Mobile No" className="input input-sm input-bordered w-full" required />
                            </div>


                        <div className="flex justify-center space-x-3">
                            <button type="submit" className="btn btn-sm btn-outline btn-success">Submit</button>
                            <Link to="/viewreq" type="button" className="btn btn-sm btn-outline">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default CreateVeq;

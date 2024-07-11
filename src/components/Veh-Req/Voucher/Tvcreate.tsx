
const Tvcreate = () => {
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
                    </form>
                </div>
            </div>
        </>
    )
}

export default Tvcreate;

import { useState, ChangeEvent } from "react"

const Entry = () => {
  const [isOfficial, setIsOfficial] = useState<boolean>(false);

  const handleOfficialChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsOfficial(event.target.checked);
  };

  return (
    <div className="flex justify-center ">
      <div className="w-full max-w-4xl shadow-xl rounded-xl p-4 m-4 ">
        <h1 className="text-lg font-semibold">Create Gatepass...!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
          <label htmlFor="period" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
            Date <span className="text-red-600">*</span>
          </label>
          <input type="date" className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs" />

          <label htmlFor="entryNo" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
            Entry No
          </label>
          <input type="text" className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs" readOnly />

          <label htmlFor="empName" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
            Emp Name <span className="text-red-600">*</span>
          </label>
          <div className="col-span-3 md:col-span-1 flex w-full join">
            <input className="input input-sm input-bordered flex-grow join-item" readOnly />
            <button className="btn btn-sm border-cyan-400 join-item">
              <span className="text-cyan-400">☰</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label htmlFor="type" className="col-span-1 flex justify-center items-center">
            Type <span className="text-red-600">*</span>
          </label>

          <div className="col-span-1 flex items-center justify-center md:justify-start">
            <input type="checkbox" className="checkbox checkbox-info" onChange={handleOfficialChange} /> <span className="ml-2">Official</span>
          </div>

          <div className="col-span-1 flex items-center justify-center md:justify-start">
            <input type="checkbox" className="checkbox checkbox-info" /> <span className="ml-2">Private</span>
          </div>
        </div>
        {isOfficial && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4 mr-3">
              <label htmlFor="fromloc" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                From Location<span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input className="input input-sm input-bordered flex-grow join-item" readOnly />
                <button className="btn btn-sm border-cyan-400 join-item">
                  <span className="text-cyan-400">☰</span>
                </button>
              </div>

              <label htmlFor="toloc" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                To Location <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input className="input input-sm input-bordered flex-grow join-item" readOnly />
                <button className="btn btn-sm border-cyan-400 join-item">
                  <span className="text-cyan-400">☰</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4 mr-3">
              <label htmlFor="period" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                From Dept <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input className="input input-sm input-bordered flex-grow join-item" readOnly />
                <button className="btn btn-sm border-cyan-400 join-item">
                  <span className="text-cyan-400">☰</span>
                </button>
              </div>

              <label htmlFor="entryNo" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                To Dept <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input className="input input-sm input-bordered flex-grow join-item" readOnly />
                <button className="btn btn-sm border-cyan-400 join-item">
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
            <input type="text" className="input input-sm input-bordered w-full" />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button type="submit" className="btn btn-sm btn-outline btn-success">Submit</button>
          <button className="btn btn-sm btn-outline">Cancel</button>
        </div>
        

      </div>
    </div >


  )
}

export default Entry

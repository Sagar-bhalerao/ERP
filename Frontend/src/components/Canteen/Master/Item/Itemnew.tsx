import { Link } from "react-router-dom"

const Itemnew = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="overflow-x-auto items-center w-full lg:w-[80rem] shadow-xl rounded-xl p-4 m-2  ">
          <span className="font-semibold text-2xl">Product Master...!</span>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="product" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Product <span className="text-red-600">*</span>
              </label>
              <input type="text" className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs" />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="unit" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Unit <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input className="input input-sm input-bordered flex-grow join-item" readOnly />
                <button type="button" className="btn btn-sm border-cyan-400 join-item">
                  <span className="text-cyan-400">☰</span>
                </button>
              </div>

              <label htmlFor="category" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Category<span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input className="input input-sm input-bordered flex-grow join-item" readOnly />
                <button type="button" className="btn btn-sm border-cyan-400 join-item">
                  <span className="text-cyan-400">☰</span>
                </button>
              </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="product" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                SAP Code <span className="text-red-600">*</span>
              </label>
              <input type="Number" className="col-span-3 md:col-span-1 input-sm input input-bordered w-full max-w-xs" />

            </div>
            <div className="flex justify-center gap-4">
              <button type="submit" className="btn btn-sm btn-outline btn-success">Submit</button>
              <Link to='/itemview' className="btn btn-sm btn-outline">Cancel</Link>
            </div>

          </form>
        </div>
      </div >
    </>
  )
}

export default Itemnew

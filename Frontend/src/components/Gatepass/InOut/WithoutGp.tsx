import { Link } from "react-router-dom"

const WithoutGp = () => {
  return (<>
    <div className="flex justify-center items-center ">
      <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-10  ">
        <div className=" sticky left-0  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <h1 className="text-xl font-bold">List Of All Gatepass</h1>
            </div>
            <div className="flex justify-end">
              <Link to='/inout' className="btn btn-sm btn-outline btn-accent">Gatepass</Link>
            </div>
          </div>
          <div className="flex justify-end mb-4">
            <label className="input input-bordered input-sm flex items-center w-full sm:w-auto">
              <input
                type="text"
                className="grow"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>

        <table className="table table-zebra">
          {/* head */}
          <thead className=" font-bold  bg-base-200 text-sm">
            <tr >
              <th>Emp Name</th>
              <th>Location</th>
              <th>IN</th>
              <th>OUT</th>
            </tr>
          </thead>
          <tbody>

            <tr className="hover">
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>
    {/* {!loading && <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />} */}

  </>
  )
}

export default WithoutGp;


const DirInout = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-10  ">
          {/* <ReusableHeader setSearchTerm={setSearchTerm} name="List of all Category" createButtonAction={handleCreateButton} /> */}
          <table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
              <tr >
                <th>Director Name</th>
                <th>IN</th>
                <th>Time</th>
                <th>OUT</th>
                <th>Time</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody >

              <tr className="hover">
                <td></td>
                <td><button className="btn btn-sm btn-outline btn-primary">IN</button></td>
                <td></td>
                <td><button className="btn btn-sm btn-outline btn-primary">OUT</button></td>
                <td></td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>
      {/* {!loading && <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />} */}
    </>
  )
}

export default DirInout

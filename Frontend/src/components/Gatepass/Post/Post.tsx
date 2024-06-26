
const Post = () => {
  return (
    <>
      <div className="flex justify-center items-center ">

        <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-10  ">

          {/* <ReusableHeader setSearchTerm={setSearchTerm} name="List of all Gatepass" createButtonAction={handleCreateButton} /> */}

          <table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
              <tr >
                <th>Emp Name</th>
                <th>GP Date</th>
                <th>GP No</th>
                <th>GP Type</th>
                <th>From Loc</th>
                <th>To Loc</th>
              </tr>
            </thead>
            <tbody >

              <tr className="hover">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div >
      {/* {!loading && <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />} */}

    </>
  )
}

export default Post
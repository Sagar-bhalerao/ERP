
const Item = () => {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="overflow-x-auto  w-full items-center  shadow-xl rounded-xl p-2 m-4 ">
          {/* <ReusableHeader setSearchTerm={setSearchTerm} name="List of Items" createButtonAction={handleCreateButton} /> */}
          <table className="table table-zebra">
            {/* head */}
            <thead className=" font-bold  bg-base-200 text-sm">
              <tr >
                <th>Code</th>
                <th>Name</th>
                <th>Rate 1</th>
                <th>Rate 2</th>
                <th>Status</th>
                <th>Day</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              <tr className="hover">
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
              </tr>

            </tbody>

          </table>

        </div>
      </div>
      {/* {!loading && <Paginations currentPage={currentPage} itemperPage={itemperPage} handlePageChange={handlePageChange} data={data} />} */}
    </>
  )
}

export default Item

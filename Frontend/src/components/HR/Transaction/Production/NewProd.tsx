import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ModalProduct from "./ModalProduct";
import { PieceWorkers, handleNewProd } from "../../../../Services/HR/Master/Transaction/TransactionAPI";
import { toast } from "sonner";
import { useSelector } from "react-redux";

const initialState = {
  date: '',
  product_qty: ""
};

const NewProd = () => {
  const [data, setData] = useState([]);
  const [Inputs, setInputs] = useState(initialState);
  const [isTable, setIsTable] = useState<Boolean>(false);
  const [Details, setDetails] = useState([{ sr_no: 1, emp_id: '', product_qty: 0, full_name: "" }]);

  const { product_name, product_code } = useSelector((state: any) => state.newprod);

  const handleContinueButton = async () => {
    let body = {
      prod_date: Inputs.date,
      product_code: product_code
    };
    console.log(body);

    try {
      const response: any = await PieceWorkers(body);
      setData(response);

      // Update Details state with new data and indices
      const newDetails = response.map((item: any, index: number) => ({
        sr_no: index + 1,
        emp_id: item.emp_id,
        full_name: item.full_name,
        product_qty: item.product_qty
      }));
      setDetails(newDetails);

      setIsTable(true);
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.message}`);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const body = {
      prod_date: Inputs.date,
      product_code: product_code,
      product_name: product_name,
      details: Details
    };
    console.log(body);

    try {
      const response = await handleNewProd(body);
      console.log(response);
    } catch (error: any) {
      toast.error(`Something went wrong: ${error.message}`);
    }
  };

  const handleInputs = (e: FormEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleProdQTY = (index: number, value: any) => {
    const updateDetails = [...Details];
    updateDetails[index].product_qty = value;
    setDetails(updateDetails);
  }
  console.log(Details);

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto items-center w-full lg:w-[80rem] shadow-xl rounded-xl p-4 m-2">
          <span className="font-semibold text-2xl">Production Entry...!</span>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="date" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Date <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-3">
                <input onChange={handleInputs} name="date" value={Inputs.date} type="date" className="input input-sm input-bordered" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4 mb-4">
              <label htmlFor="pname" className="col-span-1 flex items-center justify-center md:justify-end mr-4">
                Product Name <span className="text-red-600">*</span>
              </label>
              <div className="col-span-3 md:col-span-1 flex w-full join">
                <input value={product_name} onClick={() => (document.getElementById("product") as HTMLDialogElement)?.showModal()} className="input input-sm input-bordered flex-grow join-item" readOnly />
                <button onClick={() => (document.getElementById("product") as HTMLDialogElement)?.showModal()} type="button" className="btn btn-sm border-cyan-400 join-item">
                  <span className="text-cyan-400">☰</span>
                </button>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button type="button" className="btn btn-sm btn-outline btn-success" onClick={handleContinueButton}>Continue...</button>
              <Link to='/prodview' className="btn btn-sm btn-outline btn-default">Cancel</Link>
            </div>
            {isTable && (
              <div className="flex justify-center items-center">
                <div className="overflow-x-auto w-full lg:w-[60rem] items-center rounded-xl p-4">
                  <span className="font-semibold text-xl">Details...!</span>
                  <table className="table table-zebra mt-2">
                    <thead className="font-bold bg-base-200 text-sm">
                      <tr>
                        <th className="">Emp id</th>
                        <th>Sr No.</th>
                        <th>Employee</th>
                        <th>Qty</th>
                      </tr>
                    </thead>
                    {Details.map((item, index) => (
                      <tbody key={index}>
                        <tr className="hover">
                          <td className="">{item.emp_id}</td>
                          <td><input value={index + 1} type="text" className="input input-sm input-bordered w-16" readOnly /></td>
                          <td><input value={item.full_name} type="text" className="input input-sm input-bordered w-48" readOnly /></td>
                          <td><input value={item.product_qty} onChange={(e) => handleProdQTY(index, e.target.value)} type="number" className="input input-sm input-bordered w-20" /></td>


                        </tr>
                      </tbody>
                    ))}
                  </table>
                  <div className="flex justify-center gap-4 m-2">
                    <button onClick={handleSubmit} type="button" className="btn btn-sm btn-outline btn-success">Submit</button>
                    <Link to='/prodview' className="btn btn-sm btn-outline btn-default">Cancel</Link>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <ModalProduct />
    </>
  );
};

export default NewProd;

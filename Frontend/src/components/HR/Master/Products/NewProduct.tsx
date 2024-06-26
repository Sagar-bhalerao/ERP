import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import ModalUnit from "./ModalUnit";
import ModalCatg from "./ModalCatg";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newProductEntry } from "../../../../Services/HR/Master/MasterAPI"
import { handleSelectedCatg, handleSelectedUnit } from "../../../../features/HR/Master/Product/productSlice";



const NewProduct = () => {
    const dispatch = useDispatch();
    const { catg_name, catg_id, unit_name, unit_id } = useSelector((state: any) => state.category)
    const [Inputs, SetInputs] = useState({
        prodname: "",
        sapCode: "",
    });
    const handleInput = (e: FormEvent) => {
        const { name, value }: any = e.target;
        SetInputs((prev: any) => (
            {
                ...prev,
                [name]: value
            }
        ))

    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(Inputs);
        let body = {
            product_name: Inputs.prodname,
            unit_id: unit_id,
            category_id: catg_id,
            ext_code: Inputs.sapCode

        }
        try {
          await newProductEntry(body);

            SetInputs({
                prodname: "",
                sapCode: "",
            });

            dispatch(handleSelectedCatg({ id: 0, name: "" }))
            dispatch(handleSelectedUnit({ id: 0, name: "" }))

        } catch (error) {
            console.log("getting error", error);

        }

    }
    return (
        <>
            <div className="flex justify-center items-center mt-6 m-5">
                <div className="shadow-xl rounded-xl p-4 w-full max-w-4xl">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Product Name*</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-3">
                                <input onChange={handleInput} value={Inputs.prodname} name="prodname" type="text" placeholder="Product Name" className="input input-sm input-bordered w-full lg:w-[230px]" />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Unit *</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input value={unit_name} readOnly name="unit" className="input input-bordered w-full input-sm join-item" />
                                    <button onClick={() => (document.getElementById("UnitModal") as HTMLDialogElement).showModal()} type="button" className="btn join-item btn-sm border-cyan-400 "><IoReorderThreeOutline size={20} /></button>
                                </div>
                            </div>
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Category*</span>
                                </label>
                            </div>


                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input value={catg_name} readOnly name="catg" className="input input-bordered  input-sm join-item" />
                                    <button onClick={() => (document.getElementById("CatgModal") as HTMLDialogElement)?.showModal()} type="button" className="btn join-item btn-sm border-cyan-400"><IoReorderThreeOutline size={20} /></button>
                                </div>
                            </div>
                        </div>



                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-5">
                            <div className="col-span-12 lg:col-span-2">
                                <label className="label">
                                    <span className="label-text font-bold">Sap Code *</span>
                                </label>
                            </div>
                            <div className="col-span-12 sm:col-span-6 lg:col-span-4">
                                <div className="join">
                                    <input onChange={handleInput} value={Inputs.sapCode} name="sapCode" type="number" className="input input-bordered w-[230px]  input-sm" />

                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <button type="submit" className="btn btn-sm  btn-outline btn-success mr-3">Submit</button>
                            <Link to="/products" className="btn btn-outline btn-error btn-sm">Cancel</Link>
                        </div>

                    </form>

                </div>
            </div>
            <ModalUnit />
            <ModalCatg />


        </>
    )
}

export default NewProduct;

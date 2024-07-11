import {  ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import ModalInterestAcc from "./ModalInterestAcc";
import ModalLoanAcc from "./ModalLoanAcc";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { AddNewScheme } from "../../../../Services/Society/Master/MasterApis";
import { handleSelectLoanScheme, handleSelectScheme } from "../../../../features/Society/SocietySlice";

const initialState = {
    sname: "",
    period: "",
    interestrate: "",
    interestac: "",
    loanac: "",

}
const CreateNewScheme = () => {
    const [Inputs, setInputs] = useState(initialState);
    const { interestAccName, interestAccCode, loanaccCode, loanaccName } = useSelector((state: any) => state.Society);
    const dispatch = useDispatch();

    const handleChangeInput = (e: ChangeEvent<any>) => {
        const { name, value } = e.target;
        setInputs((prev) => ({
            ...prev,
            [name]: value
        }))

    }
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        console.log(Inputs);
        let body = {
            scheme_name: Inputs.sname,
            scheme_period: Inputs.period,
            loan_acc: loanaccCode,
            interest_acc: interestAccCode,
            int_rate: Inputs.interestrate,

        }

        console.log(body);
        dispatch(handleSelectLoanScheme({ name: "", id: 0 }));
        dispatch(handleSelectScheme({ name: "", id: 0 }));

        try {
        await AddNewScheme(body);
        } catch (error: any) {
            toast.error(error);
        }
    }
    return (
        <>
            <div className="flex justify-center p-4">
                <div className="w-full max-w-4xl rounded-lg shadow-xl p-8">
                    <h1 className="font-bold text-xl mb-5 flex justify-center">Scheme Master</h1>
                    <form onSubmit={handleSubmit} className="form-control space-y-5">
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 mb-1">
                            <label className="sm:w-1/5 semi-bold" htmlFor="code">Code</label>
                            <input readOnly name="" type="text" className="input input-bordered input-sm w-full sm:w-4/5" />
                        </div>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 mb-5">
                            <label className="sm:w-1/5 semi-bold" htmlFor="name">Name<span className="text-red-600">*</span></label>
                            <input onChange={handleChangeInput} name="sname" type="text" placeholder="Type here" className="input input-bordered input-sm w-full sm:w-4/5" />
                        </div>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 mb-5">
                            <div className="flex flex-col sm:flex-row sm:space-x-3 sm:w-1/2">
                                <label className="sm:w-[47%] semi-bold" htmlFor="period">Period<span className="text-red-600">*</span></label>
                                <input onChange={handleChangeInput} name="period" type="number" placeholder="Type here" className="input input-bordered input-sm w-full sm:w-2/3" />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:space-x-3 sm:w-1/2">
                                <label className="sm:w-1/3 semi-bold" htmlFor="interestRate">Interest Rate<span className="text-red-600">*</span></label>
                                <input onChange={handleChangeInput} name="interestrate" type="number" placeholder="Type here" className="input input-bordered input-sm w-full sm:w-2/3" />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 mb-5">
                            <label className="sm:w-1/4 semi-bold" htmlFor="interestAC">Interest A/C<span className="text-red-600">*</span></label>
                            <div className="join w-full">
                                <input defaultValue={interestAccName} onChange={handleChangeInput} name="interestac" type="text" placeholder="Type here" className="input input-bordered input-sm w-full sm:w-4/5 join-item" />
                                <button type="button" onClick={() => (document.getElementById("interestModal") as HTMLDialogElement).showModal()} className="btn btn-sm join-item btn-info btn-outline">Select</button>
                            </div>
                        </div>
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-3 mb-5">
                            <label className="sm:w-1/4 semi-bold" htmlFor="loanAC">Loan A/C<span className="text-red-600">*</span></label>
                            <div className="join w-full">
                                <input defaultValue={loanaccName} onChange={handleChangeInput} name="loanac" type="text" placeholder="Type here" className="input input-bordered input-sm w-full sm:w-4/5 join-item" />
                                <button type="button" onClick={() => (document.getElementById("loanModal") as HTMLDialogElement).showModal()} className="btn btn-sm join-item btn-info btn-outline">Select</button>
                            </div>
                        </div>
                        <div className="flex justify-center space-x-3">
                            <button type="submit" className="btn btn-sm btn-outline btn-success">Submit</button>
                            <Link to="/society/schemeview" type="button" className="btn btn-sm btn-outline">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>

            <ModalInterestAcc />
            <ModalLoanAcc />
        </>
    )
}

export default CreateNewScheme;

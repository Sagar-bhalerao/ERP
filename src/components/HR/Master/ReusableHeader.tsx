import { FC } from "react"

interface OtherData {
    setSearchTerm: string | any
    name:string;
    createButtonAction:()=>void;
}
const ReusableHeader: FC<OtherData> = ({ setSearchTerm,name,createButtonAction }) => {
    return (
        
            <div className=" sticky left-0  ">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <h1 className="text-xl font-bold">{name}</h1>
                    </div>
                    <div className="flex justify-end">
                        <button onClick={createButtonAction} className="btn btn-sm btn-outline btn-accent">Create New</button>
                    </div>
                </div>
                <div className="flex justify-end mb-4">
                    <label className="input input-bordered input-sm flex items-center w-full sm:w-auto">
                        <input
                            onChange={(e) => setSearchTerm(e.target.value)}
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
        
    )
}

export default ReusableHeader

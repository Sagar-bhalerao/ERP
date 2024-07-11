import { ChangeEvent, FormEvent, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Booking } from "../../../Services/Book-met/BookMet";
import { useSelector } from "react-redux";
const Create = () => {
  const [isTable, setIsTable] = useState(false);
  const [Inputs,setInputs] = useState({
    Location:"",
    Date:"",
    MeetHall:"",
  })
  const [rows, setRows] = useState([{ id: 1, time: '', details: '' }]);
  const [isHouse,setIsHouse] = useState(false);
  const {user} = useSelector((state:any)=>state.auth);
  const name = JSON.parse(user)
  
  const handleContinueButton = () => {
    setIsTable(true);
  }
  const handleTime = (index:number,value:string)=>{
       const updaterows = [...rows];
       updaterows[index].time = value;
       setRows(updaterows);
       
      }
  const handleDetails = (index:number,value:string)=>{
     const updaterows = [...rows]; 
     updaterows[index].details = value;
     setRows(updaterows); 
  }
  const handleAddEntry = () => {
    const newEntry = {
      id: rows.length + 1, time: '', details: ''
    }
    setRows([...rows, newEntry]);
  }
  const handleSubmit = async(e:FormEvent)=>{
    e.preventDefault();
   console.log(rows);
   let body  = {
    location:Inputs.Location,
    meet_date:Inputs.Date,
    meet_hall:Inputs.MeetHall,
    rows:rows,
    user_name:name.userId

   }
   console.log(body);
   
   try {
      const response = await Booking(body);
   } catch (error) {
    console.log(error);
    
   }
   
  }
  const deleteEntry = () => {
    setRows(rows.filter((row, index) => index !== rows.length - 2));
  }

  const handleSelectLoc = (e:any)=>{
    setIsHouse(e.target.value === 'House' ? true : false);

  }
  const handleInputs = (e:FormEvent)=>{
    const {name,value}:any  = e.target; 
    setInputs((prev)=>({
      ...prev,
      [name]:value
    }))

  }
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto w-full items-center shadow-xl rounded-xl p-4 m-6">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4">
              {/* First row with labels */}
              <div className="flex flex-col items-center md:items-start">
                <label htmlFor="location" className="mb-2">
                  Location <span className="text-red-600">*</span>
                </label>
             
                <select onChange={handleInputs} name="Location" onClick={handleSelectLoc} className="select select-sm select-bordered w-full max-w-xs">
                  <option selected disabled>Select</option>
                  <option value="Lawns">Lawns</option>
                  <option value="House">House</option>
                </select>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <label htmlFor="date" className="mb-2">
                  Date <span className="text-red-600">*</span>
                </label>
                <input onChange={handleInputs} name="Date" id="date" type="date" className="input input-sm input-bordered w-[320px]" required />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <label htmlFor="meet-hall" className="mb-2">
                  Meet Hall <span className="text-red-600">*</span>
                </label>
                {isHouse ? (<select  onChange={handleInputs}  name="MeetHall" className="select select-sm select-bordered w-full max-w-xs">


                  <option selected disabled>Select</option>
                  <option value="Ground Floor">Ground Floor</option>
                  <option value="First Floor">First Floor</option>
                </select>):
                <select  onChange={handleInputs} name="MeetHall" className="select select-sm select-bordered w-full max-w-xs">
                  <option selected disabled>Select</option>
                  <option value="Utsav Hall">Utsav Hall</option>
                  <option value="Lawn">Lawn</option>
                  <option value="Banquet Hall">Banquet Hall</option>
                  <option value="Banquet Lawn">Banquet + Lawn</option>
                  <option value="Utsav Banquet Lawn">Utsav + Banquet + Lawn</option>
                </select>
                 }
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <button type="button" className="btn btn-sm btn-outline btn-success" onClick={handleContinueButton}> Continue...</button>
              {/* <Link to='/' className="btn btn-sm btn-outline btn-default">Cancel</Link> */}
            </div>
            {isTable && (
              <div className="flex justify-center items-center mt-4">
                <div className="overflow-x-auto w-full lg:w-[60rem] items-center rounded-xl p-4">
                  <span className="font-semibold text-xl">Details...!</span>
                  <table className="table table-zebra mt-2 w-full">
                    {/* head */}
                    <thead className="font-bold bg-base-200 text-sm">
                      <tr>
                        <th>Sr No.</th>
                        <th>Time</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((row, index) => (
                        <tr className="hover" key={index}>
                          <td><input type="text" className="input input-sm input-bordered w-16" value={index + 1} readOnly /></td>
                          <td>
                            <div>
                              {isHouse ? (<select
                              className="select select-sm select-bordered max-w-xs"
                              value={row.time}
                              onChange={(e) => handleTime(index, e.target.value)}
                            >
                              <option value="" selected>Select</option>
                              <option value="01:00 PM">01:00 PM</option>
                              <option value="02:00 PM">02:00 PM</option>
                              <option value="03:00 PM">03:00 PM</option>
                              <option value="04:00 PM">04:00 PM</option>
                              <option value="05:00 PM">05:00 PM</option>
                              <option value="06:00 PM">06:00 PM</option>
                              <option value="09:00 AM">09:00 AM</option>
                              <option value="10:00 AM">10:00 AM</option>
                              <option value="11:00 AM">11:00 AM</option>
                              <option value="12:00 PM">12:00 PM</option>
                            </select>):(<select
                              className="select select-sm select-bordered max-w-xs"
                              value={row.time}
                              onChange={(e) => handleTime(index, e.target.value)}
                            >
                              <option value="" selected>Select</option>
                              <option value="Morning">Morning</option>
                              <option value="Afternoon">Afternoon</option>
                              <option value="Evening">Evening</option>
                            </select>)}
                            
                            </div>
                          </td>
                          <td><input value={row.details} onChange={(e)=>handleDetails(index,e.target.value)} name="details" type="text" className="input input-sm input-bordered w-full" /></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="flex mt-2">
                    <button type="button" className="btn btn-sm btn-outline btn-primary mr-2" onClick={handleAddEntry}>Add Entry</button>
                    <button type="button" className="btn btn-sm btn-outline btn-error" onClick={deleteEntry}><RiDeleteBin6Line /></button>
                  </div>
                </div>
              </div>
            )}
            {isTable && (
              <div className="flex justify-center mt-4">
                <button onClick={handleSubmit} type="button" className="btn btn-sm btn-outline btn-success">Submit</button>
                {/* <Link to='/viewhall' className="btn btn-sm btn-outline btn-default">Cancel</Link> */}
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;

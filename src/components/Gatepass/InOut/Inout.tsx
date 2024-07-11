import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getGpass } from "../../../Services/Gatepass/GatepassApis";
import { toast } from "sonner";
import axios from "axios";
import moment from "moment";
import { useSelector } from "react-redux";


const Inout = () => {
  const [data, setData] = useState([]);
  const [disabledButtons, setDisabledButtons] = useState<{ [key: string]: { in: boolean; out: boolean } }>({});
  const [gpNO, setGpNO] = useState(0);
  const { user } = useSelector((state: any) => state.auth);
  const { dependencyTrigger } = useSelector((state: any) => state.Gatepass);
  const [reload, setReload] = useState(false); // Added a state variable for reloading the component
  const id = JSON.parse(user);

  // Initialize WebSocket connection
  useEffect(() => {
    const socket = new WebSocket('ws://192.168.179.23:5002');
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };
    
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('Received message:', message);
      if (message.type === 'NEW_ENTRY') {
        setReload(prev => !prev); // Toggle the reload state to force a re-render
      }
    };
    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    // Cleanup on component unmount
    return () => {
      socket.close();
    };
  }, []);
 



// Function to remove localStorage item
const removeLocalData = () => {
  localStorage.removeItem("disabledButtons");
  console.log("Local storage cleared");
};

// Calculate milliseconds until the next target time
const getTimeUntilNextTarget = () => {
  const now = new Date();
  const nextTarget = new Date();
  
  // Set the target time (e.g., 00:00:00 for midnight)
  nextTarget.setHours(18, 16, 0,0 );
  
  // If the current time is past the target time, set it for the next day
  if (now.getTime() > nextTarget.getTime()) {
    nextTarget.setDate(now.getDate() + 1);
  }
  
  return nextTarget.getTime() - now.getTime();
};

// Set the initial timeout to the next target time
setTimeout(() => {
  removeLocalData();
  
  // After the initial execution, set an interval to run every 24 hours
  setInterval(removeLocalData, 24 * 60 * 60 * 1000);
}, getTimeUntilNextTarget());





  // Load disabled buttons state from local storage
  useEffect(() => {
    const storedDisabledButtons = localStorage.getItem('disabledButtons');
    if (storedDisabledButtons) {
      setDisabledButtons(JSON.parse(storedDisabledButtons));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getGpass();
        setData(response);
      } catch (error) {
        toast.error(`Something went wrong: ${error}`);
      }
    };
    fetchData();
  }, [dependencyTrigger, reload]); // Add reload to the dependency array

  const fetchTime = async () => {
    try {
      const body = { gp_no: gpNO };
      const response = await axios.post("http://192.168.179.23:5002/gptime-diff", body);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOUT = async (item: any) => {
    const body = {
      gp_no: item.gp_no,
      gp_date: moment(item.gp_date).format("YYYY/MM/DD"),
      gp_flag: "O",
      gp_loc: id.loc_id,
    };
    console.log(body);

    try {
      const response = await axios.post(`http://192.168.179.23:5002/gpout`, body);
      console.log(response.data);
      const btn_out = response.data.btn_out;

      if (btn_out) {
        toast.success("Out time recorded successfully");

        const updatedState = {
          ...disabledButtons,
          [item.gp_no]: { ...disabledButtons[item.gp_no], out: true }
        };
        setDisabledButtons(updatedState);

        // Store updated state in local storage
        localStorage.setItem('disabledButtons', JSON.stringify(updatedState));
      }
    } catch (error) {
      toast.error("This employee already out...!");
    }
  };

  const handleIN = async (item: any) => {
    setGpNO(item.gp_no);
    fetchTime();
    const body = {
      gp_no: item.gp_no,
      gp_date: moment(item.gp_date).format("YYYY/MM/DD"),
      gp_flag: "I",
      gp_loc: id.loc_id,
    };
    console.log(body);
    try {
      const response = await axios.post(`http://192.168.179.23:5002/gpin`, body);
      toast.success("In time recorded successfully");

      const updatedState = {
        ...disabledButtons,
        [item.gp_no]: { ...disabledButtons[item.gp_no], in: true }
      };
      setDisabledButtons(updatedState);

      // Store updated state in local storage
      localStorage.setItem('disabledButtons', JSON.stringify(updatedState));
    } catch (error) {
      toast.error("This employee already In...!");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="overflow-x-auto w-full items-center shadow-xl rounded-xl p-2 m-10">
          <div className="sticky left-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <h1 className="text-xl font-bold">List Of All Gatepass</h1>
              </div>
              <div className="flex justify-end">
                <Link to='/wgpemp' className="btn btn-sm btn-outline btn-accent">Without Gatepass</Link>
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
            <thead className="font-bold bg-base-200 text-sm">
              <tr>
                <th className="">G No</th>
                <th className="">G Date</th>
                <th>Emp Name</th>
                <th>GP Type</th>
                <th>From Loc</th>
                <th>To Loc</th>
                <th>IN</th>
                <th>OUT</th>
                <th>Action</th>
                <th>Post</th>
              </tr>
            </thead>
            {data.map((item: any, index: number) => (
              <tbody key={index}>
                <tr className="hover">
                  <td className="">{item.gp_no}</td>
                  <td className="">{moment(item.gp_date).format("DD/MM/YYYY")}</td>
                  <td>{item.emp_name}</td>
                  <td>{item.gp_type}</td>
                  <td>{item.from_loc_name}</td>
                  <td>{item.to_loc_name}</td>
                  <td>
                    <button
                      onClick={() => handleIN(item)}
                      disabled={disabledButtons[item.gp_no]?.in}
                      className="btn btn-sm btn-primary btn-outline"
                    >
                      IN
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleOUT(item)}
                      disabled={disabledButtons[item.gp_no]?.out}
                      className="btn btn-sm btn-primary btn-outline"
                    >
                      OUT
                    </button>
                  </td>
                  <td>
                    {item.post_flag === "Y" ? <button className="btn btn-sm btn-accent">Posted</button> :
                      <button className="btn btn-sm btn-error">Pending</button>}
                  </td>
                  <td>{item.post_flag}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Inout;

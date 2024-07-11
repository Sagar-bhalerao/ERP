import axios from "axios";
import { toast } from "sonner";
import { BASE_URl } from "../../Services/HR/Master/MasterAPI";

//New Product Entry
export const newGpEntry = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URl}/newgpass`, data);
    if (response.status === 200) {
      toast.success("Gatepass Created...!")
    }
    return response.data;

  } catch (error: any) {
    throw new Error(error.message);
  }
}

//InOut Todays Gpass
export const getGpass = async () => {
  try {
    const response = await axios.get(`${BASE_URl}/getgpass`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message)
  }
}

//Post progress 
export const postProgress = async () => {
  try {
    const response = await axios.get(`${BASE_URl}/getpostdata`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);

  }

}
// get specific emp for post 
export const getEmp = async (id: any) => {
  try {
    const response = await axios.get(`${BASE_URl}/getspeemp/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

//post gatepass
export const postGatePass = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URl}/postgpass`, data);
    if (response.status === 200) {
      toast.success(response.data.message)

    }

    return response.data
  } catch (error: any) {
    
   
    
    throw new Error(error);

  }
}


// getGatepass Report

export const getpassReport = async(data:any)=>{
  try {
    const response = await axios.post(`${BASE_URl}/gpassreport`,data);
   return response.data;
    
  } catch (error:any) {
    throw new Error(error)
  }
}

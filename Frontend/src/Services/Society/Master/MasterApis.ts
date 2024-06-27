import axios from "axios";
import { toast } from "sonner";
import { BASE_URl } from "../../HR/Master/MasterAPI";


//Fetching all Society Member
export const getSocMembers = async () => {
  try {
    const response = await axios.get(`${BASE_URl}/getsocmembers`);
    return response.data;

  } catch (error: any) {
    throw new Error(error.message)
  }
}

//Fetching all Society Member for modal view
export const getMembers = async () => {
  try {
    const response = await axios.get(`${BASE_URl}/getmember`);
    return response.data;

  } catch (error: any) {
    throw new Error(error.message)
  }
}

export const handleNewMem = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URl}/society/newme`, data);
    if (response.status === 200) {
      toast.success("New Member Added");
    }

  } catch (error: any) {
    throw new Error(error.message);

  }
}
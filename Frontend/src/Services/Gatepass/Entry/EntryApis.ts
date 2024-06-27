import axios from "axios";
import { toast } from "sonner";
import { BASE_URl } from "../../HR/Master/MasterAPI";
// const base_url = "http://localhost:5002";

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
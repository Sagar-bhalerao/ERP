import axios from "axios"
import { toast } from "sonner";

export const login = async(data:any)=>{
    try {
        const response = await axios.post("http://192.168.179.23:5002/log-in",data);
        if (response.status === 200) {
            toast.success("Login Successfully");
            
        }
        return response.data;
    } catch (error:any) {
        throw new Error(error.message)
    }

}
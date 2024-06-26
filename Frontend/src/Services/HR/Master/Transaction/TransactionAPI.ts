import axios from "axios"
import { BASE_URl } from "../MasterAPI"

// get production
export const getProductionView = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/all-productionview`);
        return response.data;

    } catch (error: any) {
        throw new Error(error.message)

    }

}

//get products
export const getProduction = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/productionview`);
        return response.data
    } catch (error: any) {
        throw new Error(error.message)

    }
}

//post NewProd
export const PieceWorkers = async (data: any) => {
    try {
        const response = await axios.post(`${BASE_URl}/pieceworkers`, data);
        if (response.status === 200) {
            return response.data;
        }
    } catch (error: any) {
        throw new Error(error.message)
    }
}
//post all newProd data
export const handleNewProd = async(data:any)=>{
    try {
        const response = await axios.post(`${BASE_URl}/production-entry`,data);
        if (response.status === 200) {
            alert("success akash bhai");
            
        }

    } catch (error:any) {
        throw new Error(error.message);
        
    }
}

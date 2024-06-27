import axios from "axios";
import { toast } from "sonner";

export const BASE_URl = "http://192.168.179.23:5002"

// entire emp data
export const fetchEmpData = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/employee`);
        return response.data;
    } catch (error:any) {
        throw new Error(error.message);
      }
}

// for single user
    export const getSpecificEmp = async (id: any) => {
        try {
            const response = await axios.get(`${BASE_URl}/empview/${id}`);
            return [response.data];
        } catch (error:any) {
            throw new Error(error.message);

        }
    }
// empedit api
export const empEdit = async (Data: any, id: any) => {
    try {
        const response = await axios.put(`${BASE_URl}/empedit/${id}`, Data)
        if (response.status === 200) {
            alert("Employee Data Updated Successfully")
        }

    } catch (error:any) {
        throw new Error(error.message);

    }

}


// get category 
export const getCategory = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/catgview`);
        return response.data;
    } catch (error:any) {
      throw new Error(error.message)
    }
}

// get depatment
export const getDepatment = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/deptview`);
        return response.data;
    } catch (error:any) {
        throw new Error(error.message)

    }
}

//get desingnation

export const getDesignation = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/desgview`);
        return response.data;
    } catch (error:any) {
        throw new Error(error.message)

    }
}


// get location
export const getLocation = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/locview`);
        return response.data;
    } catch (error:any) {
        throw new Error(error.message)

    }
}

//get piece rate

export const getPieceRate = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/piecerateview`);
        return response.data;
    } catch (error:any) {
        throw new Error(error.message)

    }
}


//get vehical 

export const getVehical = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/vehview`);
        return response.data;
    } catch (error:any) {
        throw new Error(error.message)

    }
}

//get Products

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/prodview`);
        return response.data;
    } catch (error:any) {
        throw new Error(error.message)

    }
}


// get Units

export const getUnits = async () => {
    try {
      const response = await axios.get(`${BASE_URl}/units`);
      return response.data;
    } catch (error:any) {
        throw new Error(error.message)
    }
  };

  // newProduct entry
  export const newProductEntry = async (data:any) => {
    try {
        const response = await axios.post(`${BASE_URl}/newprod`, data);
        if (response.status === 200) {
            toast.success("The Product added successfully")           
            
        }
        return response.data;
    }catch(error:any){
        throw new Error(error.message)
        
    }
}
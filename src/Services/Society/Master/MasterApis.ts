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

// edit member by id

export const getmem = async (id: any) => {
  try {
    const response = await axios.get(`${BASE_URl}/getmem/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }
}

//update emp by id
export const updateEmp = async (id: any, data: any) => {
  console.log(id);

  try {
    const response = await axios.put(`${BASE_URl}/UpdateEmp/${id}`, data);
    if (response.status === 200) {
      toast.success("Member Updated");
    }
    return response.data
  } catch (error: any) {
    throw new Error(error)
  }
}

//group view 
export const getGroup = async () => {
  try {
    const response = await axios.get(`${BASE_URl}/viewgroup`)
    return response.data;
  }
  catch (error: any) {
    throw new Error(error)
  }
}

// add new group

export const addGroup = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URl}/newgroup`, data)
    if (response.status === 200) {
      toast.success("Group Added");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }
}


// account View
export const getAccount = async () => {
  try {
    const response = await axios.get(`${BASE_URl}/accview`)
    return response.data;
  }
  catch (error: any) {
    throw new Error(error)
  }
}

// add new Account

export const addAccount = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URl}/newacc`, data)
    if (response.status === 200) {
      toast.success("Account Added");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }
}

//get all scheme view
export const getAllScheme = async () => {
  try {
    const response = await axios.get(`${BASE_URl}/schemeview`)
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }
}

//inerest and loan data
export const getInterestAndLoan = async () => {
  try {
    const response = await axios.get(`${BASE_URl}/accview`)
    return response.data;
  } catch (error: any) {
    throw new Error(error)
  }
}

// create new scheme 
export const AddNewScheme = async (data: any) => {
  try {
    const response = await axios.post(`${BASE_URl}/newscheme`, data)
    if (response.status === 200) {
      toast.success("Scheme Added");
      }
      return response.data;
      } catch (error: any) {
        throw new Error(error)
        }
}  



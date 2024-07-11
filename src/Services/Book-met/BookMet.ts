import axios from "axios";
import { BASE_URl } from "../HR/Master/MasterAPI";
import { toast } from "sonner";

// for booking the hall
export const Booking = async (data: any) => {
    try {
        const response = await axios.post(`${BASE_URl}/bookmeet`, data);
        if (response.status === 200) {
            toast.success(response.data.message);
        }
        return response.data;
    } catch (error: any) {
        throw new Error(error);

    }
}
// get all view of booking
export const GetAllBooking = async () => {
    try {
        const response = await axios.get(`${BASE_URl}/viewmeet`);
        if (response.status === 200) {
            // toast.success(response.data.message);
        }
        return response.data;
    } catch (error: any) {
        throw new Error(error);
    }
}

import { createSlice } from "@reduxjs/toolkit";
interface auth {
    user: string | null;
    token: string | null;
    isAuthenticated: boolean
}
const initialState: auth = {
    token: localStorage.getItem('token'),
    user: localStorage.getItem("UserData"),
    isAuthenticated: !!localStorage.getItem("token"),
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        StoreUserData: (state, action) => {
            const { data } = action.payload;
            state.token = data.token;
            state.user = JSON.stringify(data);
            state.isAuthenticated = !!data.token;
            localStorage.setItem("UserData",JSON.stringify(data));
            localStorage.setItem("token", data.token);
        },
        logout: (state) => {
            localStorage.removeItem("token");
            state.token = null;
            state.isAuthenticated = false;
            state.user = null;
            console.clear();
        }
    }
})
export const { StoreUserData, logout } = authSlice.actions;
export default authSlice.reducer;
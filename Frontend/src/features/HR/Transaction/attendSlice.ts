import { PayloadAction, createSlice } from "@reduxjs/toolkit";
interface attendState {
    id: number;
    name: string;

}

const initialState: attendState = {
    id: 0,
    name: ""
}

export const attendSlice = createSlice({
    name: "attend",
    initialState,
    reducers: {
        setAttend: (state, action: PayloadAction<{ id: number, name: string }>) => {
            const { id, name } = action.payload
            state.id = id;
            state.name = name;
        }
    }

})

export const { setAttend } = attendSlice.actions;

export default attendSlice.reducer;
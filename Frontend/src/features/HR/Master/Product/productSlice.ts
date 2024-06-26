import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface category {
    catg_id: number;
    catg_name: string;
    unit_id: number;
    unit_name: string;

}
const initialState: category = {
    catg_id: 0,
    catg_name: "",
    unit_id: 0,
    unit_name: ""
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        handleSelectedCatg: (state: category, action: PayloadAction<{ id: number, name: any }>) => {
            const { id, name } = action.payload;
            // console.log(data);
            state.catg_id = id;
            state.catg_name = name;
            

        },
        handleSelectedUnit: (state: category, action: PayloadAction<{ id: number, name: any }>) => {
            const { id, name } = action.payload;
            state.unit_id = id;
            state.unit_name = name;


        }

    }
})


export const { handleSelectedCatg, handleSelectedUnit } = categorySlice.actions
export default categorySlice.reducer;
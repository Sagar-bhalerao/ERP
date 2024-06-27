import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Member {
  emp_id: number,
  emp_name: String
}

const initialState: Member = {
  emp_id: 0,
  emp_name: ''
}

export const SocietySlice = createSlice({
  name: "Society",
  initialState,
  reducers: {
    handleselectedMem: (state: Member, action: PayloadAction<{ id: number, name: any }>) => {
      const { id, name } = action.payload;
      state.emp_id = id;
      state.emp_name = name;
    }
  }

})

export const { handleselectedMem } = SocietySlice.actions;
export default SocietySlice.reducer;
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Gatepass {
  emp_id: String,
  emp_name: string,
  from_loc_id: number,
  from_loc_name: String,
  to_loc_id: number,
  to_loc_name: String,
  from_dept_id: number,
  from_dept_name: String,
  to_dept_id: number,
  to_dept_name: String,
}

const initialState: Gatepass = {
  emp_id: "",
  emp_name: "",
  from_loc_id: 0,
  from_loc_name: "",
  to_loc_id: 0,
  to_loc_name: "",
  from_dept_id: 0,
  from_dept_name: "",
  to_dept_id: 0,
  to_dept_name: "",
}

export const GpassSlice = createSlice({
  name: "Gatepass",
  initialState,
  reducers: {
    handleSelectEmp: (state: any, action: PayloadAction<{ id: number, name: any }>) => {
      const { id, name } = action.payload;
      state.emp_id = id;
      state.emp_name = name;
    },
    handleFromLoc: (state: any, action: PayloadAction<{ id: number, name: any }>) => {
      const { id, name } = action.payload;
      // console.log("From Loc", id, name);
      state.from_loc_id = id;
      state.from_loc_name = name;
    },
    handleToLoc: (state: any, action: PayloadAction<{ id: number, name: any }>) => {
      const { id, name } = action.payload;
      // console.log("To Loc", id, name);
      state.to_loc_id = id;
      state.to_loc_name = name;
    },
    handleFromDept: (state: any, action: PayloadAction<{ id: number, name: any }>) => {
      const { id, name } = action.payload;
      // console.log("From Dept", id, name);
      state.from_dept_id = id;
      state.from_dept_name = name;
    },
    handleToDept: (state: any, action: PayloadAction<{ id: number, name: any }>) => {
      const { id, name } = action.payload;
      // console.log("To Dept", id, name);
      state.to_dept_id = id;
      state.to_dept_name = name;
    }
  }
})

export const { handleSelectEmp, handleFromLoc, handleToLoc, handleFromDept, handleToDept } = GpassSlice.actions;
export default GpassSlice.reducer;

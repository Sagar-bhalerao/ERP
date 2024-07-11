import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Member {
  emp_id: number,
  emp_name: String,
  group_name:string,
  group_code:number,
  account_name:string,
  account_code:number,
  interestAccName:string,
  interestAccCode:number,
  loanaccName:string,
  loanaccCode:number,
}

const initialState: Member = {
  emp_id: 0,
  emp_name: '',
  group_name: '',
  group_code: 0,
  account_name: '',
  account_code: 0,
  interestAccName:'',
  interestAccCode:0,
  loanaccName:'',
  loanaccCode:0,
  
}

export const SocietySlice = createSlice({
  name: "Society",
  initialState,
  reducers: {
    handleselectedMem: (state: Member, action: PayloadAction<{ id: number, name: any }>) => {
      const { id, name } = action.payload;
      state.emp_id = id;
      state.emp_name = name;
    },
    handleSelectGroup:(state:Member,action:PayloadAction<{id:number,name:any}>)=>{
      const {id,name} = action.payload
      state.group_code = id;
      state.group_name = name;
      
    },
   
    handleSelectScheme:(state:Member,action:PayloadAction<{id:number,name:any}>)=>{
      const {id,name} = action.payload;
      state.interestAccCode = id;
      state.interestAccName = name;
      
    },
    handleSelectLoanScheme:(state:Member,action:PayloadAction<{id:number,name:any}>)=>{
        const {id,name} = action.payload;
        state.loanaccCode = id;
        state.loanaccName = name;

    }
  }

})

export const { handleselectedMem ,handleSelectGroup,handleSelectScheme,handleSelectLoanScheme} = SocietySlice.actions;
export default SocietySlice.reducer;
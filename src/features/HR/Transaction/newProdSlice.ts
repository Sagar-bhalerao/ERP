import {createSlice } from "@reduxjs/toolkit";

interface prod{
  product_name:string;
  product_code:number
}

const initialState:prod = {
   product_name:"",
   product_code:0
}

export const newProdSlice = createSlice({
    name: "newProd",
    initialState,
    reducers: {
        getProductData: (state, action) => {
             const {product_name,product_code} = action.payload;
             state.product_name = product_name;
             state.product_code = product_code;

        }
    }

})


export const {getProductData} = newProdSlice.actions;

export default newProdSlice.reducer;
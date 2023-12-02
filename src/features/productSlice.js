import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProductData = createAsyncThunk("productsData", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  return data.json();
});

export const productDataSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    error: null,
    loading: false,
  },
  extraReducers: {
    [getProductData.pending]: (state) => {
      state.loading = true;
    },
    [getProductData.fulfilled]: (state, action) => {
      state.products = action.payload;
    },
    [getProductData.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});
export default productDataSlice.reducer;

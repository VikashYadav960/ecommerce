import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    filtered: [],
    search: "",
    category: "All",
    priceRange: 1000,
    rating: 0,
    status: "idle"
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
      filterProducts(state);
    },
    setCategory: (state, action) => {
      state.category = action.payload;
      filterProducts(state);
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
      filterProducts(state);
    },
    setRating: (state, action) => {
      state.rating = action.payload;
      filterProducts(state);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      filterProducts(state);   // 👈 Important
    });
  }
});

function filterProducts(state) {
  state.filtered = state.items.filter(
    (item) =>
      item.title.toLowerCase().includes(state.search.toLowerCase()) &&
      item.price <= state.priceRange &&
      (state.category === "All" || item.category === state.category) &&
      item.rating.rate >= state.rating
  );
}

export const {
  setSearch,
  setCategory,
  setPriceRange,
  setRating
} = productSlice.actions;

export default productSlice.reducer;

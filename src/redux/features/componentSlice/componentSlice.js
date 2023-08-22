const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  components: [],
};

const pcComponentSlice = createSlice({
  name: "pcComponents",
  initialState,
  reducers: {
    setComponent: (state, action) => {
      state.components.push(action.payload);
    },
  },
});

export const { setComponent } = pcComponentSlice.actions;
export default pcComponentSlice.reducer;

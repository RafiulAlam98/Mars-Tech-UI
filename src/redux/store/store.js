const { configureStore } = require("@reduxjs/toolkit");
import pcComponentReducer from "../features/componentSlice/componentSlice.js";

const store = configureStore({
  reducer: {
    pcComponents: pcComponentReducer,
  },
});
export default store;

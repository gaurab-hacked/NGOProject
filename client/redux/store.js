import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import albumReducer from "./slices/albumSlice";
import subcategoryReducer from "./slices/subCategorySlice";
import carouselReducer from "./slices/carouselSlice";
import blogReducer from "./slices/blogSlice";
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";
import orderReducer from "./slices/orderSlice";
import userDetailReducer from "./slices/userDetailSlice";
import statisticsReducer from "./slices/statisticsSlice";
import targetReducer from "./slices/targetSlice";
import projectReducer from "./slices/projectSlice";
import newsEventsReducer from "./slices/newsEventsSlice";

export function makeStore() {
  return configureStore({
    reducer: {
      authReducer,
      categoryReducer,
      subcategoryReducer,
      carouselReducer,
      blogReducer,
      messageReducer,
      orderReducer,
      userDetailReducer,
      statisticsReducer,
      targetReducer,
      projectReducer,
      newsEventsReducer,
      albumReducer,
    },
  });
}

export const store = makeStore();

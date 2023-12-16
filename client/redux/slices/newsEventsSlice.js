import { API_BASE_URL } from "@/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let onProgressChangeCallback = null;
export const setOnProgressChangeCallback = (callback) => {
  onProgressChangeCallback = callback;
};
export let percentCompletedValue = 0;

export const getnewsEventss = createAsyncThunk("get/newsEventss", async () => {
  const config = { headers: {} };
  const response = await axios.get(
    `${API_BASE_URL}/api/newsEvents/newsEventses`,
    config
  );
  return response.data;
});

export const postnewsEvents = createAsyncThunk(
  "posts/newsEvents",
  async (post, thunkApi) => {
    const formData = new FormData();
    formData.append("title", post.newsEventsTitle);
    formData.append("description", post.newsEventsDescription);
    formData.append("image", post.newsEventsImage);
    formData.append("active", post.newsEventsActive);
    formData.append("category", post.newsEventsCategoryId);

    try {
      // Make the API request using axios
      const response = await axios.post(
        `${API_BASE_URL}/api/newsEvents/newsEvents`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
          onUploadProgress: (progressEvent) => {
            percentCompletedValue = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            if (onProgressChangeCallback) {
              onProgressChangeCallback(percentCompletedValue);
            }
          },
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updatenewsEvents = createAsyncThunk(
  "update/newsEvents",
  async (updatedPost, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("title", updatedPost.newsEventsTitle);
      formData.append("description", updatedPost.newsEventsDescription);
      formData.append("image", updatedPost.newsEventsImage);
      formData.append("active", updatedPost.newsEventsActive);
      formData.append("category", updatedPost.newsEventsCategoryId);

      const config = {
        headers: {
          "auth-token": JSON.parse(localStorage.getItem("token")),
        },
        onUploadProgress: (progressEvent) => {
          percentCompletedValue = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          if (onProgressChangeCallback) {
            onProgressChangeCallback(percentCompletedValue);
          }
        },
      };

      const response = await axios.patch(
        `${API_BASE_URL}/api/newsEvents/newsEvents/${updatedPost.id}`,
        formData,
        config
      );

      return response.data;
    } catch (error) {
      // Handle errors appropriately, e.g., dispatch an error action
      throw error;
    }
  }
);

export const deletenewsEvents = createAsyncThunk(
  "delete/newsEvents",
  async (postId, thunkApi) => {
    const config = {
      headers: {
        "auth-token": JSON.parse(localStorage.getItem("token")),
      },
    };

    await axios.delete(
      `${API_BASE_URL}/api/newsEvents/newsEvents/${postId}`,
      config
    );
    return postId;
  }
);

const initialState = {
  carData: [],
  loading: false,
  posts: [],
};

const newsEventsSlice = createSlice({
  name: "newsEventss",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getnewsEventss.fulfilled, (state, action) => {
      state.loading = false;
      state.carData = action.payload;
    });

    builder.addCase(getnewsEventss.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(postnewsEvents.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.carData.push(action.payload.newsEvents);
    });

    builder.addCase(updatenewsEvents.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      let updatedData = state.carData.filter(
        (e) => e._id !== updatedPost.newsEvents._id
      );
      updatedData.push(updatedPost.newsEvents);
      state.carData = updatedData;
    });

    builder.addCase(deletenewsEvents.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.carData = state.carData.filter((e) => e._id !== action.payload);
    });

    // builder.addCase(postnewsEvents.pending, (state, action) => {
    //   // Handle pending state for post creation if needed
    // });

    // builder.addCase(updatenewsEvents.pending, (state, action) => {
    //   // Handle pending state for post update if needed
    // });

    // builder.addCase(deletenewsEvents.pending, (state, action) => {
    //   // Handle pending state for post deletion if needed
    // });
  },
});

export const { increment } = newsEventsSlice.actions;
export default newsEventsSlice.reducer;

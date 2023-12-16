import { API_BASE_URL } from "@/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let onProgressChangeCallback = null;
export const setOnProgressChangeCallback = (callback) => {
  onProgressChangeCallback = callback;
};
export let percentCompletedValue = 0;

export const getalbums = createAsyncThunk("get/categories", async () => {
  const config = { headers: {} };
  const response = await axios.get(
    `${API_BASE_URL}/api/album/categories`,
    config
  );
  return response.data;
});

export const postalbum = createAsyncThunk(
  "posts/album",
  async (post, thunkApi) => {
    const formData = new FormData();
    formData.append("albumName", post.albumName);
    formData.append("albumDate", post.date);
    formData.append("active", post.active);
    formData.append("image", post.image);

    const config = {
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
    };

    const response = await axios.post(
      `${API_BASE_URL}/api/album/album`,
      formData,
      config
    );
    return response.data;
  }
);
export const updatealbum = createAsyncThunk(
  "update/album",
  async (updatedPost, thunkApi) => {
    const formData = new FormData();
    formData.append("albumName", updatedPost.albumName);
    formData.append("albumDate", updatedPost.date);
    formData.append("active", updatedPost.active);
    formData.append("image", updatedPost.image);

    const config = {
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
    };

    const response = await axios.patch(
      `${API_BASE_URL}/api/album/album/${updatedPost.id}`,
      formData,
      config
    );
    return response.data;
  }
);

export const deletealbum = createAsyncThunk(
  "delete/album",
  async (postId, thunkApi) => {
    const config = {
      headers: {
        "auth-token": JSON.parse(localStorage.getItem("token")),
      },
    };

    await axios.delete(`${API_BASE_URL}/api/album/album/${postId}`, config);
    return postId;
  }
);

const initialState = {
  data: [],
  loading: false,
  posts: [],
};

const albumSlice = createSlice({
  name: "albums",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getalbums.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });

    builder.addCase(getalbums.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(postalbum.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.data.push(action.payload.data);
    });

    builder.addCase(updatealbum.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      let updatedData = state.data.filter(
        (e) => e._id !== updatedPost.album._id
      );
      updatedData.push(updatedPost.album);
      state.data = updatedData;
    });

    builder.addCase(deletealbum.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.data = state.data.filter((e) => e._id !== action.payload);
    });

    // builder.addCase(postalbum.pending, (state, action) => {
    //   // Handle pending state for post creation if needed
    // });

    // builder.addCase(updatealbum.pending, (state, action) => {
    //   // Handle pending state for post update if needed
    // });

    // builder.addCase(deletealbum.pending, (state, action) => {
    //   // Handle pending state for post deletion if needed
    // });
  },
});

export const { increment } = albumSlice.actions;
export default albumSlice.reducer;

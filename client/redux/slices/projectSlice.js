import { API_BASE_URL } from "@/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let onProgressChangeCallback = null;
export const setOnProgressChangeCallback = (callback) => {
  onProgressChangeCallback = callback;
};
export let percentCompletedValue = 0;

export const getprojects = createAsyncThunk("get/projects", async () => {
  const config = { headers: {} };
  const response = await axios.get(
    `${API_BASE_URL}/api/project/projects`,
    config
  );
  return response.data;
});

export const postproject = createAsyncThunk(
  "posts/project",
  async (post, thunkApi) => {
    const formData = new FormData();
    formData.append("title", post.projectTitle);
    formData.append("image", post.projectImage);
    formData.append("url", post.projectURL);
    formData.append("active", post.projectActive);
    formData.append("category", post.projectCategoryId);

    try {
      // Make the API request using axios
      const response = await axios.post(
        `${API_BASE_URL}/api/project/project`,
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

export const updateproject = createAsyncThunk(
  "update/project",
  async (updatedPost, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("title", updatedPost.projectTitle);
      formData.append("url", updatedPost.projectURL);
      formData.append("image", updatedPost.projectImage);
      formData.append("active", updatedPost.projectActive);
      formData.append("category", updatedPost.projectCategoryId);

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
        `${API_BASE_URL}/api/project/project/${updatedPost.id}`,
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

export const deleteproject = createAsyncThunk(
  "delete/project",
  async (postId, thunkApi) => {
    const config = {
      headers: {
        "auth-token": JSON.parse(localStorage.getItem("token")),
      },
    };

    await axios.delete(`${API_BASE_URL}/api/project/project/${postId}`, config);
    return postId;
  }
);

const initialState = {
  carData: [],
  loading: false,
  posts: [],
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getprojects.fulfilled, (state, action) => {
      state.loading = false;
      state.carData = action.payload;
    });

    builder.addCase(getprojects.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(postproject.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.carData.push(action.payload.project);
    });

    builder.addCase(updateproject.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      let updatedData = state.carData.filter(
        (e) => e._id !== updatedPost.project._id
      );
      updatedData.push(updatedPost.project);
      state.carData = updatedData;
    });

    builder.addCase(deleteproject.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.carData = state.carData.filter((e) => e._id !== action.payload);
    });

    // builder.addCase(postproject.pending, (state, action) => {
    //   // Handle pending state for post creation if needed
    // });

    // builder.addCase(updateproject.pending, (state, action) => {
    //   // Handle pending state for post update if needed
    // });

    // builder.addCase(deleteproject.pending, (state, action) => {
    //   // Handle pending state for post deletion if needed
    // });
  },
});

export const { increment } = projectSlice.actions;
export default projectSlice.reducer;

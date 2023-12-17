import { API_BASE_URL } from "@/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let onProgressChangeCallback = null;
export const setOnProgressChangeCallback = (callback) => {
  onProgressChangeCallback = callback;
};
export let percentCompletedValue = 0;

export const getimages = createAsyncThunk("get/images", async () => {
  const config = { headers: {} };
  const response = await axios.get(
    `${API_BASE_URL}/api/gallery/images`,
    config
  );
  return response.data;
});

export const postimage = createAsyncThunk(
  "post/image",
  async (imageDataForm, thunkApi) => {
    const formData = new FormData();
    formData.append("categoryId", imageDataForm.categoryId);
    for (var i = 0; i < imageDataForm.imageImage.length; i++) {
      formData.append("image", imageDataForm.imageImage[i]);
    }

    try {
      // Make the API request using axios
      const response = await axios.post(
        `${API_BASE_URL}/api/gallery/images`,
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

export const updateimage = createAsyncThunk(
  "update/image",
  async (imageDataForm, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("categoryId", imageDataForm.categoryId);
      if (imageDataForm.imageImage) {
        for (var i = 0; i < imageDataForm.imageImage.length; i++) {
          formData.append("image", imageDataForm.imageImage[i]);
        }
      }

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
        `${API_BASE_URL}/api/gallery/images/${imageDataForm.id}`,
        formData,
        config
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteimage = createAsyncThunk(
  "delete/image",
  async (postId, thunkApi) => {
    const config = {
      headers: {
        "auth-token": JSON.parse(localStorage.getItem("token")),
      },
    };

    await axios.delete(`${API_BASE_URL}/api/gallery/images/${postId}`, config);
    return postId;
  }
);

const initialState = {
  imageData: [],
  loading: false,
  posts: [],
};

const imageslice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getimages.fulfilled, (state, action) => {
      state.loading = false;
      state.imageData = action.payload;
    });

    builder.addCase(getimages.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(postimage.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.imageData.push(action.payload.image);
    });

    builder.addCase(updateimage.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      let updatedData = state.imageData.filter(
        (e) => e._id !== updatedPost.image._id
      );
      updatedData.push(updatedPost.image);
      state.imageData = updatedData;
    });

    builder.addCase(deleteimage.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.imageData = state.imageData.filter((e) => e._id !== action.payload);
    });

    // builder.addCase(postimage.pending, (state, action) => {
    //   // Handle pending state for post creation if needed
    // });

    // builder.addCase(updateimage.pending, (state, action) => {
    //   // Handle pending state for post update if needed
    // });

    // builder.addCase(deleteimage.pending, (state, action) => {
    //   // Handle pending state for post deletion if needed
    // });
  },
});

export const { increment } = imageslice.actions;
export default imageslice.reducer;

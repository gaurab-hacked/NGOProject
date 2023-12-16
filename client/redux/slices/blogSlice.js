import { API_BASE_URL } from "@/config";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let onProgressChangeCallback = null;
export const setOnProgressChangeCallback = (callback) => {
  onProgressChangeCallback = callback;
};
export let percentCompletedValue = 0;

export const getblogs = createAsyncThunk("get/blogs", async () => {
  const config = { headers: {} };
  const response = await axios.get(`${API_BASE_URL}/api/post/blogs`, config);
  return response.data;
});

export const postblog = createAsyncThunk(
  "post/blog",
  async (blogDataForm, thunkApi) => {
    const formData = new FormData();
    formData.append("categoryId", blogDataForm.categoryId);
    formData.append(
      "subcategoryId",
      blogDataForm.subCategoryId ? blogDataForm.subCategoryId : ""
    );
    formData.append("title", blogDataForm.blogTitle);
    formData.append("subtitle", blogDataForm.blogSubTitle);
    formData.append("description", blogDataForm.description);
    for (var i = 0; i < blogDataForm.blogImage.length; i++) {
      formData.append("image", blogDataForm.blogImage[i]);
    }

    try {
      // Make the API request using axios
      const response = await axios.post(
        `${API_BASE_URL}/api/post/blogs`,
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

export const updateblog = createAsyncThunk(
  "update/blog",
  async (blogDataForm, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append("categoryId", blogDataForm.categoryId);
      formData.append(
        "subcategoryId",
        blogDataForm.subCategoryId ? blogDataForm.subCategoryId : ""
      );
      formData.append("title", blogDataForm.blogTitle);
      formData.append("subtitle", blogDataForm.blogSubTitle);
      formData.append("description", blogDataForm.description);
      if (blogDataForm.blogImage) {
        for (var i = 0; i < blogDataForm.blogImage.length; i++) {
          formData.append("image", blogDataForm.blogImage[i]);
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
        `${API_BASE_URL}/api/post/blogs/${blogDataForm.id}`,
        formData,
        config
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteblog = createAsyncThunk(
  "delete/blog",
  async (postId, thunkApi) => {
    const config = {
      headers: {
        "auth-token": JSON.parse(localStorage.getItem("token")),
      },
    };

    await axios.delete(`${API_BASE_URL}/api/post/blogs/${postId}`, config);
    return postId;
  }
);

const initialState = {
  blogData: [],
  loading: false,
  posts: [],
};

const blogslice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getblogs.fulfilled, (state, action) => {
      state.loading = false;
      state.blogData = action.payload;
    });

    builder.addCase(getblogs.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(postblog.fulfilled, (state, action) => {
      state.posts.push(action.payload);
      state.blogData.push(action.payload.blog);
    });

    builder.addCase(updateblog.fulfilled, (state, action) => {
      const updatedPost = action.payload;
      let updatedData = state.blogData.filter(
        (e) => e._id !== updatedPost.blog._id
      );
      updatedData.push(updatedPost.blog);
      state.blogData = updatedData;
    });

    builder.addCase(deleteblog.fulfilled, (state, action) => {
      state.posts = state.posts.filter((post) => post._id !== action.payload);
      state.blogData = state.blogData.filter((e) => e._id !== action.payload);
    });

    // builder.addCase(postblog.pending, (state, action) => {
    //   // Handle pending state for post creation if needed
    // });

    // builder.addCase(updateblog.pending, (state, action) => {
    //   // Handle pending state for post update if needed
    // });

    // builder.addCase(deleteblog.pending, (state, action) => {
    //   // Handle pending state for post deletion if needed
    // });
  },
});

export const { increment } = blogslice.actions;
export default blogslice.reducer;

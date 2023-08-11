import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getbooks = createAsyncThunk(
  "book/getBooks",
  async (_, thunkApI) => {
    const { rejectedWithValue } = thunkApI;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const insertbook = createAsyncThunk(
  "book/insertbook",
  async (bookData, thunkApI) => {
    const { rejectedWithValue, getState } = thunkApI;

    try {
      bookData.userName = getState().auth.name;
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-type": "application/json ;charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);



export const deletbook = createAsyncThunk(
    "book/deletbook",
    async(id,thunkApI) => {
      const { rejectedWithValue } = thunkApI;
  
      try {
        const res = await fetch(`http://localhost:3005/books/${id}`, {
          method: "Delete",
        //   body: JSON.stringify(bookData),
          headers: {
            "Content-type": "application/json ;charset=UTF-8",
          },
        });
        return id;
      } catch (error) {
        return rejectedWithValue(error.message);
      }
    }
  );

const bookSlice = createSlice({
  name: "book",
  initialState: { books: [], isloading: false, error: null },
  reducers: {},
  extraReducers: {
    [getbooks.pending]: (state, action) => {
      state.isloading = true;
      state.error = null;
    },
    [getbooks.fulfilled]: (state, action) => {
      state.isloading = false;
      state.books =action.payload

    },
    [getbooks.rejected]: (state, action) => {
      state.isloading = false;
      state.error = action.payload;
      console.log(action);
    },





    [insertbook.pending]: (state, action) => {
        state.isloading = true;
        state.error = null;
      },
      [insertbook.fulfilled]: (state, action) => {
        state.isloading = false;
        state.books.push(action.payload);
      },
      [insertbook.rejected]: (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      },





      [deletbook.pending]: (state, action) => {
        state.isloading = true;
        state.error = null;
      },
      [deletbook.fulfilled]: (state, action) => {
        state.isloading = false;
        state.books=state.books.filter((el)=>el.id!==action.payload)
        // state.books.push(action.payload);
      },
      [deletbook.rejected]: (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      },
  },
});
export default bookSlice.reducer;

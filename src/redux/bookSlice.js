import { createSlice } from '@reduxjs/toolkit';
import initialBooks from '../data/books'; // dummy books data

const bookSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;
export default bookSlice.reducer;

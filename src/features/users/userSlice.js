import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Jon Doe' },
  { id: '1', name: 'Duje Lebowski' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const sellectAllUsers = (state) => state.users;

export default usersSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
	user: string;
};

const initialState: InitialState = {
	user: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
	user: string;
	email: string;
	phone: string;
};

const initialState: InitialState = {
	user: "",
	email: "",
	phone: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;

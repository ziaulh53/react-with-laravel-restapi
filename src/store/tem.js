import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {
    name: ''
  },
  sendEmailStatus: false
};

export const temSlice = createSlice({
  name: "tem",
  initialState,
  reducers: {
    updateData: (state, action) => {
        const {name } = action.payload;
        state.data = {
            name
        }
    },
    updateSendEmailStatus: (state, action) => {
        const {sendEmailStatus } = action.payload;
        state.sendEmailStatus = sendEmailStatus
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateData, updateSendEmailStatus } = temSlice.actions;

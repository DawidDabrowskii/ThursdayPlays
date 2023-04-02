import { createSlice } from '@reduxjs/toolkit';

interface teamsAmount {
  amount: number;
}

const teamsAmountSlice = createSlice({
  name: 'teamsAmount',
  initialState: {
    amount: {} as teamsAmount,
  },
  reducers: {
    setTeamsAmount(state, action) {
      state.amount = action.payload;
    },
  },
});

export const { setTeamsAmount } = teamsAmountSlice.actions;

export const teamsAmountView = (state: any) => state.teamsAmount.amount;
export const teamsAmountReducer = teamsAmountSlice.reducer;

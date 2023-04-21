import { createSlice } from '@reduxjs/toolkit';
import { Players } from '../../utils/Types';

const choosenPlayersSlice = createSlice({
  name: 'choosenPlayers',
  initialState: {
    choosenPlayersList: [] as Players[],
  },
  reducers: {
    add(state, action) {
      state.choosenPlayersList = state.choosenPlayersList.concat(
        action.payload
      );
    },
    remove(state, action) {
      return {
        ...state,
        choosenPlayersList: state.choosenPlayersList.filter(
          player => player.id !== action.payload.id
        ),
      };
    },
    reset(state) {
      return {
        ...state,
        choosenPlayersList: [],
      };
    },
  },
});

export const { add, remove, reset } = choosenPlayersSlice.actions;

export const choosenPlayersView = (state: any) =>
  state.choosenPlayers.choosenPlayersList;

export const choosenPlayersReducer = choosenPlayersSlice.reducer;

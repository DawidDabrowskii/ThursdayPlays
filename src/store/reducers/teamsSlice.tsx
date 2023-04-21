import { createSlice } from '@reduxjs/toolkit';
import { Players } from '../../utils/Types';

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    players: [] as Players[],
  },
  reducers: {
    add(state, action) {
      state.players = state.players
        .concat(action.payload.slice())
        .sort((a, b) => a.skillRate - b.skillRate);
    },
    resetPrevTeams(state) {
      return {
        ...state,
        players: [],
      };
    },
  },
});

export const { add, resetPrevTeams } = teamsSlice.actions;

export const teamPlayersView = (state: any) => state.teams.players;
export const teamsReducer = teamsSlice.reducer;

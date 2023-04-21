import { createSlice } from '@reduxjs/toolkit';
import { PlayersDetails } from '../../constants/playersData/PlayersDetails';

const playersSlice = createSlice({
  name: 'players',
  initialState: {
    playersList: PlayersDetails,
  },
  reducers: {},
});

export const playersView = (state: any) => state.players.playersList;

export const playersReducer = playersSlice.reducer;

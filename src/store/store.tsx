import { configureStore } from '@reduxjs/toolkit';
import { playersReducer } from './playersSlice';
import { choosenPlayersReducer } from './choosenPlayersSlice';
import { teamsReducer } from './teamsSlice';
import { teamsAmountReducer } from './teamsAmountSlice';

const store = configureStore({
  reducer: {
    players: playersReducer,
    choosenPlayers: choosenPlayersReducer,
    teams: teamsReducer,
    teamsAmount: teamsAmountReducer,
  },
});

export default store;

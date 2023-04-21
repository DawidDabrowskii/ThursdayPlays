import { configureStore } from '@reduxjs/toolkit';
import { playersReducer } from './reducers/playersSlice';
import { choosenPlayersReducer } from './reducers/choosenPlayersSlice';
import { teamsReducer } from './reducers/teamsSlice';
import { teamsAmountReducer } from './reducers/teamsAmountSlice';

const store = configureStore({
  reducer: {
    players: playersReducer,
    choosenPlayers: choosenPlayersReducer,
    teams: teamsReducer,
    teamsAmount: teamsAmountReducer,
  },
});

export default store;

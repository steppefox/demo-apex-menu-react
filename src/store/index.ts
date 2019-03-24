import { createStore, combineReducers } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { TLegendsState, legendsReducer } from "./legends";
import { TPlayersState, playersReducer } from "./players";

export type IState = {
  legends: TLegendsState;
  players: TPlayersState;
};

const reducers = combineReducers({
  legends: legendsReducer,
  players: playersReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));

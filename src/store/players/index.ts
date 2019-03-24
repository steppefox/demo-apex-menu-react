export const AMOUNT_OF_PLAYERS = 3;

export type TPlayer = {
  id: string;
  name: string;
  choice: string | null;
};

export type TPlayersState = {
  players: {
    [key: string]: TPlayer;
  };
  indexes: string[];
};

const initialState: TPlayersState = {
  players: {},
  indexes: []
};

export const playersReducer = (
  state: TPlayersState = initialState,
  action
): TPlayersState => {
  switch (action.type) {
    case "CONNECT_PLAYER":
      const player: TPlayer = action.payload;
      const playersList = {
        ...state.players,
        [player.id]: player
      };

      return {
        ...state,
        players: playersList,
        indexes: Object.keys(playersList)
      };
    default:
      return state;
  }
};

export const connectPlayer = (player: { id: string; name: string }) => {
  return {
    type: "CONNECT_PLAYER",
    payload: {
      id: player.id,
      name: player.name,
      choice: null
    }
  };
};

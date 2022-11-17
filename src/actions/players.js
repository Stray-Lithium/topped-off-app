export const Types = {
  PLAYERS_REQUEST: 'PLAYERS_REQUEST',
  PLAYERS_SUCCESS: 'PLAYERS_SUCCESS',
};

export const playersRequest = players => ({
  type: Types.PLAYERS_REQUEST,
  players,
});

export const playersSuccess = ({players}) => ({
  type: Types.PLAYERS_SUCCESS,
  players: {players},
});

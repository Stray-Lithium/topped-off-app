export const Types = {
  CURRENT_PLAYER_REQUEST: 'CURRENT_PLAYER_REQUEST',
  CURRENT_PLAYER_SUCCESS: 'CURRENT_PLAYER_SUCCESS',
};

export const currentPlayerRequest = currentPlayer => ({
  type: Types.CURRENT_PLAYER_REQUEST,
  currentPlayer,
});

export const currentPlayerSuccess = ({currentPlayer}) => ({
  type: Types.CURRENT_PLAYER_SUCCESS,
  currentPlayer: {currentPlayer},
});

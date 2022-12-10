export const Types = {
  GAME_VERSION_REQUEST: 'GAME_VERSION_REQUEST',
  GAME_VERSION_SUCCESS: 'GAME_VERSION_SUCCESS',
};

export const gameVersionRequest = gameVersion => ({
  type: Types.GAME_VERSION_REQUEST,
  gameVersion,
});

export const gameVersionSuccess = ({gameVersion}) => ({
  type: Types.GAME_VERSION_SUCCESS,
  gameVersion: {gameVersion},
});

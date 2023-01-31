export const Types = {
  CHECK_SCORE_REQUEST: 'CHECK_SCORE_REQUEST',
  CHECK_SCORE_SUCCESS: 'CHECK_SCORE_SUCCESS',
};

export const checkScoreRequest = checkScore => ({
  type: Types.CHECK_SCORE_REQUEST,
  checkScore,
});

export const checkScoreSuccess = ({checkScore}) => ({
  type: Types.CHECK_SCORE_SUCCESS,
  checkScore: {checkScore},
});

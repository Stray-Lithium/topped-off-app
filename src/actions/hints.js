export const Types = {
  HINTS_REQUEST: 'HINTS_REQUEST',
  HINTS_SUCCESS: 'HINTS_SUCCESS',
};

export const hintsRequest = hints => ({
  type: Types.HINTS_REQUEST,
  hints,
});

export const hintsSuccess = ({hints}) => ({
  type: Types.HINTS_SUCCESS,
  hints: {hints},
});

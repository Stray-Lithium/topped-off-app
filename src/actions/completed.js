export const Types = {
  COMPLETED_REQUEST: 'COMPLETED_REQUEST',
  COMPLETED_SUCCESS: 'COMPLETED_SUCCESS',
};

export const completedRequest = completed => ({
  type: Types.COMPLETED_REQUEST,
  completed,
});

export const completedSuccess = ({completed}) => ({
  type: Types.COMPLETED_SUCCESS,
  completed: {completed},
});

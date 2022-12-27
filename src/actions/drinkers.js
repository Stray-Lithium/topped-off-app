export const Types = {
  DRINKERS_REQUEST: 'DRINKERS_REQUEST',
  DRINKERS_SUCCESS: 'DRINKERS_SUCCESS',
};

export const drinkersRequest = drinkers => ({
  type: Types.DRINKERS_REQUEST,
  drinkers,
});

export const drinkersSuccess = ({drinkers}) => ({
  type: Types.DRINKERS_SUCCESS,
  drinkers: {drinkers},
});

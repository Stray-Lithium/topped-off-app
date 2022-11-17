export const Types = {
  CARD_COLOR_REQUEST: 'CARD_COLOR_REQUEST',
  CARD_COLOR_SUCCESS: 'CARD_COLOR_SUCCESS',
};

export const cardColorRequest = cardColor => ({
  type: Types.CARD_COLOR_REQUEST,
  cardColor,
});

export const cardColorSuccess = ({cardColor}) => ({
  type: Types.CARD_COLOR_SUCCESS,
  cardColor: {cardColor},
});

export const Types = {
  CARDS_REQUEST: 'CARDS_REQUEST',
  CARDS_SUCCESS: 'CARDS_SUCCESS',
};

export const cardsRequest = cards => ({
  type: Types.CARDS_REQUEST,
  cards,
});

export const cardsSuccess = ({cards}) => ({
  type: Types.CARDS_SUCCESS,
  cards: {cards},
});

export const Types = {
  CURRENT_CARD_REQUEST: 'CURRENT_CARD_REQUEST',
  CURRENT_CARD_SUCCESS: 'CURRENT_CARD_SUCCESS',
};

export const currentCardRequest = currentCard => ({
  type: Types.CURRENT_CARD_REQUEST,
  currentCard,
});

export const currentCardSuccess = ({currentCard}) => ({
  type: Types.CURRENT_CARD_SUCCESS,
  currentCard: {currentCard},
});

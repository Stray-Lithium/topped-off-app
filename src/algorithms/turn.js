import {useDispatch} from 'react-redux';
import {currentPlayerRequest} from '../actions/current-player';

export const playerTurn = players => {
  const dispatch = useDispatch();
  const randomWordIndex = Math.floor(Math.random() * players.length) + 0;
  const currentPlayer = players[randomWordIndex];
  dispatch(currentPlayerRequest(currentPlayer));
};

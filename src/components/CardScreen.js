import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import BackOfCard from './background/BackOfCard';
import {useDispatch, useSelector} from 'react-redux';
import {currentCardRequest} from '../actions/current-card';
import {currentPlayerRequest} from '../actions/current-player';
import {turnRandomizer} from '../algorithms/turn';

const CardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);

  const ingredientRandomizer = () => {
    const cards = [
      'lemonadeScore',
      'whiskeyScore',
      'martiniScore',
      'mojitoScore',
    ];
    const randomWordIndex = Math.floor(Math.random() * cards.length) + 0;
    const card = cards[randomWordIndex];
    console.log(card, 'card mate');
    dispatch(currentCardRequest({cardColor: `${card}`}));
  };

  useEffect(() => {
    if (!currentCard) {
      ingredientRandomizer();
    }
  }, [players, currentCard]);

  const storeCurrentCard = () => {
    const playerTurn = turnRandomizer(players);
    dispatch(currentPlayerRequest([playerTurn]));
    dispatch(currentCardRequest({cardColor: `${currentCard.cardColor}`}));
    navigation.navigate(
      currentCard.cardColor === 'lemonadeScore'
        ? 'Lemonade Players Screen'
        : 'Challenge Screen',
    );
  };
  console.log(currentCard, 'in card scree');

  if (currentCard && players) {
    console.log(currentCard, 'in card screen render');
    return (
      <ScreenContainer>
        <Background background={currentCard.cardColor} />
        <CardTouch onPress={() => storeCurrentCard()}>
          <BackOfCard image={currentCard.cardColor} />
        </CardTouch>
      </ScreenContainer>
    );
  }
};

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const CardTouch = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export default CardScreen;

import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import BackOfCard from './background/BackOfCard';
import {cardColorRequest} from '../actions/card-color';
import {useDispatch, useSelector} from 'react-redux';
import {currentPlayerRequest} from '../actions/current-player';

const CardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const cardColor = useSelector(state =>
    state.CardColor.cardColor ? state.CardColor.cardColor : false,
  );

  const ingredientRandomizer = () => {
    console.log('randomizing');
    const cards = [
      'lemonadeScore',
      'whiskeyScore',
      'martiniScore',
      'mojitoScore',
    ];
    const randomWordIndex = Math.floor(Math.random() * cards.length) + 0;
    const card = cards[randomWordIndex];
    dispatch(cardColorRequest(`${card}`));
  };

  useEffect(() => {
    console.log();
    if (!cardColor) {
      console.log('random');
      ingredientRandomizer();
    }
  }, [players, cardColor]);

  const storeCurrentCard = () => {
    const randomNameIndex = Math.floor(Math.random() * players.length) + 0;
    const currentPlayer = players[randomNameIndex];
    setIngredientCardToRender(false);
    dispatch(currentPlayerRequest([currentPlayer.name]));
    dispatch(cardColorRequest(`${cardColor}`));
    navigation.navigate(
      cardColor === 'lemonadeScore'
        ? 'Lemonade Players Screen'
        : 'Challenge Screen',
    );
  };

  console.log('in here', cardColor);
  if (cardColor !== false && players) {
    return (
      <ScreenContainer>
        <Background background={cardColor} />
        <CardTouch onPress={() => storeCurrentCard()}>
          <BackOfCard image={cardColor} />
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

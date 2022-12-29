import React, {useEffect} from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import BackOfCard from './background/BackOfCard';
import {useDispatch, useSelector} from 'react-redux';
import {currentCardRequest} from '../actions/current-card';
import {currentPlayerRequest} from '../actions/current-player';
import {turnRandomizer} from '../algorithms/turn';
import CardScreenBackground from './background/CardScreenBackgrounds';

const CardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);

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

  const storeCurrentCard = cardColor => {
    const playerTurn = turnRandomizer(players);
    dispatch(currentPlayerRequest([playerTurn]));
    dispatch(currentCardRequest({cardColor: `${cardColor}`}));
    console.log(cardColor, 'cardddd colorrr');
    navigation.navigate(
      cardColor === 'lemonadeScore'
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
        {gameVersion === 'FULL' ? (
          <>
            <Background background={currentCard.cardColor} />
            <CardTouch onPress={() => storeCurrentCard(currentCard.cardColor)}>
              <BackOfCard image={currentCard.cardColor} />
            </CardTouch>
          </>
        ) : (
          <>
            <Background />
            <Title>Pick a card</Title>
            <CardsContainer>
              <CardSelect onPress={() => storeCurrentCard('whiskeyScore')}>
                <CardScreenBackground image={'whiskeyScore'} />
              </CardSelect>
              <CardSelect onPress={() => storeCurrentCard('mojitoScore')}>
                <CardScreenBackground image={'mojitoScore'} />
              </CardSelect>
              <CardSelect onPress={() => storeCurrentCard('martiniScore')}>
                <CardScreenBackground image={'martiniScore'} />
              </CardSelect>
              <CardSelect onPress={() => storeCurrentCard('lemonadeScore')}>
                <CardScreenBackground image={'lemonadeScore'} />
              </CardSelect>
            </CardsContainer>
          </>
        )}
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

const Title = styled.Text`
  font-family: Morning Breeze;
  font-size: 36px;
  margin-bottom: 12px;
`;

const CardsContainer = styled.View`
  width: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.View`
  background-color: black;
  height: 40px;
  margin: 4px;
  width: 45%;
  height: 200px;
`;

const CardSelect = styled.Pressable``;

export default CardScreen;

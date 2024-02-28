import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import BackOfCard from './background/BackOfCard';
import {useDispatch, useSelector} from 'react-redux';
import {currentCardRequest} from '../actions/current-card';
import {currentPlayerRequest} from '../actions/current-player';
import {turnRandomizer} from '../algorithms/card';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardBottomBar from './bar/CardBottomBar';
import {buttonClickSound} from './sound/sounds';

const CardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const cards = useSelector(state => state.Cards.cards);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);

  const displayHint = () => {
    let total = 0;
    cards.turns.forEach(turn => {
      console.log(turn);
      total += turn.turns;
    });
    return total === 0;
  };
  const isDisplayHint = displayHint();

  const ingredientRandomizer = () => {
    const cardNames = [
      'martiniScore',
      'lemonadeScore',
      'whiskeyScore',
      'mojitoScore',
    ];
    // dispatch(currentCardRequest({cardColor: `lemonadeScore`}));
    const isFirstTurn = () => {
      let total = 0;
      players.forEach(player => {
        if (player.turns > 0) {
          total += player.turns;
        }
      });
      return total === 0;
    };
    const firstTurn = isFirstTurn();
    if (!firstTurn) {
      const card = turnRandomizer(cards.turns);
      dispatch(currentCardRequest({cardColor: `${card}`}));
    } else {
      const randomWordIndex = Math.floor(Math.random() * cardNames.length) + 0;
      const card = cardNames[randomWordIndex];
      dispatch(currentCardRequest({cardColor: `${card}`}));
    }
  };

  useEffect(() => {
    if (!currentCard && players) {
      ingredientRandomizer();
    }
    // if (!currentCard && gameVersion === 'FULL' && players) {
    //   ingredientRandomizer();
    // }
    if (!currentCard && gameVersion === 'CARD') {
      dispatch(currentCardRequest({cardColor: 'gray'}));
    }
  }, [players, currentCard, gameVersion, cards]);

  const storeCurrentPlayerAndCard = pressedCard => {
    buttonClickSound.play();
    const playerTurn = turnRandomizer(players);
    dispatch(currentPlayerRequest([playerTurn]));
    if (gameVersion === 'CARD') {
      dispatch(currentCardRequest({cardColor: pressedCard}));
      console.log(pressedCard, 'navigating to');
      navigation.navigate(
        pressedCard === 'lemonadeScore'
          ? 'Lemonade Players Screen'
          : 'Challenge Screen',
      );
    } else {
      navigation.navigate(
        currentCard.cardColor === 'lemonadeScore'
          ? 'Lemonade Players Screen'
          : 'Challenge Screen',
      );
    }
  };

  const fullVersion = () => {
    return (
      <CardTouch onPress={() => storeCurrentPlayerAndCard()}>
        <BackOfCard drink={currentCard.cardColor} />
      </CardTouch>
    );
  };

  const cardVersion = () => {
    return (
      <>
        {/* <Title>Pick a card</Title>
        <CardsContainer>
          <CardSelect onPress={() => storeCurrentPlayerAndCard('whiskeyScore')}>
            <CardScreenBackground image={'whiskeyScore'} />
          </CardSelect>
          <CardSelect onPress={() => storeCurrentPlayerAndCard('mojitoScore')}>
            <CardScreenBackground image={'mojitoScore'} />
          </CardSelect>
          <CardSelect onPress={() => storeCurrentPlayerAndCard('martiniScore')}>
            <CardScreenBackground image={'martiniScore'} />
          </CardSelect>
          <CardSelect
            onPress={() => storeCurrentPlayerAndCard('lemonadeScore')}>
            <CardScreenBackground image={'lemonadeScore'} />
          </CardSelect>
        </CardsContainer> */}
      </>
    );
  };

  if (currentCard && players && cards) {
    return (
      <>
        <Background background={'Card Screen'} />
        <SafeAreaView style={{flex: 1}}>
          <RulesText>
            {isDisplayHint ? 'Click on the card below to start.' : ''}
          </RulesText>
          <ScreenContainer>{fullVersion()}</ScreenContainer>
          <CardBottomBar navigation={navigation} />
        </SafeAreaView>
      </>
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

const CardSelect = styled.Pressable``;

const RulesText = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
  text-align: center;
  color: #ffcf00;
  font-family: Morning Breeze;
`;

export default CardScreen;

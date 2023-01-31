import React, {useEffect} from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import BackOfCard from './background/BackOfCard';
import {useDispatch, useSelector} from 'react-redux';
import {currentCardRequest} from '../actions/current-card';
import {currentPlayerRequest} from '../actions/current-player';
import {turnRandomizer} from '../algorithms/turn';
import CardScreenBackground from './background/CardScreenBackgrounds';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomBar from './bar/BottomBar';

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
    dispatch(currentCardRequest({cardColor: `${card}`}));
  };

  useEffect(() => {
    if (!currentCard && gameVersion === 'FULL') {
      ingredientRandomizer();
    }
    if (!currentCard && gameVersion === 'CARD') {
      dispatch(currentCardRequest({cardColor: 'gray'}));
    }
  }, [players, currentCard, gameVersion]);

  const storeCurrentPlayerAndCard = () => {
    const playerTurn = turnRandomizer(players);
    dispatch(currentPlayerRequest([playerTurn]));
    if (gameVersion === 'CARD') {
      dispatch(currentCardRequest({cardColor: `${currentCard.cardColor}`}));
    }
    navigation.navigate(
      currentCard.cardColor === 'lemonadeScore'
        ? 'Lemonade Players Screen'
        : 'Challenge Screen',
    );
  };

  const fullVersion = () => {
    return (
      <CardTouch onPress={() => storeCurrentPlayerAndCard()}>
        <BackOfCard image={currentCard.cardColor} />
      </CardTouch>
    );
  };

  const cardVersion = () => {
    return (
      <>
        <Title>Pick a card</Title>
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
        </CardsContainer>
      </>
    );
  };

  if (currentCard && players && gameVersion) {
    return (
      <>
        <Background
          background={gameVersion === 'FULL' ? currentCard.cardColor : null}
        />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            {gameVersion === 'FULL' ? fullVersion() : cardVersion()}
          </ScreenContainer>
          <BottomBar navigation={navigation} />
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

const Card = styled.View`
  background-color: black;
  height: 40px;
  margin: 4px;
  width: 45%;
  height: 200px;
`;

const CardSelect = styled.Pressable``;

const BottomBarContainer = styled.View``;

export default CardScreen;

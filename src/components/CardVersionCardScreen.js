import Background from '../components/background/Background';
import styled from 'styled-components';
import CardScreenBackground from './background/CardScreenBackgrounds';
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {cardColorRequest} from '../actions/card-color';
import {playerTurn} from '../algorithms/turn';
import {useEffect, useState} from 'react';
import {currentPlayerRequest} from '../actions/current-player';
import {currentCardRequest} from '../actions/current-card';

const CardVersionCardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [turn, setTurn] = useState(false);
  const players = useSelector(state => state.Players.players);

  const storeCurrentName = () => {
    const randomNameIndex = Math.floor(Math.random() * players.length) + 0;
    const currentPlayer = players[randomNameIndex];
    return currentPlayer;
  };

  useEffect(() => {
    if (!turn && players) {
      setTurn(storeCurrentName());
    }
  }, [players]);

  const process = card => {
    dispatch(currentCardRequest({cardColor: `${card}Score`}));
    dispatch(currentPlayerRequest([turn.name]));
    navigation.navigate('Challenge Screen');
  };

  return (
    <>
      <Background />
      <ScreenContainer>
        <Title>Pick a card</Title>
        <CardsContainer>
          <Pressable onPress={() => process('whiskey')}>
            <CardScreenBackground image={'whiskeyScore'} />
          </Pressable>
          <Pressable onPress={() => process('mojito')}>
            <CardScreenBackground image={'mojitoScore'} />
          </Pressable>
          <Pressable onPress={() => process('martini')}>
            <CardScreenBackground image={'martiniScore'} />
          </Pressable>
          <Pressable onPress={() => process('lemonade')}>
            <CardScreenBackground image={'lemonadeScore'} />
          </Pressable>
        </CardsContainer>
      </ScreenContainer>
    </>
  );
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

export default CardVersionCardScreen;

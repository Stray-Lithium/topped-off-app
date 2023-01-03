import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import {useDispatch, useSelector} from 'react-redux';
import {currentPlayerRequest} from '../actions/current-player';

const DrinkScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const drinkers = useSelector(state => state.Drinkers.drinkers);
  const [stealer, setStealer] = useState([]);

  const stealChecker = () => {
    let potentialStealers = [];
    players.forEach(player => {
      if (
        player.name !== currentPlayer[0] &&
        player[`${currentCard.cardColor}`] < 1
      ) {
        potentialStealers.push(player.name);
      }
    });
    const randomPlayerIndex =
      Math.floor(Math.random() * potentialStealers.length) + 0;
    const stealer = potentialStealers[randomPlayerIndex];
    setStealer([stealer]);
    return stealer;
  };

  useEffect(() => {
    if (stealer.length === 0) {
      stealChecker();
    }
  }, [players, currentPlayer, drinkers, currentCard]);

  const drinkTitle = () => {
    let title = '';
    drinkers.forEach((player, index) => {
      if (drinkers.length === 1 || index !== drinkers.length - 1) {
        title += `${player} `;
      } else {
        title += `and ${player}, `;
      }
    });
    return title;
  };

  const confirm = () => {
    navigation.navigate('Score Screen');
  };

  const steal = () => {
    dispatch(currentPlayerRequest(stealer));
    navigation.navigate('Challenge Screen');
  };

  if (players && currentPlayer && drinkers && currentCard) {
    return (
      <>
        <Background />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            <Title>{`${drinkTitle()}you must drink!`}</Title>
            {stealer.length > 0 && currentCard.cardColor !== 'lemonadeScore' ? (
              <>
                <Title>{`${stealer[0]}, do you want to steal?`}</Title>
                <ButtonContainer onPress={() => steal()}>
                  <CustomButton>YES</CustomButton>
                </ButtonContainer>
                <ButtonContainer onPress={() => confirm()}>
                  <CustomButton>NO</CustomButton>
                </ButtonContainer>
              </>
            ) : (
              <ButtonContainer onPress={() => confirm()}>
                <CustomButton>NEXT ROUND</CustomButton>
              </ButtonContainer>
            )}
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <Background />;
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

const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  width: 90%;
  font-family: Morning Breeze;
`;

const CheckboxesContainer = styled.ScrollView`
  display: flex;
  max-height: 50%;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const NamePosition = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;

const PlayerName = styled.Text`
  font-size: 20px;
  font-family: Morning Breeze;
  margin-right: 10px;
`;

const CheckboxPosition = styled.View`
  display: flex;
  align-items: center;
  align-items: flex-start;
  width: 50%;
`;

const ButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #ee3347;
  border-radius: 10px;
  border: solid 3px black;
  margin-bottom: 20px;
`;

const CustomButton = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
  padding: 12px 12px 12px 12px;
  letter-spacing: 5px;
  font-family: Morning Breeze;
  overflow: hidden;
`;

export default DrinkScreen;

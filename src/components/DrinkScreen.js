import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import {useSelector} from 'react-redux';

const DrinkScreen = ({navigation}) => {
  const players = useSelector(state => state.Players.players);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const drinkers = useSelector(state => state.Drinkers.drinkers);

  useEffect(() => {}, [players, currentPlayer, drinkers]);

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

  if (players && currentPlayer && drinkers) {
    return (
      <>
        <Background />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            <Title>{`${drinkTitle()} you must drink!`}</Title>
            <ButtonContainer onPress={() => confirm()}>
              <CustomButton>NEXT ROUND</CustomButton>
            </ButtonContainer>
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <Background />;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 50,
    height: 50,
  },
});

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

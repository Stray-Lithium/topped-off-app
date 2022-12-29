import React, {useEffect, useState} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import styled from 'styled-components';
import Background from './background/Background';
import {playersRequest} from '../actions/players';
import {drinkersRequest} from '../actions/drinkers';
import {useDispatch, useSelector} from 'react-redux';
import {storeWinners} from './storage/storage';

const LemonadeWhoCompletedScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const [checkedNames, setCheckedNames] = useState([]);

  useEffect(() => {}, [players, currentPlayer]);

  const checkboxClick = checkName => {
    if (!checkedNames.includes(checkName)) {
      setCheckedNames([...checkedNames, checkName]);
    } else {
      let filter = checkedNames.filter(player => player !== checkName);
      setCheckedNames(filter);
    }
  };

  const checkBoxes = () => {
    return (
      <>
        {currentPlayer.map(player => {
          return (
            <>
              <CheckboxContainer>
                <NamePosition>
                  <PlayerName>{player}</PlayerName>
                </NamePosition>
                <CheckboxPosition>
                  <Pressable
                    onPress={() => checkboxClick(player)}
                    style={styles.checkbox}>
                    <AnimatedCheckbox
                      checked={checkedNames.includes(player)}
                      highlightColor="#ee3347"
                      checkmarkColor="#ffffff"
                      boxOutlineColor="#000000"
                    />
                  </Pressable>
                </CheckboxPosition>
              </CheckboxContainer>
            </>
          );
        })}
      </>
    );
  };

  const setDrinkers = () => {
    const drinkers = [];
    currentPlayer.forEach(player => {
      if (!checkedNames.includes(player)) {
        drinkers.push(player);
      }
    });
    dispatch(drinkersRequest(drinkers));
  };

  const winnersCheck = updatedPlayers => {
    let winningPlayers = [];
    updatedPlayers.forEach(player => {
      if (
        player.whiskeyScore === 1 &&
        player.mojitoScore === 1 &&
        player.martiniScore === 1 &&
        player.lemonadeScore === 1
      ) {
        winningPlayers.push(player.name);
      }
    });
    console.log(winningPlayers, 'winners');
    if (winningPlayers.length > 0) {
      storeWinners(winningPlayers);
      navigation.navigate('End Screen');
    } else {
      navigation.navigate('Drink Screen');
    }
  };

  const setCompleted = () => {
    let playersCopy = players;
    let updatedPlayers = [];
    playersCopy.forEach(player => {
      if (currentPlayer.includes(player.name)) {
        player.turns += 1;
      }
      if (checkedNames.includes(player.name)) {
        player[currentCard.cardColor] += 1;
        updatedPlayers.push(player);
      } else {
        updatedPlayers.push(player);
      }
    });
    dispatch(playersRequest(updatedPlayers));
    winnersCheck(updatedPlayers);
  };

  const confirm = () => {
    setDrinkers();
    if (checkedNames) {
      setCompleted();
    }
  };

  if ((players, currentPlayer)) {
    return (
      <>
        <Background />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            <Title>WHO COMPLETED THE CHALLENGE?</Title>
            <CheckboxesContainer>{checkBoxes()}</CheckboxesContainer>
            <ButtonContainer onPress={() => confirm()}>
              <CustomButton>CONFIRM</CustomButton>
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

export default LemonadeWhoCompletedScreen;

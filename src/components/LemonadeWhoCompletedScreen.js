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
import LemonadeConfirmButton from './button/LemonadeConfirmButton';

const LemonadeWhoCompletedScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const [checkedNames, setCheckedNames] = useState([]);
  const [yesOrNo, setYesOrNo] = useState([]);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    if (yesOrNo.length > 0) {
      setDisplayMessage(false);
    }
  }, [players, currentPlayer, yesOrNo]);

  const checkboxClick = checkName => {
    setCheckedNames([checkName]);
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

  const yesAndNoMap = ['Yes', 'No'];

  const yesOrNoClick = current => {
    if (current === 'Yes') {
      setCheckedNames([currentPlayer[0]]);
    } else {
      setCheckedNames([]);
    }
    setYesOrNo(current);
  };

  const yesOrNoBoxes = () => {
    return (
      <>
        {yesAndNoMap.map(current => {
          return (
            <>
              <CheckboxContainer>
                <NamePosition>
                  <PlayerName>{current}</PlayerName>
                </NamePosition>
                <CheckboxPosition>
                  <Pressable
                    onPress={() => yesOrNoClick(current)}
                    style={styles.checkbox}>
                    <AnimatedCheckbox
                      checked={yesOrNo.includes(current)}
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

  const winnersCheck = updatedPlayers => {
    const setDrinkers = () => {
      const drinkers = [];
      currentPlayer.forEach(player => {
        if (!checkedNames.includes(player)) {
          drinkers.push(player);
        }
      });
      if (drinkers.length > 0) {
        dispatch(drinkersRequest(drinkers));
      }
      return drinkers.length > 0 ? drinkers : false;
    };
    const isDrinkers = setDrinkers();

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
    if (winningPlayers.length > 0) {
      storeWinners(winningPlayers);
      navigation.navigate('End Screen');
    } else if (currentPlayer.length === 1) {
      if (isDrinkers) {
        navigation.navigate('Drink Screen');
      } else {
        navigation.navigate('Score Screen');
      }
    } else {
      navigation.navigate('Score Screen');
    }
  };

  const setCompleted = () => {
    let playersCopy = players;
    let updatedPlayers = [];
    playersCopy.forEach(player => {
      if (checkedNames.includes(player.name)) {
        player.turns += 1;
        if (player[currentCard.cardColor] === 0) {
          player[currentCard.cardColor] += 1;
        }
        updatedPlayers.push(player);
      } else {
        if (
          player[currentCard.cardColor] === 1 &&
          !checkedNames.includes(player.name) &&
          currentPlayer.includes(player.name)
        ) {
          player[currentCard.cardColor] -= 1;
        }
        updatedPlayers.push(player);
      }
    });
    dispatch(playersRequest(updatedPlayers));
    winnersCheck(updatedPlayers);
  };

  const confirm = () => {
    if (yesOrNo.length === 0 && currentPlayer.length === 1) {
      setDisplayMessage(true);
    } else {
      setCompleted();
    }
  };

  if ((players, currentPlayer)) {
    return (
      <>
        <Background />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            {currentPlayer.length > 1 ? (
              <>
                <Title>WHO WON THE CHALLENGE?</Title>
                <CheckboxesContainer>{checkBoxes()}</CheckboxesContainer>
              </>
            ) : (
              <>
                <Title>
                  DID{' '}
                  <Title style={{color: 'yellow'}}>{currentPlayer[0]} </Title>
                  BEAT EVERYONE ELSE?
                </Title>
                <CheckboxesContainer>{yesOrNoBoxes()}</CheckboxesContainer>
              </>
            )}
            {displayMessage ? (
              <Message>Please select 'Yes' or 'No' to continue.</Message>
            ) : (
              <></>
            )}
            <ButtonBar>
              <ButtonContainer onPress={() => confirm()}>
                <LemonadeConfirmButton />
              </ButtonContainer>
            </ButtonBar>
            {/* <ButtonContainer onPress={() => confirm()}>
              <CustomButton>CONFIRM</CustomButton>
            </ButtonContainer> */}
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
  width: 80%;
  font-family: Morning Breeze;
`;

const CheckboxesContainer = styled.ScrollView`
  display: flex;
  max-height: 40%;
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

// const ButtonContainer = styled.Pressable`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 50%;
//   background-color: #ee3347;
//   border-radius: 10px;
//   border: solid 3px black;
//   margin-bottom: 20px;
// `;

// const CustomButton = styled.Text`
//   text-align: center;
//   color: black;
//   font-size: 26px;
//   padding: 12px 12px 12px 12px;
//   letter-spacing: 5px;
//   font-family: Morning Breeze;
//   overflow: hidden;
// `;

const Message = styled.Text`
  width: 80%;
  padding: 20px 0 20px 0;
  text-align: center;
  color: yellow;
  font-size: 26px;
  font-family: Morning Breeze;
`;

const ButtonBar = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0px;
`;

const ButtonContainer = styled.Pressable`
  margin: 0 3px 0 3px;
`;

export default LemonadeWhoCompletedScreen;

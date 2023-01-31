import React, {useEffect, useState} from 'react';
import {StyleSheet, Pressable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';
import styled from 'styled-components';
import Background from './background/Background';
import Button from './button/Button';
import {lemonadeBlankFill} from '../blanks/lemonade';
import {currentPlayerRequest} from '../actions/current-player';
import {useDispatch, useSelector} from 'react-redux';
import LemonadeConfirmButton from './button/LemonadeConfirmButton';
import RefreshButton from './button/RefreshButton';

const LemonadePlayersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const [lemonFill, setLemonFill] = useState(false);
  const [checkedNames, setCheckedNames] = useState([]);
  const [displayRefresh, setDisplayRefresh] = useState(false);

  useEffect(() => {
    if (!lemonFill) {
      setLemonFill(lemonadeBlankFill().toUpperCase());
    }
  }, [lemonFill, players]);

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
        {players.map(player => {
          return (
            <>
              <CheckboxContainer>
                <NamePosition>
                  <PlayerName>{player.name}</PlayerName>
                </NamePosition>
                <CheckboxPosition>
                  <Pressable
                    onPress={() => checkboxClick(player.name)}
                    style={styles.checkbox}>
                    <AnimatedCheckbox
                      checked={checkedNames.includes(player.name)}
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

  const confirm = () => {
    if (checkedNames.length > 0) {
      dispatch(currentPlayerRequest(checkedNames));
      navigation.navigate('Challenge Screen');
    } else {
      setDisplayRefresh(true);
    }
  };

  if (lemonFill && players) {
    return (
      <>
        <Background />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            <Title>{lemonFill}?</Title>
            <CheckboxesContainer>{checkBoxes()}</CheckboxesContainer>
            {displayRefresh ? (
              <RefreshMessage>
                Please select a player or refresh the prompt if no one applies
              </RefreshMessage>
            ) : (
              <></>
            )}
            <ButtonBar>
              {displayRefresh ? (
                <ButtonContainer onPress={() => setLemonFill(false)}>
                  <RefreshButton displayRefresh={true} />
                </ButtonContainer>
              ) : (
                <></>
              )}
              <ButtonContainer onPress={() => confirm()}>
                <LemonadeConfirmButton />
              </ButtonContainer>
            </ButtonBar>
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

const RefreshMessage = styled.Text`
  width: 80%;
  padding: 20px 0 20px 0;
  text-align: center;
  color: yellow;
  font-size: 26px;
  font-family: Morning Breeze;
`;

export default LemonadePlayersScreen;

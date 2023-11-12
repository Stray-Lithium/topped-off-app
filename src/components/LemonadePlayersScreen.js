import React, {useEffect, useState} from 'react';
import {StyleSheet, Pressable, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as R from 'ramda';
import styled from 'styled-components';
import Background from './background/Background';
import {lemonadeBlankData} from '../blanks/lemonade-data';
import {currentPlayerRequest} from '../actions/current-player';
import {useDispatch, useSelector} from 'react-redux';
import RefreshButtonSvg from '../assets/buttons/RefreshButtonSvg.js';
import Unchecked from '../assets/checkbox/Unchecked';
import Checked from '../assets/checkbox/Checked';
import YellowArrowRightTwoSvg from '../assets/buttons/YellowArrowRightTwoSvg';
import {buttonClickSound, menuSound, quitSound} from './sound/sounds';
import {isInset} from './inset/insets';

const LemonadePlayersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const cards = useSelector(state => state.Cards.cards);
  const hints = useSelector(state => state.Hints.hints);
  const [lemonFill, setLemonFill] = useState(false);
  const [checkedNames, setCheckedNames] = useState([]);

  const windowWidth = Dimensions.get('window').width * 0.92;
  const baseValue = windowWidth * 0.18;

  const cardReset = () => {
    return R.clone(lemonadeBlankData);
  };

  const changeAndDeleteBlank = () => {
    const blankPath = cards.cardData.lemonadeScore.blanks;
    if (blankPath.length === 0) {
      const reset = cardReset();
      cards.cardData.lemonadeScore.blanks = reset;
    }
    const randomIndex = Math.floor(Math.random() * blankPath.length) + 0;
    const blank = blankPath[randomIndex];
    blankPath.forEach((item, index) => {
      if (item.id === blank.id) {
        blankPath.splice(index, 1);
      }
    });
    return blank;
  };

  useEffect(() => {
    if (!lemonFill) {
      setLemonFill(changeAndDeleteBlank());
    }
  }, [lemonFill, players, cards, hints]);

  const checkboxClick = checkName => {
    if (!checkedNames.includes(checkName)) {
      buttonClickSound.play();
      setCheckedNames([...checkedNames, checkName]);
    } else {
      quitSound.play();
      let filter = checkedNames.filter(player => player !== checkName);
      setCheckedNames(filter);
    }
  };

  const renderCheckBox = ({item}) => {
    return (
      <CheckboxContainer>
        <NamePosition>
          <PlayerName>{item.name}</PlayerName>
        </NamePosition>
        <CheckboxPosition>
          <Pressable
            onPress={() => checkboxClick(item.name)}
            style={styles.checkbox}>
            {checkedNames.includes(item.name) ? <Checked /> : <Unchecked />}
          </Pressable>
        </CheckboxPosition>
      </CheckboxContainer>
    );
  };

  const refreshClick = () => {
    menuSound.play();
    setLemonFill(changeAndDeleteBlank());
  };

  const confirm = () => {
    buttonClickSound.play();
    if (checkedNames.length > 0) {
      dispatch(currentPlayerRequest(checkedNames));
      hints.headToHead && checkedNames.length === 1
        ? navigation.navigate('Hints Screen')
        : navigation.navigate('Challenge Screen');
    }
  };

  if (lemonFill && players && cards && hints) {
    return (
      <>
        <Background background={'Lemonade Players Screen'} />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            <Title>{lemonFill.content}?</Title>
            <CheckBoxes
              data={players}
              renderItem={renderCheckBox}
              keyExtractor={item => {
                return `#${item.name}`;
              }}
            />
            <RefreshMessage>
              Please select a player or refresh the prompt if no one applies
            </RefreshMessage>
            <ButtonBar
              style={{
                height: baseValue,
                width: windowWidth * 0.6,
                marginBottom: isInset(),
              }}>
              <Pressable onPress={() => refreshClick()}>
                <RefreshButtonSvg height={baseValue} width={baseValue} />
              </Pressable>
              <Pressable onPress={() => confirm()}>
                <YellowArrowRightTwoSvg
                  width={baseValue * 2 + windowWidth * 0.02}
                  height={baseValue}
                />
              </Pressable>
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
    width: 60,
    height: 60,
  },
});

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 48px;
  margin-bottom: 14px;
  padding-bottom: 6px;
  text-align: center;
  width: 90%;
  font-family: Morning Breeze Bold;
  color: #ffcf00;
`;

const CheckBoxes = styled.FlatList`
  width: 90%;
  max-height: 60%;
  margin-top: 48px;
`;

const CheckboxContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const NamePosition = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 55%;
`;

const PlayerName = styled.Text`
  font-size: 24px;
  font-family: Morning Breeze;
  margin-right: 10px;
  color: #ffcd00;
`;

const CheckboxPosition = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 45%;
`;

const ButtonBar = styled.View`
  flex: 1;
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  bottom: 0px;
`;

const RefreshMessage = styled.Text`
  width: 80%;
  padding: 20px 0 20px 0;
  margin-bottom: 80px;
  text-align: center;
  color: #ffcf00;
  font-size: 26px;
  font-family: Morning Breeze;
`;

export default LemonadePlayersScreen;

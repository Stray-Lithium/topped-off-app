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
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const LemonadePlayersScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const [lemonFill, setLemonFill] = useState(false);
  const [checkedNames, setCheckedNames] = useState([]);
  const [displayRefresh, setDisplayRefresh] = useState(false);

  const windowWidth = Dimensions.get('window').width;

  const baseValue = windowWidth * 0.18;

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
    if (checkedNames.length > 0) {
      setDisplayRefresh(false);
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
            <AnimatedCheckbox
              checked={checkedNames.includes(item.name)}
              highlightColor="#ee3347"
              checkmarkColor="#ffffff"
              boxOutlineColor="#000000"
            />
          </Pressable>
        </CheckboxPosition>
      </CheckboxContainer>
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

  // console.log(players, 'hahaha');

  if (lemonFill && players) {
    return (
      <>
        <Background background={'Lemonade Players Screen'} />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            <Title>{lemonFill}?</Title>
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
            <ButtonBar>
              <ImageContainer>
                <Pressable onPress={() => setLemonFill(false)}>
                  <AutoHeightImage
                    width={baseValue}
                    source={require(`../assets/refresh-button.png`)}
                  />
                </Pressable>
                <Pressable onPress={() => confirm()}>
                  <AutoHeightImage
                    width={baseValue * 4}
                    source={require(`../assets/red-button-four.png`)}>
                    <PlayContainer>
                      <PlayText>CONFIRM</PlayText>
                    </PlayContainer>
                  </AutoHeightImage>
                </Pressable>
              </ImageContainer>
            </ButtonBar>
            {/* <ButtonContainer onPress={() => confirm()}>
                <LemonadeConfirmButton />
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
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-top: 48px;
  margin-bottom: 20px;
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
  justify-content: center;
  width: 100%;
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

const ImageContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PlayContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayText = styled.Text`
  text-align: center;
  color: #262020;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
`;

export default LemonadePlayersScreen;

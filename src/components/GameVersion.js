import * as React from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import {gameVersionRequest} from '../actions/game-version';
import {buttonShadow} from './button/button-shadow';
import GameVersionButtons from './button/game-version-buttons';

const GameVersionScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const confirm = version => {
    dispatch(gameVersionRequest(version));
    navigation.navigate('Names Screen');
  };

  return (
    <ScreenContainer>
      <Background />
      <ButtonContainer onPress={() => confirm('FULL')}>
        <GameVersionButtons button={'DIGITAL VERSION'} />
      </ButtonContainer>
      <ButtonContainer onPress={() => confirm('CARD')} style={buttonShadow}>
        <GameVersionButtons button={'CARD VERSION'} />
      </ButtonContainer>
    </ScreenContainer>
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

const ButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
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

export default GameVersionScreen;

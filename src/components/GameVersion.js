import * as React from 'react-native';
import {useDispatch} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import {gameVersionRequest} from '../actions/game-version';
import {buttonShadow} from './button/button-shadow';

const GameVersionScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const confirm = version => {
    dispatch(gameVersionRequest(version));
    navigation.navigate('Names Screen');
  };

  return (
    <ScreenContainer>
      <Background />
      <ButtonContainer onPress={() => confirm('FULL')} style={buttonShadow}>
        <CustomButton>FULL VERSION</CustomButton>
      </ButtonContainer>
      <ButtonContainer onPress={() => confirm('CARD')} style={buttonShadow}>
        <CustomButton>CARD VERSION</CustomButton>
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

export default GameVersionScreen;

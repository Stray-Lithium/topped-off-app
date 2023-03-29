import * as React from 'react-native';
import styled from 'styled-components';
import Background from './background/Background';
import PlayButton from './button/play-button';
import {gameVersionRequest} from '../actions/game-version';
import {useDispatch} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const confirm = () => {
    dispatch(gameVersionRequest('FULL'));
    navigation.navigate('Names Screen');
  };

  return (
    <ScreenContainer>
      <Background background={'Home Screen'} />
      <PlayButtonContainer onPress={() => confirm()}>
        <PlayButton />
      </PlayButtonContainer>
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

const PlayButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default HomeScreen;

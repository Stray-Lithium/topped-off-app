import * as React from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import {gameVersionRequest} from '../actions/game-version';
import {useDispatch} from 'react-redux';
import RedButtonThreeSvg from '../assets/buttons/RedButtonThreeSvg';
import {buttonClickSound} from './sound/sounds';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const windowWidth = React.Dimensions.get('window').width * 0.92;
  const baseValue = windowWidth * 0.18;
  const confirm = () => {
    buttonClickSound.play();
    dispatch(gameVersionRequest('FULL'));
    navigation.navigate('Names Screen');
  };

  return (
    <>
      <Background background={'Home Screen'} />
      <SafeAreaView style={{flex: 1}}>
        <ScreenContainer></ScreenContainer>
        <BottomBarContainer
          style={{
            height: baseValue,
          }}>
          <PlayButtonContainer
            style={{
              width: baseValue * 3 + windowWidth * 0.04,
            }}
            onPress={() => confirm()}>
            <PlayText>ENTER</PlayText>
            <RedButtonThreeSvg />
          </PlayButtonContainer>
        </BottomBarContainer>
      </SafeAreaView>
    </>
  );
};

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
`;

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  margin: 0 4% 0 4%;
`;

const PlayButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayText = styled.Text`
  position: absolute;
  text-align: center;
  color: #262020;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
  z-index: 1;
`;

export default HomeScreen;

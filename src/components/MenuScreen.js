import styled from 'styled-components';
import Background from './background/Background';
import RedButtonTwoSvg from '../assets/buttons/RedButtonTwoSvg';
import {Dimensions} from 'react-native';

const MenuScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width * 0.92;
  const baseValue = windowWidth * 0.18;

  return (
    <>
      <Background background={'End Screen'} />
      <ScreenContainer>
        <Title>Are you sure you want to quit?</Title>
        <ButtonBar>
          <ButtonContainer onPress={() => navigation.goBack()}>
            <PlayText>NO</PlayText>
            <RedButtonTwoSvg
              style={{
                height: baseValue,
                width: baseValue * 2 + windowWidth * 0.02,
              }}
            />
          </ButtonContainer>
          <ButtonContainer onPress={() => navigation.navigate('Home Screen')}>
            <RedButtonTwoSvg
              style={{
                height: baseValue,
                width: baseValue * 2 + windowWidth * 0.02,
              }}
            />
            <PlayText>YES</PlayText>
          </ButtonContainer>
        </ButtonBar>
      </ScreenContainer>
    </>
  );
};

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 50px;
  text-align: center;
  margin-top: 50px;
  padding: 2px;
  color: #ffcf00;
  font-family: Morning Breeze Bold;
`;

const ButtonBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`;

const ButtonContainer = styled.Pressable`
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

export default MenuScreen;

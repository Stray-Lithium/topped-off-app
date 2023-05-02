import styled from 'styled-components';
import Background from './background/Background';
import CompleteAndDrinkButton from './button/CompleteAndDrinkButton';

const MenuScreen = ({navigation}) => {
  return (
    <>
      <Background background={'End Screen'} />
      <ScreenContainer>
        <Title>Are you sure you want to quit?</Title>
        <ButtonBar>
          <ButtonContainer onPress={() => navigation.goBack()}>
            <CompleteAndDrinkButton completeOrDrink={'NO'} />
          </ButtonContainer>
          <ButtonContainer onPress={() => navigation.navigate('Home Screen')}>
            <CompleteAndDrinkButton completeOrDrink={'YES'} />
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
  width: 100%;
  margin-top: 40px;
`;

const ButtonContainer = styled.Pressable`
  margin: 0 3px 0 3px;
`;

export default MenuScreen;

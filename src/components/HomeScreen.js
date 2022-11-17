import * as React from 'react-native';
import styled from 'styled-components';
import Background from './background/Background';
import Button from './button/Button';

const HomeScreen = ({navigation}) => {
  return (
    <ScreenContainer>
      <Background />
      <Button
        buttonInfo={{text: 'PLAY', navigate: 'Version Screen', navigation}}
      />
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

export default HomeScreen;

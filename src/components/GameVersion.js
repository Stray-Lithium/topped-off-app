import * as React from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import Button from './button/Button';

const GameVersionScreen = ({navigation}) => {
  return (
    <ScreenContainer>
      <Background />
      <Button
        buttonInfo={{
          text: 'FULL VERSION',
          navigate: 'Names Screen',
          navigation,
        }}
      />
      <Button buttonInfo={{text: 'CARD VERSION'}} />
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
export default GameVersionScreen;

import * as React from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import Button from './button/Button';

const NamesScreen = ({navigation}) => {
  return (
    <ScreenContainer>
      <Background />
      <Title>WHO's PLAYING</Title>
      <Button
        buttonInfo={{text: 'READY!', navigate: 'Names Screen', navigation}}
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

const Title = styled.Text`
  font-size: 40px;
`;

export default NamesScreen;

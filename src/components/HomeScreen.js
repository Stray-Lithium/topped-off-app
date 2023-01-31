import * as React from 'react-native';
import styled from 'styled-components';
import Background from './background/Background';
import Button from './button/Button';
import PlayButton from './button/play-button';

const HomeScreen = ({navigation}) => {
  return (
    <ScreenContainer>
      <Background />
      <PlayButtonContainer
        onPress={() => navigation.navigate('Version Screen')}>
        <PlayButton />
      </PlayButtonContainer>
      {/* <Button
        buttonInfo={{text: 'PLAY', navigate: 'Version Screen', navigation}}
      /> */}
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

const PlayText = styled.Text``;

export default HomeScreen;

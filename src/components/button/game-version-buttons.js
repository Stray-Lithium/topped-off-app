import * as React from 'react-native';
import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const GameVersionButtons = ({button}) => {
  const windowWidth = Dimensions.get('window').width * 0.7;

  return (
    <AutoHeightImage
      width={windowWidth}
      source={require(`../../assets/red-button-three.png`)}>
      <PlayContainer>
        <PlayText>{button}</PlayText>
      </PlayContainer>
    </AutoHeightImage>
  );
};

const PlayContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayText = styled.Text`
  text-align: center;
  color: #262020;
  font-size: 28px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
`;

export default GameVersionButtons;

import * as React from 'react-native';
import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const PlayButton = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width * 0.5;

  return (
    <AutoHeightImage
      width={windowWidth}
      source={require(`../../assets/red-button-two.png`)}>
      <PlayContainer>
        <PlayText>PLAY</PlayText>
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
  font-size: 40px;
  letter-spacing: 1px;
  font-family: Morning Breeze Bold;
`;

export default PlayButton;

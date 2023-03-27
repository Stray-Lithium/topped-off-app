import * as React from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';
import styled from 'styled-components';

const LemonadeConfirmButton = ({displayRefresh}) => {
  const windowWidth = Dimensions.get('window').width;

  const baseValue = windowWidth * 0.18;

  return (
    <ImageContainer>
      <AutoHeightImage
        width={baseValue}
        source={require(`../../assets/refresh-button.png`)}
      />
      <AutoHeightImage
        width={baseValue * 4}
        source={require(`../../assets/red-button-four.png`)}>
        <PlayContainer>
          <PlayText>CONFIRM</PlayText>
        </PlayContainer>
      </AutoHeightImage>
    </ImageContainer>
  );
};

const ImageContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const PlayContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayText = styled.Text`
  text-align: center;
  color: #262020;
  font-size: 36px;
  letter-spacing: 1px;
  font-family: Morning Breeze Bold;
`;

export default LemonadeConfirmButton;

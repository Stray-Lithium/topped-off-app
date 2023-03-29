import * as React from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';
import styled from 'styled-components';

const CompleteAndDrinkButton = ({completeOrDrink}) => {
  const windowWidth = Dimensions.get('window').width;
  const baseValue = windowWidth * 0.18;

  return (
    <AutoHeightImage
      width={baseValue * 2}
      source={require(`../../assets/red-button-two.png`)}>
      <PlayContainer>
        <PlayText>{completeOrDrink}</PlayText>
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
  font-size: 36px;
  letter-spacing: 1px;
  font-family: Morning Breeze Bold;
`;

export default CompleteAndDrinkButton;

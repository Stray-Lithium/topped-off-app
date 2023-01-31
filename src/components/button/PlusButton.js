import * as React from 'react-native';
import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const PlusButton = ({button}) => {
  const windowWidth = Dimensions.get('window').width * 0.6;

  return (
    <AutoHeightImage
      width={58}
      source={require(`../../assets/plus-button.png`)}
    />
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

export default PlusButton;

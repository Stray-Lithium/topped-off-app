import * as React from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';
import styled from 'styled-components';

const LemonadeConfirmButton = ({displayRefresh}) => {
  const windowWidth = Dimensions.get('window').width * 0.66;

  return (
    <>
      <AutoHeightImage
        width={windowWidth}
        source={require(`../../assets/red-button-three.png`)}>
        <PlayContainer>
          <PlayText>CONFIRM</PlayText>
        </PlayContainer>
      </AutoHeightImage>
      {displayRefresh ? (
        <AutoHeightImage
          width={windowWidth / 3}
          source={require(`../../assets/refresh-button.png`)}
        />
      ) : (
        <></>
      )}
    </>
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

export default LemonadeConfirmButton;

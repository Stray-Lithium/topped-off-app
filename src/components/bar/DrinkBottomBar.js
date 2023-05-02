import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions, Pressable} from 'react-native';
import styled from 'styled-components';

const DrinkBottomBar = ({isSteal}) => {
  const windowWidth = Dimensions.get('window').width;

  const baseValue = windowWidth * 0.18;

  return (
    <BottomBarContainer>
      {isSteal ? (
        <>
          {/* <AutoHeightImage
            width={baseValue}
            source={require(`../../assets/question-button.png`)}
          /> */}
          <AutoHeightImage
            width={baseValue * 2}
            source={require(`../../assets/red-button-two.png`)}>
            <Pressable style={{flex: 1}}>
              <PlayContainer>
                <PlayText>NO</PlayText>
              </PlayContainer>
            </Pressable>
          </AutoHeightImage>
          <AutoHeightImage
            width={baseValue * 2}
            source={require(`../../assets/red-button-two.png`)}>
            <PlayContainer>
              <PlayText>YES</PlayText>
            </PlayContainer>
          </AutoHeightImage>
        </>
      ) : (
        <>
          {/* <AutoHeightImage
            width={baseValue}
            source={require(`../../assets/question-button.png`)}
          /> */}
          {/* <Space style={{width: baseValue * 2}} /> */}
          <AutoHeightImage
            width={baseValue * 2}
            source={require(`../../assets/red-button-two.png`)}>
            <PlayContainer>
              <PlayText>OK</PlayText>
            </PlayContainer>
          </AutoHeightImage>
        </>
      )}
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 92%;
  margin-left: 4%;
  margin-right: 4%;
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
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
`;

const Space = styled.View``;

export default DrinkBottomBar;

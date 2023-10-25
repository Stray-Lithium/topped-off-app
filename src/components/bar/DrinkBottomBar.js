import {Dimensions, Pressable} from 'react-native';
import styled from 'styled-components';
import RedButtonTwoSvg from '../../assets/buttons/RedButtonTwoSvg';

const DrinkBottomBar = ({isSteal}) => {
  const windowWidth = Dimensions.get('window').width * 0.92;

  const baseValue = windowWidth * 0.18;

  return (
    <BottomBarContainer
      style={{width: windowWidth * 0.8, backgroundColor: 'pink'}}>
      {isSteal ? (
        <>
          <PlayContainer>
            <RedButtonTwoSvg
              style={{
                width: baseValue * 2 + windowWidth * 0.02,
                height: baseValue,
              }}
            />
            <PlayText>NO</PlayText>
          </PlayContainer>
          <PlayContainer>
            <RedButtonTwoSvg
              style={{
                width: baseValue * 2 + windowWidth * 0.02,
                height: baseValue,
              }}
            />
            <PlayText>YES</PlayText>
          </PlayContainer>
        </>
      ) : (
        <PlayContainer>
          <RedButtonTwoSvg
            style={{
              width: baseValue * 2 + windowWidth * 0.02,
              height: baseValue,
            }}
          />
          <PlayText>OK</PlayText>
        </PlayContainer>
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
  position: absolute;
  text-align: center;
  color: #262020;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
`;

export default DrinkBottomBar;

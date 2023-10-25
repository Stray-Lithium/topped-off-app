import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import {Dimensions} from 'react-native';
import YellowButtonThreeSvg from '../assets/buttons/YellowButtonThreeSvg';
import {hintsRequest} from '../actions/hints';

const HintsScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const hints = useSelector(state => state.Hints.hints);
  const windowWidth = Dimensions.get('window').width;
  const bottomBarWidth = Dimensions.get('window').width * 0.92;
  const widthMargin = windowWidth * 0.12;
  const baseValue = bottomBarWidth * 0.18;

  useEffect(() => {}, [hints]);

  const headToHeadHint = () => {
    return (
      <HintContainer>
        <RulesText style={{marginRight: widthMargin, marginLeft: widthMargin}}>
          When there is only one player selected for this challenge, they will
          have to face everybody.{'\n'}
          {'\n'}
          Only the selected player can gain or lose a point, everyone else
          should aim to win the challenge to prevent the selected player from
          getting a point.{'\n'}
          {'\n'}
        </RulesText>
      </HintContainer>
    );
  };

  const hintPage = () => {
    return headToHeadHint();
  };

  const exitScreen = () => {
    dispatch(hintsRequest({headToHead: false}));
    navigation.navigate('Challenge Screen');
  };

  if (hints) {
    return (
      <>
        <Background background={'Rules Screen'} />
        <SafeContainer>
          <RulesContainer>
            <RulesTitle>HINT</RulesTitle>
            <TextScroll
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'center',
              }}>
              {hintPage()}
            </TextScroll>
          </RulesContainer>
          <BottomBarContainer style={{height: baseValue}}>
            <WidthContainer
              style={{width: baseValue * 3 + windowWidth * 0.04}}
              onPress={() => exitScreen()}>
              <ButtonText>GOT IT!</ButtonText>
              <YellowButtonThreeSvg />
            </WidthContainer>
          </BottomBarContainer>
        </SafeContainer>
      </>
    );
  }
};

const SafeContainer = styled.SafeAreaView`
  flex: 1;
`;

const RulesContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
`;

const RulesTitle = styled.Text`
  margin: 40px 0 0 0;
  width: 80%;
  font-size: 50px;
  text-align: center;
  color: #ffcf00;
  font-family: Morning Breeze;
  flex-grow: 1;
`;

const TextScroll = styled.ScrollView`
  margin: 20px 0 40px 0;
`;

const RulesText = styled.Text`
  font-size: 22px;
  text-align: center;
  color: #ffcf00;
  font-family: Morning Breeze;
`;

const HintContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  margin: 0 4% 0 4%;
`;

const WidthContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ButtonText = styled.Text`
  position: absolute;
  text-align: center;
  color: #262020;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
  z-index: 1;
`;

export default HintsScreen;

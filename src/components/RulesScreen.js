import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import {Dimensions, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useState} from 'react';
import AllDrinksFullSvg from '../assets/score/AllDrinksFullSvg';
import MartiniBackSvg from '../assets/cards/MartiniBackSvg';
import OldFationedBackSvg from '../assets/cards/OldFashionedBackSvg';
import PinaColadaBackSvg from '../assets/cards/PinaColadaBackSvg';
import MojitoBackSvg from '../assets/cards/MojitoCardBack';
import RedCrossButtonTwoSvg from '../assets/buttons/RedCrossButtonTwoSvg';
import RedArrowRightTwoSvg from '../assets/buttons/RedArrowRightTwoSvg';
import RedArrowLeftTwoSvg from '../assets/buttons/RedArrowLeftTwoSvg';
import YellowArrowRightTwoSvg from '../assets/buttons/YellowArrowRightTwoSvg';

const RulesScreen = ({navigation}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const hints = useSelector(state => state.Hints.hints);
  const windowWidth = Dimensions.get('window').width;
  const bottomBarWidth = Dimensions.get('window').width * 0.92;
  const widthMargin = windowWidth * 0.12;
  const baseValue = bottomBarWidth * 0.18;

  useEffect(() => {}, [hints]);

  const firstPage = () => {
    return (
      <>
        <RulesText style={{marginRight: widthMargin, marginLeft: widthMargin}}>
          {'\n'}Click on the cocktail card to reveal a challenge.{'\n'}
        </RulesText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <MartiniBackSvg
            style={{
              width: windowWidth * 0.35,
              height: windowWidth * 0.35 * 1.4,
              margin: 5,
            }}
          />
          <OldFationedBackSvg
            style={{
              width: windowWidth * 0.35,
              height: windowWidth * 0.35 * 1.4,
              margin: 5,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <PinaColadaBackSvg
            style={{
              width: windowWidth * 0.35,
              height: windowWidth * 0.35 * 1.4,
              margin: 5,
            }}
          />
          <MojitoBackSvg
            style={{
              width: windowWidth * 0.35,
              height: windowWidth * 0.35 * 1.4,
              margin: 5,
            }}
          />
        </View>
      </>
    );
  };

  const secondPage = () => {
    return (
      <>
        <RulesText style={{marginRight: widthMargin, marginLeft: widthMargin}}>
          {'\n'}Read out the challenge, if the chosen player does NOT do the
          challenge they drink, if they complete the challenge they get a point.
          {'\n'}
        </RulesText>
        <AutoHeightImage
          width={baseValue * 3.6}
          source={require('../assets/challenge-card-example.png')}
        />
      </>
    );
  };

  const thirdPage = () => {
    return (
      <>
        <RulesText style={{marginRight: widthMargin, marginLeft: widthMargin}}>
          {'\n'}Complete one challenge in each of the four categories to win.
          {'\n'}
        </RulesText>
        <WidthContainer style={{width: baseValue * 5, height: baseValue * 2}}>
          <AllDrinksFullSvg style={{backgroundColor: 'orange'}} />
        </WidthContainer>
        <RulesText style={{marginRight: widthMargin, marginLeft: widthMargin}}>
          {'\n'}
          {'\n'}Lastly, if you choose to 'drink' in a category you already have
          a point in, you will then lose that point.
          {'\n'}
          {'\n'}
          So, have fun with your challenges and keep your cocktails topped off.
          {'\n'}
        </RulesText>
      </>
    );
  };

  const page = () => {
    if (pageNumber === 1) {
      return firstPage();
    }
    if (pageNumber === 2) {
      return secondPage();
    }
    if (pageNumber === 3) {
      return thirdPage();
    }
  };

  const exitScreen = () => {
    setPageNumber(1);
    navigation.navigate('Card Screen');
  };

  const prevNextOrClose = prevOrNext => {
    if (prevOrNext === 'prev') {
      pageNumber === 1 ? exitScreen() : setPageNumber(pageNumber - 1);
    }
    if (prevOrNext === 'next') {
      pageNumber === 3 ? exitScreen() : setPageNumber(pageNumber + 1);
    }
  };

  const buttonSorter = prevOrNext => {
    if (prevOrNext === 'prev') {
      if (pageNumber === 1) {
        return <RedCrossButtonTwoSvg />;
      } else {
        return <RedArrowLeftTwoSvg />;
      }
    }
    if (prevOrNext === 'next') {
      if (pageNumber === 3) {
        return <YellowArrowRightTwoSvg />;
      } else {
        return <RedArrowRightTwoSvg />;
      }
    }
  };
  return (
    <>
      <Background background={'Score Screen'} />
      <SafeContainer>
        <RulesContainer>
          <RulesTitle>HOW TO PLAY</RulesTitle>
          <TextScroll
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
            }}>
            {page()}
          </TextScroll>
        </RulesContainer>
        <BottomBarContainer style={{height: baseValue}}>
          <WidthContainer
            style={{width: baseValue * 2 + windowWidth * 0.02}}
            onPress={() => prevNextOrClose('prev')}>
            {buttonSorter('prev')}
          </WidthContainer>
          <PageNumberContainer style={{width: baseValue}}>
            <PageNumber>{`${pageNumber}`}/3</PageNumber>
          </PageNumberContainer>
          <WidthContainer
            style={{width: baseValue * 2 + windowWidth * 0.02}}
            onPress={() => prevNextOrClose('next')}>
            {buttonSorter('next')}
          </WidthContainer>
        </BottomBarContainer>
      </SafeContainer>
    </>
  );
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

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  margin: 0 4% 0 4%;
`;

const PageNumberContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const PageNumber = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: #ffcf00;
  font-size: 26px;
  font-family: Morning Breeze;
`;

const WidthContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export default RulesScreen;

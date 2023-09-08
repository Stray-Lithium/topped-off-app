import styled from 'styled-components';
import Background from './background/Background';
import {Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useState} from 'react';
import RedButtonTwoSvg from '../assets/buttons/RedButtonTwoSvg';
import AllDrinksFullSvg from '../assets/score/AllDrinksFullSvg';

const RulesScreen = ({navigation}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const windowWidth = Dimensions.get('window').width;
  const widthMargin = windowWidth * 0.12;

  const baseValue = windowWidth * 0.18;

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const firstPage = () => {
    return (
      <>
        <RulesText style={{marginRight: widthMargin, marginLeft: widthMargin}}>
          {'\n'}Click on the cocktail card to reveal a challenge.{'\n'}
        </RulesText>
        <AutoHeightImage
          width={baseValue * 4}
          source={require('../assets/all-cards.png')}
        />
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

  const prevNextOrClose = prevOrNext => {
    if (prevOrNext === 'prev') {
      pageNumber === 1 ? navigation.goBack() : setPageNumber(pageNumber - 1);
    }
    if (prevOrNext === 'next') {
      pageNumber === 3 ? navigation.goBack() : setPageNumber(pageNumber + 1);
    }
  };

  const buttonSorter = prevOrNext => {
    if (prevOrNext === 'prev') {
      if (pageNumber === 1) {
        return <RedButtonTwoSvg style={{backgroundColor: 'purple'}} />;
      } else {
        return <RedButtonTwoSvg style={{backgroundColor: 'orange'}} />;
      }
    }
    if (prevOrNext === 'next') {
      if (pageNumber === 3) {
        return <RedButtonTwoSvg style={{backgroundColor: 'teal'}} />;
      } else {
        return <RedButtonTwoSvg style={{backgroundColor: 'orange'}} />;
      }
    }
  };

  return (
    <>
      <Background background={'Rules Screen'} />
      <SafeContainer>
        <RulesContainer>
          <RulesTitle>HOW TO PLAY</RulesTitle>
          <TextScroll
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                setAtBottom(true);
              } else {
                setAtBottom(false);
              }
            }}
            scrollEventThrottle={400}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: 'center',
            }}>
            {page()}
          </TextScroll>
        </RulesContainer>
        <BottomBarContainer style={{height: baseValue}}>
          <WidthContainer
            style={{width: baseValue * 2}}
            onPress={() => prevNextOrClose('prev')}>
            {buttonSorter('prev')}
          </WidthContainer>
          <PageNumberContainer style={{width: baseValue}}>
            <PageNumber>{`${pageNumber}`}/3</PageNumber>
          </PageNumberContainer>
          <WidthContainer
            style={{width: baseValue * 2}}
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
  display: flex;
  align-items: center;
`;

const RulesContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 90%;
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
  justify-content: center;
  width: 100%;
  background-color: pink;
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
  height: 100%;
  background-color: teal;
`;

export default RulesScreen;

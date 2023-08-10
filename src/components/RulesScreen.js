import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import RulesNote from './background/RulesNote';
import ScoreScreenClose from './button/ScoreScreenClose';
import {Dimensions, Pressable} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useState} from 'react';

const RulesScreen = ({navigation}) => {
  const [atBottom, setAtBottom] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const windowWidth = Dimensions.get('window').width;
  const widthMargin = windowWidth * 0.12;
  const insets = useSafeAreaInsets();

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
        <AutoHeightImage
          width={baseValue * 5}
          source={require('../assets/rules-all-drinks.png')}
        />
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
        return require('../assets/x-button-two.png');
      } else {
        return require('../assets/rules-left-arrow-two.png');
      }
    }
    if (prevOrNext === 'next') {
      if (pageNumber === 3) {
        return require('../assets/rules-last-button.png');
      } else {
        return require('../assets/rules-right-arrow-two.png');
      }
    }
  };

  return (
    <>
      <Background background={'Rules Screen'} />
      <SafeContainer>
        <RulesContainer>
          {/* <RulesNote /> */}
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
          {/* <ScrollImageContainer style={{transform: [{rotate: '-4deg'}]}}>
            {!atBottom ? (
              <AutoHeightImage
                width={160}
                source={require(`../assets/scroll.png`)}
              />
            ) : (
              <></>
            )}
          </ScrollImageContainer> */}
        </RulesContainer>
        <BottomBarContainer>
          <AutoHeightImage width={baseValue * 2} source={buttonSorter('prev')}>
            <Pressable
              style={{flex: 1}}
              onPress={() => prevNextOrClose('prev')}
            />
          </AutoHeightImage>
          <PageNumberContainer style={{width: baseValue}}>
            <PageNumber>{`${pageNumber}`}/3</PageNumber>
          </PageNumberContainer>
          <AutoHeightImage width={baseValue * 2} source={buttonSorter('next')}>
            <Pressable
              style={{flex: 1}}
              onPress={() => prevNextOrClose('next')}></Pressable>
          </AutoHeightImage>
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
  // letter-spacing: 1px;
  font-family: Morning Breeze;
`;

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 92%;
  margin-left: 4%;
  margin-right: 4%;
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

export default RulesScreen;

{
  /* <RulesTitle>RULES</RulesTitle>
            <RulesText
              style={{marginRight: widthMargin, marginLeft: widthMargin}}>
              In this game, you'll come across four different drinks. Your
              mission is to top them off.{'\n'}
            </RulesText>
            <AutoHeightImage
              width={200}
              source={require('../assets/rules-all-drinks.png')}
            />
            <RulesText
              style={{marginRight: widthMargin, marginLeft: widthMargin}}>
              {'\n'}
              You can always view the scoreboard by clicking this button.
              {'\n'}
            </RulesText>
            <AutoHeightImage
              width={160}
              source={require('../assets/score-button.png')}
            />
            <RulesText
              style={{marginRight: widthMargin, marginLeft: widthMargin}}>
              {'\n'}
              To top off a drink, you'll need to complete a cheeky challenge.
              {'\n'}
            </RulesText>
            <RulesText
              style={{marginRight: widthMargin, marginLeft: widthMargin}}>
              You can choose to skip the challenges you don't like and drink
              instead. However, every skip will chuck away the drink you so well
              topped off.
              {'\n'}
            </RulesText>
            <RulesText
              style={{marginRight: widthMargin, marginLeft: widthMargin}}>
              Drink if you failed a challenge. Stay hydrated for the next one.
              {'\n'}
            </RulesText>
            <RulesText
              style={{marginRight: widthMargin, marginLeft: widthMargin}}>
              If a player decides to skip a challenge and you're waiting to top
              off the drink behind it, you will be offered a chance to steal it.
              {'\n'}
            </RulesText>
            <RulesText
              style={{marginRight: widthMargin, marginLeft: widthMargin}}>
              Stealing can be a good way to top off some of the drinks you need
              for to win "Topped Off".
              {'\n'}
            </RulesText>
            <RulesText
              style={{marginRight: widthMargin, marginLeft: widthMargin}}>
              Now, fill up your cups and have fun. Cheers!
              {'\n'}
            </RulesText> */
}

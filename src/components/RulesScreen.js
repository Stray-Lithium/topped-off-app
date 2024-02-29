import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import {Dimensions, Platform, StatusBar, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useState} from 'react';
import MartiniFrontSvg from '../assets/cards/MartiniFrontSvg';
import OldFationedFrontSvg from '../assets/cards/OldFashionedFrontSvg';
import PinaColadaFrontSvg from '../assets/cards/PinaColadaFrontSvg';
import MojitoFrontSvg from '../assets/cards/SexOnTheBeachFrontSvg';
import AllDrinksFullSvg from '../assets/score/AllDrinksFullSvg';
import MartiniBackSvg from '../assets/cards/MartiniBackSvg';
import OldFationedBackSvg from '../assets/cards/OldFashionedBackSvg';
import PinaColadaBackSvg from '../assets/cards/PinaColadaBackSvg';
import MojitoBackSvg from '../assets/cards/MojitoCardBack';
import YellowButtonThreeSvg from '../assets/buttons/YellowButtonThreeSvg';
import RedCrossButtonTwoSvg from '../assets/buttons/RedCrossButtonTwoSvg';
import RedArrowRightTwoSvg from '../assets/buttons/RedArrowRightTwoSvg';
import RedArrowLeftTwoSvg from '../assets/buttons/RedArrowLeftTwoSvg';
import YellowArrowRightTwoSvg from '../assets/buttons/YellowArrowRightTwoSvg';
import FlipCard from 'react-native-flip-card';
import {buttonClickSound, quitSound, menuSound} from './sound/sounds';
import {isInset} from './inset/insets';
import {safeAreaAndroid} from './safeArea';

const RulesScreen = ({navigation, route}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const players = useSelector(state => state.Players.players);
  const hints = useSelector(state => state.Hints.hints);
  const windowWidth = Dimensions.get('window').width;
  const bottomBarWidth = Dimensions.get('window').width * 0.92;
  const widthMargin = windowWidth * 0.12;
  const baseValue = bottomBarWidth * 0.18;

  useEffect(() => {}, [hints, players]);

  const exampleCards = {
    martiniCard: {
      title: `Turn-Off`,
      content: `get into your favourite sex position and make chicken sounds.`,
      comment: `Always carrying the team`,
      svgBack: <MartiniBackSvg style={cardSize} />,
      svgFront: <MartiniFrontSvg style={cardSize} />,
    },
    oldFationedCard: {
      title: `Mama's boy`,
      content: `fight a ghost and shout mom for help.`,
      comment: `Unfortunately, it's all on you now`,
      svgBack: <OldFationedBackSvg style={cardSize} />,
      svgFront: <OldFationedFrontSvg style={cardSize} />,
    },
    pinaColadaCard: {
      title: `No Vain No Gain`,
      content: `do 20 squats and compliment yourself.`,
      comment: `Ain't got squat to say?`,
      svgBack: <PinaColadaBackSvg style={cardSize} />,
      svgFront: <PinaColadaFrontSvg style={cardSize} />,
    },
    mojitoCard: {
      title: `Stuff on Stuff`,
      content: `get 5 different items and stack them up as quick as you can, first to stack all 5 wins`,
      comment: `Choose them wisley`,
      svgBack: <MojitoBackSvg style={cardSize} />,
      svgFront: <MojitoFrontSvg style={cardSize} />,
    },
  };

  const cardSize = {
    width: windowWidth * 0.35,
    height: windowWidth * 0.35 * 1.4,
  };

  const cardContent = card => {
    return (
      <View
        style={[
          {
            margin: 5,
          },
          cardSize,
        ]}>
        <FlipCard
          friction={6}
          perspective={1000}
          flipHorizontal={true}
          flipVertical={false}
          flip={false}
          clickable={true}
          onFlipStart={() => menuSound.play()}
          onFlipEnd={isFlipEnd => {
            console.log('isFlipEnd', isFlipEnd);
          }}>
          {/* Face Side */}
          {exampleCards[card].svgBack}
          {/* Back Side */}
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              width: windowWidth * 0.35,
              height: windowWidth * 0.35 * 1.4,
            }}>
            {exampleCards[card].svgFront}
            <CardContentContainer>
              <CardTitle>{exampleCards[card].title}</CardTitle>
              <CardContent>
                {card === 'mojitoCard'
                  ? `${players[0].name} and ${players[1].name}, `
                  : `${players[0].name} `}
                {exampleCards[card].content}
              </CardContent>
              <CardComment>{exampleCards[card].comment}</CardComment>
            </CardContentContainer>
          </View>
        </FlipCard>
      </View>
    );
  };

  const firstPage = () => {
    return (
      <>
        <RulesText style={{marginRight: widthMargin, marginLeft: widthMargin}}>
          {'\n'}Click on the cocktail card to reveal a challenge.{'\n'}
        </RulesText>
        <RulesText style={{marginRight: widthMargin, marginLeft: widthMargin}}>
          These are just examples.{'\n'}
        </RulesText>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {cardContent('martiniCard')}
          {cardContent('oldFationedCard')}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          {cardContent('pinaColadaCard')}
          {cardContent('mojitoCard')}
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
          {'\n'}You will always have the option to skip challenges.
          {'\n'}
          {'\n'}However, if you choose to 'skip' a challenge in the category you
          already have a point in, you will then lose that point.
          {'\n'}
          {'\n'}
          Now, have fun with your challenges and stay topped off.
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
    buttonClickSound.play();
    navigation.navigate('Card Screen');
    // quit ? quitSound.play() : buttonClickSound.play();
    // setPageNumber(1);
  };

  const setPageAndPlaySound = pageNumber => {
    buttonClickSound.play();
    setPageNumber(pageNumber);
  };

  const prevNextOrClose = prevOrNext => {
    exitScreen();
    // if (prevOrNext === 'prev') {
    //   pageNumber === 1 ? exitScreen(true) : setPageAndPlaySound(pageNumber - 1);
    // }
    // if (prevOrNext === 'next') {
    //   pageNumber === 3
    //     ? exitScreen(false)
    //     : setPageAndPlaySound(pageNumber + 1);
    // }
  };

  const buttonSorter = prevOrNext => {
    // if (prevOrNext === 'prev') {
    //   if (pageNumber === 1) {
    //     return <RedCrossButtonTwoSvg />;
    //   } else {
    //     return <RedArrowLeftTwoSvg />;
    //   }
    // }
    // if (prevOrNext === 'next') {
    //   if (pageNumber === 3) {
    //     return <YellowArrowRightTwoSvg />;
    //   } else {
    //     return <RedArrowRightTwoSvg />;
    //   }
    // }
    return <YellowArrowRightTwoSvg />;
  };
  if (players)
    return (
      <>
        <Background background={'Score Screen'} />
        <SafeContainer
          style={{
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
          }}>
          <RulesContainer>
            <RulesTitle>HOW TO PLAY</RulesTitle>
            <TextScroll
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'center',
              }}>
              {thirdPage()}
            </TextScroll>
          </RulesContainer>
          <BottomBarContainer
            style={{height: baseValue, marginBottom: isInset()}}>
            {/* <WidthContainer
              style={{width: baseValue * 2 + windowWidth * 0.02}}
              onPress={() => prevNextOrClose('prev')}>
              {buttonSorter('prev')}
            </WidthContainer> */}
            {/* <PageNumberContainer style={{width: baseValue}}>
              <PageNumber>{`${pageNumber}`}/3</PageNumber>
            </PageNumberContainer> */}
            <WidthContainer
              style={{width: baseValue * 3 + windowWidth * 0.04}}
              onPress={() => prevNextOrClose('next')}>
              <ButtonText>GOT IT!</ButtonText>
              <YellowButtonThreeSvg />
              {/* {buttonSorter('next')} */}
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
  margin: 10px 0 0 0;
  width: 80%;
  font-size: 40px;
  text-align: center;
  color: #ffcf00;
  font-family: Morning Breeze;
  flex-grow: 1;
`;

const TextScroll = styled.ScrollView`
  margin: 10px 0 0 0;
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

const CardContentContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
`;

const CardTitle = styled.Text`
  font-size: 20px;
  text-align: center;
  width: 80%;
  margin-top: 10px;
  padding: 4px;
  font-family: Morning Breeze;
`;

const CardContent = styled.Text`
  font-size: 14px;
  text-align: center;
  width: 90%;
  line-height: 14px;
  padding: 2px;
  font-family: Morning Breeze;
`;

const CardComment = styled.Text`
  font-size: 12px;
  text-align: center;
  width: 80%;
  margin-bottom: 10px;
  padding: 2px;
  margin-top: 20px;
  font-family: Morning Breeze;
  font-style: italic;
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

export default RulesScreen;

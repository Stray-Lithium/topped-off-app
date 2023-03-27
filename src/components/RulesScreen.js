import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import RulesNote from './background/RulesNote';
import ScoreScreenClose from './button/ScoreScreenClose';
import {Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {useState} from 'react';

const RulesScreen = ({navigation}) => {
  const [atBottom, setAtBottom] = useState(false);
  const windowWidth = Dimensions.get('window').width;
  const widthMargin = windowWidth * 0.12;
  const insets = useSafeAreaInsets();

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  return (
    <>
      <Background background={'Rules Screen'} />
      <SafeContainer>
        <ExitPressable
          style={{top: insets.top}}
          onPress={() => {
            navigation.goBack();
          }}>
          <ScoreScreenClose />
        </ExitPressable>
        <RulesContainer>
          <RulesNote />
          <RulesTitle>RULES</RulesTitle>
          <TextScroll
            onScroll={({nativeEvent}) => {
              if (isCloseToBottom(nativeEvent)) {
                setAtBottom(true);
                console.log('near bottom');
              } else {
                setAtBottom(false);
              }
            }}
            scrollEventThrottle={400}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1, alignItems: 'center'}}>
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
            </RulesText>
          </TextScroll>
        </RulesContainer>
        <ScrollImageContainer style={{transform: [{rotate: '-4deg'}]}}>
          {!atBottom ? (
            <AutoHeightImage
              width={160}
              source={require(`../assets/scroll.png`)}
            />
          ) : (
            <></>
          )}
        </ScrollImageContainer>
      </SafeContainer>
    </>
  );
};

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  display: flex;
  align-items: center;
`;

const ExitPressable = styled.Pressable`
  position: absolute;
  left: 8px;
  z-index: 1;
`;

const RulesContainer = styled.View`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const RulesTitle = styled.Text`
  margin: 50px 0 10px 0;
  font-size: 70px;
  text-align: center;
  font-family: Morning Breeze;
`;

const TextScroll = styled.ScrollView`
  margin-bottom: 40px;
`;

const RulesText = styled.Text`
  font-size: 22px;
  text-align: center;
  font-family: Morning Breeze;
`;

const ScrollImageContainer = styled.View`
  position: absolute;
  bottom: 20px;
  right: 10px;
`;

export default RulesScreen;

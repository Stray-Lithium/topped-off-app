import styled from 'styled-components';
import Background from './background/Background';
import {Dimensions, Platform, StatusBar} from 'react-native';
import RedButtonThreeSvg from '../assets/buttons/RedButtonThreeSvg';
import {isInset} from './inset/insets';
import {buttonClickSound} from './sound/sounds';

const DisclaimerScreen = ({navigation}) => {
  const windowWidth = Dimensions.get('window').width;
  const bottomBarWidth = Dimensions.get('window').width * 0.92;
  const widthMargin = windowWidth * 0.12;
  const baseValue = bottomBarWidth * 0.18;

  const navigateButton = () => {
    buttonClickSound.play();
    navigation.navigate('Names Screen');
  };

  return (
    <>
      <Background background={'Disclaimer Screen'} />
      <SafeContainer
        style={{
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}>
        <RulesContainer>
          <RulesTitle>Disclaimer</RulesTitle>
          <TextScroll
            contentContainerStyle={{
              flexGrow: 1,
            }}>
            <HintContainer>
              <RulesText
                style={{marginRight: widthMargin, marginLeft: widthMargin}}>
                By clicking 'ENTER', all participants acknowledge and agree that
                they are voluntarily participating in this mobile drinking game,
                and understand that it may involve physical and vocal
                challenges. The cards in this game are not binding and represent
                a mere suggestion. You further understand that 'Off the Cards
                Ltd' assumes no responsibility or liability for any injuries,
                accidents, or consequences that may arise during or as a result
                of playing this game. Drink responsibly, and ensure you and
                every person playing with you are of legal drinking age. If you
                do not agree to these terms, please do not proceed with the
                game.{'\n'}
              </RulesText>
            </HintContainer>
          </TextScroll>
        </RulesContainer>
        <BottomBarContainer
          style={{height: baseValue, marginBottom: isInset()}}>
          <WidthContainer
            style={{width: baseValue * 3 + windowWidth * 0.04}}
            onPress={() => navigateButton()}>
            <ButtonText>ENTER</ButtonText>
            <RedButtonThreeSvg />
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
  color: #f0415b;
  font-family: Morning Breeze;
  flex-grow: 1;
`;

const TextScroll = styled.ScrollView`
  margin: 20px 0 40px 0;
`;

const RulesText = styled.Text`
  font-size: 21px;
  text-align: center;
  color: #f0415b;
  font-family: Morning Breeze;
`;

const HintContainer = styled.View`
  flex: 1;
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

export default DisclaimerScreen;

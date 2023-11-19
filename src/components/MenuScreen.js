import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import Background from './background/Background';
import RedButtonTwoSvg from '../assets/buttons/RedButtonTwoSvg';
import {Dimensions} from 'react-native';
import {buttonClickSound, quitSound} from './sound/sounds';
import {currentCardRequest} from '../actions/current-card';
import {currentPlayerRequest} from '../actions/current-player';
import {cardsRequest} from '../actions/cards';
import {checkScoreRequest} from '../actions/check-score';
import {completedRequest} from '../actions/completed';
import {drinkersRequest} from '../actions/drinkers';
import {gameVersionRequest} from '../actions/game-version';
import {hintsRequest} from '../actions/hints';
import {playersRequest} from '../actions/players';

const MenuScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get('window').width * 0.92;
  const baseValue = windowWidth * 0.18;

  const noNavigation = () => {
    buttonClickSound.play();
    navigation.goBack();
  };

  const yesNavigation = () => {
    quitSound.play();
    dispatch(currentCardRequest(false));
    dispatch(currentPlayerRequest(false));
    dispatch(
      cardsRequest({
        turns: [],
        cardData: {
          lemonadeScore: {},
          martiniScore: {},
          whiskeyScore: {},
          mojitoScore: {},
        },
        hints: {headToHead: true},
      }),
    );
    dispatch(checkScoreRequest(false));
    dispatch(completedRequest(false));
    dispatch(drinkersRequest(false));
    dispatch(gameVersionRequest(false));
    dispatch(hintsRequest(false));
    dispatch(playersRequest(false));
    navigation.navigate('Home Screen');
  };

  return (
    <>
      <Background background={'End Screen'} />
      <ScreenContainer>
        <Title>Are you sure you want to quit?</Title>
        <ButtonBar style={{height: baseValue}}>
          <ButtonContainer
            style={{
              width: baseValue * 2 + windowWidth * 0.02,
              marginLeft: windowWidth * 0.01,
              marginRight: windowWidth * 0.01,
            }}
            onPress={() => noNavigation()}>
            <PlayText>NO</PlayText>
            <RedButtonTwoSvg />
          </ButtonContainer>
          <ButtonContainer
            style={{
              width: baseValue * 2 + windowWidth * 0.02,
              marginLeft: windowWidth * 0.01,
              marginRight: windowWidth * 0.01,
            }}
            onPress={() => yesNavigation()}>
            <RedButtonTwoSvg />
            <PlayText>YES</PlayText>
          </ButtonContainer>
        </ButtonBar>
      </ScreenContainer>
    </>
  );
};

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 50px;
  text-align: center;
  margin-top: 50px;
  padding: 2px;
  color: #ffcf00;
  font-family: Morning Breeze Bold;
`;

const ButtonBar = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 92%;
  margin: 0 4% 0 4%;
  margin-top: 40px;
`;

const ButtonContainer = styled.Pressable`
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
  z-index: 1;
`;

export default MenuScreen;

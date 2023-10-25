import {useEffect} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import {currentCardRequest} from '../actions/current-card';
import ScoreBoard from './scoreboard/scoreboard';
import {currentPlayerRequest} from '../actions/current-player';
import {drinkersRequest} from '../actions/drinkers';
import {checkScoreRequest} from '../actions/check-score';
import {cardsRequest} from '../actions/cards';
import RedCrossButtonTwoSvg from '../assets/buttons/RedCrossButtonTwoSvg';
import {Dimensions} from 'react-native';
import YellowArrowRightTwoSvg from '../assets/buttons/YellowArrowRightTwoSvg';

const ScoreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const cards = useSelector(state => state.Cards.cards);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const checkScore = useSelector(state => state.CheckScore.checkScore);
  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width * 0.92;
  const baseValue = windowWidth * 0.18;

  console.log('getting to score screen');

  useEffect(() => {}, [players, currentCard, checkScore]);

  const updateTurns = () => {
    let cardsCopy = {...cards};
    let newCards = [];
    cards.turns.forEach(card => {
      if (card.name === currentCard.cardColor) {
        newCards.push({name: card.name, turns: (card.turns += 1)});
      } else {
        newCards.push(card);
      }
    });
    cardsCopy.turns = newCards;
    return cardsCopy;
  };

  const exitButton = () => {
    if (!checkScore) {
      const updatedTurns = updateTurns();
      dispatch(drinkersRequest(false));
      dispatch(currentPlayerRequest(false));
      dispatch(currentCardRequest(false));
      dispatch(cardsRequest(updatedTurns));
    }
    dispatch(checkScoreRequest(false));
    navigation.navigate('Card Screen');
  };

  if (players && currentCard && cards) {
    return (
      <>
        <Background background={'Score Screen'} />
        <SafeAreaView style={{flex: 1}}>
          <ExitPressable
            style={{
              bottom: insets.bottom,
            }}
            onPress={() => {
              exitButton();
            }}>
            <YellowArrowRightTwoSvg
              style={{
                height: baseValue,
                width: baseValue * 2 + windowWidth * 0.02,
              }}
            />
          </ExitPressable>
          <ScreenContainer>
            <TitleContainer>
              <Title>SCORE</Title>
            </TitleContainer>
            <ScoreScroll>
              <ScoreBoard players={players} />
            </ScoreScroll>
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  }
};

const ExitPressable = styled.Pressable`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 2;
`;

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
  height: 100%;
  width: 100%;
`;

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 70px;
  color: #ffcf00;
  font-family: Morning Breeze Bold;
`;

const ScoreScroll = styled.ScrollView`
  width: 90%;
`;

export default ScoreScreen;

import {useEffect, useState} from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import {Dimensions} from 'react-native';
import {currentCardRequest} from '../actions/current-card';
import ScoreBoard from './scoreboard/scoreboard';
import AutoHeightImage from 'react-native-auto-height-image';
import {currentPlayerRequest} from '../actions/current-player';
import {drinkersRequest} from '../actions/drinkers';
import ScoreScreenClose from './button/ScoreScreenClose';
import {checkScoreRequest} from '../actions/check-score';

const ScoreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const checkScore = useSelector(state => state.CheckScore.checkScore);
  const windowWidth = Dimensions.get('window').width * 0.8;
  const insets = useSafeAreaInsets();

  useEffect(() => {}, [players, currentCard, checkScore]);

  const exitButton = () => {
    if (!checkScore) {
      dispatch(drinkersRequest(false));
      dispatch(currentPlayerRequest(false));
      dispatch(currentCardRequest(false));
    }
    dispatch(checkScoreRequest(false));
    navigation.navigate('Card Screen');
  };

  if (players && currentCard) {
    return (
      <>
        <Background background={currentCard.cardColor} />
        <SafeAreaView style={{flex: 1}}>
          <ExitPressable
            style={{top: insets.top}}
            onPress={() => {
              exitButton();
            }}>
            <ScoreScreenClose />
            {/* <ExitButton>X</ExitButton> */}
          </ExitPressable>
          <ScreenContainer>
            <TitleContainer>
              <Title>SCOREBOARD</Title>
            </TitleContainer>
            <ScoreBoard players={players} />
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  } else return <Text style={{fontSize: 48}}>Hello</Text>;
};

const ExitPressable = styled.Pressable`
  position: absolute;
  left: 8px;
`;

const ExitButton = styled.Text`
  position: absolute;
  top: 8px;
  left: 24px;
  font-size: 32px;
  font-weight: bold;
`;

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 50px;
`;

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const Title = styled.Text`
  font-size: 38px;
  color: #ffcf00;
  font-family: Morning Breeze Bold;
`;

export default ScoreScreen;

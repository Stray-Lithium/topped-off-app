import styled from 'styled-components';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from './background/Background';
import {useEffect, useState} from 'react';
import ScoreBoard from './scoreboard/scoreboard';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import EndScreenBar from './bar/EndScreenBar';

const EndScreen = () => {
  const players = useSelector(state => state.Players.players);
  const [winners, setWinners] = useState(false);
  console.log(winners, 'winners');

  useEffect(() => {
    if (!winners) {
      const getWinners = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('winners');
          setWinners(JSON.parse(jsonValue));
        } catch (e) {
          console.log(e);
        }
      };
      getWinners();
    }
  }, [winners, players]);

  if (winners) {
    return (
      <>
        <Background />
        <SafeAreaView style={{flex: 1}}>
          <ScrollView>
            <ScreenContainer>
              <WinnersTextContainer>
                <WinnersTitle>
                  CONGRATS,{'\n'} {winners[0]}
                  <WinnersTitle style={{color: '#ee3347'}}>!!!</WinnersTitle>
                </WinnersTitle>
                <WinnersText>
                  You topped off all of your drinks and won the game. Cheers to
                  that!
                </WinnersText>
              </WinnersTextContainer>
              <ScoreText>FINAL SCORE:</ScoreText>
              <ScoreBoard players={players} />
              <BarContainer>
                <EndScreenBar />
              </BarContainer>
            </ScreenContainer>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const WinnersTextContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96%;
  margin-bottom: 50px;
`;

const WinnersTitle = styled.Text`
  font-size: 50px;
  text-align: center;
  margin-top: 50px;
  padding: 2px;
  color: #ffcf00;
  font-family: Morning Breeze Bold;
`;

const WinnersText = styled.Text`
  font-size: 30px;
  text-align: center;
  width: 80%;
  margin-top: 20px;
  padding: 2px;
  color: #ffcf00;
  font-family: Morning Breeze;
`;

const ScoreText = styled.Text`
  font-size: 30px;
  width: 90%;
  margin-bottom: 20px;
  padding: 2px;
  color: #ee3347;
  font-family: Morning Breeze;
`;

const BarContainer = styled.Pressable`
  position: absolute;
  bottom: 0;
`;

export default EndScreen;

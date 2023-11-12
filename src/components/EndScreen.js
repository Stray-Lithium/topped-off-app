import styled from 'styled-components';
import {useSelector} from 'react-redux';
import {Dimensions} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from './background/Background';
import {useEffect, useState} from 'react';
import ScoreBoard from './scoreboard/scoreboard';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import RedButtonThreeSvg from '../assets/buttons/RedButtonThreeSvg';
import {buttonClickSound} from './sound/sounds';
import {isInset} from './inset/insets';

const EndScreen = ({navigation}) => {
  const players = useSelector(state => state.Players.players);
  const [winners, setWinners] = useState(false);
  const [winnerObject, setWinnerObject] = useState(false);

  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width * 0.92;

  const baseValue = windowWidth * 0.18;

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
    if (!winnerObject) {
      players.forEach(player => {
        if (player.name === winners[0]) {
          setWinnerObject([player]);
        }
      });
    }
  }, [winners, players, winnerObject]);

  const gameReset = () => {
    buttonClickSound.play();
    navigation.navigate('Menu Screen');
  };

  if ((winners, winnerObject)) {
    return (
      <>
        <Background background={'End Screen'} />
        <SafeAreaView
          style={{
            flex: 1,
          }}>
          <ScrollView>
            <ScreenContainer style={{paddingBottom: 40}}>
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
              <ScoreBoard players={winnerObject} />
            </ScreenContainer>
          </ScrollView>
          <PlayContainer
            style={{marginBottom: isInset()}}
            onPress={() => gameReset()}>
            <PlayText>FINISH</PlayText>
            <RedButtonThreeSvg
              height={baseValue}
              width={baseValue * 3 + windowWidth * 0.04}
            />
          </PlayContainer>
        </SafeAreaView>
      </>
    );
  }
};

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 100px;
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
  font-family: Morning Breeze;
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

const PlayContainer = styled.Pressable`
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

export default EndScreen;

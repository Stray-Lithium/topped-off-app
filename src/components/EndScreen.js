import styled from 'styled-components';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from './background/Background';
import {useEffect, useState} from 'react';
import ScoreBoard from './scoreboard/scoreboard';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
import EndScreenBar from './bar/EndScreenBar';

const EndScreen = ({navigation}) => {
  const players = useSelector(state => state.Players.players);
  const [winners, setWinners] = useState(false);
  const [winnerObject, setWinnerObject] = useState(false);

  const insets = useSafeAreaInsets();
  const windowWidth = Dimensions.get('window').width;

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

  // console.log(winners, players, 'comonnn');

  if ((winners, winnerObject)) {
    return (
      <>
        <Background background={'End Screen'} />
        {/* <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'pink',
          }}> */}
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
            <ScoreBoard players={winnerObject} />
          </ScreenContainer>
        </ScrollView>
        <BarContainer
          style={{bottom: insets.bottom}}
          onPress={() => navigation.navigate('Menu Screen')}>
          <AutoHeightImage
            width={baseValue * 4}
            source={require(`../assets/red-button-four.png`)}>
            <PlayContainer>
              <PlayText>FINNISH</PlayText>
            </PlayContainer>
          </AutoHeightImage>
        </BarContainer>
        {/* </SafeAreaView> */}
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
  margin-top: 140px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PlayContainer = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayText = styled.Text`
  text-align: center;
  color: #262020;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
`;

export default EndScreen;

import {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import AutoHeightImage from 'react-native-auto-height-image';
import styled from 'styled-components';
import title from '../assets/scoreboard.png';
import Background from './background/Background';
import ScoreIcon from './background/ScoreIcon';
import {Dimensions} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ScoreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const cardColor = useSelector(state => state.CardColor.cardColor);
  const windowWidth = Dimensions.get('window').width * 0.8;
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);

  useEffect(() => {}, [players, cardColor]);

  console.log(players, 'players');

  const exitButton = () => {
    {
      navigation.navigate(
        gameVersion === 'FULL' ? 'Card Screen' : 'Card Version Card Screen',
      );
    }
  };

  if (players && cardColor) {
    console.log(gameVersion);
    return (
      <>
        <Background background={cardColor} />
        <SafeAreaView style={{flex: 1}}>
          <Pressable
            onPress={() => {
              exitButton();
            }}>
            <ExitButton>X</ExitButton>
          </Pressable>
          <ScreenContainer>
            <ScoreboardContainer>
              <AutoHeightImage
                style={{marginBottom: 20}}
                width={windowWidth}
                source={require('../assets/scoreboard.png')}
              />
              <ScoreList>
                {players.map(player => {
                  return (
                    <EachPersonsScoreContainer>
                      <ScoreNameContainer>
                        <ScoreName>{player.name}</ScoreName>
                      </ScoreNameContainer>
                      <IconsContainer>
                        <IconDiv>
                          <ScoreIcon image={'whiskeyScore'} />
                        </IconDiv>
                        <IconDiv>
                          <ScoreIcon image={'lemonadeScore'} />
                        </IconDiv>
                        <IconDiv>
                          <ScoreIcon image={'martiniScore'} />
                        </IconDiv>
                        <IconDiv>
                          <ScoreIcon image={'mojitoScore'} />
                        </IconDiv>
                      </IconsContainer>
                    </EachPersonsScoreContainer>
                  );
                })}
              </ScoreList>
            </ScoreboardContainer>
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  } else return <Text>Hello</Text>;
};

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
  justify-content: center;
  height: 100%;
  width: 100%;
  margin-top: 50px;
`;

const ScoreboardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
`;

const Title = styled.Image`
  width: 80%;
  margin-bottom: 10px;
  margin-top: 80px;
`;

const ScoreList = styled.View`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
  width: 100%;
`;

const EachPersonsScoreContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 96%;
  padding-bottom: 8px;
  border: solid 4px black;
  background-color: #808184;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-evenly;
  width: 100%;
`;

const IconDiv = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2px;
  border-bottom: 3px solid black;
`;

const ScoreNameContainer = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ScoreName = styled.Text`
  font-size: 24px;
  letter-spacing: 2px;
  text-align: center;
  width: 100%;
  margin: 10px;
  font-family: Sunbird Black;
`;

export default ScoreScreen;

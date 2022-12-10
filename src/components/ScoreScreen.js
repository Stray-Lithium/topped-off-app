import {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import title from '../assets/scoreboard.png';
import Background from './background/Background';
import ScoreIcon from './background/ScoreIcon';

const ScoreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const cardColor = useSelector(state => state.CardColor.cardColor);

  useEffect(() => {}, [players, cardColor]);

  if (players && cardColor) {
    return (
      <>
        <Background background={cardColor} />
        <SafeAreaView style={{flex: 1}}>
          {/* <ScreenContainer>
            <ScoreboardContainer>
              <Title src={title} />
              <ScoreList>
                {players.map(player => {
                  return (
                    <EachPersonsScoreContainer>
                      <ScoreNameContainer>
                        <ScoreName>{player.name}</ScoreName>
                      </ScoreNameContainer>
                      <IconsContainer>
                        <IconDiv>
                          <Score source={ScoreIcon('whiskey')} />
                        </IconDiv>
                        <IconDiv>
                          <Score source={ScoreIcon('lemonade')} />
                        </IconDiv>
                        <IconDiv>
                          <Score source={ScoreIcon('martini')} />
                        </IconDiv>
                        <IconDiv>
                          <Score source={ScoreIcon('mojito')} />
                        </IconDiv>
                      </IconsContainer>
                    </EachPersonsScoreContainer>
                  );
                })}
              </ScoreList>
            </ScoreboardContainer>
          </ScreenContainer> */}
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
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const ScoreboardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const Title = styled.Image`
  width: 80vw;
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
  height: 60vh;
  // border: solid 4px #ee3347;
  // outline: 5px solid black;
  // background-color: #808184;
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
`;

const Score = styled.Image`
  height: 50px;
`;

export default ScoreScreen;

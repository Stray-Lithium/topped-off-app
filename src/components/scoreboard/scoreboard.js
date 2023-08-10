import ScoreIcon from '../background/ScoreIcon';
import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const ScoreBoard = ({players}) => {
  const windowWidth = Dimensions.get('window').width * 0.9;
  const sortPlayers = () => {
    const sortedPlayers = [];
    for (let i = 5; i >= 0; i--) {
      players.forEach(player => {
        const playerScore =
          player.lemonadeScore +
          player.mojitoScore +
          player.whiskeyScore +
          player.martiniScore;
        if (playerScore === i) {
          sortedPlayers.push(player);
        }
      });
    }
    return sortedPlayers;
  };

  const sortedPlayers = sortPlayers();

  return (
    <ScoreboardContainer>
      <ScoreList>
        {sortedPlayers.map(player => {
          return (
            <EachPersonsScoreContainer key={player.name}>
              <ScoreNameContainer>
                <ScoreName>{player.name}</ScoreName>
              </ScoreNameContainer>
              <IconsContainer>
                <IconDiv>
                  <ScoreIcon
                    image={
                      player.whiskeyScore > 0
                        ? 'whiskeyScore'
                        : 'whiskeyScoreEmpty'
                    }
                  />
                </IconDiv>
                <IconDiv>
                  <ScoreIcon
                    image={
                      player.martiniScore > 0
                        ? 'martiniScore'
                        : 'martiniScoreEmpty'
                    }
                  />
                </IconDiv>
                <IconDiv>
                  <ScoreIcon
                    image={
                      player.mojitoScore > 0
                        ? 'mojitoScore'
                        : 'mojitoScoreEmpty'
                    }
                  />
                </IconDiv>
                <IconDiv>
                  <ScoreIcon
                    image={
                      player.lemonadeScore > 0
                        ? 'lemonadeScore'
                        : 'lemonadeScoreEmpty'
                    }
                  />
                </IconDiv>
              </IconsContainer>
              <PlankContainer>
                <AutoHeightImage
                  width={windowWidth}
                  source={require('../../assets/plank.png')}
                />
              </PlankContainer>
            </EachPersonsScoreContainer>
          );
        })}
      </ScoreList>
    </ScoreboardContainer>
  );
};

const ScoreboardContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 50px;
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
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 20px;
`;

const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 84%;
`;

const IconDiv = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlankContainer = styled.View`
  position: absolute;
  z-index: -1;
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
  color: #ffcf00;

  font-family: Morning Breeze;
`;

export default ScoreBoard;

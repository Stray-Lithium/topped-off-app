import ScoreIcon from '../background/ScoreIcon';
import styled from 'styled-components';

const ScoreBoard = ({players}) => {
  const sortPlayers = () => {
    const sortedPlayers = [];
    for (let i = 5; i >= 0; i--) {
      console.log(players, 'score players');
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
            <EachPersonsScoreContainer>
              <ScoreNameContainer>
                <ScoreName>{player.name}</ScoreName>
              </ScoreNameContainer>
              <IconsContainer>
                <IconDiv>
                  <ScoreIcon
                    image={player.whiskeyScore > 0 ? 'whiskeyScore' : false}
                  />
                </IconDiv>
                <IconDiv>
                  <ScoreIcon
                    image={player.lemonadeScore > 0 ? 'lemonadeScore' : false}
                  />
                </IconDiv>
                <IconDiv>
                  <ScoreIcon
                    image={player.martiniScore > 0 ? 'martiniScore' : false}
                  />
                </IconDiv>
                <IconDiv>
                  <ScoreIcon
                    image={player.mojitoScore > 0 ? 'mojitoScore' : false}
                  />
                </IconDiv>
              </IconsContainer>
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
  width: 90%;
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
  border-radius: 16px;
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
  font-family: Morning Breeze;
`;

export default ScoreBoard;

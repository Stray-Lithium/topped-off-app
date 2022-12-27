import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import ChallengeCardBackground from './background/ChallengeCardBackground';
import Button from './button/Button';
import {whiskeyBlank} from '../blanks/whiskey';
import {martiniBlank} from '../blanks/martini';
import {martiniCard} from '../cards/martini';
import {whiskeyCard} from '../cards/whiskey';
import {mojitoCard} from '../cards/mojito';
import {lemonadeCard} from '../cards/lemonade';
import {playersRequest} from '../actions/players';
import {drinkersRequest} from '../actions/drinkers';
import {playerTurn} from '../algorithms/turn';
import {storeWinners} from './storage/storage';

const ChallengeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const cardColor = useSelector(state => state.CardColor.cardColor);
  const [cardContent, setCardContent] = useState(false);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);

  const blankWord = () => {
    if (cardColor === 'whiskeyScore') {
      setCardContent(whiskeyCard(whiskeyBlank()));
    }
    if (cardColor === 'martiniScore') {
      setCardContent(martiniCard(martiniBlank()));
    }
    if (cardColor === 'mojitoScore') {
      setCardContent(mojitoCard());
    }
    if (cardColor === 'lemonadeScore') {
      setCardContent(lemonadeCard());
    }
  };

  useEffect(() => {
    if (!cardContent) {
      blankWord();
    }
  }, [cardContent, currentPlayer, players, cardColor]);

  const nameMaker = () => {
    const playersLength = currentPlayer.length;
    let names = '';
    currentPlayer.forEach((name, index) => {
      if (playersLength === 1) {
        names += `${name},`;
      } else if (index === playersLength - 2) {
        names += `${name} and `;
      } else {
        names += `${name}, `;
      }
    });
    return names;
  };

  const names = nameMaker();

  const winnersCheck = updatedPlayers => {
    let winningPlayers = [];
    updatedPlayers.forEach(player => {
      if (
        player.whiskeyScore &&
        player.mojitoScore &&
        player.martiniScore &&
        player.lemonadeScore >= 1
      ) {
        winningPlayers.push(player.name);
      }
    });
    if (winningPlayers.length > 0) {
      storeWinners(winningPlayers);
      navigation.navigate('End Screen');
    } else {
      navigation.navigate('Score Screen');
    }
  };

  const complete = completed => {
    let playersCopy = players;
    let updatedPlayers = [];
    playersCopy.forEach(player => {
      if (player.name === currentPlayer[0]) {
        player.turns += 1;
        if (completed) {
          player[cardColor] += 1;
        }
        updatedPlayers.push(player);
      } else {
        updatedPlayers.push(player);
      }
    });
    dispatch(playersRequest(updatedPlayers));
    if (completed) {
      winnersCheck(updatedPlayers);
    } else {
      dispatch(drinkersRequest(currentPlayer));
      navigation.navigate('Drink Screen');
    }
  };

  const notLemonadeChallenge = () => {
    return (
      <>
        <ButtonContainer onPress={() => complete(true)}>
          <CustomButton>COMPLETED</CustomButton>
        </ButtonContainer>
        <ButtonContainer onPress={() => complete(false)}>
          <CustomButton>DRINK</CustomButton>
        </ButtonContainer>
      </>
    );
  };

  const lemonadeChallenge = () => {
    return (
      <Button
        buttonInfo={{
          text: 'OK',
          navigate: 'Lemonade Who Completed Screen',
          navigation,
        }}
      />
    );
  };

  console.log(cardColor, 'herjjsnkjfn');

  const displayCardContent = () => {
    return (
      <>
        {gameVersion === 'FULL' ? (
          <>
            <CardContainer>
              <ChallengeCardBackground image={cardColor} />
              <CardContentContainer>
                <CardTitle>{cardContent.title}</CardTitle>
                <CardContent>{`${names} ${cardContent.content}`}</CardContent>
                <CardComment>{cardContent.comment}</CardComment>
              </CardContentContainer>
            </CardContainer>
            {cardColor !== 'lemonadeScore'
              ? notLemonadeChallenge()
              : lemonadeChallenge()}
          </>
        ) : (
          <>
            <CardContainer>
              <ChallengeCardBackground image={cardColor} />
              <CVCardContentContainer>
                <PlayerName>{`${names}`}</PlayerName>
                <CVCardContent>{`${cardContent.content}`}</CVCardContent>
              </CVCardContentContainer>
            </CardContainer>
            {cardColor !== 'lemonadeScore'
              ? notLemonadeChallenge()
              : lemonadeChallenge()}
          </>
        )}
      </>
    );
  };

  if (currentPlayer) {
    return (
      <ChallengeScreenContainer>
        <Background />
        {displayCardContent()}
      </ChallengeScreenContainer>
    );
  }
};

const ChallengeScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const CardContentContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100%;
`;

const CardTitle = styled.Text`
  font-size: 26px;
  text-align: center;
  width: 80%;
  margin-top: 20px;
  font-family: Morning Breeze;
`;

const CardContent = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 80%;
  font-family: Morning Breeze;
`;

const CardComment = styled.Text`
  font-size: 20px;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
  font-family: Morning Breeze;
  font-style: italic;
`;

const CVCardContentContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
`;

const CVCardContent = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Morning Breeze;
`;

const PlayerName = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Morning Breeze;
`;

const ButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55%;
  background-color: #ee3347;
  border-radius: 10px;
  border: solid 3px black;
  margin-bottom: 20px;
`;

const CustomButton = styled.Text`
  text-align: center;
  color: black;
  font-size: 24px;
  padding: 12px 12px 12px 12px;
  letter-spacing: 5px;
  font-family: Morning Breeze;
  overflow: hidden;
`;

export default ChallengeScreen;

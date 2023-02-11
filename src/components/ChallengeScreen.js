import React, {useEffect} from 'react';
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
import {currentCardRequest} from '../actions/current-card';
import {storeWinners} from './storage/storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {buttonShadow} from './button/button-shadow';
import CompleteAndDrinkButton from './button/CompleteAndDringButton';
import {checkScoreRequest} from '../actions/check-score';

const ChallengeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);

  const cardAndBlank = () => {
    if (currentCard.cardColor === 'whiskeyScore') {
      if (gameVersion === 'CARD') {
        dispatch(currentCardRequest(whiskeyBlank()));
      } else {
        dispatch(currentCardRequest(whiskeyCard(whiskeyBlank())));
      }
    }
    if (currentCard.cardColor === 'martiniScore') {
      if (gameVersion === 'CARD') {
        dispatch(currentCardRequest(martiniBlank()));
      } else {
        dispatch(currentCardRequest(martiniCard(martiniBlank())));
      }
    }
    if (currentCard.cardColor === 'mojitoScore') {
      dispatch(currentCardRequest(mojitoCard()));
    }
    if (currentCard.cardColor === 'lemonadeScore') {
      dispatch(currentCardRequest(lemonadeCard()));
    }
  };

  useEffect(() => {
    if (!currentCard.content) {
      cardAndBlank();
    }
  }, [currentCard, currentPlayer, players, gameVersion]);

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
        player.whiskeyScore === 1 &&
        player.mojitoScore === 1 &&
        player.martiniScore === 1 &&
        player.lemonadeScore === 1
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
        if (completed && player[currentCard.cardColor] === 0) {
          player[currentCard.cardColor] += 1;
          player.pointsAwarded += 1;
        }
        if (!completed && player[currentCard.cardColor] === 1) {
          player[currentCard.cardColor] -= 1;
        }
      }
      updatedPlayers.push(player);
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
      <ButtonBar>
        <ButtonContainer onPress={() => complete(false)} style={buttonShadow}>
          <CompleteAndDrinkButton completeOrDrink={'DRINK'} />
        </ButtonContainer>
        {/* <OrText>or</OrText> */}
        <ButtonContainer onPress={() => complete(true)} style={buttonShadow}>
          <CompleteAndDrinkButton completeOrDrink={'DONE'} />
        </ButtonContainer>
      </ButtonBar>
    );
  };

  const lemonadeChallenge = () => {
    return (
      <ButtonBar>
        <ButtonContainer
          onPress={() => navigation.navigate('Lemonade Who Completed Screen')}
          style={buttonShadow}>
          <CompleteAndDrinkButton completeOrDrink={'DONE'} />
        </ButtonContainer>
      </ButtonBar>
    );
  };

  const cardVersion = () => {
    console.log(currentCard, 'current card');
    return (
      <>
        <CardContainer>
          <ChallengeCardBackground image={currentCard.cardColor} />
          <CVCardContentContainer>
            <CVPlayerName>{`${names}`}</CVPlayerName>
            {currentCard.cardColor !== 'mojitoScore' ? (
              <CVBlankPrompt>Your blank is:</CVBlankPrompt>
            ) : null}
            {currentCard.cardColor !== 'mojitoScore' ? (
              <CVCardContent>{`${currentCard.content}`}</CVCardContent>
            ) : null}
          </CVCardContentContainer>
        </CardContainer>
        {currentCard.cardColor !== 'lemonadeScore'
          ? notLemonadeChallenge()
          : lemonadeChallenge()}
      </>
    );
  };

  const fullVersion = () => {
    return (
      <>
        <CardContainer>
          <ChallengeCardBackground image={currentCard.cardColor} />
          <CardContentContainer>
            <CardTitle>{currentCard.title}</CardTitle>
            <CardContent>{`${names} ${currentCard.content}`}</CardContent>
            <CardComment>{currentCard.comment}</CardComment>
          </CardContentContainer>
        </CardContainer>
        {currentCard.cardColor !== 'lemonadeScore'
          ? notLemonadeChallenge()
          : lemonadeChallenge()}
      </>
    );
  };

  if (currentPlayer && currentCard && gameVersion) {
    return (
      <>
        <Background />
        <SafeAreaView style={{flex: 1}}>
          <ChallengeScreenContainer>
            {gameVersion === 'FULL' ? fullVersion() : cardVersion()}
          </ChallengeScreenContainer>
        </SafeAreaView>
      </>
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
  font-size: 34px;
  text-align: center;
  width: 80%;
  margin-top: 20px;
  padding: 2px;
  font-family: Morning Breeze;
`;

const CardContent = styled.Text`
  font-size: 26px;
  text-align: center;
  width: 86%;
  line-height: 30px;
  padding: 2px;
  font-family: Morning Breeze;
`;

const CardComment = styled.Text`
  font-size: 24px;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
  padding: 2px;
  margin-top: 40px;
  font-family: Morning Breeze;
  font-style: italic;
`;

const CVCardContentContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CVBlankPrompt = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Morning Breeze;
  margin-bottom: 4px;
`;

const CVCardContent = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Morning Breeze;
  padding-bottom: 2px;
`;

const PlayerName = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Morning Breeze;
`;

const CVPlayerName = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Morning Breeze;
  margin-bottom: 8px;
`;

const ButtonBar = styled.View`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  bottom: 0px;
`;

const ButtonContainer = styled.Pressable`
  margin: 0 3px 0 3px;
`;

export default ChallengeScreen;

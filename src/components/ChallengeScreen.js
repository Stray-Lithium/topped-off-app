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

const ChallengeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);

  const cardAndBlank = () => {
    if (currentCard.cardColor === 'whiskeyScore') {
      dispatch(currentCardRequest(whiskeyCard(whiskeyBlank())));
    }
    if (currentCard.cardColor === 'martiniScore') {
      dispatch(currentCardRequest(martiniCard(martiniBlank())));
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
      <>
        <ButtonContainer onPress={() => complete(true)} style={buttonShadow}>
          <CustomButton>COMPLETED</CustomButton>
        </ButtonContainer>
        <ButtonContainer onPress={() => complete(false)} style={buttonShadow}>
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

  const cardVersion = () => {
    return (
      <>
        <CardContainer>
          <ChallengeCardBackground image={currentCard.cardColor} />
          <CVCardContentContainer>
            <PlayerName>{`${names}`}</PlayerName>
            <CVCardContent>{`${currentCard.content}`}</CVCardContent>
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

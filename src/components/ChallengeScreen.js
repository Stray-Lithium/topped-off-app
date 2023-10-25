import React, {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import * as R from 'ramda';
import Background from './background/Background';
import {playersRequest} from '../actions/players';
import {drinkersRequest} from '../actions/drinkers';
import {currentCardRequest} from '../actions/current-card';
import {storeWinners} from './storage/storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {cardsRequest} from '../actions/cards';
import {lemonadeCardData} from '../cards/lemonade-data';
import {mojitoCardData} from '../cards/mojito-data';
import {martiniCardData} from '../cards/martini-data';
import {martiniBlankData} from '../blanks/martini-data';
import {whiskeyCardData} from '../cards/whiskey-data';
import {whiskeyBlankData} from '../blanks/whiskey-data';
import RedButtonTwoSvg from '../assets/buttons/RedButtonTwoSvg';
import FrontOfCard from './background/FrontOfCard';
import YellowArrowRightTwoSvg from '../assets/buttons/YellowArrowRightTwoSvg';

const ChallengeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);
  const cards = useSelector(state => state.Cards.cards);
  const [shouldTrigger, setShouldTrigger] = useState(true);
  const [names, setNames] = useState(false);

  const windowWidth = Dimensions.get('window').width;
  const barWidth = windowWidth * 0.92;
  const baseValue = barWidth * 0.18;

  const cardReset = (cardOrBlank, category) => {
    if (cardOrBlank === 'cards') {
      if (category === 'whiskeyScore') {
        return R.clone(whiskeyCardData);
      }
      if (category === 'martiniScore') {
        return R.clone(martiniCardData);
      }
      if (category === 'mojitoScore') {
        return R.clone(mojitoCardData);
      }
      if (category === 'lemonadeScore') {
        return R.clone(lemonadeCardData);
      }
    }
    if (cardOrBlank === 'blanks') {
      if (category === 'whiskeyScore') {
        return R.clone(whiskeyBlankData);
      }
      if (category === 'martiniScore') {
        return R.clone(martiniBlankData);
      }
    }
  };

  const randomizer = (cardOrBlank, category) => {
    if (cards.cardData[category][cardOrBlank].length === 0) {
      const reset = cardReset(cardOrBlank, category);
      cards.cardData[category][cardOrBlank] = reset;
    }
    const randomIndex =
      Math.floor(Math.random() * cards.cardData[category][cardOrBlank].length) +
      0;
    const challenge = cards.cardData[category][cardOrBlank][randomIndex];

    cards.cardData[category][cardOrBlank].forEach((item, index) => {
      if (item.id === challenge.id) {
        cards.cardData[category][cardOrBlank].splice(index, 1);
      }
    });
    dispatch(cardsRequest(cards));
    return challenge;
  };

  const cardAndBlank = async () => {
    const color = currentCard.cardColor;
    let card = await randomizer('cards', color);
    if (color === 'martiniScore' || color === 'whiskeyScore') {
      let blank = await randomizer('blanks', color);
      card.blank = blank;
    }
    dispatch(currentCardRequest(card));
  };

  const nameMaker = () => {
    const playersLength = currentPlayer.length;
    let names = '';
    console.log(currentPlayer, 'current player');
    currentPlayer.forEach((name, index) => {
      if (playersLength === 1) {
        currentCard.cardColor === 'lemonadeScore'
          ? (names += `EVERYBODY vs ${name}, `)
          : (names += `${name}, `);
      } else if (index === playersLength - 2) {
        names += `${name} and `;
      } else {
        names += `${name}, `;
      }
    });
    return setNames(names);
  };

  useEffect(() => {
    if (shouldTrigger) {
      cardAndBlank();
      setShouldTrigger(false);
    }
    if (!names) {
      nameMaker();
    }
  }, [currentCard, currentPlayer, players, gameVersion, cards]);

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
      <ButtonBar
        style={{
          height: baseValue,
          width: windowWidth * 0.74,
        }}>
        <WidthContainer onPress={() => complete(false)}>
          <ButtonText>DRINK</ButtonText>
          <RedButtonTwoSvg
            style={{
              width: baseValue * 2 + windowWidth * 0.02,
              height: baseValue,
            }}
          />
        </WidthContainer>
        <WidthContainer onPress={() => complete(true)}>
          <ButtonText>DONE</ButtonText>
          <RedButtonTwoSvg
            style={{
              width: baseValue * 2 + windowWidth * 0.02,
              height: baseValue,
            }}
          />
        </WidthContainer>
      </ButtonBar>
    );
  };

  const lemonadeChallenge = () => {
    return (
      <ButtonBar>
        <ButtonContainer
          onPress={() => navigation.navigate('Lemonade Who Completed Screen')}
          style={{height: baseValue}}>
          <YellowArrowRightTwoSvg
            width={baseValue * 2 + windowWidth * 0.02}
            height={baseValue}
          />
        </ButtonContainer>
      </ButtonBar>
    );
  };

  // const cardVersion = () => {
  //   return (
  //     <>
  //       <CardContainer>
  //         <ChallengeCardBackground image={currentCard.cardColor} />
  //         <CVCardContentContainer>
  //           <CVPlayerName>{`${names}`}</CVPlayerName>
  //           {currentCard.cardColor !== 'mojitoScore' ? (
  //             <CVBlankPrompt>Your blank is:</CVBlankPrompt>
  //           ) : null}
  //           {currentCard.cardColor !== 'mojitoScore' ? (
  //             <CVCardContent>{`${currentCard.content}`}</CVCardContent>
  //           ) : null}
  //         </CVCardContentContainer>
  //       </CardContainer>
  //       {currentCard.cardColor !== 'lemonadeScore'
  //         ? notLemonadeChallenge()
  //         : lemonadeChallenge()}
  //     </>
  //   );
  // };

  const fullVersion = () => {
    return (
      <>
        <CardContainer style={{height: windowWidth * 1.117}}>
          <FrontOfCard drink={currentCard.cardColor} />
          <CardContentContainer>
            <CardTitle>{currentCard.title}</CardTitle>
            <CardContent>{`${names}${currentCard.content_line_one}${
              currentCard.blank && currentCard.cardColor !== 'lemonadeScore'
                ? currentCard.blank.content
                : ''
            }${
              currentCard.content_line_two ? currentCard.content_line_two : ''
            }`}</CardContent>
            <CardComment>{currentCard.comment}</CardComment>
          </CardContentContainer>
        </CardContainer>
        {currentCard.cardColor !== 'lemonadeScore'
          ? notLemonadeChallenge()
          : lemonadeChallenge()}
      </>
    );
  };

  if (currentPlayer && currentCard && gameVersion && names) {
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
  width: 80%;
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
  padding: 4px;
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
  justify-content: space-around;
  width: 100%;
  bottom: 0px;
`;

const ButtonContainer = styled.Pressable`
  margin: 0 3px 0 3px;
`;

const WidthContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const ButtonText = styled.Text`
  position: absolute;
  text-align: center;
  color: #262020;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
  z-index: 1;
`;

export default ChallengeScreen;

import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import styled from 'styled-components';
import * as R from 'ramda';
import Background from './background/Background';
import ChallengeCardBackground from './background/ChallengeCardBackground';
import {whiskeyBlank} from '../blanks/whiskey';
import {martiniBlank} from '../blanks/martini';
import {playersRequest} from '../actions/players';
import {drinkersRequest} from '../actions/drinkers';
import {currentCardRequest} from '../actions/current-card';
import {storeWinners} from './storage/storage';
import {SafeAreaView} from 'react-native-safe-area-context';
import {buttonShadow} from './button/button-shadow';
import CompleteAndDrinkButton from './button/CompleteAndDrinkButton';
import {checkScoreRequest} from '../actions/check-score';
import {cardsRequest} from '../actions/cards';
import {lemonadeCardData} from '../cards/lemonade-data';
import {lemonadeBlankData} from '../blanks/lemonade-data';
import {martiniCardData} from '../cards/martini-data';
import {martiniBlankData} from '../blanks/martini-data';
import {whiskeyCardData, whiskeyCardDataCopy} from '../cards/whiskey-data';
import {whiskeyBlankData} from '../blanks/whiskey-data';
import {mojitoCardData} from '../cards/mojito-data';
import {log} from 'react-native-reanimated';

const ChallengeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);
  const cards = useSelector(state => state.Cards.cards);
  const [shouldTrigger, setShouldTrigger] = useState(true);
  // console.log('getting in challenge screen');

  // console.log('');
  // console.log(cards, 'raw data');
  // console.log('');

  const cardReset = (cardOrBlank, category) => {
    if (cardOrBlank === 'cards') {
      if (category === 'whiskeyScore') {
        console.log('getting here mateeee');
        return R.clone(whiskeyCardDataCopy);
      }
      if (category === 'martiniScore') {
        return martiniCardData;
      }
      if (category === 'mojitoScore') {
        return mojitoCardData;
      }
      if (category === 'lemonadeScore') {
        return lemonadeCardData;
      }
    }
    if (cardOrBlank === 'blanks') {
      if (category === 'whiskeyScore') {
        return R.clone(whiskeyBlankData);
      }
      if (category === 'martiniScore') {
        return martiniBlankData;
      }
      if (category === 'mojitoScore') {
        return lemonadeBlankData;
      }
    }
  };

  const randomizer = (cardOrBlank, category) => {
    console.log(' ');
    console.log(cards.cardData[category].cards, 'content before splice');

    if (cards.cardData[category].cards.length === 0) {
      const reset = cardReset('cards', category);
      cards.cardData[category].cards = reset;
      console.log(' ');
      console.log(reset, 'the reset');
    }
    const randomIndex =
      Math.floor(Math.random() * cards.cardData[category].cards.length) + 0;
    const challenge = cards.cardData[category].cards[randomIndex];

    cards.cardData[category].cards.forEach((item, index) => {
      if (item.id === challenge.id) {
        console.log('spliced');
        cards.cardData[category].cards.splice(index, 1);
      }
    });
    console.log(' ');
    console.log(cards.cardData[category].cards, 'content after splice');

    dispatch(cardsRequest(cards));
    return challenge;
  };

  // const randomizer = (cardOrBlank, category) => {
  //   let cardsCopy = {...cards};
  //   let content = cardsCopy.cardData[category][cardOrBlank];
  //   // console.log(' ');
  //   if (cardOrBlank === 'cards') {
  //     // console.log(content, 'content before splice');
  //   }
  //   if (content.length === 0) {
  //     const reset = cardReset(cardOrBlank, category);
  //     reset.forEach(challenge => {
  //       delete challenge.blank;
  //     });
  //     content = reset;
  //     // console.log(' ');
  //     // console.log(reset, 'the reset');
  //   }
  //   const randomIndex = Math.floor(Math.random() * content.length) + 0;
  //   const challenge = content[randomIndex];

  //   content.forEach((item, index) => {
  //     if (item.id === challenge.id) {
  //       content.splice(index, 1);
  //     }
  //   });
  //   if (cardOrBlank === 'cards') {
  //     // console.log(' ');
  //     // console.log(content, 'content after splice');
  //   }
  //   dispatch(cardsRequest(cardsCopy));
  //   return challenge;
  // };

  const blankRandomizer = (cardOrBlank, category) => {
    let cardsCopy = {...cards};
    let content = [...cardsCopy.cardData[category][cardOrBlank]];
    // console.log(' gettign here atleast');
    if (cardOrBlank === 'blanks') {
      // console.log(content, 'content before splice blank');
    }
    if (content.length === 0) {
      const reset = cardReset(cardOrBlank, category);
      reset.forEach(challenge => {
        delete challenge.blank;
      });
      content = reset;
      // console.log(' ');
      // console.log(reset, 'the reset blank');
    }
    const randomIndex = Math.floor(Math.random() * content.length) + 0;
    const challenge = content[randomIndex];

    content.forEach((item, index) => {
      if (item.id === challenge.id) {
        content.splice(index, 1);
      }
    });
    if (cardOrBlank === 'cards') {
      // console.log(' ');
      // console.log(content, 'content after splice blank');
    }
    dispatch(cardsRequest(cardsCopy));
    return challenge;
  };

  const cardAndBlank = async () => {
    if (currentCard.cardColor === 'whiskeyScore') {
      if (gameVersion === 'CARD') {
        dispatch(currentCardRequest(whiskeyBlank()));
      } else {
        let card = await randomizer('cards', 'whiskeyScore');
        // console.log(card, 'jsakjskajksja');
        let blank = await blankRandomizer('blanks', 'whiskeyScore');
        card.blank = blank;
        dispatch(currentCardRequest(card));
      }
    }
    // if (currentCard.cardColor === 'martiniScore') {
    //   if (gameVersion === 'CARD') {
    //     dispatch(currentCardRequest(martiniBlank()));
    //   } else {
    //     const card = randomizer('cards', 'martiniScore');
    //     card.blank = randomizer('blanks', 'martiniScore');
    //     dispatch(currentCardRequest(card));
    //   }
    // }
    // if (currentCard.cardColor === 'mojitoScore') {
    //   dispatch(currentCardRequest(randomizer('cards', 'mojitoScore')));
    // }
    // if (currentCard.cardColor === 'lemonadeScore') {
    //   const card = randomizer('cards', 'lemonadeScore');
    //   card.blank = randomizer('blanks', 'lemonadeScore');
    //   dispatch(currentCardRequest(card));
    // }
  };
  // dispatch(currentCardRequest(martiniCard(martiniBlank())));
  // dispatch(currentCardRequest(mojitoCard()));

  useEffect(() => {
    if (shouldTrigger) {
      cardAndBlank();
      setShouldTrigger(false);
    }
    // if (!currentCard.content_line_one) {
    //   cardAndBlank();
    // }
  }, [currentCard, currentPlayer, players, gameVersion, cards]);
  // console.log(currentCard, 'jksajksja');

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
        <ButtonContainer onPress={() => complete(false)}>
          <CompleteAndDrinkButton completeOrDrink={'DRINK'} />
        </ButtonContainer>
        <ButtonContainer onPress={() => complete(true)}>
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
            <CardContent>{`${names} ${currentCard.content_line_one}${
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

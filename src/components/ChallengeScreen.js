import React, {useState, useEffect, useCallback} from 'react';
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
import {playerTurn} from '../algorithms/turn';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ChallengeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cardColor = useSelector(state => state.CardColor.cardColor);
  const [cardContent, setCardContent] = useState(false);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const players = useSelector(state => state.Players.players);
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

  console.log(cardColor, 'color');

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
        names += `${name.name},`;
      } else if (index === playersLength - 2) {
        names += `${name.name} and `;
      } else {
        names += `${name.name}, `;
      }
    });
    return names;
  };

  const complete = () => {
    let playersCopy = players;
    let updatedPlayers = [];
    playersCopy.forEach(player => {
      console.log(player[cardColor], 'here');
      if (player.name === currentPlayer[0].name) {
        player[cardColor] += 1;
        updatedPlayers.push(player);
      } else {
        updatedPlayers.push(player);
      }
    });
    dispatch(playersRequest(updatedPlayers));
    navigation.navigate('Score Screen');
  };

  const names = nameMaker();

  const displayCardContent = () => {
    return (
      <>
        {gameVersion === 'FULL' ? (
          <>
            <CardContainer>
              <ChallengeCardBackground image={cardColor} />
            </CardContainer>
            <CardContentContainer>
              <CardTitle>{cardContent.title}</CardTitle>
              <CardContent>{`${names} ${cardContent.content}`}</CardContent>
              <CardComment>{cardContent.comment}</CardComment>
            </CardContentContainer>
            <Button
              buttonInfo={{
                text: 'OK',
                navigate: 'Lemonade Who Completed Screen',
                navigation,
              }}
            />
          </>
        ) : (
          <>
            <CVCardContainer>
              <ChallengeCardBackground image={cardColor} />
            </CVCardContainer>
            <CVCardContentContainer>
              <PlayerName>{`${names}`}</PlayerName>
              <CVCardContent>{`${cardContent.content}`}</CVCardContent>
            </CVCardContentContainer>
            <ButtonContainer onPress={() => complete()}>
              <CustomButton>COMPLETED</CustomButton>
            </ButtonContainer>
            <Button
              buttonInfo={{
                text: 'DRINK',
                navigate: 'Drink Screen',
                navigation,
              }}
            />
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
  width: 80%;
  height: auto;
`;

const CardContentContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.Text`
  font-size: 26px;
  text-align: center;
  width: 80%;
  font-family: Sunbird Black;
  // text-decoration: underline;
`;

const CardContent = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Sunbird Black;
`;

const CardComment = styled.Text`
  font-size: 20px;
  text-align: center;
  width: 80%;
  font-family: Sunbird Black;
  font-style: italic;
`;

const Counter = styled.Text`
  // position: absolute;
  right: -20px;
  top: -40px;
  margin: 0px;
  font-family: Sunbird Black;
  transform: rotate(15deg);
  font-size: 60px;
`;

const CVCardContainer = styled.View`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: auto;
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

const CVCardContent = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Sunbird Black;
`;

const PlayerName = styled.Text`
  font-size: 22px;
  text-align: center;
  width: 70%;
  font-family: Sunbird Black;
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
  font-family: Sunbird Black;
  overflow: hidden;
`;

export default ChallengeScreen;

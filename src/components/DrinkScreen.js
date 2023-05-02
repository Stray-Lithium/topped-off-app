import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import {useDispatch, useSelector} from 'react-redux';
import {currentPlayerRequest} from '../actions/current-player';
import {playersRequest} from '../actions/players';
import ChallengeCardBackground from './background/ChallengeCardBackground';
import DrinkBottomBar from './bar/DrinkBottomBar';
import FlipCard from 'react-native-flip-card';

const DrinkScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const drinkers = useSelector(state => state.Drinkers.drinkers);
  const [stealer, setStealer] = useState([]);

  const windowWidth = Dimensions.get('window').width;
  const ninetyPercent = windowWidth * 0.9;

  const stealChecker = () => {
    let potentialStealers = [];
    let doSteal = false;

    players.forEach(player => {
      if (player.name === currentPlayer[0]) {
        player.pointsAwarded >= 2 ? (doSteal = true) : null;
      }

      if (
        player.name !== currentPlayer[0] &&
        player[`${currentCard.cardColor}`] < 1 &&
        player.canSteal === true
      ) {
        potentialStealers.push(player.name);
      }
    });

    if (potentialStealers.length > 0 && doSteal) {
      const randomPlayerIndex =
        Math.floor(Math.random() * potentialStealers.length) + 0;
      const stealer = potentialStealers[randomPlayerIndex];
      setStealer([stealer]);
      doSteal = false;
      return stealer;
    } else {
      return [];
    }
  };

  useEffect(() => {
    if (stealer.length === 0) {
      stealChecker();
    }
  }, [players, currentPlayer, drinkers, currentCard]);

  const drinkTitle = () => {
    let title = '';
    drinkers.forEach((player, index) => {
      if (drinkers.length === 1 || index !== drinkers.length - 1) {
        title += `${player}, `;
      } else {
        title += `and ${player}, `;
      }
    });
    return title;
  };

  const confirm = () => {
    navigation.navigate('Score Screen');
  };

  const steal = () => {
    let updatedPlayers = [];
    players.forEach(player => {
      if (player.name === stealer[0]) {
        player.canSteal = false;
      }
      updatedPlayers.push(player);
    });
    dispatch(playersRequest(updatedPlayers));
    dispatch(currentPlayerRequest(stealer));
    navigation.navigate('Challenge Screen');
  };

  if (players && currentPlayer && drinkers && currentCard) {
    const isSteal =
      stealer.length > 0 && currentCard.cardColor !== 'lemonadeScore';
    return (
      <>
        <Background background={'Drinks Screen'} />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            <View style={{height: ninetyPercent * 1.24}}>
              <FlipCard
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={stealer.length > 0}
                onFlipEnd={isFlipEnd => {
                  console.log('isFlipEnd', isFlipEnd);
                }}>
                {/* Face Side */}
                <CardContainer>
                  <ChallengeCardBackground image={'drinkCard'} />
                  <CardContentContainer>
                    <CardTitle>
                      {`${drinkTitle()}`}
                      <DrinkText>{'\n'}DRINK!</DrinkText>
                    </CardTitle>
                    <CardComment>
                      Yeah, yeah, you've "just been thirsty"
                    </CardComment>
                  </CardContentContainer>
                </CardContainer>
                {/* Back Side */}
                <CardContainer>
                  <ChallengeCardBackground image={currentCard.cardColor} />
                  <CurrentCardContentContainer>
                    <CurrentCardTitle>{currentCard.title}</CurrentCardTitle>
                    <CurrentCardContent>{`${currentPlayer[0]} ${
                      currentCard.content_line_one
                    }${
                      currentCard.blank &&
                      currentCard.cardColor !== 'lemonadeScore'
                        ? currentCard.blank.content
                        : ''
                    }${
                      currentCard.content_line_two
                        ? currentCard.content_line_two
                        : ''
                    }`}</CurrentCardContent>
                    <CurrentCardComment>
                      {currentCard.comment}
                    </CurrentCardComment>
                  </CurrentCardContentContainer>
                </CardContainer>
              </FlipCard>
            </View>
            {stealer.length > 0 && currentCard.cardColor !== 'lemonadeScore' ? (
              <>
                <RefreshMessage>
                  {`${stealer[0]}`}, fancy stealing {`${drinkers[0]}`}'s
                  challenge for a point?{' '}
                </RefreshMessage>
                <FlipText>
                  (Click on the card to preview {`${drinkers[0]}`}'s challenge)
                </FlipText>
                <BarContainer onPress={() => steal()}>
                  <DrinkBottomBar isSteal={isSteal} />
                </BarContainer>
              </>
            ) : (
              <BarContainer onPress={() => confirm()}>
                <DrinkBottomBar isSeal={isSteal} />
              </BarContainer>
            )}
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <Background />;
  }
};

{
  /* <ButtonContainer onPress={() => confirm()}>
                <CustomButton>NEXT ROUND</CustomButton>
              </ButtonContainer> */
}

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 20px;
  text-align: center;
  width: 90%;
  font-family: Morning Breeze;
`;

const CheckboxesContainer = styled.ScrollView`
  display: flex;
  max-height: 50%;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const NamePosition = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
`;

const PlayerName = styled.Text`
  font-size: 20px;
  font-family: Morning Breeze;
  margin-right: 10px;
`;

const CheckboxPosition = styled.View`
  display: flex;
  align-items: center;
  align-items: flex-start;
  width: 50%;
`;

const ButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #ee3347;
  border-radius: 10px;
  border: solid 3px black;
  margin-bottom: 20px;
`;

const CustomButton = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
  padding: 12px 12px 12px 12px;
  letter-spacing: 5px;
  font-family: Morning Breeze;
  overflow: hidden;
`;

const CardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  // margin-bottom: 20px;
`;

const CardContentContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 100%;
`;

const CardTitle = styled.Text`
  font-size: 34px;
  text-align: center;
  width: 80%;
  margin-top: 20px;
  padding: 2px;
  color: #ffcf00;
  font-family: Morning Breeze;
`;

const DrinkText = styled.Text`
  font-size: 70px;
  text-align: center;
  width: 80%;
  margin-top: 20px;
  padding: 2px;
  color: #ffcf00;
  font-family: Morning Breeze;
`;

const CardComment = styled.Text`
  font-size: 30px;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
  padding: 2px;
  margin-top: 40px;
  color: #f2415b;
  font-family: Morning Breeze;
  font-style: italic;
`;

const CurrentCardContentContainer = styled.View`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  height: 100%;
`;

const CurrentCardTitle = styled.Text`
  font-size: 34px;
  text-align: center;
  width: 80%;
  margin-top: 20px;
  padding: 2px;
  font-family: Morning Breeze;
`;

const CurrentCardContent = styled.Text`
  font-size: 26px;
  text-align: center;
  width: 86%;
  line-height: 30px;
  padding: 2px;
  font-family: Morning Breeze;
`;

const CurrentCardComment = styled.Text`
  font-size: 24px;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
  padding: 2px;
  margin-top: 40px;
  font-family: Morning Breeze;
  font-style: italic;
`;

const BarContainer = styled.Pressable`
  position: absolute;
  bottom: 0;
`;

const RefreshMessage = styled.Text`
  padding: 20px 20px 20px 20px;
  margin-top: 20px;
  text-align: center;
  color: #ffcf00;
  font-size: 26px;
  font-family: Morning Breeze;
`;

const FlipText = styled.Text`
  padding: 0px 20px 20px 20px;
  margin-top: 20px;
  text-align: center;
  color: #ffcf00;
  font-size: 20px;
  font-family: Morning Breeze;
`;

export default DrinkScreen;

import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import {useDispatch, useSelector} from 'react-redux';
import {currentPlayerRequest} from '../actions/current-player';
import {playersRequest} from '../actions/players';
import FlipCard from 'react-native-flip-card';
import RedButtonTwoSvg from '../assets/buttons/RedButtonTwoSvg';
import FrontOfCard from './background/FrontOfCard';
import {buttonClickSound, menuSound} from './sound/sounds';
import {isInset} from './inset/insets';

const DrinkScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const currentCard = useSelector(state => state.CurrentCard.currentCard);
  const currentPlayer = useSelector(state => state.CurrentPlayer.currentPlayer);
  const drinkers = useSelector(state => state.Drinkers.drinkers);
  const [stealer, setStealer] = useState([]);

  const windowWidth = Dimensions.get('window').width;
  const barWidth = windowWidth * 0.92;
  const baseValue = barWidth * 0.18;
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
      if (index === drinkers.length - 2) {
        title += `${player} and `;
      } else {
        title += `${player}, `;
      }
    });
    return title;
  };

  const confirm = () => {
    buttonClickSound.play();
    navigation.navigate('Score Screen');
  };

  const steal = () => {
    buttonClickSound.play();
    let updatedPlayers = [];
    players.forEach(player => {
      if (player.name === stealer[0]) {
        player.canSteal = false;
      }
      updatedPlayers.push(player);
    });
    dispatch(playersRequest(updatedPlayers));
    dispatch(currentPlayerRequest(stealer));
    navigation.navigate('Challenge Screen', {stealer: stealer});
  };

  if (players && currentPlayer && drinkers && currentCard) {
    const isSteal =
      stealer.length > 0 && currentCard.cardColor !== 'lemonadeScore';
    const layout = isSteal
      ? {justifyContent: 'flex-end'}
      : {justifyContent: 'center'};
    return (
      <>
        <Background background={'Drinks Screen'} />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer style={layout}>
            <View style={{height: ninetyPercent * 1.24}}>
              <FlipCard
                friction={6}
                perspective={1000}
                flipHorizontal={true}
                flipVertical={false}
                flip={false}
                clickable={stealer.length > 0}
                onFlipStart={() => menuSound.play()}
                onFlipEnd={isFlipEnd => {
                  console.log('isFlipEnd', isFlipEnd);
                }}>
                {/* Face Side */}
                <CardContainer>
                  <FrontOfCard drink={'drink'} />
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
                  <FrontOfCard drink={currentCard.cardColor} />
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
            {isSteal ? (
              <StealContainer>
                <RefreshMessage>
                  {`${stealer[0]}`}, fancy stealing {`${drinkers[0]}`}'s
                  challenge for a point?{' '}
                </RefreshMessage>
                <FlipText>
                  (Click on the card to preview {`${drinkers[0]}`}'s challenge)
                </FlipText>
                <WidthContainer style={{marginBottom: isInset()}}>
                  <PlayContainer onPress={() => confirm()}>
                    <RedButtonTwoSvg
                      style={{
                        width: baseValue * 2 + barWidth * 0.02,
                        height: baseValue,
                      }}
                    />
                    <PlayText>NO</PlayText>
                  </PlayContainer>
                  <PlayContainer onPress={() => steal()}>
                    <RedButtonTwoSvg
                      style={{
                        width: baseValue * 2 + barWidth * 0.02,
                        height: baseValue,
                      }}
                    />
                    <PlayText>YES</PlayText>
                  </PlayContainer>
                </WidthContainer>
              </StealContainer>
            ) : (
              <PlayContainer
                style={{position: 'absolute', bottom: isInset()}}
                onPress={() => confirm()}>
                <RedButtonTwoSvg
                  style={{
                    width: baseValue * 2 + barWidth * 0.02,
                    height: baseValue,
                  }}
                />
                <PlayText>OK</PlayText>
              </PlayContainer>
            )}
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  } else {
    return <Background />;
  }
};

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const CardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
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
  font-family: Morning Breeze Italic;
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
  color: #262020;
  font-family: Morning Breeze;
`;

const CurrentCardContent = styled.Text`
  font-size: 26px;
  text-align: center;
  width: 86%;
  line-height: 30px;
  padding: 2px;
  color: #262020;
  font-family: Morning Breeze;
`;

const CurrentCardComment = styled.Text`
  font-size: 24px;
  text-align: center;
  width: 80%;
  margin-bottom: 20px;
  padding: 2px;
  margin-top: 40px;
  color: #262020;
  font-family: Morning Breeze Italic;
`;

const RefreshMessage = styled.Text`
  padding: 20px 20px 10px 20px;
  margin-top: 20px;
  text-align: center;
  color: #ffcf00;
  font-size: 26px;
  font-family: Morning Breeze;
`;

const FlipText = styled.Text`
  padding: 0px 20px 20px 20px;
  margin-top: 10px;
  text-align: center;
  color: #ffcf00;
  font-size: 20px;
  font-family: Morning Breeze;
`;

const StealContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WidthContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 92%;
`;

const PlayContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: 1%;
  margin-right: 1%;
`;

const PlayText = styled.Text`
  position: absolute;
  text-align: center;
  color: #262020;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
`;

export default DrinkScreen;

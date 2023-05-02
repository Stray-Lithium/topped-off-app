import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import * as R from 'ramda';
import Background from './background/Background';
import {useDispatch} from 'react-redux';
import {playersRequest} from '../actions/players';
import {buttonShadow} from './button/button-shadow';
import ReadyButton from './button/ReadyButton';
import PlusButton from './button/PlusButton';
import XButton from './button/XButton';
import {cardsRequest} from '../actions/cards';
import {lemonadeCardData} from '../cards/lemonade-data';
import {lemonadeBlankData} from '../blanks/lemonade-data';
import {martiniCardData} from '../cards/martini-data';
import {martiniBlankData} from '../blanks/martini-data';
import {whiskeyCardData} from '../cards/whiskey-data';
import {whiskeyBlankData} from '../blanks/whiskey-data';
import {mojitoCardData} from '../cards/mojito-data';

const NamesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [players, setPlayers] = useState([]);

  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

  useEffect(() => {}, [players]);

  const onChangeText = input => {
    setName(input);
  };

  const handleSubmit = () => {
    let addName = true;
    players.forEach(player => {
      if (player.name === name) {
        addName = false;
      }
    });
    if (name.length > 0 && addName) {
      let playerObject = {
        name: name.toUpperCase(),
        lemonadeScore: 0,
        whiskeyScore: 0,
        martiniScore: 0,
        mojitoScore: 0,
        turns: 0,
        pointsAwarded: 0,
        canSteal: true,
      };
      setPlayers([...players, playerObject]);
    }
    setName('');
  };

  const deleteName = currentDelete => {
    let updatedPlayers = [];
    players.forEach(player => {
      if (player.name !== currentDelete) {
        updatedPlayers.push(player);
      }
    });
    setPlayers(updatedPlayers);
  };

  // console.log(whiskeyCardData, 'whisley card data');

  const wCardTest = R.clone(whiskeyCardData);
  const wBlankTest = R.clone(whiskeyBlankData);

  const ready = () => {
    dispatch(playersRequest(players));
    dispatch(
      cardsRequest({
        turns: [
          {name: 'lemonadeScore', turns: 0},
          {name: 'martiniScore', turns: 0},
          {name: 'whiskeyScore', turns: 0},
          {name: 'mojitoScore', turns: 0},
        ],
        cardData: {
          lemonadeScore: {cards: lemonadeCardData, blanks: lemonadeBlankData},
          martiniScore: {cards: martiniCardData, blanks: martiniBlankData},
          whiskeyScore: {
            cards: wCardTest,
            blanks: wBlankTest,
          },
          mojitoScore: {cards: mojitoCardData},
        },
      }),
    );
    navigation.navigate('Card Screen');
  };

  const pageContent = () => {
    return (
      <SafeAreaView style={{flex: 1}}>
        <ScreenContainer>
          <TitleContainer>
            <Text
              style={{
                fontSize: 38,
                color: '#ffcf00',
                fontFamily: 'Morning Breeze Bold',
              }}>
              WHO's PLAYING?
            </Text>
          </TitleContainer>
          <PlayersList>
            {players.map(player => {
              return (
                <NameContainer key={player.name}>
                  <PlayerName key={player.name}>{player.name}</PlayerName>
                  <ButtonContainer onPress={() => deleteName(player.name)}>
                    <XButton />
                  </ButtonContainer>
                </NameContainer>
              );
            })}
          </PlayersList>
          <KeyboardAvoidingView
            style={{width: '100%'}}
            behavior="position"
            keyboardVerticalOffset={keyboardVerticalOffset}>
            <NameInputContainer>
              <NameInput
                onChangeText={text => onChangeText(text)}
                value={name}
                placeholder="Enter Name..."
                placeholderTextColor="#808080"
                onSubmitEditing={() => handleSubmit()}
              />
              <IconTouch onPress={() => handleSubmit()}>
                <PlusButton />
              </IconTouch>
            </NameInputContainer>
          </KeyboardAvoidingView>
          <ButtonContainer onPress={() => ready()}>
            <ReadyButton />
          </ButtonContainer>
        </ScreenContainer>
      </SafeAreaView>
    );
  };

  return (
    <>
      <Background background={'Name Screen'} />
      {pageContent()}
    </>
  );
};

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // color: black;
  height: 100%;
  width: 100%;
`;

const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 20px;
`;

const PlayersList = styled.ScrollView`
  flex: 1;
  margin-bottom: 20px;
`;

const NameContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PlayerName = styled.Text`
  font-size: 22px;
  margin: 6px 6px 6px 6px;
  border-radius: 10px;
  text-align: center;
  min-width: 40%;
  padding: 6px;
  letter-spacing: 1px;
  background-color: #ccc;
  border: solid 3px black;
  overflow: hidden;
  font-family: Morning Breeze;
`;

const NameInputContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NameInput = styled.TextInput`
  width: 75%;
  height: 50px;
  border-radius: 10px;
  font-size: 20px;
  padding-left: 14px;
  margin-right: 8px;
  font-family: Morning Breeze;
  border: solid 3px black;
  background-color: #ccc;
`;

const IconTouch = styled.Pressable``;

export default NamesScreen;

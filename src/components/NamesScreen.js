import React, {useState, useEffect} from 'react';
import {Text, KeyboardAvoidingView, Platform, Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import * as R from 'ramda';
import Background from './background/Background';
import {useDispatch} from 'react-redux';
import {playersRequest} from '../actions/players';
import XButton from './button/XButton';
import {cardsRequest} from '../actions/cards';
import {lemonadeCardData} from '../cards/lemonade-data';
import {lemonadeBlankData} from '../blanks/lemonade-data';
import {martiniCardData} from '../cards/martini-data';
import {martiniBlankData} from '../blanks/martini-data';
import {whiskeyCardData} from '../cards/whiskey-data';
import {whiskeyBlankData} from '../blanks/whiskey-data';
import {mojitoCardData} from '../cards/mojito-data';
import RedButtonTwoSvg from '../assets/buttons/RedButtonTwoSvg';
import YellowPlusButton from '../assets/buttons/YellowPlusButton';
import Sound from 'react-native-sound';

const NamesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [players, setPlayers] = useState([]);
  const [minPlayersError, setMinPlayersError] = useState(false);
  const [duplicatePlayersError, setDulplicatePlayersError] = useState(false);
  const baseValue = Dimensions.get('window').width * 0.18;
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;
  const windowWidth = Dimensions.get('window').width * 0.92;
  Sound.setCategory('Playback');

  const buttonClickSound = new Sound(
    'button-sound.wav',
    Sound.MAIN_BUNDLE,
    error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // when loaded successfully
      console.log(
        'duration in seconds: ' +
          buttonClickSound.getDuration() +
          'number of channels: ' +
          buttonClickSound.getNumberOfChannels(),
      );
    },
  );

  useEffect(() => {
    if (players.length >= 2) {
      setMinPlayersError(false);
    }
  }, [players]);

  const onChangeText = input => {
    setName(input);
  };

  const handleSubmit = () => {
    buttonClickSound.play(success => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
    let addName = true;
    players.forEach(player => {
      if (player.name === name.toUpperCase()) {
        addName = false;
        setDulplicatePlayersError(true);
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
      setDulplicatePlayersError(false);
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

  const ready = () => {
    if (players.length <= 1) {
      setMinPlayersError(true);
    } else {
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
            lemonadeScore: {
              cards: R.clone(lemonadeCardData),
              blanks: R.clone(lemonadeBlankData),
            },
            martiniScore: {
              cards: R.clone(martiniCardData),
              blanks: R.clone(martiniBlankData),
            },
            whiskeyScore: {
              cards: R.clone(whiskeyCardData),
              blanks: R.clone(whiskeyBlankData),
            },
            mojitoScore: {cards: R.clone(mojitoCardData)},
          },
        }),
      );
      navigation.navigate('Card Screen');
    }
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
          {duplicatePlayersError ? (
            <Message>Cannot use the same name twice.</Message>
          ) : (
            <></>
          )}
          {minPlayersError ? (
            <Message>Please enter at least two players.</Message>
          ) : (
            <></>
          )}
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
              <IconTouch
                style={{width: 58, height: 58}}
                onPress={() => handleSubmit()}>
                <YellowPlusButton />
              </IconTouch>
            </NameInputContainer>
          </KeyboardAvoidingView>
        </ScreenContainer>
        <BottomBarContainer
          style={{
            height: baseValue,
          }}>
          <PlayButtonContainer
            style={{
              width: baseValue * 2 + windowWidth * 0.02,
            }}
            onPress={() => ready()}>
            <PlayText>READY!</PlayText>
            <RedButtonTwoSvg />
          </PlayButtonContainer>
        </BottomBarContainer>
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
  height: 100%;
  width: 100%;
`;

const WidthContainer = styled.Pressable`
  height: 100%;
  background-color: teal;
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

const Message = styled.Text`
  width: 80%;
  padding: 0px 0 20px 0;
  text-align: center;
  color: #ffcf00;
  font-size: 26px;
  font-family: Morning Breeze;
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

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  margin: 0 4% 0 4%;
`;

const PlayButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlayText = styled.Text`
  position: absolute;
  text-align: center;
  color: #262020;
  font-size: 30px;
  letter-spacing: 1px;
  font-family: Morning Breeze;
  z-index: 1;
`;

export default NamesScreen;

import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, KeyboardAvoidingView, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {playersRequest} from '../actions/players';
import {buttonShadow} from './button/button-shadow';
import ReadyButton from './button/ReadyButton';
import PlusButton from './button/PlusButton';
import XButton from './button/XButton';

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
    let playerObject = {
      name: name.toUpperCase(),
      lemonadeScore: 0,
      whiskeyScore: 0,
      martiniScore: 0,
      mojitoScore: 0,
      turns: 0,
      pointsAwarded: 0,
      canSteal: true,
      cardTurns: [
        {name: 'lemonadeScore', turns: 0},
        {name: 'martiniScore', turns: 0},
        {name: 'whiskeyScore', turns: 0},
        {name: 'mojitoScore', turns: 0},
      ],
    };
    setPlayers([...players, playerObject]);
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
    dispatch(playersRequest(players));
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
                <NameContainer>
                  <PlayerName key={player.name}>{player.name}</PlayerName>
                  <ButtonContainer onPress={() => deleteName(player.name)}>
                    <XButton />
                  </ButtonContainer>
                  {/* <IconCross
                    style={styles.crossIcon}
                    onPress={() => deleteName(player.name)}>
                    <Icon name="x" style={styles.plusIcon} />
                  </IconCross> */}
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
                {/* <Icon name="plus" style={styles.plusIcon} /> */}
              </IconTouch>
            </NameInputContainer>
          </KeyboardAvoidingView>
          <ButtonContainer onPress={() => ready()} style={buttonShadow}>
            <ReadyButton />
          </ButtonContainer>
        </ScreenContainer>
      </SafeAreaView>
    );
  };

  return (
    <>
      <Background />
      {pageContent()}
    </>
  );
};

const styles = StyleSheet.create({
  plusIcon: {
    fontSize: 32,
  },
  crossIcon: {
    padding: 1,
    backgroundColor: '#ffcf00',
  },
});

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: black;
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

const Title = styled.Image`
  flex: 1;
  width: 100%;
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

const CustomButton = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
  padding: 12px 12px 12px 12px;
  letter-spacing: 5px;
  font-family: Morning Breeze;
  overflow: hidden;
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

const IconCross = styled.TouchableOpacity`
  padding: 2px;
  border-radius: 10px;
  background-color: #ffcf00;
  border: solid 3px black;
`;

export default NamesScreen;

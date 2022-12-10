import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components';
import Background from './background/Background';
import Button from './button/Button';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';
import {playersRequest} from '../actions/players';
import {TouchableHighlight} from 'react-native-gesture-handler';

const NamesScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [players, setPlayers] = useState([]);
  const [howManyPlayers, setHowManyPlayers] = useState(0);
  const gameVersion = useSelector(state => state.GameVersion.gameVersion);

  useEffect(() => {}, [players, gameVersion]);

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
    };
    setHowManyPlayers(howManyPlayers + 1);
    setPlayers([...players, playerObject]);
    setName('');
  };

  const ready = () => {
    dispatch(playersRequest(players));
    navigation.navigate(
      gameVersion === 'FULL' ? 'Card Screen' : 'Card Version Card Screen',
    );
  };

  if (gameVersion) {
    return (
      <>
        <Background />
        <SafeAreaView style={{flex: 1}}>
          <ScreenContainer>
            <TitleContainer>
              <Title source={require('../assets/whos-playing.png')} />
            </TitleContainer>
            <PlayersList>
              {players.map(player => {
                return <PlayerName key={player.name}>{player.name}</PlayerName>;
              })}
            </PlayersList>
            <NameInputContainer>
              <IconTouch onPress={() => handleSubmit()}>
                <Icon name="plus" style={styles.plusIcon} />
              </IconTouch>
              <NameInput
                onChangeText={text => onChangeText(text)}
                value={name}
                placeholder="Enter Name..."
                placeholderTextColor="gray"
                onSubmitEditing={() => handleSubmit()}
              />
            </NameInputContainer>
            <TouchableHighlight style={{width: '100%'}} onPress={() => ready()}>
              <Button
                buttonInfo={{
                  text: 'READY!',
                }}
              />
            </TouchableHighlight>
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  plusIcon: {
    fontSize: 26,
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

const PlayerName = styled.Text`
  font-size: 22px;
  margin: 4px;
  border-radius: 10px;
  text-align: center;
  min-width: 40%;
  padding: 6px;
  letter-spacing: 1px;
  background-color: white;
  background-color: rgba(255, 255, 255, 0.5);
  border: solid 3px black;
  overflow: hidden;
  font-family: Sunbird Black;
`;

const NameInputContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin-bottom: 20px;
`;

const NameInput = styled.TextInput`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  font-size: 20px;
  padding-left: 14px;
  font-family: Sunbird Black;
  border: solid 3px black;
  background-color: rgba(255, 255, 255, 0.5);
`;

const IconTouch = styled.TouchableOpacity`
  position: absolute;
  right: -20px;
  top: -20px;
  padding: 10px;
  border-radius: 20px;
  background-color: #ee3347;
  border: solid 3px black;
  z-index: 1;
  overflow: hidden;
`;

export default NamesScreen;

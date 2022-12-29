import {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import Background from './background/Background';
import {cardColorRequest} from '../actions/card-color';
import ScoreBoard from './scoreboard/scoreboard';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const ScoreScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.Players.players);
  const cardColor = useSelector(state => state.CardColor.cardColor);
  const windowWidth = Dimensions.get('window').width * 0.8;

  useEffect(() => {}, [players, cardColor]);

  const exitButton = () => {
    dispatch(cardColorRequest(false));
    navigation.navigate('Card Screen');
  };

  if (players && cardColor) {
    return (
      <>
        <Background background={cardColor} />
        <SafeAreaView style={{flex: 1}}>
          <ExitPressable
            onPress={() => {
              exitButton();
            }}>
            <ExitButton>X</ExitButton>
          </ExitPressable>
          <ScreenContainer>
            <AutoHeightImage
              style={{marginBottom: 20}}
              width={windowWidth}
              source={require('../assets/scoreboard.png')}
            />
            <ScoreBoard />
          </ScreenContainer>
        </SafeAreaView>
      </>
    );
  } else return <Text>Hello</Text>;
};

const ExitPressable = styled.Pressable``;

const ExitButton = styled.Text`
  position: absolute;
  top: 8px;
  left: 24px;
  font-size: 32px;
  font-weight: bold;
`;

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 50px;
`;

export default ScoreScreen;

import styled from 'styled-components';
import {Text} from 'react-native';
import Background from './background/Background';
// import {getWinners} from './storage/storage';
import {useEffect, useState} from 'react';

const EndScreen = () => {
  const [winners, setWinners] = useState(false);

  useEffect(() => {
    if (!winners) {
      const getWinners = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('winners');
          console.log(jsonValue, 'end screen json');
          setWinners(jsonValue);
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {}
      };
      getWinners();
    }
  }, [winners]);

  console.log(winners, 'end screen test');

  const nameMaker = () => {
    console.log(winners, 'name maker test');
    const winnersLength = winners.length;
    let names = '';
    winners.forEach((name, index) => {
      if (winnersLength === 1) {
        names += `${name},`;
      } else if (index === winnersLength - 2) {
        names += `${name} and `;
      } else {
        names += `${name}, `;
      }
    });
    console.log(names, 'test');
    return names;
  };

  if (winners) {
    winningNames = nameMaker(winners);
    return (
      <ScreenContainer>
        <Background />
        <WinnersText>
          {winningNames} you topped off all of your drinks! Congratulations!
        </WinnersText>
      </ScreenContainer>
    );
  }
};

export default EndScreen;

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const WinnersText = styled.Text`
  font-family: Morning Breeze;
  font-weight: bold;
  font-size: 32px;
  width: 70%;
`;

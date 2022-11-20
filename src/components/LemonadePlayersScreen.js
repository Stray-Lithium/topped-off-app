import Background from './background/Background';
import styled from 'styled-components';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Pressable} from 'react-native';
import AnimatedCheckbox from 'react-native-checkbox-reanimated';

const LemonadePlayersScreen = () => {
  const [checkedNames, setCheckedNames] = useState([]);

  const players = ['JAKE', 'NATE', 'ABBIE'];

  const checkboxClick = checkName => {
    if (!checkedNames.includes(checkName)) {
      setCheckedNames([...checkedNames, checkName]);
    } else {
      let filter = checkedNames.filter(player => player !== checkName);
      setCheckedNames(filter);
    }
  };

  const checkBoxes = () => {
    return (
      <>
        {players.map(player => {
          return (
            <>
              <Title>{player}</Title>
              <View style={styles.container}>
                <Pressable
                  onPress={() => checkboxClick(player)}
                  style={styles.checkbox}>
                  <AnimatedCheckbox
                    checked={checkedNames.includes(player)}
                    highlightColor="#ee3347"
                    checkmarkColor="#ffffff"
                    boxOutlineColor="#ee3347"
                  />
                </Pressable>
              </View>
            </>
          );
        })}
      </>
    );
  };

  return (
    <ScreenContainer>
      <Background />
      <Title>Hello</Title>
      {checkBoxes()}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkbox: {
    width: 64,
    height: 64,
  },
});

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

const Title = styled.Text``;

export default LemonadePlayersScreen;

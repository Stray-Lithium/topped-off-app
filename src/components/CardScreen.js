import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import BackOfCard from './background/BackOfCard';
import {cardColorRequest} from '../actions/card-color';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {playersRequest} from '../actions/players';

const CardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [ingredientCardToRender, setIngredientCardToRender] = useState(false);
  const players = useSelector(state => state.Players.players);

  console.log(players);

  const ingredientRandomizer = () => {
    const cards = ['lemonade', 'whiskey', 'martini', 'mojito'];
    const randomWordIndex = Math.floor(Math.random() * cards.length) + 0;
    const card = cards[randomWordIndex];
    setIngredientCardToRender(card);
    dispatch(cardColorRequest(`${card}Score`));
  };

  useEffect(() => {
    if (!ingredientCardToRender) {
      ingredientRandomizer();
    }
  }, [ingredientCardToRender, players]);

  const storeCurrentCard = () => {
    const randomNameIndex = Math.floor(Math.random() * players.length) + 0;
    const player = players[randomNameIndex];

    localStorage.setItem('currentName', JSON.stringify(`${name}`));
  };

  if (ingredientCardToRender) {
    return (
      <ScreenContainer>
        <Background background={ingredientCardToRender} />
        <CardTouch>
          <BackOfCard image={ingredientCardToRender} />
        </CardTouch>
      </ScreenContainer>
    );
  }
};

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

const CardTouch = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export default CardScreen;

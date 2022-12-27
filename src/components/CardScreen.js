import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Background from './background/Background';
import BackOfCard from './background/BackOfCard';
import {cardColorRequest} from '../actions/card-color';
import {useDispatch, useSelector} from 'react-redux';
import {currentPlayerRequest} from '../actions/current-player';

const CardScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [ingredientCardToRender, setIngredientCardToRender] = useState(false);
  const players = useSelector(state => state.Players.players);

  const ingredientRandomizer = () => {
    const cards = [
      'lemonadeScore',
      'whiskeyScore',
      'martiniScore',
      'mojitoScore',
    ];
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
    const currentPlayer = players[randomNameIndex];
    dispatch(currentPlayerRequest([currentPlayer.name]));
    dispatch(cardColorRequest(`${ingredientCardToRender}`));
    navigation.navigate(
      ingredientCardToRender === 'lemonadeScore'
        ? 'Lemonade Players Screen'
        : 'Challenge Screen',
    );
  };

  if (ingredientCardToRender) {
    return (
      <ScreenContainer>
        <Background background={ingredientCardToRender} />
        <CardTouch onPress={() => storeCurrentCard()}>
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

const algorythm = cards => {
  let highestTurn = 0;
  cards.forEach(card => {
    if (card.turns > highestTurn) {
      highestTurn = card.turns;
    }
  });

  let sortedCards = [];
  let reverse = [];

  for (let i = 0; i <= highestTurn; i++) {
    cards.forEach(card => {
      if (card.turns === i) {
        sortedCards.push(card);
        reverse.push(card);
      }
    });
  }
  const reverseSortedCards = reverse.reverse();

  let cardTickets = [];

  sortedCards.forEach((card, index) => {
    card.highestTurnCount = highestTurn;
    cardTickets.push(card);
    cardTickets[index].turnTickets = reverseSortedCards[index].turns;
  });
  console.log(cardTickets, 'card tickets');
  return cardTickets;
};

const turnRandomizer = cards => {
  const cardTurns = algorythm(cards);
  let turnPool = [];
  let lowestCard = 0;
  cardTurns.forEach((card, index) => {
    if (index === 0) {
      lowestCard = card.turns;
    }
    let multiplier = 5;
    if (card.turns > lowestCard) {
      multiplier = 1;
    }
    let turnsPlusPosition = card.turnTickets + (cardTurns.length - index);
    let loopCount = turnsPlusPosition + (card.highestTurnCount - card.turns);
    const multipliedLoop = loopCount * multiplier;
    for (let i = 0; i < multipliedLoop; i++) {
      turnPool.push(card.name);
    }
  });
  return turnPool[Math.floor(Math.random() * turnPool.length)];
};

const runHundredTimes = cards => {
  let percent = [];
  for (let i = 0; i <= 100; i++) {
    percent.push(turnRandomizer(cards));
  }

  let endResult = {};
  cards.forEach(card => {
    endResult[card.name] = percent.filter(element => element === card.name);
  });
  cards.forEach(card => {
    console.log(
      `${card.name} was chosen for the next turn ${
        endResult[card.name].length
      }% of the time.`,
    );
  });
};

runHundredTimes([
  {name: 'lemonadeScore', turns: 2},
  {name: 'martiniScore', turns: 1},
  {name: 'whiskeyScore', turns: 0},
  {name: 'mojitoScore', turns: 0},
]);

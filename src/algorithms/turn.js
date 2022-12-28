const algorythm = players => {
  let highestTurn = 0;
  players.forEach(player => {
    if (player.turns > highestTurn) {
      highestTurn = player.turns;
    }
  });

  let sortedPlayers = [];
  let reverse = [];

  for (let i = 0; i <= highestTurn; i++) {
    players.forEach(player => {
      if (player.turns === i) {
        sortedPlayers.push(player);
        reverse.push(player);
      }
    });
  }
  const reverseSortedPlayers = reverse.reverse();

  let playerTickets = [];

  sortedPlayers.forEach((player, index) => {
    player.highestTurnCount = highestTurn;
    playerTickets.push(player);
    playerTickets[index].turnTickets = reverseSortedPlayers[index].turns;
  });
  return playerTickets;
};

export const turnRandomizer = players => {
  const playerTurns = algorythm(players);
  let turnPool = [];
  let lowestPlayer = 0;
  playerTurns.forEach((player, index) => {
    if (index === 0) {
      lowestPlayer = player.turns;
    }
    let multiplier = 5;
    if (player.turns > lowestPlayer) {
      multiplier = 1;
    }
    let turnsPlusPosition = player.turnTickets + (playerTurns.length - index);
    let loopCount =
      turnsPlusPosition + (player.highestTurnCount - player.turns);
    const multipliedLoop = loopCount * multiplier;
    for (let i = 0; i < multipliedLoop; i++) {
      turnPool.push(player.name);
    }
  });
  return turnPool[Math.floor(Math.random() * turnPool.length)];
};

// const runHundredTimes = players => {
//   let percent = [];
//   for (let i = 0; i <= 100; i++) {
//     percent.push(turnRandomizer(players));
//   }

//   let endResult = {};
//   players.forEach(player => {
//     endResult[player.name] = percent.filter(element => element === player.name);
//   });
//   players.forEach(player => {
//     console.log(
//       `${player.name} was chosen for the next turn ${
//         endResult[player.name].length
//       }% of the time.`,
//     );
//   });
// };

// runHundredTimes();

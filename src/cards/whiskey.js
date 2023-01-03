export const whiskeyCard = blank => {
  const whiskeyCards = [
    {
      id: 'whc1',
      blankId: blank.id,
      title: `Class Clown`,
      content: `${blank.content} and make at least one player laugh.`,
      comment: `Easy, right?`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc2',
      blankId: blank.id,
      title: `Poker Face`,
      content: `Keep a poker face and ${blank.content}.`,
      comment: `Let’s hope all the flies on the wall stay silent.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc3',
      blankId: blank.id,
      title: `Shit Show`,
      content: `${blank.content} as if it’s a part of your stand-up because every player you crack up takes a drink.`,
      comment: `Hope no one’s filming`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc4',
      blankId: blank.id,
      title: `Flash Back`,
      content: `Get your hands tied up behind your back and ${blank.content}.`,
      comment: `Don't act like it's your first time.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc5',
      blankId: blank.id,
      title: `Sniper`,
      content: `Place a cup at the opposite end of the table and try to throw a small item into it. ${blank.content} after each shot until you make it.`,
      comment: `Thought those ‘Beer Pong’ nights won’t ever pay off?`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc6',
      blankId: blank.id,
      title: `Chicken Legs`,
      content: `Crouch-walk around the room and ${blank.content} in each corner.`,
      comment: `For all the leg days you skipped.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc7',
      blankId: blank.id,
      title: `Ready Steady`,
      content: `Keep one leg off the ground and ${blank.content}.`,
      comment: `There’s no way you took too much to mess this up.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc8',
      blankId: blank.id,
      title: `Patriot`,
      content: `${blank.content} and sing your National anthem as loud as you can.`,
      comment: `You know the words right?`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc9',
      blankId: blank.id,
      title: `Soaked`,
      content: ` ${blank.content} and take a shot/sip of your drink.`,
      comment: `Stay hydrated.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc10',
      blankId: blank.id,
      title: `Minute of Silence`,
      content: `${blank.content} and do a 360° without making a sound.`,
      comment: `Keep it down.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc11',
      blankId: blank.id,
      title: `Snack Time`,
      content: `${blank.content} and try to land a piece of food in your mouth as the player across throws it.`,
      comment: `Just without making a total mess around, right?`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc11',
      blankId: blank.id,
      title: `Elevator Pitch`,
      content: `Convince other players to buy “Topped Off” and ${blank.content} as you’re doing so.`,
      comment: `Make a demo they won’t forget.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc13',
      blankId: blank.id,
      title: `Macarena`,
      content: `Do the macarena until the song ends and ${blank.content} after every “Ayyyy Macarena!”.`,
      comment: `You love this song, don’t you?`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc14',
      blankId: blank.id,
      title: `Bar Special`,
      content: `Choose a player to make you a funky cocktail. ${blank.content} as you're drinking it.`,
      comment: `Bottoms up!`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc15',
      blankId: blank.id,
      title: `Back to School`,
      content: `Give every player a nickname. ${blank.content} after you drop one.`,
      comment: `Go easy on them ok?`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc16',
      blankId: blank.id,
      title: `Stuntman`,
      content: `Do a cartwheel and ${blank.content} as soon as you land.`,
      comment: `No one’s a natural.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc17',
      blankId: blank.id,
      title: `Shot in the dark`,
      content: `Close your eyes and describe everyone’s eye color. ${blank.content} each time you get it wrong.`,
      comment: `Trust your gut… or memory.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc18',
      blankId: blank.id,
      title: `Thumb War`,
      content: `Challenge each player to a thumb war and ${blank.content} each time you lose.`,
      comment: `One thumb to rule them all.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc19',
      blankId: blank.id,
      title: `Plot Twist`,
      content: `Choose a topic and let the group build a sentence word by word. ${blank.content} and repeat the exact sentence.`,
      comment: `Shoot your shot or take a shot.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc20',
      blankId: blank.id,
      title: `Flip Off/Front Flip/Hardflip`,
      content: `Flip a spoon into a glass and ${blank.content} everytime you miss.`,
      comment: `Little spoon or big spoon, doesn’t matter this time.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
    {
      id: 'whc21',
      blankId: blank.id,
      title: `Bottle Flip`,
      content: `play bottle flip and ${blank.content} every time you fail the landing until you succeed.`,
      comment: `You’ve done this before.`,
      timer: blank.timer,
      cardColor: 'whiskeyScore',
    },
  ];
  const randomWordIndex = Math.floor(Math.random() * whiskeyCards.length) + 0;
  const challenge = whiskeyCards[randomWordIndex];
  return challenge;
};

// `(Class Clown) ${blank} and make at least one player laugh. Easy, right?`,
//     `(Poker Face) Keep a poker face and ${blank}. Let’s hope all the flies on the wall stay silent.`,
//     `(Shit Show) ${blank} as if it’s a part of your stand-up because every player you crack up takes a drink. Hope no one’s filming.`,
//     `(Flash Back) Get your hands tied up behind your back and ${blank}. Don’t act like it’s your first time.`,
//     `(Sniper) Place a cup at the opposite end of the table and try to throw a small item into it. ${blank} after each shot until you make it. Thought those ‘Beer Pong’ nights won’t ever pay off?`,
//     `(Chicken Legs) Crouch-walk around the room and ${blank} in each corner. For all the leg days you skipped.`,
//     `(Ready Steady) Keep one leg off the ground and ${blank}.  There’s no way you took too much to mess this up.`,
//     `(Patriot) ${blank} and sing your National anthem as loud as you can. You know the words right?`,
//     `(Soaked) ${blank} and take a shot/sip of your drink. Stay hydrated.`,
//     `(Minute of Silence) ${blank} and do a 360° without making a sound. Keep it down.`,
//     `(Snack Time) ${blank} and try to land a piece of food in your mouth as the player across throws it. Just without making a total mess around, right?`,
//     `(Elevator Pitch) Convince other players to buy “Topped Off” and ${blank} as you’re doing so. Make a demo they won’t forget.`,
//     `(Macarena) Do the macarena until the song ends and ${blank} after every “Ayyyy Macarena!”. You love this song, don’t you?`,
//     `(Bar Special) Choose a player to make you a funky cocktail. ${blank} as you're drinking it. Bottoms up!`,
//     `(Back to School) Give every player a nickname. ${blank} after you drop one. Go easy on them ok?`,
//     `(Stuntman) Do a cartwheel and ${blank} as soon as you land. No one’s a natural.`,
//     `(Shot in the dark) Close your eyes and describe everyone’s eye color. ${blank} each time you get it wrong. Trust your gut… or memory.`,
//     `(Thumb War) Challenge each player to a thumb war and ${blank} each time you lose. One thumb to rule them all.`,
//     `(Plot Twist) Choose a topic and let the group build a sentence word by word. ${blank} and repeat the exact sentence. Shoot your shot or take a shot.`,
//     `(Flip Off/Front Flip/Hardflip) Flip a spoon into a glass and ${blank} everytime you miss. Little spoon or big spoon, doesn’t matter this time.`,
//     `Moonwalk around the table and ${blank}`,

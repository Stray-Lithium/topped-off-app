export const martiniBlank = () => {
  const martiniBlanks = [
    {id: 'mab1', content: `Roast other players for 30 seconds`, timer: 30},
    {id: 'mab2', content: `Curse every 3 seconds`, timer: 3},
    {id: 'mab3', content: `Offer everyone shots for 10 seconds`, timer: 10},
    {
      id: '',
      content: `Try selling your clothes to other players for 10 seconds`,
      timer: 10,
    },
    {id: 'mab4', content: `Giggle for 5 seconds`, timer: 5},
    {id: 'mab5', content: `Whistle for 10 seconds`, timer: 10},
    {id: 'mab6', content: `Whisper for 10 seconds`, timer: 10},
    {id: 'mab7', content: `Moan for 10 seconds`, timer: 10},
    {id: 'mab8', content: `Sing for 30 seconds`, timer: 30},
    {id: 'mab9', content: `Rap for 30 seconds`, timer: 30},
    {id: 'mab10', content: `Scream for 5 seconds`, timer: 5},
    {
      id: 'mab11',
      content: `Improvise a presentation for 1 minute`,
      timer: 60,
    },
    {id: 'mab12', content: `Get roasted for 30 seconds`, timer: 30},
    {id: 'mab13', content: `Make fart sounds for 10 seconds`, timer: 10},
    {id: 'mab14', content: `Make chicken sounds for 10 seconds`, timer: 10},
    {id: 'mab15', content: `Bark like a dog for 10 seconds`, timer: 10},
    {id: 'mab16', content: `Yell at everyone for 10 seconds`, timer: 10},
    {id: 'mab17', content: `Meow like a cat for 10 seconds`, timer: 10},
    {
      id: '',
      content: `Stick your tongue out and breathe like a dog for 10 seconds`,
      timer: 10,
    },
    {id: '', content: `Shout “this is how you do it”`, timer: 10},
  ];
  const randomWordIndex = Math.floor(Math.random() * martiniBlanks.length) + 0;
  const challenge = martiniBlanks[randomWordIndex];
  return challenge;
};

// 'Roast other players for 30 seconds',
//     'Curse every 3 seconds',
//     'Offer everyone shots for 10 seconds',
//     'Try selling your clothes to other players for 10 seconds',
//     'Giggle for 5 seconds',
//     'Whistle for 10 seconds',
//     'Whisper for 10 seconds',
//     'Moan for 10 seconds',
//     'Sing for 30 seconds',
//     'Rap for 30 seconds',
//     'Scream for 5 seconds',
//     'Improvise a presentation for 1 minute',
//     'Get roasted for 1 minute',
//     'Make fart sounds for 10 seconds',
//     'Make chicken sounds for 10 seconds',
//     'Bark like a dog for 10 seconds',
//     'Yell at everyone for 10 seconds',
//     'Meow like a cat for 10 seconds',
//     'Stick your tongue out and breathe like a dog for 10 seconds',

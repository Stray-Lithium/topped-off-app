export const whiskeyBlank = () => {
  const whiskeyBlanks = [
    {
      id: 'whb1',
      cardColor: 'whiskeyScore',
      content: 'Do 10 push-ups',
      timer: false,
    },
    {
      id: 'whb2',
      cardColor: 'whiskeyScore',
      content: 'Kneel for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb3',
      cardColor: 'whiskeyScore',
      content: 'Sniff both of your armpits',
      timer: false,
    },
    {
      id: 'whb4',
      cardColor: 'whiskeyScore',
      content: 'Get kicked in the ass',
      timer: false,
    },
    {
      id: 'whb5',
      cardColor: 'whiskeyScore',
      content: 'Swing your hips back and forth for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb6',
      cardColor: 'whiskeyScore',
      content: 'Hug someone',
      timer: false,
    },
    {
      id: 'whb7',
      cardColor: 'whiskeyScore',
      content: 'Jog for 20 seconds',
      timer: 20,
    },
    {
      id: 'whb8',
      cardColor: 'whiskeyScore',
      content: 'Move like Michael Jackson for 20 seconds',
      timer: 20,
    },
    {
      id: 'whb9',
      cardColor: 'whiskeyScore',
      content: 'Strike a funny pose',
      timer: false,
    },
    {
      id: 'whb10',
      cardColor: 'whiskeyScore',
      content: 'Hop on a chair for 5 seconds',
      timer: 5,
    },
    {
      id: 'whb11',
      cardColor: 'whiskeyScore',
      content: 'Get squished by all other players for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb12',
      cardColor: 'whiskeyScore',
      content: 'Balance a book on your head for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb13',
      cardColor: 'whiskeyScore',
      content: 'Balance a book on your thumb for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb14',
      cardColor: 'whiskeyScore',
      content: `Use your nose to write down the alphabet on someone's belly`,
      timer: false,
    },
    {
      id: 'whb15',
      cardColor: 'whiskeyScore',
      content: 'Pretend to swim in a pool for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb16',
      cardColor: 'whiskeyScore',
      content: 'Crawl for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb17',
      cardColor: 'whiskeyScore',
      content: 'Clap for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb18',
      cardColor: 'whiskeyScore',
      content: 'Jump for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb19',
      cardColor: 'whiskeyScore',
      content: 'Get spanked',
      timer: false,
    },
    {
      id: 'whb20',
      cardColor: 'whiskeyScore',
      content: 'Do 10 squats',
      timer: false,
    },
    {
      id: 'whb21',
      cardColor: 'whiskeyScore',
      content: 'Dance for 20 seconds',
      timer: 20,
    },
    {
      id: 'whb22',
      cardColor: 'whiskeyScore',
      content: 'Jump on one leg 5 times',
      timer: false,
    },
    {
      id: 'whb23',
      content: 'Melt an ice cube without using your arms',
      timer: false,
    },
    {
      id: 'whb24',
      cardColor: 'whiskeyScore',
      content: 'Shake your head for 5 seconds',
      timer: false,
    },
    {
      id: 'whb25',
      cardColor: 'whiskeyScore',
      content: 'Get slapped',
      timer: false,
    },
    {
      id: 'whb26',
      cardColor: 'whiskeyScore',
      content: 'Get pinched 3 times',
      timer: false,
    },
    {
      id: 'whb27',
      cardColor: 'whiskeyScore',
      content: 'Get tickled for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb28',
      cardColor: 'whiskeyScore',
      content: 'Lick your arms like a cat for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb29',
      cardColor: 'whiskeyScore',
      content: 'Snap your fingers 5 times',
      timer: false,
    },
  ];
  const randomWordIndex = Math.floor(Math.random() * whiskeyBlanks.length) + 0;
  const challenge = whiskeyBlanks[randomWordIndex];
  return challenge;
};

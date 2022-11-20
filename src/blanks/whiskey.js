export const whiskeyBlank = () => {
  const whiskeyBlanks = [
    {id: 'whb1', content: 'Do 10 push-ups', timer: false},
    {id: 'whb2', content: 'Kneel for 10 seconds', timer: 10},
    {id: 'whb3', content: 'Sniff both of your armpits', timer: false},
    {id: 'whb4', content: 'Get kicked in the ass', timer: false},
    {
      id: 'whb5',
      content: 'Swing your hips back and forth for 10 seconds',
      timer: 10,
    },
    {id: 'whb6', content: 'Hug someone', timer: false},
    {id: 'whb7', content: 'Jog for 20 seconds', timer: 20},
    {
      id: 'whb8',
      content: 'Move like Michael Jackson for 20 seconds',
      timer: 20,
    },
    {id: 'whb9', content: 'Strike a funny pose', timer: false},
    {id: 'whb10', content: 'Hop on a chair for 5 seconds', timer: 5},
    {
      id: 'whb11',
      content: 'Get squished by all other players for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb12',
      content: 'Balance a book on your head for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb13',
      content: 'Balance a book on your thumb for 10 seconds',
      timer: 10,
    },
    {
      id: 'whb14',
      content: `Use your nose to write down the alphabet on someone's belly`,
      timer: false,
    },
    {
      id: 'whb15',
      content: 'Pretend to swim in a pool for 10 seconds',
      timer: 10,
    },
    {id: 'whb16', content: 'Crawl for 10 seconds', timer: 10},
    {id: 'whb17', content: 'Clap for 10 seconds', timer: 10},
    {id: 'whb18', content: 'Jump for 10 seconds', timer: 10},
    {id: 'whb19', content: 'Get spanked', timer: false},
    {id: 'whb20', content: 'Do 10 squats', timer: false},
    {id: 'whb21', content: 'Dance for 20 seconds', timer: 20},
    {id: 'whb22', content: 'Jump on one leg 5 times', timer: false},
    {
      id: 'whb23',
      content: 'Melt an ice cube without using your arms',
      timer: false,
    },
    {id: 'whb24', content: 'Shake your head for 5 seconds', timer: false},
    {id: 'whb25', content: 'Get slapped', timer: false},
    {id: 'whb26', content: 'Get pinched 3 times', timer: false},
    {id: 'whb27', content: 'Get tickled for 10 seconds', timer: 10},
    {
      id: 'whb28',
      content: 'Lick your arms like a cat for 10 seconds',
      timer: 10,
    },
    {id: 'whb29', content: 'Snap your fingers 5 times', timer: false},
  ];
  const randomWordIndex = Math.floor(Math.random() * whiskeyBlanks.length) + 0;
  const challenge = whiskeyBlanks[randomWordIndex];
  return challenge;
};

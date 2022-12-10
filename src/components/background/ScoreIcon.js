import styled from 'styled-components';

const ScoreIcon = ({image}) => {
  const backgroundImage = () => {
    if (image === 'whiskeyScore') {
      return require(`../../assets/whiskey-score.png`);
    }
    if (image === 'martiniScore') {
      return require(`../../assets/martini-score.png`);
    }
    if (image === 'mojitoScore') {
      return require(`../../assets/mojito-score.png`);
    }
    if (image === 'lemonadeScore') {
      return require(`../../assets/lemonade-score.png`);
    }
  };
  const uri = backgroundImage();
  return <CardBack resizeMode="contain" source={uri} />;
};

const CardBack = styled.Image`
  width: 100%;
`;

export default ScoreIcon;

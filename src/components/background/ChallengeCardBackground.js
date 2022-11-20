import styled from 'styled-components';

const ChallengeCardBackground = ({image}) => {
  const backgroundImage = () => {
    if (image === 'whiskeyScore') {
      return require(`../../assets/red-card.png`);
    }
    if (image === 'martiniScore') {
      return require(`../../assets/blue-card.png`);
    }
    if (image === 'mojitoScore') {
      return require(`../../assets/white-card.png`);
    }
    if (image === 'lemonadeScore') {
      return require(`../../assets/yellow-card.png`);
    }
  };
  const uri = backgroundImage();

  return <CardBack resizeMode="contain" source={uri} />;
};

const CardBack = styled.Image`
  width: 100%;
  background-color: purple;
`;

export default ChallengeCardBackground;

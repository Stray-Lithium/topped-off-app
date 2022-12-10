import styled from 'styled-components';

const BackOfCard = ({image}) => {
  const backgroundImage = () => {
    if (image === 'whiskeyScore') {
      return require(`../../assets/whiskey-card.png`);
    }
    if (image === 'martiniScore') {
      return require(`../../assets/martini-card.png`);
    }
    if (image === 'mojitoScore') {
      return require(`../../assets/mojito-card.png`);
    }
    if (image === 'lemonadeScore') {
      return require(`../../assets/lemonade-card.png`);
    }
  };
  const uri = backgroundImage();

  return <CardBack resizeMode="contain" source={uri} />;
};

const CardBack = styled.Image`
  width: 100%;
`;

export default BackOfCard;

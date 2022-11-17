import styled from 'styled-components';

const BackOfCard = ({image}) => {
  const backgroundImage = () => {
    if (image === 'whiskey') {
      return require(`../../assets/whiskey-card.png`);
    }
    if (image === 'martini') {
      return require(`../../assets/martini-card.png`);
    }
    if (image === 'mojito') {
      return require(`../../assets/mojito-card.png`);
    }
    if (image === 'lemonade') {
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

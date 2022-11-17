import styled from 'styled-components';

const Background = ({background}) => {
  const backgroundImage = () => {
    if (!background) {
      return require(`../../assets/app-background.png`);
    }
    if (background === 'whiskey') {
      return require(`../../assets/whiskey-background.png`);
    }
    if (background === 'martini') {
      return require(`../../assets/martini-background.png`);
    }
    if (background === 'mojito') {
      return require(`../../assets/mojito-background.png`);
    }
    if (background === 'lemonade') {
      return require(`../../assets/lemonade-background.png`);
    }
  };
  const uri = backgroundImage();

  return <Backdrop source={uri} />;
};

const Backdrop = styled.ImageBackground`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export default Background;

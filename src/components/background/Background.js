import styled from 'styled-components';

const Background = ({background}) => {
  const backgroundImage = () => {
    if (!background) {
      return require(`../../assets/card-screen-background.png`);

      // return require(`../../assets/app-background.png`);
    }
    if (background === 'whiskeyScore') {
      return require(`../../assets/card-screen-background.png`);
    }
    if (background === 'martiniScore') {
      return require(`../../assets/card-screen-background.png`);
    }
    if (background === 'mojitoScore') {
      return require(`../../assets/card-screen-background.png`);
    }
    if (background === 'lemonadeScore') {
      return require(`../../assets/card-screen-background.png`);
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

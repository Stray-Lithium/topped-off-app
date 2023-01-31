import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const CardScreenBackground = ({image}) => {
  const windowWidth = Dimensions.get('window').width * 0.4;

  const backgroundImage = () => {
    if (image === 'whiskeyScore') {
      return require(`../../assets/card-screen-background.png`);
    }
    if (image === 'martiniScore') {
      return require(`../../assets/card-screen-background.png`);
    }
    if (image === 'mojitoScore') {
      return require(`../../assets/card-screen-background.png`);
    }
    if (image === 'lemonadeScore') {
      return require(`../../assets/card-screen-background.png`);
    }
  };
  const uri = backgroundImage();

  return (
    <AutoHeightImage
      style={{marginBottom: 20}}
      width={windowWidth}
      source={uri}
    />
  );
};

export default CardScreenBackground;

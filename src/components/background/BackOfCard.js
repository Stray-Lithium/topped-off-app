import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const BackOfCard = ({image}) => {
  const windowWidth = Dimensions.get('window').width * 0.9;

  console.log(image, 'image plurrrrr');

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

  return (
    <AutoHeightImage
      style={{marginBottom: 20}}
      width={windowWidth}
      source={uri}
    />
  );
};

export default BackOfCard;

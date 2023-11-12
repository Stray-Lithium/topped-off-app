import {Dimensions} from 'react-native';
import MojitoCardBackSvg from '../../assets/cards/MojitoCardBack';
import {
  MartiniBackSvg,
  OldFashionedBackSvg,
  PinaColadaBackSvg,
} from '../../assets/cards/card-backs';

const BackOfCard = ({drink}) => {
  const windowWidth = Dimensions.get('window').width;
  const size = {width: windowWidth * 0.8, height: windowWidth * 1.117};
  console.log(drink, 'yooo');
  const image = () => {
    if (drink === 'whiskeyScore') {
      return <OldFashionedBackSvg style={size} />;
    }
    if (drink === 'martiniScore') {
      return <MartiniBackSvg style={size} />;
    }
    if (drink === 'mojitoScore') {
      return <PinaColadaBackSvg style={size} />;
    }
    if (drink === 'lemonadeScore') {
      return <MojitoCardBackSvg style={size} />;
    }
  };

  return image();
};

export default BackOfCard;

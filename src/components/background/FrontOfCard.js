import {Dimensions} from 'react-native';
import {
  DrinkFrontSvg,
  MartiniFrontSvg,
  OldFashionedFrontSvg,
  PinaColadaFrontSvg,
  SexOnTheBeachFrontSvg,
} from '../../assets/cards/card-fronts';

const FrontOfCard = ({drink}) => {
  const windowWidth = Dimensions.get('window').width;
  const size = {width: windowWidth * 0.8, height: windowWidth * 1.117};
  const image = () => {
    if (drink === 'whiskeyScore') {
      return <OldFashionedFrontSvg style={size} />;
    }
    if (drink === 'martiniScore') {
      return <MartiniFrontSvg style={size} />;
    }
    if (drink === 'mojitoScore') {
      return <PinaColadaFrontSvg style={size} />;
    }
    if (drink === 'lemonadeScore') {
      return <SexOnTheBeachFrontSvg style={size} />;
    }
    if (drink === 'drink') {
      return <DrinkFrontSvg style={size} />;
    }
  };

  return image();
};

export default FrontOfCard;

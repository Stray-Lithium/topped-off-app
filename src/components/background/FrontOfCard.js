import {
  MartiniFrontSvg,
  OldFashionedFrontSvg,
  PinaColadaFrontSvg,
  SexOnTheBeachFrontSvg,
} from '../../assets/cards/card-fronts';

const FrontOfCard = ({drink}) => {
  const image = () => {
    if (drink === 'whiskeyScore') {
      return <OldFashionedFrontSvg />;
    }
    if (drink === 'martiniScore') {
      return <MartiniFrontSvg />;
    }
    if (drink === 'mojitoScore') {
      return <PinaColadaFrontSvg />;
    }
    if (drink === 'lemonadeScore') {
      return <SexOnTheBeachFrontSvg />;
    }
  };

  return image();
};

export default FrontOfCard;

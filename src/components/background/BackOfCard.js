import {
  MartiniBackSvg,
  OldFashionedBackSvg,
  PinaColadaBackSvg,
  SexOnTheBeachBackSvg,
} from '../../assets/cards/card-backs';

const BackOfCard = ({drink}) => {
  const image = () => {
    if (drink === 'whiskeyScore') {
      return <OldFashionedBackSvg />;
    }
    if (drink === 'martiniScore') {
      return <MartiniBackSvg />;
    }
    if (drink === 'mojitoScore') {
      return <PinaColadaBackSvg />;
    }
    if (drink === 'lemonadeScore') {
      return <SexOnTheBeachBackSvg />;
    }
  };

  return image();
};

export default BackOfCard;

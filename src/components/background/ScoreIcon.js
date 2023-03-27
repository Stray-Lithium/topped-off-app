import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const ScoreIcon = ({image}) => {
  const windowWidth = Dimensions.get('window').width * 0.9;

  const baseValue = windowWidth * 0.84;

  const backgroundImage = () => {
    if (image === 'whiskeyScore') {
      return require(`../../assets/full-whiskey.png`);
    }
    if (image === 'martiniScore') {
      return require(`../../assets/full-martini.png`);
    }
    if (image === 'mojitoScore') {
      return require(`../../assets/full-pina.png`);
    }
    if (image === 'lemonadeScore') {
      return require(`../../assets/full-lemonade.png`);
    }
    if (image === 'whiskeyScoreEmpty') {
      return require(`../../assets/empty-whiskey.png`);
    }
    if (image === 'martiniScoreEmpty') {
      return require(`../../assets/empty-martini.png`);
    }
    if (image === 'mojitoScoreEmpty') {
      return require(`../../assets/empty-pina.png`);
    }
    if (image === 'lemonadeScoreEmpty') {
      return require(`../../assets/empty-lemonade.png`);
    }
  };
  const uri = backgroundImage();
  return <AutoHeightImage width={baseValue / 4} source={uri} />;
};

export default ScoreIcon;

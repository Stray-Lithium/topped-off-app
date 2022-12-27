import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const ScoreIcon = ({image}) => {
  const windowWidth = Dimensions.get('window').width * 0.8;

  const backgroundImage = () => {
    if (image === false) {
      return require(`../../assets/empty-score.png`);
    }
    if (image === 'whiskeyScore') {
      return require(`../../assets/whiskey-score.png`);
    }
    if (image === 'martiniScore') {
      return require(`../../assets/martini-score.png`);
    }
    if (image === 'mojitoScore') {
      return require(`../../assets/mojito-score.png`);
    }
    if (image === 'lemonadeScore') {
      return require(`../../assets/lemonade-score.png`);
    }
  };
  const uri = backgroundImage();
  return <AutoHeightImage width={50} source={uri} />;
};

export default ScoreIcon;

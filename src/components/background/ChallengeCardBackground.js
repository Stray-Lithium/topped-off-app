import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const ChallengeCardBackground = ({image}) => {
  const windowWidth = Dimensions.get('window').width * 0.8;

  const backgroundImage = () => {
    if (image === 'whiskeyScore') {
      return require(`../../assets/red-card.png`);
    }
    if (image === 'martiniScore') {
      return require(`../../assets/blue-card.png`);
    }
    if (image === 'mojitoScore') {
      return require(`../../assets/white-card.png`);
    }
    if (image === 'lemonadeScore') {
      return require(`../../assets/yellow-card.png`);
    }
  };
  const uri = backgroundImage();

  return <AutoHeightImage width={windowWidth} source={uri} />;
};

export default ChallengeCardBackground;

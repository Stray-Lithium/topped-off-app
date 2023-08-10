import * as React from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const ScoreScreenClose = () => {
  const baseValue = Dimensions.get('window').width * 0.18;

  return (
    <AutoHeightImage
      width={baseValue * 2}
      source={require(`../../assets/x-button-two.png`)}
    />
  );
};

export default ScoreScreenClose;

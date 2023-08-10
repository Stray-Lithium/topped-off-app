import * as React from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const RefreshButton = () => {
  const windowWidth = Dimensions.get('window').width * 0.44;

  return (
    <AutoHeightImage
      width={windowWidth / 2}
      source={require(`../../assets/refresh-button.png`)}
    />
  );
};

export default RefreshButton;

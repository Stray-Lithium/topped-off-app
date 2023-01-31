import * as React from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions} from 'react-native';

const ReadyButton = () => {
  const windowWidth = Dimensions.get('window').width * 0.6;

  return (
    <AutoHeightImage width={44} source={require(`../../assets/x-button.png`)} />
  );
};

export default ReadyButton;

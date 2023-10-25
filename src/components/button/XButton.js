import * as React from 'react-native';
import {Dimensions} from 'react-native';
import RedCrossButtonSvg from '../../assets/buttons/RedCrossButtonSvg';

const ReadyButton = () => {
  const windowWidth = Dimensions.get('window').width * 0.6;

  return <RedCrossButtonSvg width={44} height={44} />;
};

export default ReadyButton;

import styled from 'styled-components';
import {Dimensions} from 'react-native';

const RulesNote = () => {
  const windowWidth = Dimensions.get('window').width;
  const marginAmount = windowWidth * 0.05;
  return (
    <Image
      style={{
        width: windowWidth * 0.9,
        marginLeft: marginAmount,
        marginRight: marginAmount,
      }}
      source={require(`../../assets/rules-note.png`)}
    />
  );
};

const Image = styled.Image`
  position: absolute;
  height: 100%;
  resize-mode: stretch;
`;

export default RulesNote;

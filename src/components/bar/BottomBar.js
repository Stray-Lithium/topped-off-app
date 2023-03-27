import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions, Pressable} from 'react-native';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {checkScoreRequest} from '../../actions/check-score';

const BottomBar = ({navigation}) => {
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get('window').width;

  const baseValue = windowWidth * 0.18;

  const scoreNavigation = () => {
    dispatch(checkScoreRequest(true));
    navigation.navigate('Score Screen');
  };

  return (
    <BottomBarContainer>
      <AutoHeightImage
        width={baseValue}
        source={require(`../../assets/question-button.png`)}
      />
      <AutoHeightImage
        width={baseValue}
        source={require(`../../assets/rules-button.png`)}>
        <Pressable
          style={{flex: 1}}
          onPress={() => navigation.navigate('Rules Screen')}
        />
      </AutoHeightImage>
      <AutoHeightImage
        width={baseValue * 3}
        source={require(`../../assets/score-button.png`)}>
        <Pressable style={{flex: 1}} onPress={() => scoreNavigation()} />
      </AutoHeightImage>
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  margin-left: 4%;
  margin-right: 4%;
`;

export default BottomBar;

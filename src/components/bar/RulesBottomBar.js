import AutoHeightImage from 'react-native-auto-height-image';
import {Dimensions, Pressable} from 'react-native';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {checkScoreRequest} from '../../actions/check-score';

const RulesBottomBar = ({navigation}) => {
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
        source={require(`../../assets/x-button.png`)}>
        <Pressable
          style={{flex: 1}}
          onPress={() => navigation.navigate('Menu Screen')}
        />
      </AutoHeightImage>
      <PageNumberContainer style={{width: baseValue * 2}}>
        {/* <PageNumber></PageNumber> */}
      </PageNumberContainer>
      <AutoHeightImage
        width={baseValue}
        source={require(`../../assets/x-button.png`)}>
        <Pressable
          style={{flex: 1}}
          onPress={() => navigation.navigate('Menu Screen')}
        />
      </AutoHeightImage>
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 92%;
  margin-left: 4%;
  margin-right: 4%;
`;

const PageNumberContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const PageNumber = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export default RulesBottomBar;

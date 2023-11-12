import {Dimensions} from 'react-native';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {checkScoreRequest} from '../../actions/check-score';
import RedCrossButtonSvg from '../../assets/buttons/RedCrossButtonSvg';
import RulesButtonSvg from '../../assets/buttons/RulesButtonSvg';
import ScoreboardButtonThree from '../../assets/buttons/ScoreboardButtonThree';
import {buttonClickSound, menuSound, quitSound} from '../sound/sounds';
import {isInset} from '../inset/insets';

const CardBottomBar = ({navigation}) => {
  const dispatch = useDispatch();
  const windowWidth = Dimensions.get('window').width * 0.92;
  const baseValue = windowWidth * 0.18;

  const menuNavigation = () => {
    quitSound.play();
    navigation.navigate('Menu Screen');
  };

  const rulesNavigation = () => {
    buttonClickSound.play();
    navigation.navigate('Rules Screen', {hint: 'rules'});
  };

  const scoreNavigation = () => {
    menuSound.play();
    dispatch(checkScoreRequest(true));
    navigation.navigate('Score Screen');
  };

  return (
    <BottomBarContainer style={{height: baseValue, marginBottom: isInset()}}>
      <WidthContainer
        style={{width: baseValue}}
        onPress={() => menuNavigation()}>
        <RedCrossButtonSvg />
      </WidthContainer>
      <WidthContainer
        style={{width: baseValue}}
        onPress={() => rulesNavigation()}>
        <RulesButtonSvg />
      </WidthContainer>
      <WidthContainer
        style={{width: baseValue * 3 + windowWidth * 0.04}}
        onPress={() => scoreNavigation()}>
        <ScoreboardButtonThree />
      </WidthContainer>
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 92%;
  margin: 0 4% 0 4%;
`;

const WidthContainer = styled.Pressable`
  height: 100%;
`;

export default CardBottomBar;

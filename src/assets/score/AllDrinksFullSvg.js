import * as React from 'react';
import styled from 'styled-components';
import AutoHeightImage from 'react-native-auto-height-image';
import ScoreIcon from '../../components/background/ScoreIcon';
import {Dimensions} from 'react-native';

function AllDrinksFullSvg() {
  const windowWidth = Dimensions.get('window').width * 0.9;

  return (
    <EachPersonsScoreContainer>
      <IconsContainer>
        <IconDiv>
          <ScoreIcon image={'whiskeyScore'} />
        </IconDiv>
        <IconDiv>
          <ScoreIcon image={'martiniScore'} />
        </IconDiv>
        <IconDiv>
          <ScoreIcon image={'mojitoScore'} />
        </IconDiv>
        <IconDiv>
          <ScoreIcon image={'lemonadeScore'} />
        </IconDiv>
      </IconsContainer>
      <PlankContainer>
        <AutoHeightImage
          width={windowWidth}
          source={require('../../assets/plank.png')}
        />
      </PlankContainer>
    </EachPersonsScoreContainer>
  );
}

const EachPersonsScoreContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-top: 20px;
`;

const IconsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 84%;
`;

const IconDiv = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlankContainer = styled.View`
  position: absolute;
  z-index: -1;
`;

export default AllDrinksFullSvg;

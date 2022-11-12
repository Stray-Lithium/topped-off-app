import styled from 'styled-components';
import {StyleSheet} from 'react-native';

const Button = ({buttonInfo}) => {
  return (
    <ButtonContainer style={styles.shadowProp}>
      <CustomButton
        onPress={() =>
          buttonInfo.navigation.navigate(`${buttonInfo.navigate}`)
        }>{`${buttonInfo.text}`}</CustomButton>
    </ButtonContainer>
  );
};

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#5A5A5A',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 0,
  },
});

const CustomButton = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
  padding: 12px 0px 12px 0px;
  letter-spacing: 5px;
  font-family: Sunbird Black;
  overflow: hidden;
`;

const ButtonContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #ee3347;
  border-radius: 10px;
  border: solid 3px black;
  margin-bottom: 20px;
`;

export default Button;

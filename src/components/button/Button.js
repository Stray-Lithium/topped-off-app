import styled from 'styled-components';
import {buttonShadow} from './button-shadow';

const Button = ({buttonInfo}) => {
  const isNavigate = () => {
    if (buttonInfo.navigate) {
      buttonInfo.navigation.navigate(`${buttonInfo.navigate}`);
    }
  };

  return (
    <ButtonContainer onPress={() => isNavigate()} style={buttonShadow}>
      <CustomButton>{`${buttonInfo.text}`}</CustomButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.Pressable`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background-color: #ee3347;
  border-radius: 10px;
  border: solid 3px black;
`;

const CustomButton = styled.Text`
  text-align: center;
  color: black;
  font-size: 26px;
  padding: 12px 12px 12px 12px;
  letter-spacing: 5px;
  font-family: Morning Breeze;
  overflow: hidden;
`;

export default Button;

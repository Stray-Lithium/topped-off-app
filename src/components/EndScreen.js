import styled from 'styled-components';

const EndScreen = () => {
  return (
    <ScreenContainer>
      <Text>Hello</Text>
    </ScreenContainer>
  );
};

export default EndScreen;

const ScreenContainer = styled.View`
  flex: 1;
  display: flex;
  color: black;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

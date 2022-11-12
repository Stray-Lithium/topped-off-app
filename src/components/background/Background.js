import styled from 'styled-components';

const Background = () => {
  return <Backdrop source={require('../../assets/app-background.png')} />;
};

const Backdrop = styled.ImageBackground`
  position: absolute;
  height: 100%;
  width: 100%;
`;

export default Background;

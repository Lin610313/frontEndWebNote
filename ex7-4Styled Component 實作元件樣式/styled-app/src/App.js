import React from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components';

function App() {
  const [fontColor, setFontColor] = React.useState('#fff');
  return (
    <StyledApp>
      <StyledHeader>
        <StyledAppLogo src={logo} alt="logo" />
        <StyledP>
          Edit <code>src/App.js</code> and save to reload.
        </StyledP>
        <StyledAppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          fontColor={fontColor}
        >
          Learn React
        </StyledAppLink>
        <StyledButton
          onClick={() => {
            if (fontColor === '#fff') {
              setFontColor('pink');
            } else {
              setFontColor('#fff');
            }
          }}
        >
          Change Color
        </StyledButton>
        <StyledButtonCool>Cool Button</StyledButtonCool>
      </StyledHeader>
    </StyledApp>
  );
}

export default App;

const StyledApp = styled.div`
  text-align: center;
`;

const StyledHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledP = styled.p`
  color: red;
  background-color: black;
  border-radius: 5px;
  padding: 10px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledAppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} 5s linear infinite;
`;

const StyledAppLink = styled.a`
  ${(props) => `color: ${props.fontColor}`};
`;

const StyledButton = styled.button`
  padding: 10px;
  border-raduis: 5px;
  margin-top: 30px;
`;

const StyledButtonCool = styled(StyledButton)`
  background-color: black;
  color: white;
  border: 0px;
  width: 50px;
  transition: all 0.3s;

  &:hover {
    color: red;
    width: 200px;
  }
`;

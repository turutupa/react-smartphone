import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import { yellow } from './constants';

const reactLinkColor = '#61dafb';

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const AppLogo = styled.img`
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppHeader = styled.nav`
  font-size: calc(10px + 1.5vmin);
  color: white;
  text-align: center;
  padding: 50px 20px;
`;

const Title = styled.p`
  font-family: Arial;
`;

const Link = styled.a`
  color: ${reactLinkColor};
  box-shadow: 0 4px ${yellow};
  font-family: Arial;
  text-decoration: none;

  &:hover {
    color: yellow;
  }
`;

export default function ExampleContent() {
  return (
    <Container>
      <AppHeader>
        <AppLogo src={Logo} />
        <Title>
          Place a component inside Smartphone Container and you're set to go!
        </Title>
        <Link
          href={'https://github.com/Turutupa/react-smartphone'}
          target='_blank'
        >
          react-smartphone
        </Link>
      </AppHeader>
    </Container>
  );
}

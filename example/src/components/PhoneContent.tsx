import styled from 'styled-components';
import Logo from '../assets/logo.svg';
import { yellow } from './constants';

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
        <br />
        <br />
        <Title>Scrolling test!</Title>
        <Title>Scroll like in a regular smartphone!</Title>
        <P>
          There’s a passage I got memorized. Ezekiel 25:17. “The path of the
          righteous man is beset on all sides by the inequities of the selfish
          and the tyranny of evil men. Blessed is he who, in the name of charity
          and good will, shepherds the weak through the valley of the darkness,
          for he is truly his brother’s keeper and the finder of lost children.
          And I will strike down upon thee with great vengeance and furious
          anger those who attempt to poison and destroy My brothers. And you
          will know I am the Lord when I lay My vengeance upon you.” Now… I been
          sayin’ that shit for years. And if you ever heard it, that meant your
          ass. You’d be dead right now. I never gave much thought to what it
          meant. I just thought it was a cold-blooded thing to say to a
          motherfucker before I popped a cap in his ass. But I saw some shit
          this mornin’ made me think twice. See, now I’m thinking: maybe it
          means you’re the evil man. And I’m the righteous man. And Mr. 9mm
          here… he’s the shepherd protecting my righteous ass in the valley of
          darkness. Or it could mean you’re the righteous man and I’m the
          shepherd and it’s the world that’s evil and selfish. And I’d like
          that. But that shit ain’t the truth. The truth is you’re the weak. And
          I’m the tyranny of evil men. But I’m tryin’, Ringo. I’m tryin’ real
          hard to be the shepherd.
        </P>
      </AppHeader>
    </Container>
  );
}

const reactLinkColor = '#61dafb';

const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
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
  font-family: Courier New;
  font-weight: bold;
  text-decoration: none;
  color: white;

  &:hover {
    color: ${yellow};
    filter: brightness(1.2);
  }
`;

const P = styled.p`
  font-size: calc(10px + 1vmin);
`;

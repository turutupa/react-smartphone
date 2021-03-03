import styled from 'styled-components';
import { gray, yellow } from './constants';

export default function Component() {
  return (
    <Container>
      <H1>react-smartphone</H1>
      <Description>
        Wrap your content in a stylish yet simple Smartphone!
      </Description>
      <p>
        <Badge
          href='https://github.com/turutupa/react-smartphone'
          target='_blank'
        >
          Github
        </Badge>
        <Badge href='https://www.buymeacoffee.com/turutupa' target='_blank'>
          Buy me a Beer
        </Badge>
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${gray};
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  padding-left: 80px;
`;

const H1 = styled.h1`
  font-size: 40px;
  font-family: Courier New;
  box-shadow: 0 5px ${yellow};
  color: white;
  margin-top: 0;
`;

const Description = styled.p`
  color: white;
  font-family: Courier New;
  font-size: 20px;
  max-width: 500px;
  margin-top: 0;
`;

const Badge = styled.a`
  background-color: ${yellow};
  color: ${gray};
  border-radius: 20px;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  margin-right: 10px;

  &:hover {
    filter: brightness(1.2);
  }
`;

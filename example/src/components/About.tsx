import styled from 'styled-components';
import { Code } from '../style/Code';
import { Paragraph } from '../style/Container';

const Container = styled.div`
  margin-top: 50px;
`;

const P = styled.p`
  font-weight: 600;
`;

const Heading = styled.h2`
  text-align: left;
`;
const Ul = styled.ul`
  font-weight: 600;
`;

export default function About() {
  return (
    <Container>
      <Paragraph>
        <Heading>About</Heading>
        <P>
          Simple and funny smartphone container! Acts as a regular div but with
          a smartphone frame. You can set height and width and insert any and as
          many react components inside as you wish!
        </P>
        <strong>Features:</strong>
        <Ul>
          <li>Adjustable colors </li>
          <li> Adjust width && height</li>
          <li>Scroll vertically like in a real smartphone </li>
          <li>Bind Volume && Home buttons to trigger your custom callback </li>
          <li>Toggle the phone lock button to activate lockscreen</li>
        </Ul>
      </Paragraph>
      <Paragraph>
        <Heading>Install</Heading>
        <P>To install simply run</P>
        <Code>npm i react-smartphone</Code>
        <P>
          How-to use it? Import Smartphone component as usual and place your
          React Components inside it as you would in a regular div (see example
          down below).
        </P>
        <Code>import SmartphoneContainer from 'react-smartphone'</Code>
        <P>
          <strong>ALL</strong> props are optional. If you don't provide anything
          it will render with default options (as rendered on this page).
        </P>
      </Paragraph>
    </Container>
  );
}

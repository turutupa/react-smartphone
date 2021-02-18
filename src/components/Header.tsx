import styled from 'styled-components';
import Smartphone from './Phone';
import PhoneContent from './PhoneContent';
import Hero from './Hero';

const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`;

const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 20px;

  @media (min-width: 1200px) {
    position: fixed;
    top: 5vh;
    left: 850px;
  }
`;

interface PhoneParams {
  [key: string]: string;
}

interface Props {
  phoneParams: PhoneParams;
}

export default function Component(props: Props) {
  return (
    <Container>
      <Hero />
      <PhoneWrapper>
        <Smartphone {...props.phoneParams}>
          <PhoneContent />
        </Smartphone>
      </PhoneWrapper>
    </Container>
  );
}

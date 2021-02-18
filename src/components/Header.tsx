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
  position: fixed;
  top: 150px;
  left: 850px;
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

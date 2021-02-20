import React from 'react';
import styled from 'styled-components';
import Smartphone from 'react-smartphone';
import PhoneContent from './PhoneContent';

const PhoneWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 20px;
  z-index: 99;

  @media (min-width: 1200px) {
    position: fixed;
    top: 5vh;
    left: 900px;
  }
`;

const Popup = styled.div`
  position: absolute;
  bottom: 0;
  font-weight: bold;
`;

interface PhoneParams {
  [key: string]: string;
}

interface Props {
  phoneParams: PhoneParams;
}

export default function Component(props: Props) {
  const [popup, setPopup] = React.useState<string>('');
  const [time, setTime] = React.useState<any>();

  React.useEffect(() => {
    setTime(
      setTimeout(() => {
        setPopup('');
      }, 3500)
    );

    return () => {
      clearTimeout(time);
    };
  }, [popup]);

  function homeButtonPress() {
    setPopup('Home button pressed');
  }

  function volumeButtonPress() {
    setPopup('Volume button pressed');
  }

  return (
    <PhoneWrapper>
      <Smartphone
        {...props.phoneParams}
        volumeButtonEvent={volumeButtonPress}
        homeButtonEvent={homeButtonPress}
      >
        <PhoneContent />
      </Smartphone>
      {popup && <Popup>{popup}</Popup>}
    </PhoneWrapper>
  );
}

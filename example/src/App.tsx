import React from 'react';
import styled from 'styled-components';
import HeroBanner from './components/HeroBanner';
import Kudos from './components/Kudos';
import About from './components/About';
import PhoneShowcase from './components/PhoneShowcase';
import PhoneParamsSelect from './components/PhoneParamsSelect';
import CodeResult from './components/CodeResult';
import { Heading } from './style/Headers';
import { Container } from './style/Container';
import {
  phoneWidth,
  phoneHeight,
  phoneColor,
  phoneSecondaryColor,
  dark,
  cameraColor as camColor,
  reactDefaultBackground,
} from './components/constants';

interface PhoneParams {
  [key: string]: string;
}

function App() {
  const [caseColor, setCaseColor] = React.useState<string>(phoneColor);
  const [screenColor, setScreenColor] = React.useState<string>(
    reactDefaultBackground
  );
  const [shadowColor, setShadowsColor] = React.useState<string>(
    phoneSecondaryColor
  );
  const [detailsColor, setDetailsColor] = React.useState<string>(dark);
  const [cameraColor, setCameraColor] = React.useState<string>(camColor);
  const [volumeButtonsColor, setVolumeButtonsColor] = React.useState<string>(
    phoneSecondaryColor
  );
  const [width, setWidth] = React.useState<number>(phoneWidth);
  const [height, setHeight] = React.useState<number>(phoneHeight);

  const phoneParams: PhoneParams = {
    caseColor,
    screenColor,
    detailsColor,
    shadowColor,
    cameraColor,
    volumeButtonsColor,
    width: width + 'px',
    height: height + 'px',
  };

  return (
    <Container>
      <HeroBanner />
      <PhoneShowcase phoneParams={phoneParams} />
      <About />

      <Heading>Customize!</Heading>
      <PhoneParamsSelect
        width={width}
        height={height}
        setWidth={setWidth}
        setHeight={setHeight}
        setCaseColor={setCaseColor}
        setScreenColor={setScreenColor}
        setShadowsColor={setShadowsColor}
        setDetailsColor={setDetailsColor}
        setCameraColor={setCameraColor}
        setVolumeButtonsColor={setVolumeButtonsColor}
      />

      <Heading>Result</Heading>
      <CodeResult
        height={height}
        width={width}
        cameraColor={cameraColor}
        caseColor={caseColor}
        detailsColor={detailsColor}
        screenColor={screenColor}
        shadowColor={shadowColor}
        volumeButtonsColor={volumeButtonsColor}
      />

      <Kudos />
    </Container>
  );
}

export default App;

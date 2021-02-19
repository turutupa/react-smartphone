import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import ParamsSelection from './components/ParamsSelection';
import Slider from './components/Slider';
import {
  phoneWidth,
  phoneHeight,
  phoneColor,
  phoneSecondaryColor,
  dark,
  cameraColor as camColor,
  reactDefaultBackground,
} from './components/constants';

const Container = styled.div`
  margin: 0;
  padding: 0;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  max-width: 100vw !important;
  overflow: hidden;
`;

const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  max-width: min(650px, 100%);
  margin-bottom: 40px;
  margin-top: 0;

  @media (min-width: 1200px) {
    margin-left: 80px;
    flex-wrap: wrap;
  }
`;

const PhoneParamsSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10px;
  text-align: center;

  @media (min-width: 1200px) {
    margin-left: 80px;
    padding: 50px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 700px;
    flex-wrap: wrap;
  }
`;

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const Code = styled.code`
  padding: 10px 10px;
  font-size: 14px;
  border-radius: 15px;
  background-color: #f3f3f3;
  width: 100%;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 16px;
    padding: 30px 30px;
  }
`;

const CodeBlock = styled.p`
  margin-top: 0;
  margin-bottom: 0;
`;

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
      <Header phoneParams={phoneParams} />
      <p style={{ marginLeft: '80px', margin: '30px 0 0 80px' }}>
        <em style={{ fontWeight: 600 }}>
          **Kudos to{' '}
          <a
            href='http://casesandberg.github.io/react-color/#api-onChange'
            target='_blank'
          >
            casesandberg
          </a>{' '}
          for his awesome react-color color picker!
        </em>
      </p>
      <Paragraph>
        <h2 style={{ textAlign: 'left' }}>About</h2>
        <p style={{ fontWeight: 600 }}>
          Simple and funny smartphone container! Acts as a regular div but with
          a smartphone frame. You can set height and width and insert any and as
          many react components inside as you wish!
        </p>
        <p style={{ fontWeight: 600 }}>
          Home button and volume button functionalities are WIP but in the
          meantime use the power button to toggle lockscreen!
        </p>
      </Paragraph>
      <Paragraph>
        <h2 style={{ textAlign: 'left' }}>Install</h2>
        <p style={{ fontWeight: 600 }}>To install simply run</p>
        <Code>npm i smart-phone</Code>
        <p style={{ fontWeight: 600 }}>
          How-to use it? Import Smartphone component as usual and place your
          React Components inside it as you would in a regular div (see example
          down below).
        </p>
        <Code>import Smartphone from 'react-smartphone'</Code>
        <p style={{ fontWeight: 600 }}>
          <strong>ALL</strong> props are optional. If you don't provide anything
          it will render with default options (as rendered on this page).
        </p>
      </Paragraph>
      <h2 style={{ textAlign: 'left', marginLeft: '80px' }}>Customize!</h2>
      <PhoneParamsSelection>
        <Slider
          label='Phone width'
          value={width}
          min={300}
          max={800}
          onChange={setWidth}
        />
        <Slider
          label='Phone height'
          value={height}
          min={500}
          max={1000}
          onChange={setHeight}
        />
        <ParamsSelection label={'Phone case color'} onChange={setCaseColor} />
        <ParamsSelection label={'Screen color'} onChange={setScreenColor} />
        <ParamsSelection label={'Shadows colors'} onChange={setShadowsColor} />
        <ParamsSelection label={'Details color'} onChange={setDetailsColor} />
        <ParamsSelection label={'Camera color'} onChange={setCameraColor} />
        <ParamsSelection
          label={'Volume Buttons color'}
          onChange={setVolumeButtonsColor}
        />

        <ResultWrapper>
          <h2 style={{ textAlign: 'left', paddingTop: '30px' }}>Result</h2>
          <Code>
            <CodeBlock>{`
        <SmartphoneContainer`}</CodeBlock>
            <span>
              {`
          height='${height + 'px'}' // regular height values px/%/vh/vw...
          width='${width + 'px'}' // regular width values px/%/vh/vw...
          caseColor='${screenColor}' // hex or rgb
          detailsColor='${detailsColor}' // hex or rgb
          cameraColor='${cameraColor}' // hex or rgb
          shadowColor='${shadowColor}' // hex or rgb
          volumeButtonsColor='${volumeButtonsColor}' // hex or rgb
          screenColor='${screenColor}' // hex or rgb
          >`
                .split('\n')
                .map((row) => (
                  <CodeBlock key={row} style={{ marginLeft: '25px' }}>
                    {row}
                  </CodeBlock>
                ))}
            </span>
            <p style={{ margin: '15px 25px', fontWeight: 'bolder' }}>
              // Your component goes here!
            </p>
            <CodeBlock>
              {`
        </SmartphoneContainer>
        `}
            </CodeBlock>
          </Code>
        </ResultWrapper>
      </PhoneParamsSelection>
    </Container>
  );
}

export default App;

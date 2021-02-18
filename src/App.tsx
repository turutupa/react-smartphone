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
`;

const Body = styled.div`
  margin-left: 80px;
  padding: 50px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 600px;
  flex-wrap: wrap;
`;

const Code = styled.code`
  font-size: 16px;
  padding: 30px 30px;
  border-radius: 25px;
  background-color: #f3f3f3;
  width: 100%;
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
      <Body>
        <p>
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

        <h3 style={{ paddingTop: '30px' }}>Result</h3>
        <Code>
          <CodeBlock>{`
        <Smartphone`}</CodeBlock>
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
        </Smartphone>
        `}
          </CodeBlock>
        </Code>
      </Body>
    </Container>
  );
}

export default App;

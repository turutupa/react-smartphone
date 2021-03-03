import React from 'react';
import { Code, CodeBlock } from '../style/Code';

interface Props {
  height: number;
  width: number;
  caseColor: string;
  screenColor: string;
  detailsColor: string;
  cameraColor: string;
  shadowColor: string;
  volumeButtonsColor: string;
}

const CodeResult: React.FC<Props> = (props: Props) => {
  const {
    height,
    width,
    caseColor,
    screenColor,
    detailsColor,
    cameraColor,
    shadowColor,
    volumeButtonsColor,
  } = props;

  return (
    <Code>
      <CodeBlock>{`
<SmartphoneContainer`}</CodeBlock>
      <span>
        {`
  height='${height + 'px'}' // regular height values px/%/vh/vw...
  width='${width + 'px'}' // regular width values px/%/vh/vw...
  caseColor='${caseColor}' // hex or rgb
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
  );
};

export default CodeResult;

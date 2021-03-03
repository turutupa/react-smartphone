import React from 'react';
import styled from 'styled-components';
import ParamsSelection from './ParamsSelection';
import Slider from './Slider';

interface Props {
  width: number;
  height: number;
  setWidth: React.Dispatch<React.SetStateAction<number>>;
  setHeight: React.Dispatch<React.SetStateAction<number>>;
  setCaseColor: React.Dispatch<React.SetStateAction<string>>;
  setScreenColor: React.Dispatch<React.SetStateAction<string>>;
  setShadowsColor: React.Dispatch<React.SetStateAction<string>>;
  setDetailsColor: React.Dispatch<React.SetStateAction<string>>;
  setCameraColor: React.Dispatch<React.SetStateAction<string>>;
  setVolumeButtonsColor: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneParamsSelection: React.FC<Props> = (props: Props) => {
  const {
    width,
    height,
    setWidth,
    setHeight,
    setCaseColor,
    setScreenColor,
    setShadowsColor,
    setDetailsColor,
    setCameraColor,
    setVolumeButtonsColor,
  } = props;

  return (
    <Container>
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
    </Container>
  );
};

export default PhoneParamsSelection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-left: -50px;

  @media (min-width: 500px) {
    margin-left: 0;
    flex-direction: row;
    width: 100vw;
    flex-wrap: wrap;
  }

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

import styled from 'styled-components';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
}

const Slider: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <Label>{props.label}</Label>
      <Input
        type='range'
        min={props.min}
        max={props.max}
        value={props.value}
        id={props.label}
        onChange={(e) => props.onChange(Number(e.target.value))}
      />
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 50%;
`;

const Input = styled.input`
  width: 240px;
`;

const Label = styled.h3``;

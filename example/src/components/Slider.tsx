import styled from 'styled-components';
import { Dispatch, SetStateAction } from 'react';

const Container = styled.div`
  width: 50%;
`;

const Input = styled.input`
  width: 240px;
`;

const Label = styled.h3``;

interface Props {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
}

export default function Slider(props: Props) {
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
}

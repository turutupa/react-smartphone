import styled from 'styled-components';
import { CompactPicker } from 'react-color';
import { Dispatch, SetStateAction } from 'react';

const Container = styled.div`
  width: 50%;
`;

const Label = styled.h3``;

interface Props {
  label: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export default function Component(props: Props) {
  return (
    <Container>
      <Label>{props.label}</Label>
      <CompactPicker onChange={(color) => props.onChange(color.hex)} />
    </Container>
  );
}

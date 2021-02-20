import styled from 'styled-components';
import { dark, phoneWidth, phoneHeight } from './constants';

export interface ScreenProps {
  color?: string;
  height?: string;
  width?: string;
}

const Container = styled.div`
  background-color: ${(props: ScreenProps) =>
    props.color ? props.color : dark};
  height: ${(props: ScreenProps) =>
    props.height ? `calc(${props.height} - 95px)` : phoneHeight - 110 + 'px'};
  width: ${(props: ScreenProps) =>
    props.width
      ? `min(calc(${props.width} - 30px), calc(100% - 30px))`
      : phoneWidth - 60 + 'px'};
  margin-top: -20px;
  position: relative;
  border-radius: 25px;
  overflow: hidden;
`;

interface Props {
  color?: string;
  height?: string;
  width?: string;
  children: JSX.Element[];
}

export default function (props: Props) {
  const { color, height, width } = props;

  return (
    <Container color={color} height={height} width={width}>
      {props.children}
    </Container>
  );
}

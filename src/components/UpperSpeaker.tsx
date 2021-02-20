import styled from 'styled-components';
import { dark } from './constants';

export interface UpperSpeakProps {
  color?: string;
}

export default styled.div`
  width: 200px;
  height: 15px;
  position: absolute;
  top: 12px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 25px;
  background-color: ${(props: UpperSpeakProps) =>
    props.color ? props.color : dark};
`;

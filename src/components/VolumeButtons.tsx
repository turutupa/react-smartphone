import styled from 'styled-components';
import { phoneSecondaryColor, phoneHeight } from './constants';

export interface VolumeProps {
  color?: string;
}

export default styled.div`
  background-color: ${(props: VolumeProps) =>
    props.color ? props.color : phoneSecondaryColor};
  height: ${phoneHeight / 6}px;
  width: 7px;
  position: absolute;
  left: -7px;
  top: 100px;
  border-radius: 2px;
  transition: all 0.1s linear;

  &:active {
    width: 3px;
    transform: translateX(4px);
  }
`;

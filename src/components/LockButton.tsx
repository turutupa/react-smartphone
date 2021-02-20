import styled from 'styled-components';
import { phoneSecondaryColor, phoneHeight } from './constants';

export interface LockButtonProps {
  color?: string;
  onClick: () => void;
}

export default styled.div`
  background-color: ${(props: LockButtonProps) =>
    props.color ? props.color : phoneSecondaryColor};
  height: ${phoneHeight / 10}px;
  width: 7px;
  position: absolute;
  right: -7px;
  top: 100px;
  border-radius: 2px;
  transition: all 0.1s linear;

  &:active {
    width: 3px;
    transform: translateX(-4px);
  }
`;

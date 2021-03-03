import styled from 'styled-components';
import {
  phoneHeight,
  phoneWidth,
  phoneColor,
  phoneSecondaryColor,
  borderRadius,
} from './constants';

interface ContainerProps {
  height?: string | number;
  width?: string | number;
  color?: string;
  shadowColor?: string;
}

export default styled.div`
  position: relative;
  cursor: pointer;
  height: ${(props: ContainerProps) =>
    props.height ? props.height : phoneHeight + 'px'};
  width: ${(props: ContainerProps) =>
    props.width ? props.width : phoneWidth + 'px'};
  background-color: ${(props: ContainerProps) =>
    props.color ? props.color : phoneColor};
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  transition: all 0.2s linear;
  box-shadow: 0 10px
    ${(props: ContainerProps) =>
      props.shadowColor ? props.shadowColor : phoneSecondaryColor};
`;

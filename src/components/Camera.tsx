import styled from 'styled-components';
import { cameraColor } from './constants';

export interface CameraProps {
  color?: string;
  width?: string | number;
}

export default styled.div`
  border-radius: 50%;
  background-color: ${(props: CameraProps) =>
    props.color ? props.color : cameraColor};
  width: 20px;
  height: 20px;
  position: absolute;
  top: 9px;
  right: 10%;
`;
